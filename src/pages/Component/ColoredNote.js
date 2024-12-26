import {useState} from "react";
import {CircleX, Pencil, Save} from 'lucide-react';

export default function ColorNoted({bgColor, click}) {

    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [save, editMode] = useState(true);

    const handleNote = (e) => {
        setNote(e.target.value)
    }
    const handleTitle = (e) => {
        setTitle((e.target.value).toUpperCase());
    }
    const setEditMode = () => {
        editMode(!save)
    }

    // > Got Colors
    let classNames = `m-3 border p-4 rounded-lg shadow-md shadow-slate-300 max-h-56 h-55 md:min-w-52 flex flex-col items-between justify-between  ${bgColor}`;

    return <div className={classNames}>
        {/* Title Session */}
        <div>
            {
                save ? <input type={"text"}
                              className={bgColor + " outline-none text-black input_box  w-full font-semibold"}
                              placeholder={"Set Title Here"}
                              value={title ? title : undefined}
                              onChange={handleTitle}
                /> : <div className={"text-lg truncate text-slate-500p"}>{title ? title : "Untitled"}</div>
            }
        </div>
        {/* Note Session */}
        <div className={"h-3/5 my-2"}>
            {save ? <textarea
                className={`${bgColor} max-h-36 min-h-28  resize-none outline-none input_box text-xs h-full w-full break-words`}
                placeholder={"Time to Make Notes"}
                value={note ? note : undefined} onChange={handleNote}
            /> : <div className={"overflow-y-scroll overscroll-x-none max-h-28 min-h-28 w-full break-words text-xs"}>
                {note}
            </div>}

        </div>
        {/* Button Group */}
        <div className={"my-2 flex justify-end"}>
            <button
                className={"transition-color ease-in-out duration-300 shadow-lg border p-1 text-xs rounded-lg bg-sky-950 text-white ms-2 hover:bg-black border-0 "}
                type={"button"} onClick={click}><CircleX/></button>
            <button
                className={"transition-color ease-in-out duration-300 shadow-lg border p-1 text-xs rounded-lg bg-sky-950 text-white ms-2 hover:bg-black border-0 "}
                type={"button"}
                onClick={setEditMode}>{save ? <Save/> : <Pencil/>}</button>
        </div>
    </div>
}