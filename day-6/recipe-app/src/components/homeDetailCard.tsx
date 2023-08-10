// Import necessary React components/icons and Next.js Link
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';

// Define the interface for the component props
interface Props {
    title: string;
    description: string;
    author: string;
}

// Define the functional component named "HomeDetailCard" receiving props of type "Props"
export default function HomeDetailCard({ title, description, author }: Props) {

    return (
        // Container div for the card with styling classes
        <div className="bg-slate-100 w-full flex flex-col space-y-3 rounded-md overflow-hidden">
            {/* Image section */}
            <img className="h-[50vh] w-full object-cover" src={`https://source.unsplash.com/random/?${title}`} alt="" />

            {/* Text content section */}
            <div className="p-4 space-y-3">
                {/* Title */}
                <h3 className="text-xl font-bold">{title}</h3>

                {/* Description */}
                <p className="text-sm">{description}</p>

                {/* Star ratings */}
                <div className="flex text-md">
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar />
                </div>

                {/* Author section */}
                <div className='flex space-x-4 items-center'>
                    <img className="w-10 h-10 rounded-full object-cover" src={`https://source.unsplash.com/random/?${author}`} alt="" />
                    <span>{author}</span>
                </div>
            </div>

            {/* "View All" link */}
            <div className='flex mt-auto justify-end'>
                <Link href='/recipes' className='py-2 px-4 bg-slate-200 max-w-fit hover:scale-110 cursor-pointer'>
                    View All
                </Link>
            </div>
        </div>
    );
}
