import { useDispatch } from "react-redux"
import { addNote } from "../redux/noteSlice"
import { useState } from "react"

export default function () {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = () => {
        if (!title || !content) {
            return
        }
        dispatch(addNote({ title, content }))
        setTitle('')
        setContent('')
    }
    return (
        <div className=" p-4 border-2 border-slate-100 rounded-lg shadow-md">
            <h3 className="text-lg text-center font-semibold mb-4">Add New Note</h3>

            <div className="mb-4">
                {/* Input field for task title */}
                <input
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:border-slate-400"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-4">
                {/* Textarea for task description */}
                <textarea
                    className="w-full px-4 py-2 rounded border resize-none focus:outline-none focus:border-slate-400"
                    placeholder="Note...."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={10}
                />
            </div>
            <button
                className="bg-slate-100 rounded-full block mx-auto shadow-md text-black px-4 py-2 hover:bg-slate-200 hover:scale-105 transition duration-300"
                onClick={handleSubmit}
            >
                Add Note
            </button>
        </div>
    )
}