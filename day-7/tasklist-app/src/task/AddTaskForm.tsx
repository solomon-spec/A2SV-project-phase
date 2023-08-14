import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './taskSlice';

const AddTaskForm: React.FC = () => {
  const dispatch = useDispatch();

  // State variables to manage input values for title and content
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  // Function to handle adding a new task
  const handleAddTask = () => {
    // Check if both title and content are non-empty
    if (title && content) {
      // Dispatch the action to add the task to the Redux store
      dispatch(addTask({ title, content }));
      // Clear the input fields after adding the task
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border-2 border-slate-100 rounded-lg shadow-md">
      <h3 className="text-lg text-center font-semibold mb-4">Add New Task</h3>

      <div className="mb-4">
        {/* Input field for task title */}
        <input
          className="w-full px-4 py-2 rounded border focus:outline-none focus:border-slate-400"
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        {/* Textarea for task description */}
        <textarea
          className="w-full px-4 py-2 rounded border resize-none focus:outline-none focus:border-slate-400"
          placeholder="Task description"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button
        className="bg-slate-100 rounded-full block mx-auto shadow-md text-black px-4 py-2 hover:bg-slate-200 hover:scale-105 transition duration-300"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
