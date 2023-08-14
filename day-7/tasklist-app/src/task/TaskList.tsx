import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { toggleCompleted, deleteTask } from './taskSlice';
import { Task } from './taskSlice';
import EditTask from './EditTask';

const TaskList: React.FC = () => {

  // Get tasks based on the filter setting from the Redux store
  const tasks = useSelector((state: RootState) => {
    if (state.task.filter) {
      return state.task.tasks.filter((task: Task) => task.completed);
    }
    return state.task.tasks;
  });

  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState<string | null>(null);

  const handleEditClick = (taskId: string) => {
    setEditingTask(taskId);
  };

  const handleCancelClick = () => {
    setEditingTask(null);
  };

  return (
    <div className="flex justify-center items-center">

      {/* Display message when there are no tasks */}
      {!tasks.length ?
        <h2 className='text-4xl font-bold'>No task to display</h2>
        : <></>}

      <ul className="space-y-4 w-full max-w-md">
        {/* Loop through tasks and display each task */}
        {tasks.map((task: Task) => (
          <li
            key={task.id}
            className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between"
          >
            {editingTask === task.id ? (
              // Display EditTask component when editing is active
              <EditTask
                id={task.id}
                currentTitle={task.title}
                currentContent={task.content}
                onCancel={handleCancelClick}
              />
            ) : (
              // Display task details when not editing
              <>
                <div className="flex items-center space-x-4">
                  {/* Button to toggle task completion */}
                  <button
                    className={`w-6 h-6 flex items-center justify-center rounded-full ${task.completed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                      }`}
                    onClick={() => dispatch(toggleCompleted(task.id))}
                  >
                    {/* Checkmark icon for completed tasks */}
                    {task.completed && (
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                  <div className="text-lg font-semibold">
                    {task.title}
                  </div>
                </div>
                <div className="text-gray-600">
                  {task.content}
                </div>
                <div className="flex space-x-2">
                  {/* Button to delete the task */}
                  <button
                    className="bg-slate-100 rounded-full block mx-auto shadow-md text-black px-4 py-2 hover:bg-slate-200 hover:scale-105 transition duration-300"
                    onClick={() => dispatch(deleteTask(task.id))}
                  >
                    Delete
                  </button>
                  {/* Button to initiate editing the task */}
                  <button
                    className="bg-slate-100 rounded-full block mx-auto shadow-md text-black px-6 py-2 hover:bg-slate-200 hover:scale-105 transition duration-300"
                    onClick={() => handleEditClick(task.id)}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
