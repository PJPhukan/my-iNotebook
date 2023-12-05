import React, { useContext } from 'react'
import noteContext from '../../../Context/notes/noteContext'
import Noteitem from './NoteItem/Noteitem';
import AddNote from './AddNote';
export default function Notes() {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <>
    <AddNote/>
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />
        })}
      </div>
    </>
  )
}
