import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import searchSlice from './search-slice';
import showsSlice from './shows-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    shows: showsSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;
