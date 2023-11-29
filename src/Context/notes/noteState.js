import React,{useState} from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "6558fb8707fe271916930436",
            "user": "6557b150818ad1151801bf1d",
            "title": "My-title first second",
            "description": "Mydescription first second ",
            "tag": "First tag first second",
            "date": "2023-11-18T17:59:35.455Z",
            "__v": 0
        },
        {
            "_id": "6558fb9507fe271916930438",
            "user": "6557b150818ad1151801bf1d",
            "title": "My-title first third",
            "description": "Mydescription first third ",
            "tag": "First tag first third",
            "date": "2023-11-18T17:59:49.234Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(initialNotes)
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;