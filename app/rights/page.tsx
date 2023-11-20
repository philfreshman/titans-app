"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRight, selectRights } from '@/app/slices/rightsSlice';

const Rights: React.FC = () => {
  const dispatch = useDispatch();
  const rights = useSelector(selectRights);
  const [newRight, setNewRight] = useState<string>('');

  const handleAddRight = () => {
    if (newRight.trim() !== '') {
      dispatch(addRight(newRight));
      setNewRight('');
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4 text-black">Rechte</h1>
      <ul className="list-disc pl-4 mb-4">
        {rights.map((right, index) => (
          <li key={index} className="text-gray-700">{right}</li>
        ))}
      </ul>
      <div className="flex space-x-2">
        <input
          type="text"
          value={newRight}
          onChange={(e) => setNewRight(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md text-black"
          placeholder="Neues Recht"
        />
        <button
          onClick={handleAddRight}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Rolle hinzufügen
        </button>
      </div>
    </div>
  );
};

export default Rights;
