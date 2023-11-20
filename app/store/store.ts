import { configureStore } from '@reduxjs/toolkit'
import rolesReducer from "../slices/roleSlice"

const store = configureStore({
  reducer: {
    roles: rolesReducer,
    // Add other reducers here if needed
  },
});

export default store;
