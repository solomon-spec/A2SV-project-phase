import { UUID, randomUUID } from "crypto";


export interface Blog {
    id: string;
    title: string;
    image: string;
    content: string;
    date: Date;
    author: string;
}

// store the blog data in local storage
export async function getBlogs(): Promise<Blog[]> {
    const data = localStorage.getItem('blogs');
    console.log(data)
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

// get a single blog by id
export async function getBlog(id: string): Promise<Blog | undefined> {
    const blogs = await getBlogs();
    return blogs.find(blog => blog.id === id);
}

// create a new blog
export async function createBlog({ author, content, image, title }: Blog): Promise<Blog> {
    const blogs = await getBlogs();
    const blog: Blog = {
        author, image, title, content,
        date: new Date(),
        id: randomId()
    }
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    console.log(blogs);
    return blog;

}

// update an existing blog
export async function updateBlog(blog: Blog): Promise<Blog> {
    const blogs = await getBlogs();
    const index = blogs.findIndex(b => b.id === blog.id);
    blogs[index] = blog;
    localStorage.setItem('blogs', JSON.stringify(blogs));
    return blog;
}

// delete an existing blog
export async function deleteBlog(id: string): Promise<void> {
    const blogs = await getBlogs();
    const index = blogs.findIndex(blog => blog.id === id);
    blogs.splice(index, 1);
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

export function randomId() {
    // 7 length random string
    let str = ''
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 7; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return str
}