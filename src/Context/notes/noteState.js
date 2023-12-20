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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1N2IxNTA4MThhZDExNTE4MDFiZjFkIn0sImlhdCI6MTcwMDI0NTg3NX0.FQiQHQ3hQNmPyKkU9F6nBmAw0pgBktDA4Bskt9C4zoQ"
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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1N2IxNTA4MThhZDExNTE4MDFiZjFkIn0sImlhdCI6MTcwMDI0NTg3NX0.FQiQHQ3hQNmPyKkU9F6nBmAw0pgBktDA4Bskt9C4zoQ"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();


        //ADD NOTES LOGIC IN CLIENT SITE
        const note = {
            "_id": "6558fb95fef12307fe2719163930438",
            "user": "6557b150818ad1151801bf1d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-11-18T17:59:49.234Z",
            "__v": 0
        };
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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1N2IxNTA4MThhZDExNTE4MDFiZjFkIn0sImlhdCI6MTcwMDI0NTg3NX0.FQiQHQ3hQNmPyKkU9F6nBmAw0pgBktDA4Bskt9C4zoQ"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();


        //LOGIC TO EDIT
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    //Delete notes
    const deleteNotes = async(id) => {
        //API CALL
        const url = `${host}/api/notes/deletenotes/${id}`
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1N2IxNTA4MThhZDExNTE4MDFiZjFkIn0sImlhdCI6MTcwMDI0NTg3NX0.FQiQHQ3hQNmPyKkU9F6nBmAw0pgBktDA4Bskt9C4zoQ"
            }
        });
        const json = response.json();

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