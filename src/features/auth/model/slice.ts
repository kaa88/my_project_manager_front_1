import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./types";
import { LogInRequest, LogOutRequest, RegisterRequest } from "./types";

export const initialState: AuthState = {
  isAuth: false,
  logOutPath: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setIsAuth: (state, action: PayloadAction<AuthState["isAuth"]>) => {
      state.isAuth = action.payload;
    },
    setLogOutPath: (
      state,
      action: PayloadAction<AuthState["logOutPath"] | null>
    ) => {
      state.logOutPath = action.payload || initialState.logOutPath;
    },

    fetchRegister: (s, a: PayloadAction<RegisterRequest>) => {},
    fetchLogin: (s, a: PayloadAction<LogInRequest>) => {},
    fetchLogout: (s, a: PayloadAction<LogOutRequest>) => {},
    fetchCheckAuth: () => {},
  },
});

export default authSlice;
export const authReducer = authSlice.reducer;
export const {
  setIsAuth,
  setLogOutPath,
  fetchRegister,
  fetchLogin,
  fetchLogout,
  fetchCheckAuth,
} = authSlice.actions;
