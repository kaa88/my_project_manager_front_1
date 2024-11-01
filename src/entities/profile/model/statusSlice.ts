import { createStatusSlice } from "../../../shared/store/statusSlice/createStatusSlice";
import profileSlice from "./slice";

type ProfileActions = keyof typeof profileSlice.actions;

const profileStatusSlice = createStatusSlice<ProfileActions>(
  profileSlice.name,
  Object.keys(profileSlice.actions)
);

export default profileStatusSlice;
export const profileStatusReducer = profileStatusSlice.reducer;
export const profileStatusActions = profileStatusSlice.actions;
