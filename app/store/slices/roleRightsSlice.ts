import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RoleRightsState {
  associations: Record<string, string[]>
}

const initialState: RoleRightsState = {
  associations: {},
};

const roleRightsSlice = createSlice({
  name: 'roleRights',
  initialState,
  reducers: {
    addRoleRight: (state, action: PayloadAction<{ role: string; right: string }>) => {
      console.log(123444)
      const { role, right } = action.payload;

      console.log(role)
      console.log(right)
      console.log(123)

      if (!state.associations[role]) {
        console.log('if')
        state.associations[role] = [right];
      } else {
        console.log('else')

        state.associations[role].push(right);
      }

      console.log(state)

    },
    removeRoleRight: (state, action: PayloadAction<{ role: string; right: string }>) => {
      const { role, right } = action.payload;

      if (state.associations[role]) {
        state.associations[role] = state.associations[role].filter((r) => r !== right);

        if (state.associations[role].length === 0) {
          // If there are no rights associated with the role, remove the role
          delete state.associations[role];
        }
      }
    },
  },
});

export const { addRoleRight, removeRoleRight } = roleRightsSlice.actions;

export const selectRoleRights = (state: { roleRights: RoleRightsState }) => state.roleRights?.associations;

export default roleRightsSlice.reducer;
