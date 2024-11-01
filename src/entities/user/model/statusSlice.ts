import { createStatusSlice } from "../../../shared/store/statusSlice/createStatusSlice";
import userSlice from "./slice";

type UserActions = keyof typeof userSlice.actions;

const userStatusSlice = createStatusSlice<UserActions>(
  userSlice.name,
  Object.keys(userSlice.actions)
);

export default userStatusSlice;
export const userStatusReducer = userStatusSlice.reducer;
export const userStatusActions = userStatusSlice.actions;
