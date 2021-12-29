import { createSlice } from '@reduxjs/toolkit';

const pickSlice = createSlice({
  name: 'pick',
  initialState: {
    pickedShows: [],
  },
  reducers: {
    addToList(state, action) {
      const newShow = action.payload;
      const existingShow = state.pickedShows.find(
        (showId) => showId === newShow.id
      );

      if (!existingShow) {
        state.pickedShows.push(newShow.id);
      }
    },
    removeFromList(state, action) {
      const myShow = action.payload;
      const existingShow = state.pickedShows.find(
        (showId) => showId === myShow.id
      );

      if (existingShow) {
        state.pickedShows = state.pickedShows.filter(
          (showId) => showId !== myShow.id
        );
      }
    },
  },
});

export const pickActions = pickSlice.actions;

export default pickSlice;
