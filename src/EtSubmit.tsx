'use client'

import { useState } from "react";


export interface SubmitParams {
    outHoverColor: {button: string, text: string},
    inHoverColor: {button: string, text: string},
    placeHolder: string,
}

export function EtSubmit({outHoverColor, inHoverColor, placeHolder}: SubmitParams) {

    const [onHover, setOnOhover] = useState<boolean>(false)

    const buttonStyle: string = "block mx-auto border-solid border-[1px] px-[1rem] outline-none rounded-md h-[2.9rem] w-[100%]"
    const buttonStyleOnHover: string = "hover:border-none hover:animate-pulse hover:h-[3.2rem] hover:-translate-x-[5%] hover:w-[105%]"

    return(
        <div className={`w-[100%] font-bold`}>
            <button
                style={onHover ? {backgroundColor: inHoverColor.button, color: inHoverColor.text} : {backgroundColor: outHoverColor.button, color: outHoverColor.text}}
                onMouseEnter={() => setOnOhover(true)}
                onMouseLeave={() => setOnOhover(false)}
                type="submit"
                className={`${buttonStyle} ${buttonStyleOnHover} mx-auto transition-all duration-500`}>{placeHolder}</button>
        </div>
    )
}