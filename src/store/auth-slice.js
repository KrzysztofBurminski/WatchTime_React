import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    userName: null,
    userId: null,
    userImg: null,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.isLoggedIn = true;
      state.userName = action.payload.displayName;
      state.userId = action.payload.uid;
      state.userImg = action.payload.userImg;
      localStorage.setItem('isLogged', 'true');
    },
    removeCurrentUser(state) {
      state.isLoggedIn = false;
      state.userName = null;
      state.userId = null;
      state.userImg = null;
      localStorage.removeItem('isLogged');
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
