import {  Coffee } from "@phosphor-icons/react"
interface buttonType {
    title?: string,
    iconBook?: boolean,
    bgcolor?: boolean
}


export function Button({title, iconBook, bgcolor, ...rest}:buttonType ){
    return (
        <a href="https://wa.me/+5551995403256" target="_blank">
        <button className="px-4 py-2 flex flex-row gap-2 items-center  rounded-2xl hover:scale-105 transition-all font-medium text-gray-600  bg-white" {...rest}>
           <Coffee size={24} /> 
           {title}
       </button>
       </a>

    )
}