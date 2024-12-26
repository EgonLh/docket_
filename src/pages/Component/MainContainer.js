"use client"
import {useState} from "react";
import Navigation from "./Navigation";
import Notes from "./NoteContainer";
import {v4 as uuidv4} from 'uuid';
import {Github} from 'lucide-react';

//Based-Colors
const colors = ['bg-red', 'bg-blue', 'bg-lime', 'bg-indigo', 'bg-green'];

let initialNote = [{
    id: "1",
    color: "",
}]

function Container() {
    let [notes, setNote] = useState(initialNote);
    // Initial State
    const clickHandler = (bgcolor) => {
        let newNote = {
            id: uuidv4(),
            color: bgcolor
        }
        setNote([newNote, ...notes]);
    }

    // Handling Delete Func
    function HandleDelete(key) {
        let newNotes = notes.filter(note => note.id !== key);
        setNote([...newNotes]);
        console.log(newNotes)
    }

    return (<div className={"mx-auto max-w-screen-2xl"}>
        <div className={"m-4 p-2 rounded-lg container-lg border shadow-md bg-white min-h-3.5 max-h-full "}>
            {/*ICON*/}
            <div className={"px-4 flex md:justify-end justify-between items-center "}>
                <a href={"https://github.com/EgonLh/docket_"}
                   className={"hover:shadow rounded p-1 transition-all delay-100 duration-500 ease-in-out hover:p-2 bg-black text-white sticky top-0"}><Github/></a>
                {/*Mobile NAV */}{/*core error > (color)=> forgot parameter :> */}
                <div className={" md:hidden flex justify-end "}>
                    <Navigation colors={colors} func={(color) => clickHandler(color)}/>
                </div>
            </div>
            {/*Normal NAV*/}
            <div className={"md:flex flex-row "}>
                <div className={"bg-info lg:w-36 flex flex-col md:w-28 w-full md:flex hidden"}>
                    {/*core error > (color)=> forgot parameter :> */}
                    <Navigation colors={colors} func={(color) => clickHandler(color)}/>
                </div>
                <div className={"w-full"}>
                    <div
                        className={" grid lg:grid-cols-3 grid-cols-1  gap-auto col-span-3 "}>
                        <Notes notes={notes} func={(a) => HandleDelete(a)}/>
                    </div>
                </div>
            </div>
            {/*Footer*/}
            <div className={"text-center text-xs mt-3 mx-auto w-full text-teal-700 "}>
                Developed By <a href={"https://github.com/EgonLh"}
                                className={"hover:text-blue hover:text-sm duration-300"}>Egon 🍵</a>
            </div>
        </div>
    </div>)
}

export default function NoteContainer() {
    return <div>
        <Container/>
    </div>
}




