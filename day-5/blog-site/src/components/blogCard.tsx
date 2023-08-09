// Import necessary modules and components
import { Blog } from "@/data/blog";
import Link from "next/link";

// Define the BlogCard component and pass in the necessary props from the Blog type
export default function BlogCard({ title, image, content, date, author, id }: Blog) {
    return (
        // Outer container for the blog card, styling with CSS classes
        <div className="bg-slate-100 max-w-sm rounded-md overflow-hidden">
            {/* Display the blog image */}
            <img src={image} alt="blog image" />

            {/* Container for the blog content */}
            <div className="p-4">
                {/* Display the blog title */}
                <h2 className="font-bold text-xl text-center">{title}</h2>

                {/* Display a preview of the blog content */}
                <p>{content.slice(0, 100)}</p>
            </div>

            {/* Link to the full blog post using the blog's ID */}
            <Link href={`/blogs/${id}`} className="bg-white py-2 w-[8rem] text-center block mx-auto rounded-full shadow-sm hover:scale-105">
                Read more
            </Link>

            {/* Container for the author information */}
            <div className="m-4 text-gray-600 flex items-center space-between">
                {/* Display author profile image and name */}
                <div className="flex space-x-3 items-center">
                    <img className="w-12 h-12 rounded-full" src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" alt="profile image" />
                    <h4>{author}</h4>
                </div>

                {/* Display the publication date */}
                <span className="block ml-auto">
                    {"hello" /* Placeholder text, originally intended for showing the date */}
                </span>
            </div>
        </div>
    );
}
