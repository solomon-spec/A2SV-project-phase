import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteNote, Note } from '../redux/noteSlice';
import EditNote from './editNote';


const TaskList: React.FC = () => {
    const notes = useSelector((state: RootState) => {

        return state.note.notes
    });
    const dispatch = useDispatch();
    const [editingNote, setEditingNote] = useState<string | null>(null);

    const handleEditClick = (taskId: string) => {
        setEditingNote(taskId);
    };

    const handleCancelClick = () => {
        setEditingNote(null);
    };

    return (
        <div className="flex justify-center items-center">

            {/* Display message when there are no tasks */}
            {!notes.length ?
                <h2 className='text-4xl font-bold'>No Notes</h2>
                : <></>}

            <ul className="space-y-4 w-full">
                {/* Loop through tasks and display each task */}
                {notes.map((note: Note) => (
                    <li
                        key={note.id}
                        className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between"
                    >
                        {editingNote === note.id ? (
                            // Display EditTask component when editing is active
                            <EditNote
                                id={note.id}
                                currentTitle={note.title}
                                currentContent={note.content}
                                onCancel={handleCancelClick}
                            />
                        ) : (
                            // Display task details when not editing
                            <div className='flex flex-col w-full'>


                                <div className="text-xl text-center font-bold p-4">
                                    {note.title}
                                </div>

                                <div className="text-gray-600 text-left max-h-[50vh] border-2 p-4 rounded-md overflow-y-scroll">
                                    {note.content}
                                </div>
                                <div className="flex justify-around space-x-2">
                                    {/* Button to delete the task */}
                                    <button
                                        className="bg-slate-100 rounded-full shadow-md text-black px-4 py-2 hover:bg-slate-200 hover:scale-105 transition duration-300"
                                        onClick={() => dispatch(deleteNote({ id: note.id }))}
                                    >
                                        Delete
                                    </button>
                                    {/* Button to initiate editing the task */}
                                    <button
                                        className="bg-slate-100 rounded-full block mx-auto shadow-md text-black px-6 py-2 hover:bg-slate-200 hover:scale-105 transition duration-300"
                                        onClick={() => handleEditClick(note.id)}
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;