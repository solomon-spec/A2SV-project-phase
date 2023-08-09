import { Blog } from "@/data/blog";
import Link from "next/link";


export default function BlogCard({ title, image, content, date, author, id }: Blog) {

    return (
        <div className="bg-slate-100 max-w-sm rounded-md overflow-hidden">
            <img src={image} alt="blog image"
            />
            <div className="p-4">
                <h2 className="font-bold text-xl text-center">{title}</h2>
                <p>{content.slice(0, 100)}</p>
            </div>
            <Link href={`/blogs/${id}`}
                className="bg-white py-2 w-[8rem] text-center block mx-auto rounded-full shadow-sm hover:scale-105">Read more</Link>
            <div className="m-4 text-gray-600 flex items-center space-between">
                <div className="flex space-x-3 items-center">
                    <img className="w-12 h-12 rounded-full" src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" alt="profile image" />
                    <h4>{author}</h4>
                </div>
                <span className="block ml-auto">{"hello"/*date.toISOString().split('T')[0]*/}</span>
            </div>
        </div>
    )
}