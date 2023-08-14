import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from './taskSlice';

// Props interface for the EditTask component
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
  // State variables to manage the edited title and content
  const [newTitle, setNewTitle] = useState<string>(currentTitle);
  const [newContent, setNewContent] = useState<string>(currentContent);

  const dispatch = useDispatch();

  // Function to handle editing a task
  const handleEdit = () => {
    // Dispatch the action to edit the task in the Redux store
    dispatch(editTask({ id, title: newTitle, content: newContent }));
    // Call the onCancel function to exit the edit mode
    onCancel();
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* Input field for editing task title */}
      <input
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-slate-400"
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      {/* Textarea for editing task content */}
      <textarea
        className="w-full px-4 py-2 mb-4 border rounded resize-none focus:outline-none focus:border-slate-400"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />
      <div className="flex justify-end space-x-2">
        {/* Save button */}
        <button
          className="bg-slate-100 rounded-full block mx-auto shadow-md text-black px-6 py-2 hover:bg-slate-200 hover:scale-105 transition duration-300"
          onClick={handleEdit}
        >
          Save
        </button>
        {/* Cancel button */}
        <button
          className="bg-red-200 rounded-full block mx-auto shadow-md text-black px-4 py-2 hover:bg-red-400 hover:scale-105 transition duration-300"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTask;
