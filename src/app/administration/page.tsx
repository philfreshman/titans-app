"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRoles } from '@/src/store/slices/roleSlice';
import { selectRights } from '@/src/store/slices/rightsSlice';
import {addRightRole, deleteRightRole, selectRightsRoles} from '@/src/store/slices/rightsRolesSlice'


const Administration: React.FC = () => {
  const dispatch = useDispatch();
  const roles = useSelector(selectRoles);
  const rights = useSelector(selectRights);
  const rightsRoles = useSelector(selectRightsRoles);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [selectedRight, setSelectedRight] = useState<string>('');

  const handleAddRoleRight = () => {
    if (selectedRight && selectedRole) {
      dispatch(addRightRole({right: selectedRight, role: selectedRole}))
      setSelectedRight('');
      setSelectedRole('');
    }
  };

  const handleRemoveRoleRight = () => {
    if (selectedRole && selectedRight) {
      dispatch(deleteRightRole({ role: selectedRole, right: selectedRight }));
      setSelectedRight('');
      setSelectedRole('');
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

      <div className="mt-6">

        <ul>
          {Object.entries(rightsRoles)
            .sort(([, a], [, b]) => a.right.localeCompare(b.right))
            .map(([_, rr], index) => (
            <li key={index}>
              {rr.right}: {rr.role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Administration;
