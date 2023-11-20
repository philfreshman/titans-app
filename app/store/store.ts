import { configureStore } from '@reduxjs/toolkit'
import rolesReducer from "@/app/store/slices/roleSlice"
import rightsReducer from "@/app/store/slices/rightsSlice"

const store = configureStore({
  reducer: {
    roles: rolesReducer,
    rights: rightsReducer,
  }
})

export default store

