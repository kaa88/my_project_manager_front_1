import { apiInstance } from "../../../app/api";
import * as types from "../models";

export const api = {
  register(data: types.RegisterRequest) {
    return apiInstance.post<types.RegisterResponse>("/v1/user/create", data);
  },
  login(data: types.LogInRequest) {
    return apiInstance.post<types.LogInResponse>("/v1/user/login", data);
  },
  logout(data: types.LogOutRequest) {
    return apiInstance.post<types.LogOutResponse>("/v1/user/logout", data);
  },
  restorePassword(data: types.RestorePasswordRequest) {
    return apiInstance.post<types.RestorePasswordResponse>(
      "/v1/user/restore_password",
      data
    );
  },
  restorePasswordConfirm(data: types.RestorePasswordConfirmRequest) {
    return apiInstance.post<types.RestorePasswordConfirmResponse>(
      "/v1/user/restore_password_confirm",
      data
    );
  },

  getUsers() {
    // temp - move to user module
    return apiInstance.get<{ max: number }>("/v1/profile/list");
  },
};
