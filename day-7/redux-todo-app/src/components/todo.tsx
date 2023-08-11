
interface TodoProps {
    title: string;
    description: string;
    done: boolean;
}
export default function Todo({ title, description, done }: TodoProps) {
    return (
        <div className='bg-slate-900 p-4 rounded-md flex space-x-6 items-center'>
            <h1 className="font-bold text-xl">{title}</h1>
            <p>{description}</p>
            <input className="w-6 h-6" type="checkbox" />
            <button className="px-6 py-2 rounded-full bg-red-700 hover:scale-105">Delete</button>
        </div>
    )

}