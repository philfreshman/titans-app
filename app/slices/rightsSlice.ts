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
    }
  }
})

export const { addRight } = rightsSlice.actions
export const selectRights = (state: { rights: RightsState }) => state.rights.list
export default rightsSlice.reducer
