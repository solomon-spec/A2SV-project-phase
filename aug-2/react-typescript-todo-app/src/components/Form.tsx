import { useState } from "react";

// Define the expected props for the Form component
interface Props {
    // Function that adds a task to the list of tasks
    addTask: (task: string) => void;
}

// Form component that represents a form for adding tasks
const Form = ({ addTask }: Props): JSX.Element => {
    // State hook to manage the task input value
    const [task, setTask] = useState("");

    return (
        <div>
            {/* Form element */}
            <form
                // Prevent the default form submission behavior and call addTask when submitted
                onSubmit={(e) => {
                    e.preventDefault(); // Prevent page refresh
                    addTask(task); // Call the provided addTask function
                }}
                className="bg-slate-50 flex flex-col max-w-[70%] p-12 space-y-8 mx-auto rounded-md mt-12 shadow-xl"
                action=""
            >
                {/* Label for the task input */}
                <label htmlFor="task" className="font-mono font-medium">
                    Task
                </label>
                {/* Input field for entering the task */}
                <input
                    id="task"
                    // Update the task state when the input value changes
                    onChange={(e) => setTask(e.target.value)}
                    className="border-gray-300 border-2 rounded-md p-2"
                    type="text"
                    placeholder="task"
                />
                {/* Submit button */}
                <button className="block mx-auto bg-slate-300 py-2 px-6 rounded-full ">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
