import type { Action } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { PersistedState } from "redux-persist/lib/types";
import storage from "redux-persist/lib/storage";
import createMigrate from "redux-persist/es/createMigrate";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { rootReducer } from "./reducer";

import * as authSlice from "../../features/auth/model/slice";

const MIGRATION_VERSION = 1;

const persistMigrations = {
  [MIGRATION_VERSION]: (state: any): PersistedState => {
    if (state)
      return {
        ...state,
        auth: authSlice.initialState,
      };
  },
};

const persistConfig = {
  key: "root",
  storage,
  version: MIGRATION_VERSION,
  migrate: createMigrate(persistMigrations, { debug: false }),
  stateReconciler: autoMergeLevel2,
  whitelist: ["auth"],
};

export const persistedReducer = persistReducer<
  ReturnType<typeof rootReducer>,
  Action
>(persistConfig, rootReducer);
