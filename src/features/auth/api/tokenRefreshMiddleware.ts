import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { apiConfig, apiInstance } from "../../../app/api";
import { RefreshResponse } from "../model/types";
import { applyAuthState, removeAuthState } from "./stateDispatcher";
import { ERROR_CODE_UNAUTHORIZED } from "../../../shared/api";

const STORAGE_ACCESS_TOKEN_NAME = "access_token";
const STORAGE_REFRESH_TOKEN_NAME = "refresh_token";

apiInstance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem(
    STORAGE_ACCESS_TOKEN_NAME
  );
  return config;
});

apiInstance.interceptors.response.use(onResolve, onReject);

function onResolve(response: AxiosResponse) {
  if (response.data.refreshToken) {
    saveToken({
      access: response.data.accessToken,
      refresh: response.data.refreshToken,
    });
    applyAuthState();
  }
  return response;
}

async function onReject(error: AxiosError | Error) {
  if (
    error instanceof AxiosError &&
    error.isAxiosError &&
    error.response?.status === ERROR_CODE_UNAUTHORIZED
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

const ERROR_PREFIX = "Refresh failed:";

const saveToken = (tokens: { access?: string; refresh?: string }) => {
  if (typeof tokens.access === "string" && tokens.access)
    localStorage.setItem(STORAGE_ACCESS_TOKEN_NAME, tokens.access);
  if (typeof tokens.refresh === "string" && tokens.refresh)
    localStorage.setItem(STORAGE_REFRESH_TOKEN_NAME, tokens.refresh);
};

export const clearToken = () => {
  localStorage.removeItem(STORAGE_ACCESS_TOKEN_NAME);
  localStorage.removeItem(STORAGE_REFRESH_TOKEN_NAME);
};

// Clean instance without interceptors
const apiRefreshInstance = axios.create(apiConfig);

const refreshToken = async () => {
  const token = localStorage.getItem(STORAGE_REFRESH_TOKEN_NAME);
  if (!token) throw new Error(`${ERROR_PREFIX} no token in storage`);

  return apiRefreshInstance
    .post<RefreshResponse>("/v1/user/refresh", { refreshToken: token })
    .then((response) => {
      saveToken({
        access: response.data.accessToken,
        refresh: response.data.refreshToken,
      });
    });
};

const repeatRequest = async (config: AxiosRequestConfig | undefined) => {
  const ERROR_INFO = "cannot repeat request due to";
  if (!config)
    throw new Error(`${ERROR_PREFIX} ${ERROR_INFO} config is undefined`);

  const { method, url, data } = config;
  if (!method || !url)
    throw new Error(`${ERROR_PREFIX} ${ERROR_INFO} missing http params`);

  const indexedApi = apiInstance as { [key: string]: any };
  return await indexedApi[method](url, data);
};
