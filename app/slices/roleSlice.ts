// rolesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RolesState {
  list: string[];
}

const initialState: RolesState = {
  list: [],
};

const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    addRole: (state, action: PayloadAction<string>) => {
      state.list.push(action.payload);
    },
  },
});

export const { addRole } = rolesSlice.actions;
export const selectRoles = (state: { roles: RolesState }) => state.roles.list;
export default rolesSlice.reducer;
