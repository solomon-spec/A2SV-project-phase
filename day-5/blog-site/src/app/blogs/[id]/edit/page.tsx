'use client';
import { Blog, updateBlog, getBlog } from '@/data/blog'
import { redirect, useRouter, useParams } from 'next/navigation'
import { useState, useEffect } from 'react';
export default function newBlog() {

    const router = useRouter();
    const [blog, setBlog] = useState<Blog | null>(null)
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const blogs = getBlog(id as string)
        blogs.then((data) => {
            if (data) {
                setBlog(data)
            }
        })

    }, [])

    useEffect(() => {
        const blogs = getBlog(id as string)
        blogs.then((data) => {
            if (data) {
                setBlog(data)
            }
        })

    }, [])
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!blog) {
            return;
        }
        const newBlog: Blog = { ...blog };
        newBlog.title = e.currentTarget.title.value;
        newBlog.author = e.currentTarget.author.value;
        newBlog.image = e.currentTarget.image.value;
        newBlog.content = e.currentTarget.content.value;
        await updateBlog(newBlog);
        router.push('/')
    }
    return (
        <div className="px-24">
            <h1 className="text-3xl text-center font-bold mb-12">Update blog</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">

                <label htmlFor="title">Title </label>
                <input className="p-2 border-[1px] rounded-md h-[2.5rem] max-w-md"
                    id="title" name="title" type="text" defaultValue={blog?.title} />

                <label htmlFor="author">Author</label>
                <input className="p-2 max-w-md border-[1px] rounded-md h-[2.5rem]"
                    type="text" id="author" name="author" defaultValue={blog?.author} />

                <label htmlFor="image">image</label>
                <input className="p-2 max-w-md border-[1px] rounded-md h-[2.5rem]"
                    type="text" id="image" name="image" defaultValue={blog?.image} />
                <textarea className="p-2 border-[1.5px] rounded-md mt-12"
                    id="content" name="content" cols={100} rows={20} defaultValue={blog?.content}
                ></textarea>
                <button className="py-2 px-6 bg-slate-400 rounded-full w-48 hover:scale-105">Change</button>
                <button className="py-2 px-6 bg-red-700 rounded-full w-48 hover:scale-105"
                    onClick={router.back}
                >Cancle</button>
            </form>
        </div>
    )
}