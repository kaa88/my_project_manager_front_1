import { ApiBasicEntity } from "../../shared/api/models";

// Store
export type IState = {
  isAuth: boolean;
  logOutPath: string;
};

// API
type Token = string;

export type LogInRequest = {
  email: string;
  password: string;
};
export type LogInResponse = {
  data: LogInResponseData;
  refreshToken: Token;
};
export type LogInResponseData = ApiBasicEntity & {
  email: string;
  isEmailVerified?: boolean;
  isCookieAccepted?: boolean;
  isAdmin?: boolean;
  profile?: object; // ?

  message?: string;
};

export type RegisterRequest = LogInRequest & {
  isCookieAccepted?: boolean;
  // profile:
  firstName?: string;
  lastName?: string;
  avatar?: string; // ?
  status?: string;
};
export type RegisterResponse = LogInResponse;

export type RefreshRequest = { refreshToken: Token };
export type RefreshResponse = {
  refreshToken: Token;
  message?: string;
};

export type LogOutRequest = { isCloseSession?: boolean };
export type LogOutResponse = { message?: string };

export type RestorePasswordRequest = { email: string };
export type RestorePasswordResponse = { message?: string };

export type RestorePasswordConfirmRequest = {
  code: string;
  newPassword: string;
};
export type RestorePasswordConfirmResponse = { message?: string };
