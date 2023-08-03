import { useState } from "react";
interface Props {
    task: string;
    index: number;
    deleteTask: (index: number) => void;

}
export default ({ task, deleteTask, index }: Props) => {
    const date: Date = new Date();
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <div className="bg-slate-300 flex max-w-md p-4 mx-auto items-center justify-between shadow-lg">
            <input className="p-2 rounded " onClick={() => setChecked(!checked)} type="checkbox" />
            <div className={"border-2 border-gray-400 p-2 rounded-md"}>
                {`${date.getDay()}/${date.getMonth() + 1} ${date.getFullYear()}`}
            </div>
            <div className={`text-xl font-medium ${checked ? "line-through text-gray-500" : ""}`}>
                {task}
            </div>
            <button onClick={() => { deleteTask(index) }}
                className={`bg-red-700 py-2 px-6 rounded-full text-white`}>
                Delete
            </button>
        </div>
    );
};
