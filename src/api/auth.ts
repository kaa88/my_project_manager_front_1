import * as types from "../models/auth";

import { getAuthHeaders, api } from "./index";

import { IProviderName } from "models/generic";

type ProviderDepentUrl = { [key in IProviderName]: string };

export const apiAuth = {
  // Email auth
  registration(data: types.QueryBodyRegistration) {
    return api.post<types.QueryResponseRegistration>(
      "/v1/auth/registration/",
      data
    );
  },
  verifyEmail(data: types.QueryBodyVerifyEmail) {
    return api.post<types.QueryResponseVerifyEmail>(
      "/v1/auth/registration/verify-email/",
      data
    );
  },
  resendEmail(data: types.QueryBodyResendEmail) {
    return api.post<types.QueryResponseResendEmail>(
      "/v1/auth/registration/resend-email/",
      data
    );
  },
  login(data: types.QueryBodyLogin) {
    return api.post<types.QueryResponseLogin>("/v1/auth/login/", data);
  },
  logout(data: types.QueryBodyLogout) {
    return api.post("/v1/auth/logout/", getAuthHeaders(data.access_token));
  },
  changePassword(data: types.QueryBodyChangePassword) {
    const { access_token, ...body } = data;

    return api.post(
      "/v1/auth/password/change/",
      body,
      getAuthHeaders(data.access_token)
    );
  },
  resetPassword(data: types.QueryBodyResetPassword) {
    return api.post("/v1/auth/password/reset/", data);
  },
  passwordResetConfirm(data: types.QueryBodyPasswordResetConfirm) {
    return api.post("/v1/auth/password/reset/confirm/", data);
  },
  // /Email auth

  // Provider auth
  providerLogin(data: types.QueryBodyProviderLogin) {
    const url: ProviderDepentUrl = {
      hh: "/v1/auth/hh/login_rest",
      sj: "/v1/auth/superjob/login_rest",
    };

    return api.post<types.QueryResponseProviderLogin>(url[data.provider], {
      code: data.code,
    });
  },
  providerConnect(data: types.QueryBodyProviderConnect) {
    const url: ProviderDepentUrl = {
      hh: "/v1/auth/hh/connect_rest",
      sj: "/v1/auth/superjob/connect_rest",
    };

    return api.post<types.QueryResponseProviderConnect>(
      url[data.provider],
      { code: data.code },
      getAuthHeaders(data.access_token)
    );
  },
  // /Provider auth

  refreshToken(data: types.QueryBodyRefresh) {
    return api.post<types.QueryResponseRefresh>(
      "/v1/auth/token/refresh/",
      data
    );
  },
};
