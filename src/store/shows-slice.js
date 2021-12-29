import { createSlice } from '@reduxjs/toolkit';

const showsSlice = createSlice({
  name: 'show',
  initialState: {
    showsList: [],
  },
  reducers: {
    addToList(state, action) {
      const newShow = action.payload;
      const existingShow = state.showsList.find(
        (show) => show.id === newShow.id
      );

      if (!existingShow) {
        state.showsList.push({
          id: newShow.id,
          title: newShow.title,
          image: newShow.image,
        });
      }
    },
    removeFromList(state, action) {
      const showId = action.payload;
      const existingShow = state.showsList.find((show) => show.id === showId);

      if (existingShow) {
        state.showsList = state.showsList.filter((show) => show.id !== showId);
      }
    },
    markAsWatched(state, action) {},
    addToFavourites(state, action) {},
    removeFromFavourites(state) {},
  },
});

export const showsActions = showsSlice.actions;

export default showsSlice;
