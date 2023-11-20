"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRole, selectRoles } from "../slices/roleSlice"

const Roles = () => {
  const dispatch = useDispatch();
  const roles = useSelector(selectRoles);

  // Local state for the new role input
  const [newRole, setNewRole] = useState<string>('');

  // Function to handle adding a new role
  const handleAddRole = () => {
    if (newRole.trim() !== '') {
      dispatch(addRole(newRole));
      setNewRole(''); // Clear the input field after adding a role
    }
  };

  return (
    <div>
      <h1>Roles</h1>

      {/* Display current roles */}
      <ul>
        {roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>

      {/* Form for adding new roles */}
      <div>
        <label>
          New Role:
          <input
            type="text"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
          />
        </label>
        <button onClick={handleAddRole}>Add Role</button>
      </div>
    </div>
  );
};

export default Roles;


