'use client';
import BlogCard from "@/components/blogCard";
import { Blog, randomId, getBlogs } from "@/data/blog";
import { useEffect, useState } from "react";

const data: Blog = {
    id: randomId(),
    title: "Web dev",
    image: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, atque laudantium! Recusandae neque dolore repudiandae ducimus assumenda obcaecati quo! Maxime esse ipsam tenetur delectus dignissimos distinctio autem asperiores architecto ex?",
    date: new Date(),
    author: "Solomon Abate"
}
export default function About() {
    const [blogs, setBlogs] = useState<Blog[]>([])
    useEffect(() => {
        getBlogs().then(response => setBlogs(response))
        console.log(blogs)
    }, []);

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
                            <BlogCard key={i + 1000} {...blog} />
                            <BlogCard key={i + 10000} {...blog} />
                            <BlogCard key={i + 2000} {...blog} />
                            <BlogCard key={i + 20000} {...blog} />
                            <BlogCard key={i + 3000} {...blog} />
                        </>
                    )
                })}
            </div>
        </>
    )
}