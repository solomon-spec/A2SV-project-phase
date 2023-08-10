import { AiFillStar } from 'react-icons/ai'
import Link from 'next/link'
interface Props {
    title: string;
    description: string;
    author: string;
    i: number;
}
export default function Recipe({ title, description, author, i }: Props) {

    return (
        <div className="bg-slate-100 w-full flex flex-col rounded-md overflow-hidden">
            <img className="h-[40vh] w-full object-cover" src={`https://source.unsplash.com/random/?${title}`} alt="" />
            <div className="p-4 space-y-3">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm">{description}</p>
                <div className="flex text-md">
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar />
                </div>
                <div className='flex space-x-4 items-center'>
                    <img className="w-10 h-10 rounded-full object-cover" src={`https://source.unsplash.com/random/?${author}`} alt="" />
                    <span>{author}</span>
                </div>
            </div>
            <div className='flex justify-end mt-auto'>

                <Link href={`recipies/${i}`} className='py-2 px-4 bg-slate-200 max-w-fit hover:scale-110 cursor-pointer'>View Detail </Link>
            </div>
        </div>
    )
}