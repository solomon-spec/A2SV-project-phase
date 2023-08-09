This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



---


Certainly! Below is a template for documenting the entire blog application, covering various aspects such as components, data management, and usage instructions. You can expand and customize this documentation further based on your project's specifics.

---

# Documentation: Blog Application

This documentation provides an overview of the Blog Application, including its components, data management, and usage instructions.

## Table of Contents

- [Introduction](#introduction)
- [Components](#components)
  - [Navbar Component](#navbar-component)
  - [`newBlog` Component](#newblog-component)
  - [`BlogCard` Component](#blogcard-component)
  - [`BlogPage` Component](#blogpage-component)
- [Data Management](#data-management)
  - [Blog Data Structure](#blog-data-structure)
  - [API Functions](#api-functions)
- [Usage Instructions](#usage-instructions)
  - [Creating a New Blog Post](#creating-a-new-blog-post)
  - [Viewing Blog Posts](#viewing-blog-posts)
  - [Editing a Blog Post](#editing-a-blog-post)
  - [Deleting a Blog Post](#deleting-a-blog-post)

## Introduction

The Blog Application is a React-based web application that enables users to create, view, edit, and delete blog posts. It provides a user-friendly interface for managing blog content and offers essential features for bloggers and readers alike.

## Components

### Navbar Component

The `Navbar` component serves as the navigation bar of the application. It provides links to different sections of the app, such as the home page, a list of all blogs, and a form to create a new blog post.

### `newBlog` Component

The `newBlog` component is responsible for creating new blog posts. It offers a form where users can input details such as the title, author, image URL, and content of the blog post. Upon submission, the new blog post is added to the collection.

### `BlogCard` Component

The `BlogCard` component represents a blog post preview. It displays the blog's title, author, a snippet of content, and a "Read more" link to view the full post. This component is used in various places to provide a visually appealing overview of each blog post.

### `BlogPage` Component

The `BlogPage` component displays the full content of a specific blog post. It retrieves the blog's data based on the provided ID and shows the title and complete content. Additionally, users can edit the post or delete it from this page.

## Data Management

### Blog Data Structure

A blog post is represented by the following data structure:

```typescript
interface Blog {
    id: string;
    title: string;
    image: string;
    content: string;
    date: Date;
    author: string;
}
```

### API Functions

The application uses the following functions to manage blog data:

- `getBlogs()`: Retrieves a list of all blog posts.
- `getBlog(id: string)`: Retrieves a single blog post by its ID.
- `createBlog(blog: Blog)`: Creates a new blog post.
- `updateBlog(blog: Blog): Updates an existing blog post.
- `deleteBlog(id: string)`: Deletes a blog post by its ID.

## Usage Instructions

### Creating a New Blog Post

1. Access the home page.
2. Click on the "Create New Blog" link in the navigation bar.
3. Fill out the form with the blog details, including the title, author, image URL, and content.
4. Click the "Create" button to add the new blog post.
5. The new post will be added to the list, and you will be redirected to the home page.

### Viewing Blog Posts

1. Access the home page to see a list of all blog post previews.
2. Click on the "Read more" link of a specific blog card to view the full content of that blog post.
3. You'll be directed to the individual blog post page (`BlogPage`), where you can read the entire content.

### Editing a Blog Post

1. Access the individual blog post page (`BlogPage`) by following the steps above.
2. Click the "Edit" link on the page.
3. You'll be directed to the edit page (`newBlog`), where you can modify the blog post's details.
4. After making changes, click the "Change" button to update the blog post.
5. You will be redirected back to the individual blog post page.

### Deleting a Blog Post

1. Access the individual blog post page (`BlogPage`) by following the steps above.
2. Click the "Delete" button on the page.
3. The blog post will be permanently deleted from the collection, and you will be redirected to the home page.
