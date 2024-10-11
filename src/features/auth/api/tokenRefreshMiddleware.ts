import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { apiConfig, apiInstance } from "../../../app/api";
import { applyAuthState, removeAuthState } from "./stateDispatcher";
import { RefreshResponse } from "../models";

apiInstance.interceptors.response.use(onResolve, onReject);

function onResolve(response: AxiosResponse) {
  if (response.data.refreshToken) {
    console.log("Token Refresh Middleware");
    saveToken(response.data.refreshToken);
    applyAuthState();
  }
  return response;
}

async function onReject(error: AxiosError | Error) {
  if (
    error instanceof AxiosError &&
    error.isAxiosError &&
    error.response?.status === 401
  ) {
    try {
      await refreshToken();
      applyAuthState();
    } catch (err) {
      removeAuthState();
      throw err;
    }
    return await repeatRequest(error.config);
  } else throw error;
}

export const apiTokenRefreshInstance = axios.create(apiConfig);
const TOKEN_STORAGE_NAME = "refresh_token";

const saveToken = (token: unknown) => {
  if (typeof token === "string" && token)
    localStorage.setItem(TOKEN_STORAGE_NAME, token);
};

const refreshToken = async () => {
  const token = localStorage.getItem(TOKEN_STORAGE_NAME);
  if (!token) throw new Error("Refresh failed: no token in storage");

  return apiTokenRefreshInstance
    .post<RefreshResponse>("/v1/user/refresh", { refreshToken: token })
    .then((response) => {
      saveToken(response.data.refreshToken);
    });
};

const repeatRequest = async (config: AxiosRequestConfig | undefined) => {
  if (!config)
    throw new Error(
      "Refresh failed: cannot repeat request due to config is undefined"
    );
  const { method, url, data } = config;
  if (!method)
    throw new Error(
      "Refresh failed: cannot repeat request due to http method is undefined"
    );
  const indexedApi = apiTokenRefreshInstance as { [key: string]: any };
  return await indexedApi[method](url, data);
};
