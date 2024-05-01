import { AxiosError, AxiosHeaders } from "axios";

export const ERROR_BAD_REQUEST = 400;
export const ERROR_UNAUTHORIZED = 401;
export const ERROR_NO_CREDENTIALS = 403;
export const ERROR_NOT_FOUND = 404;
export const ERROR_DISTRIBUTION_CANCELLED = 409;
export const ERROR_INTERNAL = 500;
export const MISSING_FETCH_DATA_MESSAGE = "Missing required query data";

const unknownCode = 0;

type StatusCode = number | undefined;

export interface ThunkApiErrorObj {
  status?: StatusCode;
  data?: any;
}

export const ApiError = {
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
      case ERROR_BAD_REQUEST:
        return "Bad request";
      case ERROR_UNAUTHORIZED:
        return "Wrong credentials";
      case ERROR_NO_CREDENTIALS:
        return "Credentials were not provided";
      case ERROR_NOT_FOUND:
        return "Not found";
      case ERROR_DISTRIBUTION_CANCELLED:
        return "Distribution cancelled";
      case ERROR_INTERNAL:
        return "Internal server error";
      default:
        return "Unknown error";
    }
  },

  getMessageFromData: (data: any): string => {
    const iterate = (arr: any[]): string => {
      const messages: string[] = arr.map((item) =>
        ApiError.getMessageFromData(item)
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
      ? ApiError.getMessageFromData(error.data)
      : ApiError.getMessageFromCode(error.status || unknownCode);

    if (message.match(/!doctype/i))
      message = ApiError.getMessageFromCode(error.status || unknownCode);

    return message;
  },
};
