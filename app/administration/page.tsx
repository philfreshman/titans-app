"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRoles } from '@/app/store/slices/roleSlice';
import { selectRights } from '@/app/store/slices/rightsSlice';
import { selectRoleRights } from '@/app/store/slices/roleRightsSlice';
import { addRoleRight, removeRoleRight } from '@/app/store/slices/roleRightsSlice';

const Administration: React.FC = () => {
  const dispatch = useDispatch();
  const roles = useSelector(selectRoles);
  const rights = useSelector(selectRights);
  const roleRights = useSelector(selectRoleRights);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [selectedRight, setSelectedRight] = useState<string>('');

  const handleAddRoleRight = () => {
    console.log(selectedRole)
    console.log(selectedRight)
    if (selectedRole && selectedRight) {
      console.log("both selected")
      dispatch(addRoleRight({ role: selectedRole, right: selectedRight }));
      // setSelectedRight('');
      // setSelectedRole('');
      console.log('added')
    }
  };

  const handleRemoveRoleRight = () => {
    if (selectedRole && selectedRight) {
      dispatch(removeRoleRight({ role: selectedRole, right: selectedRight }));
      setSelectedRight('');
      setSelectedRole('');
      console.log('removed')
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4 text-black">Rollen und Rechte verwalten</h1>
      <div className="mb-4">
        <label className="mr-2">Rolle auswählen:</label>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Bitte auswählen</option>
          {roles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="mr-2">Recht auswählen:</label>
        <select
          value={selectedRight}
          onChange={(e) => setSelectedRight(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Bitte auswählen</option>
          {rights.map((right, index) => (
            <option key={index} value={right}>
              {right}
            </option>
          ))}
        </select>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleAddRoleRight}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Recht hinzufügen
        </button>
        <button
          onClick={handleRemoveRoleRight}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Recht entfernen
        </button>
      </div>

      {/* Display the list of rights-roles pairs */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Rollen-Rechte Liste</h2>
        <ul>
          {roleRights !== undefined && Object.entries(roleRights).map(([role, associatedRights], index) => (
            <li key={index}>
              <strong>{role}:</strong> {associatedRights.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Administration;
