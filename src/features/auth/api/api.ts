import { apiInstance } from "../../../app/api";
import { userApi } from "../../../entities/user";
import * as types from "../model/types";

export const authApi = {
  register: userApi.createUser,
  login(req: types.LogInRequest) {
    return apiInstance.post<types.LogInResponse>("/v1/user/login", req);
  },
  logout(req: types.LogOutRequest) {
    const query = `?id=${req.id}`;
    return apiInstance.post<types.LogOutResponse>(
      "/v1/user/logout" + query,
      req
    );
  },
  checkAuth() {
    return apiInstance.get<unknown>("/v1/auth_check");
  },
};
