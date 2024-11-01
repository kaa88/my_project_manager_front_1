import { RootState } from "./../../../app/store";

export const profileSelectors = {
  all: (state: RootState) => ({
    id: state.profile.id,
    email: state.profile.email,
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    avatar: state.profile.avatar,
    status: state.profile.status,
  }),
  status: {
    fetchProfile: (state: RootState) => state.profileStatus.fetchProfile,
    fetchUpdateProfile: (state: RootState) =>
      state.profileStatus.fetchUpdateProfile,
  },
};
