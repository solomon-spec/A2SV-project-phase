import AddNote from "./components/addNote"
import NoteList from './components/noteList'
import { Provider } from "react-redux"
import { store } from "./redux/store"
function App() {

  return (
    <Provider store={store}>
      <main className="grid grid-cols-2 gap-4 p-8">
        <AddNote />
        <NoteList />
      </main>
    </Provider>
  )
}

export default App
