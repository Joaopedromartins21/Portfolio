
import { ButtonRepo } from "./buttonRepo";



interface PropsCard {
    title: string
    description: string
    tag1?: string
    tag2?: string
    tag3?: string
    cover: string
    linkGit?: string
    linkURL?: string
}


export function Card({ title, description, cover, linkGit, linkURL, tag1, tag2, tag3 }:PropsCard){
    return (
        <div className="w-full sm:w-[440px] overflow-hidden  border m-auto mb-4 rounded-xl shadow-xl text-black flex flex-col justify-between hover:shadow-2xl">
            <div >
                <img src={cover} alt="Previa do site" />
            </div>
            <div className="p-4 flex flex-col items-center w-full gap-6">
                <h1 className="text-xl font-bold uppercase">{title}</h1>
                <p className="text-sm font-light">
                    {description} 
                </p>
                <div className="flex flex-wrap gap-2"> 
                    <div className=" flex items-center justify-center py-1 px-2 bg-green text-gray-600 cursor-pointer rounded-full text-xs font-semibold shadow-sm hover:scale-105">{tag1}</div>
                    <div className=" flex items-center justify-center py-1 px-2 bg-green text-gray-600 cursor-pointer rounded-full text-xs font-semibold shadow-sm hover:scale-105">{tag2}</div>
                    <div className=" flex items-center justify-center py-1 px-2 bg-green text-gray-600 cursor-pointer rounded-full text-xs font-semibold shadow-sm hover:scale-105">{tag3}</div>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center">
                    <ButtonRepo title="Code" isGit linkGit={linkGit}/>
                    <ButtonRepo title="Previa" linkURL={linkURL}/>
                </div>
            </div>
        </div>
    )
}