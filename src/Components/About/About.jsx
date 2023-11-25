//Import css
import './About.css'

import React,{useContext,useEffect} from 'react'
import noteContext from '../../Context/notes/noteContext'



export default function About() {
  const a =useContext(noteContext);
  useEffect(() => {
    a.Update();
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>
    The name of student is {a.state.name} and now he is studying in class {a.state.class}
    </div>
  )
}
