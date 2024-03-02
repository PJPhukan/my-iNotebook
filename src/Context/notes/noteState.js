import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const host = "http://localhost:8000";
    const initialNotes = []
    const [notes, setNotes] = useState(initialNotes)


    //Get all notes
    const getNotes = async () => {

        //API CALL(backend)
        const url = `${host}/api/notes/fetchallnotes`
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        // console.log(json)
        setNotes(json);

    }

    //Add notes
    const addNotes = async (title, description, tag) => {

        //API CALL(backend)
        const url = `${host}/api/notes/addnote`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const note =await response.json();
        setNotes(notes.concat(note))


    }

    //Edit notes
    const editNotes = async (id, title, description, tag) => {

        //API CALL(backend)
        const url = `${host}/api/notes/updatenotes/${id}`
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }),
        });
        response.json();


        //LOGIC TO EDIT
        let newNote=JSON.parse(JSON.stringify(notes))//it creates a deep copy of notes
        for (let index = 0; index < notes.length; index++) {
            // const element = newNote[index];
            if (newNote[index]._id === id) {
                newNote[index].title = title;
                newNote[index].description = description;
                newNote[index].tag = tag;
                break;
            }
        }
        setNotes(newNote)
    }

    //Delete notes
    const deleteNotes = async (id) => {
        //API CALL
        const url = `${host}/api/notes/deletenotes/${id}`
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
      response.json();

        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote);
        // console.log("deleting note " + id)
    }


    return (
        <NoteContext.Provider value={{ notes, addNotes, editNotes, deleteNotes, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;