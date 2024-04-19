import axios from "axios";
import { fixUrl } from "./utils";

export const api = axios.create({
  withCredentials: true,
  baseURL: fixUrl(process.env.REACT_APP_API_URL),
  timeout: Number(process.env.REACT_APP_API_TIMEOUT_SEC) * 1000,
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
