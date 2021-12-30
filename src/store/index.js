import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
// import pickSlice from './pick-slice';
import showsSlice from './shows-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    shows: showsSlice.reducer,
    // pick: pickSlice.reducer,
  },
});

export default store;
