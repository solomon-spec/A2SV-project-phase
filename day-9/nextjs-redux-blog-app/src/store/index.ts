import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '@/store/features/blogsSlice'
import { blogApi } from './api/blogApi'

export const store = configureStore({
    reducer: {
        blogs: blogReducer,
        [blogApi.reducerPath]: blogApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch