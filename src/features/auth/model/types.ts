import { ApiProfileCore } from "../../../entities/profile";
import { UserCreateRequest, UserCreateResponse } from "../../../entities/user";
import { ApiId } from "../../../shared/api";

export type AuthState = {
  isAuth: boolean;
  logOutPath: string;
};

type IToken = { accessToken: string; refreshToken: string };
type IMessage = { message?: string };

export type RegisterRequest = UserCreateRequest & ApiProfileCore;
export type RegisterResponse = UserCreateResponse & IToken;

export type LogInRequest = Pick<UserCreateRequest, "email" | "password">;
export type LogInResponse = RegisterResponse;

export type RefreshRequest = { refreshToken: string };
export type RefreshResponse = IToken & IMessage;

export type LogOutRequest = { id: ApiId; isCloseSession?: boolean };
export type LogOutResponse = IMessage;
