'use client'

import { useEffect, useState } from "react"

import { LiaEye } from "react-icons/lia";
import { LiaEyeSlash } from "react-icons/lia";


export interface InputParams {
    insideInputColor: string
    linesColor: string
    placeHolder: string
    inputType: "password"|"text"|"email"
    minLength?: number
    maxLength?: number
}

export function EtInput({inputType, placeHolder, insideInputColor, linesColor, minLength, maxLength}: InputParams) {

    /* insideInputColor and linesColor are the variables which defines the input and 'placeholder' colors.
       These variables must be in the HEX Color format. 
       Eg.: #FFFFFF 
    */

    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const preFocusTextStyle = `-mb-[.8rem] ml-[1.4rem] px-2` 
    const posFocusTextStyle = `ml-[.2rem] mb-[.3rem] bg-none`

    const preFocusInput: string = `bg-inherit`
    const posFocusInput: string = `border-none`

    return(
        <div className={`w-[100%] font-semibold flex flex-col`}>

            <span 
                style={!isFocused ? {backgroundColor: insideInputColor,  color: linesColor} : {background: "none", color: linesColor}}
                className={`z-10 w-fit px-3 rounded-md ${isFocused ? posFocusTextStyle : preFocusTextStyle} transition-all duration-500`}>{placeHolder}</span>
            
            <div className="relative">
                <input
                    maxLength={maxLength}
                    minLength={minLength}
                    style={!isFocused ? {background: 'inherit', borderColor: linesColor, color: linesColor} : {backgroundColor: linesColor, color: insideInputColor}}
                    className={`border-solid border-[1px] px-[1rem] outline-none rounded-md h-[2.9rem] w-[100%] ${isFocused ? posFocusInput : preFocusInput} transition-all duration-[1000ms]`}
                    type={inputType == "password" && showPassword ? 'text' : inputType} 
                    name="" 
                    id="" 
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />

                {inputType == "password"
                    ?   
                        <div>
                            <LiaEye
                                onClick={() => setShowPassword(true)}
                                style={ !isFocused ? {color: linesColor} : {color: insideInputColor}} 
                                className={`select-none hover:cursor-pointer text-xl absolute right-4 top-3.5 ${showPassword ? 'hidden' : null}`}
                            />

                            <LiaEyeSlash
                                onClick={() => setShowPassword(false)}
                                style={ !isFocused ? {color: linesColor} : {color: insideInputColor}} 
                                className={`select-none hover:cursor-pointer text-xl absolute right-4 top-3.5 ${!showPassword ? 'hidden' : null}`}
                            />
                        </div>
                    :
                        null
                    }


            </div>
        </div>
    )
    
}