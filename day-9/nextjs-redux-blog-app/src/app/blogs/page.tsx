'use client';
import BlogCard from "@/components/blogCard";
import { Blog, randomId, getBlogs } from "@/data/blog";
import { useEffect, useState } from "react";
import { useGetBlogsQuery } from "../api/blog";


export default function About() {
    const { data, error, isLoading } = useGetBlogsQuery(undefined, {});
    const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(() => {
        if (data) {
            setBlogs(data);
        }
    }, [data, error, isLoading]);

    return (
        <>
            <div>
                <h1 className="text-3xl font-bold text-center">Discover Inspiring Blogs</h1>
            </div>
            <div className="p-8 px-20 flex flex-wrap justify-between">
                {blogs.map((blog, i) => {
                    return (
                        <>
                            <BlogCard key={i} {...blog} />
                        </>
                    )
                })}
            </div>
        </>
    )
}