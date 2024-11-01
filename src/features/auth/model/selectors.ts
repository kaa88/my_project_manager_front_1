import { RootState } from "./../../../app/store";

export const authSelectors = {
  isAuth: (state: RootState) => state.auth.isAuth,
  logOutPath: (state: RootState) => state.auth.logOutPath,
  status: {
    fetchRegister: (state: RootState) => state.authStatus.fetchRegister,
    fetchLogin: (state: RootState) => state.authStatus.fetchLogin,
    fetchLogout: (state: RootState) => state.authStatus.fetchLogout,
    fetchCheckAuth: (state: RootState) => state.authStatus.fetchCheckAuth,
  },
};
