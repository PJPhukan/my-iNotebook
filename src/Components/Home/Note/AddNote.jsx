import React, { useContext, useState } from 'react'
import noteContext from '../../../Context/notes/noteContext'
export default function AddNote({ showAlert }) {
    const context = useContext(noteContext);
    const { addNotes } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNotes(note.title, note.description, note.tag);
        showAlert("Note successfully added", "success")
        setNote({ title: "", description: "", tag: "" })
    }

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="conatainer my-5">
                <h1>Add Your Notes</h1>
                <form action="/">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' placeholder="xyz_title" onChange={onchange} required minLength={5} value={note.title} />


                        <label htmlFor="description" className="form-label my-3" >Description</label>
                        <input type="text" id="description" name='description' className="form-control" aria-describedby="passwordHelpBlock" onChange={onchange} required minLength={5} value={note.description} />

                        <label htmlFor="tag" className="form-label my-3" >Tag</label>
                        <input type="text" id="tag" name='tag' className="form-control" aria-describedby="passwordHelpBlock" onChange={onchange} value={note.tag} />

                        <button disabled={note.title.length < 5 || note.description.length < 5} className="btn btn-primary my-3" type="submit" onClick={handleClick} >Add Note</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
