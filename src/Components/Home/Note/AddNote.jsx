import React,{useContext,useState} from 'react'
import noteContext from '../../../Context/notes/noteContext'
export default function AddNote() {
    const context = useContext(noteContext);
    const {  addNotes } = context;
    const [note, setNote] = useState({title:"",description:"",tag:"default"})

    const handleClick=(e)=>{
        e.preventDefault();
        addNotes(note.title,note.description,note.tag);
    }

    const onchange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div>
          <div className="conatainer my-5">
              <h1>Add Your Notes</h1>
              <form action="/">
                  <div className="mb-3">
                      <label htmlFor="title" className="form-label">Title</label>
                      <input type="text" className="form-control" id="title" name='title' placeholder="xyz_title" onChange={onchange} />
                      <label htmlFor="description" className="form-label my-3" >Description</label>
                      <input type="text" id="description" name='description' className="form-control" aria-describedby="passwordHelpBlock" onChange={onchange} />
                      <input className="btn btn-primary my-3" type="submit" value="Submit" onClick={handleClick} />
                  </div>
              </form>
          </div>
    </div>
  )
}
