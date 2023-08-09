"use client"; // Enable client-side rendering
import { Blog, getBlog, deleteBlog } from '@/data/blog'; // Import necessary functions from the specified path
import { redirect, useParams, useRouter } from 'next/navigation'; // Import the redirect, useParams, and useRouter functions
import { use, useEffect, useState } from 'react'; // Import the use, useEffect, and useState hooks
import { Router } from 'next/router';

export default function BlogPage() {
    const [blog, setBlog] = useState<Blog | null>(null); // Define a state for the blog data
    const params = useParams(); // Get URL parameters
    const router = useRouter(); // Initialize the useRouter hook
    const id = params.id; // Extract the blog ID from the URL parameters

    useEffect(() => {
        // Fetch the blog data based on the ID
        const blogs = getBlog(id as string);
        blogs.then((data) => {
            if (data) {
                setBlog(data); // Set the fetched blog data in the state
            }
        });
    }, []); // Run this effect only once when the component mounts

    // Function to delete the current blog
    const m_deleteBlog = async () => {
        await deleteBlog(id as string); // Call the deleteBlog function
        console.log("delete");
        setBlog(null); // Clear the blog data from the state
        router.push('/'); // Redirect to the home page
    }

    return (
        <div className="p-4 pb-12">
            {/* Display the blog title */}
            <h1 className="text-3xl font-bold text-center">{blog?.title}</h1>

            {/* Display the blog content */}
            <p className="p-8">{blog?.content}</p>

            {/* Button to delete the blog */}
            <button className="py-2 px-6 bg-red-700 rounded-full text-white hover:scale-105"
                onClick={m_deleteBlog}
            >Delete</button>

            {/* Link to edit the blog */}
            <a href={id + `/edit`}>edit</a>
        </div>
    )
}
