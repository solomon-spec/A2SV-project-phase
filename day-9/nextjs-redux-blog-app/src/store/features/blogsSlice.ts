import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Blog } from '@/data/blog';

// Define the initial state using that type
const initialState: Blog[] = [];

export const blogsSlice = createSlice({
    name: 'blogs',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addBlog: (state, action: PayloadAction<Blog>) => {
            state.push(action.payload);
        },
        removeBlog: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        },
        updateBlog: (state, action: PayloadAction<Blog>) => {
            const { id } = action.payload;
            const blog = state.find((blog) => blog.id === id);
            if (blog) {
                blog.title = action.payload.title;
                blog.image = action.payload.image;
                blog.content = action.payload.content;
            }
        },

    },
});

export const { addBlog, removeBlog, updateBlog } = blogsSlice.actions;

export default blogsSlice.reducer;