'use client'; // Enable client-side rendering
import { Blog, createBlog } from '@/data/blog'; // Import the Blog type and createBlog function from the specified path
import { redirect, useRouter } from 'next/navigation'; // Import the redirect and useRouter functions from the next/navigation module

export default function newBlog() {
    const router = useRouter(); // Initialize the useRouter hook
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Extract form values
        const author: string = e.currentTarget.author.value;
        const title: string = e.currentTarget.title.value;
        const image: string = e.currentTarget.image.value;
        const content: string = e.currentTarget.content.value;
        const id = 'asdasdasd'; // Temporary ID value (you might want to generate a unique ID)
        const date = new Date();

        // Create a new Blog object
        const blog: Blog = { author, date, id, content, image, title };

        // Call the createBlog function to add the new blog
        await createBlog(blog);

        // Redirect to the home page
        router.push('/');
    };

    return (
        <div className="px-24">
            <h1 className="text-3xl text-center font-bold mb-12">Create new blog</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                {/* Form fields */}
                <label htmlFor="title">Title</label>
                <input className="p-2 border-[1px] rounded-md h-[2.5rem] max-w-md" id="title" name="title" type="text" />

                <label htmlFor="author">Author</label>
                <input className="p-2 max-w-md border-[1px] rounded-md h-[2.5rem]" type="text" id="author" name="author" />

                <label htmlFor="image">Image</label>
                <input className="p-2 max-w-md border-[1px] rounded-md h-[2.5rem]" type="text" id="image" name="image" />
                <textarea className="p-2 border-[1.5px] rounded-md mt-12" id="content" name="content" cols={100} rows={20} placeholder="Content...."></textarea>

                {/* Submit button */}
                <button className="py-2 px-6 bg-slate-400 rounded-full w-48 hover:scale-105">Create</button>
            </form>
        </div>
    );
}
