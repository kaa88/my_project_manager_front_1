import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IState {
  // isMenuActive: boolean;
  activeDropdown: string;
}

const initialState: IState = {
  // isMenuActive: false,
  activeDropdown: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMenuActive: (state, action: PayloadAction<boolean>) => {
      // state.isMenuActive = action.payload;
    },
    setActiveDropdown: (
      state,
      action: PayloadAction<string | null | undefined>
    ) => {
      state.activeDropdown = action.payload || "";
    },
  },
});

export const { setMenuActive, setActiveDropdown } = uiSlice.actions;

export default uiSlice.reducer;
