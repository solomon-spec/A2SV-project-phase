import { useState } from "react";
interface Props {
    // function that adds a task to the list of tasks
    addTask: (task: string) => void;
}
const Form = ({ addTask }: Props): JSX.Element => {
    const [task, setTask] = useState<string>("");
    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); addTask(task) }}
                className="bg-slate-50 flex flex-col max-w-md p-12 space-y-8 mx-auto rounded-md mt-12 shadow-xl" action="">
                <label htmlFor="task" className="font-mono font-medium">Task</label>
                <input id="task" onChange={(e) => setTask(e.target.value)}
                    className="border-gray-300 border-2 rounded-md p-2" type="text" placeholder="task" />
                <button className="block mx-auto bg-slate-300 py-2 px-6 rounded-full ">Submit</button>
            </form>
        </div>
    )
};

export default Form;