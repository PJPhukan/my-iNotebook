import React, { useContext} from 'react'

import noteContext from '../../../../Context/notes/noteContext';
import "./Noteitem.css"
export default function Noteitem(props) {
    const context = useContext(noteContext);
    const { deleteNotes } = context;
    const {note}=props;
    return (
        <div className='col-md-3 my-3'>
            <div className="card my-3" style={{"width": "15rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-pen-to-square mx-2" style={{ "color": "green" }} />
                    <i className="fa-solid fa-trash mx-2" style={{ "color": "red" }} onClick={() => { deleteNotes(note._id) }} />
                </div>
            </div>
        </div>
    )
}
