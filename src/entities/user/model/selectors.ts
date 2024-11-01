import { RootState } from "./../../../app/store";

export const userSelectors = {
  id: (state: RootState) => state.user.id,
  email: (state: RootState) => state.user.email,
  isEmailVerified: (state: RootState) => state.user.isEmailVerified,
  isCookieAccepted: (state: RootState) => state.user.isCookieAccepted,
  isAdmin: (state: RootState) => state.user.isAdmin,
  status: {
    fetchUser: (state: RootState) => state.userStatus.fetchUser,
    fetchUserDelete: (state: RootState) => state.userStatus.fetchUserDelete,
    fetchChangeEmail: (state: RootState) => state.userStatus.fetchChangeEmail,
    fetchVerifyEmail: (state: RootState) => state.userStatus.fetchVerifyEmail,
    fetchChangePassword: (state: RootState) =>
      state.userStatus.fetchChangePassword,
    fetchAcceptCookies: (state: RootState) =>
      state.userStatus.fetchAcceptCookies,
  },
};
