import React from 'react'
import Note_img from '../../../../Assert/Note-Img.jpg'
export default function Noteitem(props) {
    return (
        <div className='col-md-3 my-3'>
            <div className="card my-3" style={{"width": "15rem"}}>
                <img src={Note_img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.note.title}</h5>
                    <p className="card-text">{props.note.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
