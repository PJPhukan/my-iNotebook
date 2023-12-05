import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "65538fb8707fe271916930436",
            "user": "6557b150818ad1151801bf1d",
            "title": "My-title first second",
            "description": "Mydescription first second ",
            "tag": "First tag first second",
            "date": "2023-11-18T17:59:35.455Z",
            "__v": 0
        },
        {
            "_id": "6558fb9507fe27191263930438",
            "user": "6557b150818ad1151801bf1d",
            "title": "My-title first third",
            "description": "Mydescription first third ",
            "tag": "First tag first third",
            "date": "2023-11-18T17:59:49.234Z",
            "__v": 0
        },
        {
            "_id": "6558fb9507fe2719169304338",
            "user": "6557b150818ad1151801bf1d",
            "title": "My-title first third",
            "description": "Mydescription first third ",
            "tag": "First tag first third",
            "date": "2023-11-18T17:59:49.234Z",
            "__v": 0
        },
        {
            "_id": "6558fb9507fe2731916930438",
            "user": "6557b150818ad1151801bf1d",
            "title": "My-title first third",
            "description": "Mydescription first third ",
            "tag": "First tag first third",
            "date": "2023-11-18T17:59:49.234Z",
            "__v": 0
        },
        {
            "_id": "6558fb95073fe271916930438",
            "user": "6557b150818ad1151801bf1d",
            "title": "My-title first third",
            "description": "Mydescription first third ",
            "tag": "First tag first third",
            "date": "2023-11-18T17:59:49.234Z",
            "__v": 0
        },
        {
            "_id": "6558fb9507fe2719316930438",
            "user": "6557b150818ad1151801bf1d",
            "title": "My-title first third",
            "description": "Mydescription first third ",
            "tag": "First tag first third",
            "date": "2023-11-18T17:59:49.234Z",
            "__v": 0
        },
        {
            "_id": "6558fb9507fe2719163930438",
            "user": "6557b150818ad1151801bf1d",
            "title": "My-title first third",
            "description": "Mydescription first third ",
            "tag": "First tag first third",
            "date": "2023-11-18T17:59:49.234Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(initialNotes)

    //Add notes
    const addNotes = (title,description,tag) => {
        console.log("adding a new note")
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
    const editNotes = (id) => {

    }

    //Delete notes
    const deleteNotes = (id) => {

    }
    return (
        <NoteContext.Provider value={{ notes, addNotes, editNotes, deleteNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;