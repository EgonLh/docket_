import ColoredBtn from "./ColoredBtn";
import {Fragment, useState} from "react";
import {ChevronDown, ChevronUp} from 'lucide-react';

export default function Navigation({colors, func}) {
    //Drop Down Control
    const [isOpen, setIsOpen] = useState(false);

    // -> Got Callback
    const getClickHandler = (color) => {
        return () => {
            func(color)
        };
    }
    //Drop Down Handler
    const toggleDropdown = () => setIsOpen((prev) => !prev);

    return <Fragment>
        <div className={"flex flex-col md:justify-center md:m-3 m-0 my-4 justify-end md:w-full"}>
            {/*Drop Down Handler*/}
            <button
                onClick={toggleDropdown}
                className={"border p-1 w-8 rounded-md shadow bg-black text-white z-50 text-center text-xs mx-auto px-auto hover:shadow-lg active:rounded-full transition-all duration-1000 ease-in "}>
                {isOpen ? <ChevronDown/> : <ChevronUp/>}
            </button>
            {/*Color Mapping*/}
            <div
                className={`flex flex-col aligns-center justify-center w-full overflow-hidden transition-all duration-300 ease-in-out ease-linear ${isOpen ? "max-h-[500px]" : "max-h-0"}`}>
                {isOpen ? colors.map(color => <ColoredBtn color={color}
                                                          clickHandler={getClickHandler(color)}/>) : undefined}
            </div>
        </div>

    </Fragment>
}