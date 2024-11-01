import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiError } from "../../api";
import {
  FulfilledData,
  PendingData,
  RejectedData,
  ResetData,
  StateRequestStatus,
} from "./createStatusSlice.types";
import {
  STATUS_FULFILLED,
  STATUS_IDLE,
  STATUS_PENDING,
  STATUS_REJECTED,
} from "./const";
import { parseActionName } from "./utils";

const initialStatus: StateRequestStatus = {
  status: STATUS_IDLE,
  statusCode: 0,
  message: "",
  timestamp: 0,
};

export const createStatusSlice = <A extends string>(
  parentSliceName: string,
  actions: string[]
) => {
  const initialState_untyped = Object.fromEntries(
    actions.map((a) => [a, initialStatus])
  );
  const initialState = initialState_untyped as {
    [key in A]: StateRequestStatus;
  };

  return createSlice({
    name: `${parentSliceName}Status`,
    initialState,

    reducers: {
      /** Start action with setting 'pending' status.
       *
       * Payload data:
       * @param action - action name, e.g. 'fetchUsers'
       */
      start: (state: any, action: PayloadAction<PendingData>) => {
        const actionName = parseActionName(action.payload.actionName);

        state[actionName].status = STATUS_PENDING;
        state[actionName].statusCode = initialStatus.statusCode;
        state[actionName].message = initialStatus.message;
        state[actionName].timestamp = Date.now();
      },

      /** Payload data:
       * @param action - action name, e.g. 'fetchUsers'
       * @param error - (optional) error object
       * @param message - (optional) 'string' message, takes priority over error
       */
      reject: (state: any, action: PayloadAction<RejectedData>) => {
        const actionName = parseActionName(action.payload.actionName);
        const apiErrorObj = apiError.getErrorObject(action.payload.error);

        state[actionName].status = STATUS_REJECTED;
        state[actionName].statusCode = apiErrorObj.status;
        state[actionName].message =
          action.payload.message ||
          apiError.getMessageFromError(apiErrorObj) ||
          initialStatus.message;
        state[actionName].timestamp = Date.now();
      },

      /** Payload data:
       * @param action - action name, e.g. 'fetchUsers'
       * @param status - (optional) status code
       * @param message - (optional)
       */
      fulfill: (state: any, action: PayloadAction<FulfilledData>) => {
        const actionName = parseActionName(action.payload.actionName);

        state[actionName].status = STATUS_FULFILLED;
        state[actionName].statusCode = action.payload.status || 200;
        state[actionName].message =
          action.payload.message ||
          initialStatus.message ||
          initialStatus.message;
        state[actionName].timestamp = Date.now();
      },

      /** Reset status and clean errors.
       *
       * Payload data:
       * @param action - (optional) action name or names[ ]. If undefined - reset all actions.
       */
      reset: (state: any, action: PayloadAction<ResetData>) => {
        const actionName = action.payload?.actionName;
        let actions: string[] = [];

        if (actionName)
          actions = Array.isArray(actionName) ? actionName : [actionName];
        else actions = Object.keys(state);

        actions.forEach((key) => {
          const parsedKey = parseActionName(key);
          state[parsedKey] = initialStatus;
        });
      },
    },
  });
};
