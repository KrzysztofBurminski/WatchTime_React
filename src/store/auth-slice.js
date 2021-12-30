import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     // token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
//     isLoggedIn: localStorage.getItem('token') ? true : false,
//   },
//   reducers: {
//     login(state, action) {
//       state.isLoggedIn = action.payload !== '' ? true : false;
//       // state.token = action.payload;
//       // localStorage.setItem('token', action.payload);
//     },
//     logout(state) {
//       state.isLoggedIn = false;
//       // state.token = '';
//       // localStorage.removeItem('token');
//     },
//   },
// });

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    userName: null,
    userId: null,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.isLoggedIn = true;
      state.userName = action.payload.displayName;
      state.userId = action.payload.uid;
    },
    removeCurrentUser(state) {
      state.isLoggedIn = false;
      state.userName = null;
      state.userId = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
