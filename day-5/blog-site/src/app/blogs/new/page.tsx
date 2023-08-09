'use client';
import { Blog, createBlog } from '@/data/blog'
import { redirect, useRouter } from 'next/navigation'
export default function newBlog() {
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const author: string = e.currentTarget.author.value;
        const title: string = e.currentTarget.title.value;
        const image: string = e.currentTarget.image.value;
        const content: string = e.currentTarget.content.value;
        const id = 'asdasdasd';
        const date = new Date()
        const blog: Blog = { author, date, id, content, image, title }
        await createBlog(blog);
        router.push('/')
        //console.log(blog);
    }
    return (
        <div className="px-24">
            <h1 className="text-3xl text-center font-bold mb-12">Create new blog</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">

                <label htmlFor="title">Title </label>
                <input className="p-2 border-[1px] rounded-md h-[2.5rem] max-w-md"
                    id="title" name="title" type="text" />

                <label htmlFor="author">Author</label>
                <input className="p-2 max-w-md border-[1px] rounded-md h-[2.5rem]"
                    type="text" id="author" name="author" />

                <label htmlFor="image">image</label>
                <input className="p-2 max-w-md border-[1px] rounded-md h-[2.5rem]"
                    type="text" id="image" name="image" />
                <textarea className="p-2 border-[1.5px] rounded-md mt-12"
                    id="content" name="content" cols={100} rows={20} placeholder="Content...."></textarea>
                <button className="py-2 px-6 bg-slate-400 rounded-full w-48 hover:scale-105">Create</button>
            </form>
        </div>
    )
}