import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  activeDropdown: '',
};

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    setActiveDropdown: (state, action: PayloadAction<string | null | undefined>) => {
      state.activeDropdown = action.payload || '';
    },
  },
});

export const { setActiveDropdown } = dropdownSlice.actions;

export default dropdownSlice.reducer;
