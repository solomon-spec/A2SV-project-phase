"use client";
import { Blog, getBlog, getBlogs, deleteBlog } from '@/data/blog'
import { redirect, useParams, useRouter } from 'next/navigation';
import { data } from 'autoprefixer';
import { use, useEffect, useState } from 'react';
import { Router } from 'next/router';

export default function BlogPage() {
    const [blog, setBlog] = useState<Blog | null>(null)
    const params = useParams();
    const router = useRouter();
    const id = params.id;
    useEffect(() => {
        const blogs = getBlog(id as string)
        blogs.then((data) => {
            if (data) {
                setBlog(data)
            }
        })

    }, [])
    const m_deleteBlog = async () => {
        await deleteBlog(id as string)
        console.log("delete")
        setBlog(null)
        router.push('/')
    }

    return (
        <div className="p-4 pb-12">

            <h1 className="text-3xl font-bold text-center">{blog?.title}</h1>
            <p className="p-8">{blog?.content}</p>
            <button className="py-2 px-6 bg-red-700 rounded-full text-white hover:scale-105"
                onClick={m_deleteBlog}
            >Delete</button>
            <a href={id + `/edit`}>edit</a>
        </div>

    )
}
