import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface RightsState {
  list: string[]
}

const initialState: RightsState = {
  list: []
}

const rightsSlice = createSlice({
  name: 'rights',
  initialState,
  reducers: {
    addRight: (state, action: PayloadAction<string>) => {
      state.list.push(action.payload);
    },
    deleteRight: (state, action: PayloadAction<number>) => {
      state.list.splice(action.payload, 1);
    },
    editRight: (state, action: PayloadAction<{ index: number; newRight: string }>) => {
      const { index, newRight } = action.payload;
      state.list[index] = newRight;
    }
  }
})

export const { addRight, deleteRight,editRight } = rightsSlice.actions
export const selectRights = (state: { rights: RightsState }) => state.rights.list
export default rightsSlice.reducer
