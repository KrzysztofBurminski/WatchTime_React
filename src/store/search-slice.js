import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    active: false,
  },
  reducers: {
    toggleSearch(state) {
      state.active = !state.active;
    },
    hide(state) {
      state.active = false;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
