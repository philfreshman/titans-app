import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface RRPairs {
  right: string;
  role: string;
}

interface RightsRolesState {
  pairs: RRPairs[]
}

const initialState: RightsRolesState = {
  pairs: []
}

const rightsRolesSlice = createSlice({
  name: 'rightsRoles',
  initialState,
  reducers: {
    addRightRole: (state, action: PayloadAction<RRPairs>) => {
      const {right, role} = action.payload
      const index = state.pairs.findIndex((pair) => pair.right === right && pair.role === role)

      if (index === -1){
        state.pairs.push({right: right, role: role})
      } else {
        alert(`Pair ${right}-${role} already exists!`)
      }
    },
    deleteRightRole: (state, action: PayloadAction<RRPairs>) => {
      const { right, role } = action.payload
      const index = state.pairs.findIndex((pair) => pair.right === right && pair.role === role)

      if (index !== -1) {
        state.pairs.splice(index, 1)
      } else {
        alert(`Pair ${right}-${role} doesn't exists!`)
      }
    },

  }
})

export const { addRightRole, deleteRightRole } = rightsRolesSlice.actions
export const selectRightsRoles = (state: { rightsRoles: RightsRolesState }) => state.rightsRoles.pairs
export default rightsRolesSlice.reducer
