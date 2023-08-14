import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

interface Note {
    id: string,
    title: string,
    content: string,
}

interface NoteState {
    notes: Note[]
}

const initialState: NoteState = {
    notes: []
}
const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<{ title: string, content: string }>) => {
            const newNote: Note = {
                id: nanoid(),
                title: action.payload.title,
                content: action.payload.content
            }
            state.notes.push(newNote);
        },
        deleteNote: (state, action: PayloadAction<{ id: string }>) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload.id)
        },
        editNote: (state, action: PayloadAction<{ id: string, title: string, content: string }>) => {
            const note = state.notes.find((note) => note.id === action.payload.id)
            if (note) {
                note.title = action.payload.title
                note.content = action.payload.title
            }

        }
    }
})

export const { addNote, editNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;