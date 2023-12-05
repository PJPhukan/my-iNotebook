import React from 'react'
import "./Noteitem.css"
export default function Noteitem(props) {
    return (
        <div className='col-md-3 my-3'>
            <div className="card my-3" style={{"width": "15rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.note.title}</h5>
                    <p className="card-text">{props.note.description}</p>
                    <i className="fa-solid fa-pen-to-square mx-2" style={{ "color": "green" }}></i>
                    <i className="fa-solid fa-trash mx-2" style={{ "color": "red" }}/>
                </div>
            </div>
        </div>
    )
}
