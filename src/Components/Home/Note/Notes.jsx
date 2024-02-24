import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../../../Context/notes/noteContext'
import Noteitem from './NoteItem/Noteitem';
import AddNote from './AddNote';
export default function Notes() {
  const context = useContext(noteContext);
  const { notes, getNotes, editNotes } = context;

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" })

  const ref = useRef(null)
  const refClose = useRef(null)

  const upDateNotes = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  }

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, [])

  const handleClick = (e) => {
    console.log("Update note was clicked");
    editNotes(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  }

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote />
      <button type="button" className="btn btn-primary" style={{ display: 'none' }} data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>Click me
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="etitle" name='etitle' placeholder="xyz_title" value={note.etitle} onChange={onchange} />
              <label htmlFor="description" className="form-label my-3" >Description</label>
              <input type="text" id="edescription" name='edescription' className="form-control" aria-describedby="passwordHelpBlock" value={note.edescription} onChange={onchange} />
              <label htmlFor="tag" className="form-label my-3" >Tag</label>
              <input type="text" id="etag" name='etag' className="form-control" aria-describedby="passwordHelpBlock" value={note.etag} onChange={onchange} />
            </div>

            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Update Notes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return <Noteitem key={note._id} upDateNotes={upDateNotes} note={note} />
        })}
      </div>
    </>
  )
}
