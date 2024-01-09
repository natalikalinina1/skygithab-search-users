
import { createSlice } from '@reduxjs/toolkit';

export const userItemSlice = createSlice({
  name: 'userItem',
  initialState: {
    userData: {},
    info: false,
    errorMsg: '',
    cache: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
    },
    addToCache: (state, action) => {
      state.cache[action.payload.login] = action.payload.userData;
    },
    // eslint-disable-next-line no-unused-vars
    clearCache: (state, action) => {
      state.cache = {};
    },
      
  },
});

export const {
  setUserData,
  setInfo,
  setErrorMsg,
  addToCache,
  clearCache,
} = userItemSlice.actions;

export const selectUserItem = (state) => state.userItem;

export default userItemSlice.reducer;