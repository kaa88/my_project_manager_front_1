import { createStatusSlice } from "../../../shared/store/statusSlice/createStatusSlice";
import authSlice from "./slice";

type AuthActions = keyof typeof authSlice.actions;

const authStatusSlice = createStatusSlice<AuthActions>(
  authSlice.name,
  Object.keys(authSlice.actions)
);

export default authStatusSlice;
export const authStatusReducer = authStatusSlice.reducer;
export const authStatusActions = authStatusSlice.actions;
