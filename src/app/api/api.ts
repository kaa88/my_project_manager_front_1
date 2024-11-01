import axios from "axios";
import { fixPath } from "../../shared/utils";

export const apiConfig = {
  baseURL: fixPath(process.env.REACT_APP_API_URL),
  timeout: Number(process.env.REACT_APP_API_TIMEOUT_SEC) * 1000,
  withCredentials: true,
};

export const apiInstance = axios.create(apiConfig);
// use tokenRefreshMiddleware

// TODO: find a way to apply middlewares here avoiding cyclic links
