import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './Slices/userSlice';
import userItemReducer from './Slices/userItemSlice'; 

export default configureStore({
  reducer: {
    users: usersReducer,
    userItem: userItemReducer, 
  },
});
