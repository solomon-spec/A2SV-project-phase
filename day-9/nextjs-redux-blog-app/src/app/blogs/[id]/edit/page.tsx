'use client'; // Enable client-side rendering
import { Blog } from '@/data/blog'; // Import necessary functions from the specified path
import { redirect, useRouter, useParams } from 'next/navigation'; // Import the redirect, useRouter, and useParams functions
import { useState, useEffect } from 'react'; // Import the useState and useEffect hooks
import { useGetBlogQuery, useUpdateBlogMutation } from '@/store/api/blogApi'; // Import the useGetBlogQuery hook

export default function newBlog() {
    const router = useRouter(); // Initialize the useRouter hook
    const [blog, setBlog] = useState<Blog | null>(null); // Define a state for the blog data
    const params = useParams(); // Get URL parameters
    const id = params.id; // Extract the blog ID from the URL parameters
    const { data, error, isLoading } = useGetBlogQuery(id as string, {});
    // usemutution 
    const [editBlog, mutationObj] = useUpdateBlogMutation()
    useEffect(() => {
        if (data) {
            setBlog(data); // Set the blog data to the state
        }
    }, [data, error, isLoading]); // Call the useEffect hook


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!blog) {
            return;
        }
        const newBlog: Blog = { ...blog }; // Create a copy of the current blog data
        newBlog.title = e.currentTarget.title.value; // Update the title
        newBlog.author = e.currentTarget.author.value; // Update the author
        newBlog.image = e.currentTarget.image.value; // Update the image
        newBlog.content = e.currentTarget.content.value; // Update the content
        editBlog(newBlog);
        router.push('/blogs'); // Redirect to the home page
    }

    return (
        <div className="px-24">
            {/* Update blog form */}
            <h1 className="text-3xl text-center font-bold mb-12">Update blog</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                {/* Form fields with default values */}
                <label htmlFor="title">Title </label>
                <input className="p-2 border-[1px] rounded-md h-[2.5rem] max-w-md"
                    id="title" name="title" type="text" defaultValue={blog?.title} />

                <label htmlFor="author">Author</label>
                <input className="p-2 max-w-md border-[1px] rounded-md h-[2.5rem]"
                    type="text" id="author" name="author" defaultValue={blog?.author} />

                <label htmlFor="image">Image</label>
                <input className="p-2 max-w-md border-[1px] rounded-md h-[2.5rem]"
                    type="text" id="image" name="image" defaultValue={blog?.image} />
                <textarea className="p-2 border-[1.5px] rounded-md mt-12"
                    id="content" name="content" cols={100} rows={20} defaultValue={blog?.content}
                ></textarea>

                {/* Change and Cancel buttons */}
                <button className="py-2 px-6 bg-slate-400 rounded-full w-48 hover:scale-105">Change</button>
                <button className="py-2 px-6 bg-red-700 rounded-full w-48 hover:scale-105"
                    onClick={router.back}
                >Cancel</button>
            </form>
        </div>
    );
}
