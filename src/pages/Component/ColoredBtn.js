"use client"
import {Fragment} from "react";

export default function ColoredBtn({color, clickHandler}) {
    /*---Accept Color---*/
    let classNames = `transition-all ease-in-out duration-200 delay-200  mx-auto my-4 w-8 h-8 rounded-full shadow-lg hover:shadow-none hover:p-4 hover:w-10 hover:h-10 ${color}`;

    return (<Fragment>
        <button className={classNames} type={"button"} onClick={clickHandler}></button>
    </Fragment>)
}
