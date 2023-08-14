import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// Define the Task interface
export interface Task {
    id: string;
    title: string;
    content: string;
    completed: boolean;
}

// Define the TaskState interface
interface TaskState {
    tasks: Task[];
    filter: boolean;
}

// Set the initial state
const initialState: TaskState = {
    tasks: [],
    filter: false,
};

// Create a Redux slice
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        // Action creator and reducer logic for adding a task
        addTask: (state, action: PayloadAction<{ title: string; content: string }>) => {
            const newTask: Task = {
                id: nanoid(),
                title: action.payload.title,
                content: action.payload.content,
                completed: false,
            };
            state.tasks.push(newTask);
        },
        // Action creator and reducer logic for deleting a task
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        // Action creator and reducer logic for toggling task completion
        toggleCompleted: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        // Action creator and reducer logic for editing a task
        editTask: (state, action: PayloadAction<{ id: string; title: string; content: string }>) => {
            const task = state.tasks.find((task) => task.id === action.payload.id);
            if (task) {
                task.title = action.payload.title;
                task.content = action.payload.content;
            }
        },
        // Action creator and reducer logic for toggling the filter
        toggleFilter: (state) => {
            state.filter = !state.filter;
        }
    }
})

// Export action creators and reducer
export const { addTask, deleteTask, toggleCompleted, editTask, toggleFilter } = taskSlice.actions;

// Export the reducer
export default taskSlice.reducer;
