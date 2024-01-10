import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './Slices/userSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
