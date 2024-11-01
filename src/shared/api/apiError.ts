import { AxiosError, AxiosHeaders } from "axios";

export const MISSING_FETCH_DATA_MESSAGE = "Missing required query data"; // ?

export const ERROR_CODE_BAD_REQUEST = 400;
export const ERROR_CODE_UNAUTHORIZED = 401;
export const ERROR_CODE_NO_CREDENTIALS = 403;
export const ERROR_CODE_NOT_FOUND = 404;
export const ERROR_CODE_DISTRIBUTION_CANCELLED = 409;
export const ERROR_CODE_INTERNAL = 500;
export const ERROR_CODE_UNKNOWN = 0;

type StatusCode = number;

export class ApiErrorObj {
  status: StatusCode;
  data: any;
  constructor(error: any) {
    this.status =
      typeof error?.status === "number" ? error.status : ERROR_CODE_UNKNOWN;
    this.data = error?.data;
  }
}

export const apiError = {
  /** Converts any error into AxiosError */
  getErrorInstance: (error: unknown): AxiosError => {
    let newError: AxiosError;
    if (error instanceof AxiosError && error.isAxiosError) newError = error;
    else {
      newError = new AxiosError();
      const message = error instanceof Error ? error.message : undefined;
      if (message) {
        newError.response = {
          data: message,
          status: ERROR_CODE_UNKNOWN,
          statusText: "",
          headers: {},
          config: { headers: new AxiosHeaders() },
        };
      }
    }
    return newError;
  },

  /** Converts any error into ApiErrorObj with:
   * @param status - http status
   * @param data - response data or error message
   */
  getErrorObject: (error: unknown): ApiErrorObj => {
    let source = error;
    if (error instanceof AxiosError && error.isAxiosError) {
      source = error.response;
    } else if (error instanceof Error) {
      source = {
        status: ERROR_CODE_UNKNOWN,
        data: error.message,
      };
    }
    return new ApiErrorObj(source);
  },

  getStatusCode: (error: unknown): StatusCode => {
    return error instanceof AxiosError
      ? error.response?.status || ERROR_CODE_UNKNOWN
      : ERROR_CODE_UNKNOWN;
  },

  getMessageFromCode: (code: StatusCode): string => {
    switch (code) {
      case ERROR_CODE_BAD_REQUEST:
        return "Bad request";
      case ERROR_CODE_UNAUTHORIZED:
        return "Wrong credentials";
      case ERROR_CODE_NO_CREDENTIALS:
        return "Credentials were not provided";
      case ERROR_CODE_NOT_FOUND:
        return "Not found";
      case ERROR_CODE_DISTRIBUTION_CANCELLED:
        return "Distribution cancelled";
      case ERROR_CODE_INTERNAL:
        return "Internal server error";
      default:
        return "Unknown error";
    }
  },

  /** Collects errors from data whether it is a string / array / object into one message */
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

  /** Combines 'getMessageFromData' and 'getMessageFromCode' */
  getMessageFromError: (error: ApiErrorObj): string => {
    let message = error.data
      ? apiError.getMessageFromData(error.data)
      : apiError.getMessageFromCode(error.status || ERROR_CODE_UNKNOWN);

    if (message.match(/!doctype/i))
      message = apiError.getMessageFromCode(error.status || ERROR_CODE_UNKNOWN);

    return message;
  },
};
