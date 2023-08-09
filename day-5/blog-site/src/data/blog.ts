// Import necessary modules and functions
import { UUID, randomUUID } from "crypto";

// Define the Blog interface with its properties
export interface Blog {
    id: string;
    title: string;
    image: string;
    content: string;
    date: Date;
    author: string;
}

// Retrieve blogs from local storage
export async function getBlogs(): Promise<Blog[]> {
    const data = localStorage.getItem('blogs');
    console.log(data);
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

// Retrieve a single blog by its ID
export async function getBlog(id: string): Promise<Blog | undefined> {
    const blogs = await getBlogs();
    return blogs.find(blog => blog.id === id);
}

// Create a new blog and store it in local storage
export async function createBlog({ author, content, image, title }: Blog): Promise<Blog> {
    const blogs = await getBlogs();
    const blog: Blog = {
        author, image, title, content,
        date: new Date(),
        id: randomId() // Generate a random ID for the new blog
    }
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    console.log(blogs);
    return blog;
}

// Update an existing blog in local storage
export async function updateBlog(blog: Blog): Promise<Blog> {
    const blogs = await getBlogs();
    const index = blogs.findIndex(b => b.id === blog.id);
    blogs[index] = blog;
    localStorage.setItem('blogs', JSON.stringify(blogs));
    return blog;
}

// Delete an existing blog from local storage
export async function deleteBlog(id: string): Promise<void> {
    const blogs = await getBlogs();
    const index = blogs.findIndex(blog => blog.id === id);
    blogs.splice(index, 1);
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

// Generate a random ID (7 characters) for a new blog
export function randomId() {
    let str = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 7; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
}
