import TaskList from "./task/TaskList"
import AddTaskForm from "./task/AddTaskForm"
import FilterButton from "./task/FilterButton"

function App() {

  return (
    <div className="min-h-screen p-12">
      <h2 className="mb-10 text-center text-4xl">
        Todo App
      </h2>

      <AddTaskForm />
      <FilterButton />
      <TaskList />

    </div>
  )
}

export default App
