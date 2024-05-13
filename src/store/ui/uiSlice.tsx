// Здесь UI переменные, которые должны сохраняться между сессиями (например, закрытый сайдбар останется закрытым при следующем входе)

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// import { IProviderName } from 'models/provider';

interface IState {
  isSidebarCollapsed: boolean;
  // isReportFiltersClosed: boolean;
  // resumeActiveProvider: IProviderName;
}

const initialState: IState = {
  isSidebarCollapsed: false,
  // isReportFiltersClosed: false,
  // resumeActiveProvider: 'hh',
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    // setReportFiltersClosed: (state, action: PayloadAction<boolean>) => {
    //   state.isReportFiltersClosed = action.payload;
    // },
    // setResumeActiveProvider: (state, action: PayloadAction<IProviderName>) => {
    //   state.resumeActiveProvider = action.payload;
    // },
  },
});

export const {
  setSidebarCollapsed,
} = uiSlice.actions; //, setReportFiltersClosed, setResumeActiveProvider } =

export default uiSlice.reducer;
