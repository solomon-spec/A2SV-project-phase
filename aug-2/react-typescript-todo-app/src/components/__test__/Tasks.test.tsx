import { screen, render } from "@testing-library/react";
import Tasks from "../Tasks";
const addTask = (task: number) => {
    console.log(task);
    return;
}
const task = 'task';
describe("Tasks", () => {
    test("renders Tasks component", () => {
        render(<Tasks deleteTask={addTask} task={task} index={1} />);
        const tasksElement = screen.getByTestId("tasks");
        expect(tasksElement).toBeInTheDocument();

    });

});