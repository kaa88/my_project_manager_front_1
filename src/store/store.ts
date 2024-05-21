import { configureStore, combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./ui/uiSlice";
import uiPersistReducer from "./ui/uiPersistSlice";

const rootReducer = combineReducers({
  ui: uiReducer,
  uiPersist: uiPersistReducer,
  // auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: undefined,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
