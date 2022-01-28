import { createSlice } from '@reduxjs/toolkit';

const showsSlice = createSlice({
  name: 'show',
  initialState: {
    showsList: [],
    showsIdList: [],
    favShowsList: [],
    favShowsIdList: [],
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
        state.showsIdList.push(newShow.id);
      }
    },
    removeFromList(state, action) {
      const myShow = action.payload;
      const existingShow = state.showsList.find(
        (show) => show.id === myShow.id
      );

      if (existingShow) {
        state.showsList = state.showsList.filter(
          (show) => show.id !== myShow.id
        );
        state.showsIdList = state.showsIdList.filter(
          (showId) => showId !== myShow.id
        );
      }
    },
    resetList(state) {
      state.showsList = [];
      state.showsIdList = [];
      state.favShowsList = [];
      state.favShowsIdList = [];
    },
    updateList(state, action) {
      state.showsList = action.payload.showList;
      state.showsIdList = action.payload.idList;
    },
    //
    // Favourite
    //
    addToFav(state, action) {
      const newShow = action.payload;
      const existingShow = state.favShowsList.find(
        (show) => show.id === newShow.id
      );

      if (!existingShow) {
        state.favShowsList.push({
          id: newShow.id,
          title: newShow.title,
          image: newShow.image,
        });
        state.favShowsIdList.push(newShow.id);
      }
    },
    removeFromFavList(state, action) {
      const myShow = action.payload;
      const existingShow = state.favShowsList.find(
        (show) => show.id === myShow.id
      );

      if (existingShow) {
        state.favShowsList = state.favShowsList.filter(
          (show) => show.id !== myShow.id
        );
        state.favShowsIdList = state.favShowsIdList.filter(
          (showId) => showId !== myShow.id
        );
      }
    },
    updateFavList(state, action) {
      state.favShowsList = action.payload.showList;
      state.favShowsIdList = action.payload.idList;
    },
    markAsWatched(state, action) {},
    addToFavourites(state, action) {},
    removeFromFavourites(state, action) {},
  },
});

export const showsActions = showsSlice.actions;

export default showsSlice;
