import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './taskSlice';

const AddTaskForm: React.FC = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleAddTask = () => {
    if (title && content) {
      dispatch(addTask({ title, content }));
      setTitle('');
      setContent('');
    }

  };

  return (
    <div className="max-w-md mx-auto p-4 border-2 border-slate-100 rounded-lg shadow-md">
      <h3 className="text-lg text-center font-semibold mb-4">Add New Task</h3>

      <div className="mb-4">
        <input
          className="w-full px-4 py-2 rounded border focus:outline-none focus:border-slate-400"
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)
          }
        />
      </div>
      <div className="mb-4">
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
