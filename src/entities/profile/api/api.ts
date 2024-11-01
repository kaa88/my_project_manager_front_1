import { apiInstance } from "../../../app/api";
import { getQueryStringFromObject } from "../../../shared/api";
import * as types from "../model/types";

export const profileApi = {
  getProfile(req: types.ProfileGetRequest) {
    const query = getQueryStringFromObject(req);
    return apiInstance.get<types.ProfileGetResponse>("/v1/profile/one" + query);
  },
  getProfileList(req: types.ProfileGetListRequest) {
    const query = getQueryStringFromObject(req);
    return apiInstance.get<types.ProfileGetListResponse>(
      "/v1/profile/list" + query
    );
  },
  updateProfile(req: types.ProfileUpdateRequest) {
    return apiInstance.patch<types.ProfileUpdateResponse>(
      "/v1/profile/update",
      req
    );
  },
};
