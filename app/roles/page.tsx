"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRole, selectRoles } from '@/app/slices/roleSlice';

const Roles: React.FC = () => {
  const dispatch = useDispatch();
  const roles = useSelector(selectRoles);
  const [newRole, setNewRole] = useState<string>('');

  const handleAddRole = () => {
    if (newRole.trim() !== '') {
      dispatch(addRole(newRole));
      setNewRole('');
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4 text-black">Rollen</h1>
      <ul className="list-disc pl-4 mb-4">
        {roles.map((role, index) => (
          <li key={index} className="text-gray-700">{role}</li>
        ))}
      </ul>
      <div className="flex space-x-2">
        <input
          type="text"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md text-black"
          placeholder="Neue Role"
        />
        <button
          onClick={handleAddRole}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Rolle hinzufügen
        </button>
      </div>
    </div>
  );
};

export default Roles;
