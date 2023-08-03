import { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
interface Props {
    task: string;
    index: number;
    deleteTask: (index: number) => void;

}
export default ({ task, deleteTask, index }: Props) => {
    const date: Date = new Date();
    const [checked, setChecked] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);
    const [newTask, setNewTask] = useState<string>(task);
    const eventHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const key = e.key;
        if (key === "Enter") {
            setEdit(false);
        }
    }
    return (
        <div className={`${checked ? " text-gray-500" : ""} bg-slate-300 flex max-w-[70%] p-4 mx-auto items-center justify-between space-x-12 shadow-lg hover:bg-slate-400`}>
            <div className="flex space-x-8 items-center flex-nowrap">
                <input className="p-2 rounded w-5 h-5" onClick={() => setChecked(!checked)} type="checkbox" />
                <div className={"border-2 border-gray-400 p-2 rounded-md"}>
                    {`${date.getDay()}/${date.getMonth() + 1} ${date.getFullYear()}`}
                </div>
            </div>
            {edit ?
                <input className="border-gray-300 border-2 rounded-md p-2" type="text" value={newTask} onKeyPress={(e) => eventHandler(e)} onChange={(e) => setNewTask(e.target.value)} />
                :
                <div className={`text-xl font-medium ${checked ? "line-through text-gray-500" : ""}`}>
                    {newTask}
                </div>
            }


            <div className="space-x-8 flex items-center">
                <BiSolidEdit className="text-3xl text-slate-500 inline-block cursor-pointer"
                    onClick={() => setEdit(!edit)}
                />
                <button onClick={() => { deleteTask(index) }}
                    className={`bg-red-700 py-2 px-6 rounded-full text-white`}>
                    Delete
                </button>
            </div>
        </div>
    )
};
