import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
const baseUrl = 'http://localhost:3500'
export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => `/blogs`,

        }),
        getBlog: builder.query({
            query: (id: string) => `/blogs/${id}`,
        }),
        addBlog: builder.mutation({
            query: (blog: any) => ({
                url: `/blogs`,
                method: 'POST',
                body: blog
            }),
        }),
        updateBlog: builder.mutation({
            query: (blog: any) => ({
                url: `/blogs/${blog.id}`,
                method: 'PUT',
                body: blog
            }),
        }),
        deleteBlog: builder.mutation({
            query: (id: string) => ({
                url: `/blogs/${id}`,
                method: 'DELETE',
            }),
        }),


    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBlogsQuery, useDeleteBlogMutation, useAddBlogMutation, useGetBlogQuery, useUpdateBlogMutation } = blogApi