"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRole, selectRoles, deleteRole, editRole } from '@/app/store/slices/roleSlice'

const Roles: React.FC = () => {
  const dispatch = useDispatch();
  const roles = useSelector(selectRoles);
  const [newRole, setNewRole] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedRole, setEditedRole] = useState<string>('');

  const handleAddRole = () => {
    if (newRole.trim() !== '') {
      dispatch(addRole(newRole));
      setNewRole('');
    }
  };

  const handleDeleteRole = (index: number) => {
    dispatch(deleteRole(index));
  };

  const handleEditRole = (index: number) => {
    setEditIndex(index);
    setEditedRole(roles[index]);
  };

  const handleSaveEdit = () => {
    if (editedRole.trim() !== '') {
      dispatch(editRole({ index: editIndex!, newRole: editedRole }));
      setEditIndex(null);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4 text-black">Rollen</h1>
      <ul className="list-disc pl-4 mb-4">
        {roles.map((role, index) => (
          <li key={index} className="text-gray-700 flex items-center justify-between">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedRole}
                  onChange={(e) => setEditedRole(e.target.value)}
                  className="p-1 border border-gray-300 rounded-md text-black mr-2"
                />
                <button
                  onClick={handleSaveEdit}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md"
                >
                  Speichern
                </button>
              </>
            ) : (
              <>
                {role}
                <div>
                  <button
                    onClick={() => handleEditRole(index)}
                    className="text-blue-500 ml-2 cursor-pointer"
                  >
                    Bearbeiten
                  </button>
                  <button
                    onClick={() => handleDeleteRole(index)}
                    className="text-red-500 ml-2 cursor-pointer"
                  >
                    Löschen
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="flex space-x-2">
        <input
          type="text"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md text-black"
          placeholder="Neue Rolle"
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

export default Roles
