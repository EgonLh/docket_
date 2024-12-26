"use client"
import {Fragment} from "react";
import ColoredNote from "./ColoredNote";

export default function Notes({notes, func}) {

    return (
        <Fragment>
            {notes.map(note => <ColoredNote bgColor={note.color} key={note.id} click={() => {
                func(note.id)
            }}/>)}
        </Fragment>
    )
}