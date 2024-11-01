import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileGetRequest, ProfileUpdateRequest } from "./types";

export const initialState: Profile = {
  id: 0,
  email: "",
  firstName: "",
  lastName: "",
  avatar: "",
  status: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,

  reducers: {
    clearProfile: () => initialState,
    setProfile: (state, action: PayloadAction<Partial<Profile>>) => ({
      ...state,
      ...action.payload,
    }),

    fetchProfile: (s, a: PayloadAction<ProfileGetRequest>) => {},
    fetchUpdateProfile: (s, a: PayloadAction<ProfileUpdateRequest>) => {},
  },
});

export default profileSlice;
export const profileReducer = profileSlice.reducer;
export const { clearProfile, setProfile, fetchProfile, fetchUpdateProfile } =
  profileSlice.actions;
