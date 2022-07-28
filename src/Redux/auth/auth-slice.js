import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
   [authOperations.fetchCurrentUser.pending](state) {
    state.isRefreshingCurrentUser = true;
  },
  [authOperations.fetchCurrentUser.fulfilled](state, action) {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshingCurrentUser = false;
  },
  [authOperations.fetchCurrentUser.rejected](state) {
    state.isRefreshingCurrentUser = false;
},
},
});

export default authSlice.reducer;
