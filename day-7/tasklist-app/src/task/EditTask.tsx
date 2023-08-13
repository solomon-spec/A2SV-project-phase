import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from './taskSlice';

interface EditTaskProps {
  id: string;
  currentTitle: string;
  currentContent: string;
  onCancel: () => void;
}

const EditTask: React.FC<EditTaskProps> = ({
  id,
  currentTitle,
  currentContent,
  onCancel,
}) => {
  const [newTitle, setNewTitle] = useState<string>(currentTitle);
  const [newContent, setNewContent] = useState<string>(currentContent);

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id, title: newTitle, content: newContent }));
    onCancel();
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <input
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-slate-400"
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <textarea
        className="w-full px-4 py-2 mb-4 border rounded resize-none focus:outline-none focus:border-slate-400"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />
      <div className="flex justify-end space-x-2">
        <button
          className="bg-slate-100 rounded-full block mx-auto shadow-md text-black px-6 py-2 hover:bg-slate-200 hover:scale-105 transition duration-300" onClick={handleEdit}
        >
          Save
        </button>
        <button
          className="bg-red-200 rounded-full block mx-auto shadow-md text-black px-4 py-2 hover:bg-red-400 hover:scale-105 transition duration-300" onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTask;
