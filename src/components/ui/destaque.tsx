interface Props{
    text?: string
}

export function Destaque({text}: Props){
    return (
        <span className="text-gray-700 font-bold border-b-2 border-green">
            {text} 
        </span>
    )
}