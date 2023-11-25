import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const st1 = {
        "name": "pjphukan",
        "class": "12th"
    }
    const [state, setstate] = useState(st1)
    const Update = () => {
        setTimeout(() => {
            setstate({
                "name": "Paragjyoti phukan",
                "class": "IT-3rd"
            })
        }, 1000);
    }
    return (
        // value = {{ state, Update }} ==value={{state:state,Update:Update}}(DON'T BE CONFUSED)
        <NoteContext.Provider value={{ state, Update }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;