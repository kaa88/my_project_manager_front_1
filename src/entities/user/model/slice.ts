import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types";
import {
  AcceptCookiesRequest,
  ChangeEmailRequest,
  ChangePasswordRequest,
  UserDeleteRequest,
  UserGetRequest,
  VerifyEmailRequest,
} from "../model/types";

export const initialState: User = {
  id: 0,
  email: "",
  isEmailVerified: false,
  isCookieAccepted: false,
  isAdmin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    clearUser: () => initialState,
    setUser: (state, action: PayloadAction<Partial<User>>) => ({
      ...state,
      ...action.payload,
    }),

    fetchUser: (s, a: PayloadAction<UserGetRequest>) => {},
    fetchUserDelete: (s, a: PayloadAction<UserDeleteRequest>) => {},
    fetchChangeEmail: (s, a: PayloadAction<ChangeEmailRequest>) => {},
    fetchVerifyEmail: (s, a: PayloadAction<VerifyEmailRequest>) => {},
    fetchChangePassword: (s, a: PayloadAction<ChangePasswordRequest>) => {},
    fetchAcceptCookies: (s, a: PayloadAction<AcceptCookiesRequest>) => {},
  },
});

export default userSlice;
export const userReducer = userSlice.reducer;
export const {
  clearUser,
  setUser,
  fetchUser,
  fetchUserDelete,
  fetchChangeEmail,
  fetchVerifyEmail,
  fetchChangePassword,
  fetchAcceptCookies,
} = userSlice.actions;
