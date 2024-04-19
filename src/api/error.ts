import { AxiosError, AxiosHeaders } from "axios";

export const ERROR_BAD_REQUEST = 400;
export const ERROR_UNAUTHORIZED = 401;
export const ERROR_NOT_FOUND = 404;
export const ERROR_INTERNAL = 500;
export const MISSING_FETCH_DATA_MESSAGE = "Missing required query data";

const unknownCode = 0;

type StatusCode = number | undefined;

export interface ThunkApiErrorObj {
  status?: StatusCode;
  data?: any;
}

export const apiError = {
  getErrorInstance: (error: unknown): AxiosError => {
    let newError: AxiosError;

    if (error instanceof AxiosError && error.isAxiosError) newError = error;
    else {
      newError = new AxiosError();
      const message = error instanceof Error ? error.message : undefined;

      if (message) {
        newError.response = {
          data: message,
          status: unknownCode,
          statusText: "",
          headers: {},
          config: { headers: new AxiosHeaders() },
        };
      }
    }

    return newError;
  },

  getErrorObject: (error: unknown): ThunkApiErrorObj => {
    if (error instanceof AxiosError && error.isAxiosError) {
      return {
        status: error.response?.status,
        data: error.response?.data,
      };
    } else if (error instanceof Error) {
      return {
        status: unknownCode,
        data: error.message,
      };
    } else return {};
  },

  getStatusCode: (error: unknown): StatusCode => {
    return error instanceof AxiosError ? error.response?.status : undefined;
  },

  getMessageFromCode: (code: StatusCode): string => {
    switch (code) {
      // eslint-disable-next-line no-magic-numbers
      case 400:
        return "Bad request";
      // eslint-disable-next-line no-magic-numbers
      case 401:
        return "Wrong credentials";
      // eslint-disable-next-line no-magic-numbers
      case 403:
        return "Credentials were not provided";
      // eslint-disable-next-line no-magic-numbers
      case 404:
        return "Not found";
      // eslint-disable-next-line no-magic-numbers
      case 409:
        return "Distribution cancelled";
      // eslint-disable-next-line no-magic-numbers
      case 500:
        return "Internal server error";
      default:
        return "Unknown error";
    }
  },

  getMessageFromData: (data: any): string => {
    const iterate = (arr: any[]): string => {
      const messages: string[] = arr.map((item) =>
        apiError.getMessageFromData(item)
      );
      let msg = "";

      messages.forEach((item) => {
        if (item) msg += ` ${item}`;
      });

      return msg.trim();
    };

    if (typeof data === "string") return data;

    if (Array.isArray(data)) return iterate(data);
    else if (typeof data === "object") return iterate(Object.values<any>(data));

    return "";
  },

  getMessageFromError: (error: ThunkApiErrorObj): string => {
    let message = error.data
      ? apiError.getMessageFromData(error.data)
      : apiError.getMessageFromCode(error.status || unknownCode);

    if (message.match(/!doctype/i))
      message = apiError.getMessageFromCode(error.status || unknownCode);

    return message;
  },
};
