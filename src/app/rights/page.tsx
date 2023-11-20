"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addRight, deleteRight, editRight, selectRights} from '@/src/store/slices/rightsSlice';

const Rights: React.FC = () => {
  const dispatch = useDispatch();
  const rights = useSelector(selectRights);
  const [newRight, setNewRight] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedRight, setEditedRight] = useState<string>('');


  const handleAddRight = () => {
    if (newRight.trim() !== '') {
      dispatch(addRight(newRight));
      setNewRight('');
    }
  }

  const handleDeleteRight = (index: number) => {
    dispatch(deleteRight(index));
  };

  const handleEditRight = (index: number) => {
    setEditIndex(index);
    setEditedRight(rights[index]);
  };

  const handleSaveEdit = () => {
    if (editedRight.trim() !== '') {
      dispatch(editRight({ index: editIndex!, newRight: editedRight }));
      setEditIndex(null);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4 text-black">Rechte</h1>
      <ul className="list-disc pl-4 mb-4">
        {rights.map((right, index) => (
          <li key={index} className="text-gray-700 flex items-center justify-between">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedRight}
                  onChange={(e) => setEditedRight(e.target.value)}
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
                {right}
                <div>
                  <button
                    onClick={() => handleEditRight(index)}
                    className="text-blue-500 ml-2 cursor-pointer"
                  >
                    Bearbeiten
                  </button>
                  <button
                    onClick={() => handleDeleteRight(index)}
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
          value={newRight}
          onChange={(e) => setNewRight(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md text-black"
          placeholder="New Role"
        />
        <button
          onClick={handleAddRight}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Recht Hinzufügen
        </button>
      </div>
    </div>
  );
};

export default Rights
