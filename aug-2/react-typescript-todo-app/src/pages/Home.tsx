import Form from "../components/Form"
import Tasks from "../components/Tasks"
import { useState } from "react";
const Home = () => {
    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = (task: string) => {
        setTasks([...tasks, task]);
    };
    const deleteTask = (index: number) => {
        console.log(index);
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
    };
    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center mt-12">Todo App</h1>
            <Form addTask={addTask} />
            {tasks.map((task, i) => {
                return <Tasks task={task} key={i} deleteTask={deleteTask} index={i} />;
            })}
        </div>
    )
}

export default Home;