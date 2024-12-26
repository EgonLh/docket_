import { v4 as uuidv4 } from 'uuid';
import {useState} from "react";

// Demo for Project > Managing Data flow and separating Components
let initialNote = [
    {
        id:1,
        color:""
    }
]

function NoteWithColor({color}) {
    let [title,setTitle] = useState("");
    let [note,setNote] = useState("");
    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleNote(e) {
        setNote(e.target.value)

    }

    // function hanleClose() {
    //     console.log("Form Closed")
    // }

    return(<div className={"border"} onFocus={hanleClose}>
        {color}
        <input type={"text"} onChange={handleTitle} value={title} placeholder={"Title"}/>
        <textarea onChange={handleNote} value={note}/>
    </div>)
}

export default function Demo() {
    let [note,setNote] = useState(initialNote);

    let data = ["red","blue","green"]

    function createNote(current_color) {
        let newNote = {
            id:uuidv4(),
            color:current_color,
        }
        console.log(newNote)
        setNote([...note,newNote]);
    }

    function setReset() {
        setNote(initialNote);
    }

    return <div>
        <div>
            <h1>Colors</h1>
            {data.map(color => <button onClick={()=>createNote(color)} current_color={color} key={uuidv4()}>{color}</button>)}

            {note.map(data => <NoteWithColor color={data.color} key={data.id}/>)}

            <button type={"reset"} onClick={setReset}>Reset</button>
        </div>
    </div>
}