import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../task/taskSlice";

// create a new redux store
export const store = configureStore({
    reducer: {
        task: taskReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
