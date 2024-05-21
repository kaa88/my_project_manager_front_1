import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IState {
  isSidebarCollapsed: boolean;
}

const initialState: IState = {
  isSidebarCollapsed: false,
};

const uiPersistSlice = createSlice({
  name: "ui_persist",
  initialState,
  reducers: {
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
  },
});

export const { setSidebarCollapsed } = uiPersistSlice.actions;

export const uiPersistReducer = uiPersistSlice.reducer;
