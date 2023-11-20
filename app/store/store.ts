import { configureStore } from '@reduxjs/toolkit'
import rolesReducer from "../slices/roleSlice"
import rightsReducer from "../slices/rightsSlice"

const store = configureStore({
  reducer: {
    roles: rolesReducer,
    rights: rightsReducer,
  }
})

export default store
