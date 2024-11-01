import {
  ApiBasicEntity,
  ApiId,
  ApiRequestPagination,
  ApiResponsePagination,
  ApiQueryId,
} from "../../../shared/api";

export type Profile = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  status: string;
};

export type ApiProfile = ApiBasicEntity & ApiProfileCore & { email?: string };

/** Contains props that can be updated or searched by. */
export type ApiProfileCore = {
  firstName?: string;
  lastName?: string;
  avatar?: string;
  status?: string;
};

export type ProfileGetRequest = { id: ApiId };
export type ProfileGetResponse = ApiProfile;

export type ProfileGetListRequest = ApiRequestPagination &
  ApiProfileCore & { id?: ApiQueryId };
export type ProfileGetListResponse = ApiResponsePagination<ApiProfile>;

export type ProfileUpdateRequest = ApiProfileCore & { id: ApiId };
export type ProfileUpdateResponse = ApiProfile;
