import { combineReducers } from "@reduxjs/toolkit";

import { uiPersistReducer, uiReducer } from "../../widgets/ui";
import { authReducer, authStatusReducer } from "../../features/auth";
import { userReducer, userStatusReducer } from "../../entities/user";
import { profileReducer, profileStatusReducer } from "../../entities/profile";

export const rootReducer = combineReducers({
  ui: uiReducer,
  uiPersist: uiPersistReducer,
  auth: authReducer,
  authStatus: authStatusReducer,
  user: userReducer,
  userStatus: userStatusReducer,
  profile: profileReducer,
  profileStatus: profileStatusReducer,
});
