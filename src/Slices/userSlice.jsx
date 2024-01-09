import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    login: '',
    users: [],
    loading: false,
    currentPage: 1,
    totalUsers: 0,
    usersPerPage: 12,
    sort: 'desc',
    error: '',
  },
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalUsers: (state, action) => {
      state.totalUsers = action.payload;
    },
    setUsersPerPage: (state, action) => {
      state.usersPerPage = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setLogin,
  setUsers,
  setLoading,
  setCurrentPage,
  setTotalUsers,
  setUsersPerPage,
  setSort,
  setError,
  setLoginNotFound,
} = usersSlice.actions;

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;