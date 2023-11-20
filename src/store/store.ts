import { configureStore } from '@reduxjs/toolkit'
import rolesReducer from "@/src/store/slices/roleSlice"
import rightsReducer from "@/src/store/slices/rightsSlice"

const store = configureStore({
  reducer: {
    roles: rolesReducer,
    rights: rightsReducer,
  }
})

export default store

