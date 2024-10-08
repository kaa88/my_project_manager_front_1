import axios from "axios";
import { fixPath } from "../utils";

export const apiInstance = axios.create({
  baseURL: fixPath(process.env.REACT_APP_API_URL),
  timeout: Number(process.env.REACT_APP_API_TIMEOUT_SEC) * 1000,
  withCredentials: true,
});

interface AuthHeaders {
  headers: {
    Authorization: string;
  };
}

export const getAuthHeaders = (token: string): AuthHeaders => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
