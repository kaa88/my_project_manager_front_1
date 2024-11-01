import { apiInstance } from "../../../app/api";
import { getQueryStringFromObject } from "../../../shared/api";
import * as types from "../model/types";

export const userApi = {
  getUser(req: types.UserGetRequest) {
    const query = getQueryStringFromObject(req);
    return apiInstance.get<types.UserGetResponse>("/v1/user/one" + query);
  },
  getUserList(req: types.UserGetListRequest) {
    const query = getQueryStringFromObject(req);
    return apiInstance.get<types.UserGetListResponse>("/v1/user/list" + query);
  },

  createUser(req: types.UserCreateRequest) {
    return apiInstance.post<types.UserCreateResponse>("/v1/user/create", req);
  },

  // updateUser disabled by api

  deleteUser(req: types.UserDeleteRequest) {
    const query = getQueryStringFromObject(req);
    return apiInstance.delete<types.UserDeleteResponse>(
      "/v1/user/delete" + query
    );
  },

  changeEmail(req: types.ChangeEmailRequest) {
    return apiInstance.post<types.ChangeEmailResponse>(
      "/v1/user/change_email",
      req
    );
  },
  verifyEmail(req: types.VerifyEmailRequest) {
    return apiInstance.post<types.VerifyEmailResponse>(
      "/v1/user/verify_email",
      req
    );
  },

  changePassword(req: types.ChangePasswordRequest) {
    return apiInstance.post<types.ChangePasswordResponse>(
      "/v1/user/change_password",
      req
    );
  },
  restorePassword(req: types.RestorePasswordRequest) {
    return apiInstance.post<types.RestorePasswordResponse>(
      "/v1/user/restore_password",
      req
    );
  },
  confirmRestorePassword(req: types.ConfirmRestorePasswordRequest) {
    return apiInstance.post<types.ConfirmRestorePasswordResponse>(
      "/v1/user/restore_password_confirm",
      req
    );
  },

  acceptCookies(req: types.AcceptCookiesRequest) {
    return apiInstance.post<types.AcceptCookiesResponse>(
      "/v1/user/accept_cookies",
      req
    );
  },
};
