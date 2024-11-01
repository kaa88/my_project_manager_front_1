import {
  ApiBasicEntity,
  ApiId,
  ApiRequestPagination,
  ApiResponsePagination,
  ApiQueryId,
} from "../../../shared/api";

type Email = string;
type Password = string;
type Code = string;
type IApiId = { id: ApiId };
type IEmail = { email: Email };
type IMessage = { message?: string };

export type User = {
  id: number;
  email: Email;
  isEmailVerified: boolean;
  isCookieAccepted: boolean;
  isAdmin: boolean;
};

export type ApiUser = ApiBasicEntity & {
  email: Email;
  isEmailVerified?: boolean;
  isCookieAccepted?: boolean;
  isAdmin?: boolean;
  message?: string;
};

export type UserGetRequest = IApiId;
export type UserGetResponse = ApiUser;

export type UserGetListRequest = ApiRequestPagination & {
  id?: ApiQueryId;
  email?: Email;
};
export type UserGetListResponse = ApiResponsePagination<ApiUser>;

export type UserCreateRequest = {
  email: Email;
  password: Password;
  isCookieAccepted?: boolean;
};
export type UserCreateResponse = { data: ApiUser };

export type UserDeleteRequest = IApiId;
export type UserDeleteResponse = IApiId & IMessage;

export type ChangeEmailRequest = IEmail;
export type ChangeEmailResponse = { data: ApiUser };

export type VerifyEmailRequest = { code: Code };
export type VerifyEmailResponse = IMessage;

export type ChangePasswordRequest = {
  oldPassword: Password;
  newPassword: Password;
};
export type ChangePasswordResponse = { data: ApiUser };

export type RestorePasswordRequest = IEmail;
export type RestorePasswordResponse = IMessage;

export type ConfirmRestorePasswordRequest = {
  code: Code;
  newPassword: Password;
};
export type ConfirmRestorePasswordResponse = IMessage;

export type AcceptCookiesRequest = IApiId;
export type AcceptCookiesResponse = ApiUser;
