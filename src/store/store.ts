import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  // auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: undefined,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
