import { Barra } from "./pulse";

interface Props{
    title?: string
}

export function Title({title}: Props){
    return (
        <h1 className="text-black font-bold text-2xl text-center">
            {title} 
            <Barra />
        </h1>
    )
}