import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./models";

export const initialState: IState = {
  isAuth: false,
  logOutPath: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setIsAuth: (
      state,
      action: PayloadAction<IState["isAuth"] | null | undefined>
    ) => {
      state.isAuth = action.payload || false;
    },
    setLogOutPath: (
      state,
      action: PayloadAction<IState["logOutPath"] | null | undefined>
    ) => {
      state.logOutPath = action.payload || "";
    },
  },
});

export const { setIsAuth, setLogOutPath } = authSlice.actions;

export const authReducer = authSlice.reducer;
