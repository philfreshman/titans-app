import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface RolesState {
  list: string[]
}

const initialState: RolesState = {
  list: []
};

const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    addRole: (state, action: PayloadAction<string>) => {
      state.list.push(action.payload);
    },
    deleteRole: (state, action: PayloadAction<number>) => {
      state.list.splice(action.payload, 1);
    },
    editRole: (state, action: PayloadAction<{ index: number; newRole: string }>) => {
      const { index, newRole } = action.payload;
      state.list[index] = newRole;
    },
  }
})

export const { addRole, deleteRole, editRole } = rolesSlice.actions
export const selectRoles = (state: { roles: RolesState }) => state.roles.list
export default rolesSlice.reducer
