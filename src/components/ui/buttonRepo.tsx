import { GithubLogo, ArrowCircleRight } from "@phosphor-icons/react"
interface buttonType {
   title: string,
   isGit?: boolean ,
   linkGit?: string,
   linkURL?: string
}


export function ButtonRepo({title, isGit, linkGit, linkURL}:buttonType ){
    return (
        <a href={isGit ? linkGit : linkURL} target="_blank">
        <button className="flex flex-row gap-1 items-center justify-center shadow-sm border font-semibold rounded-2xl px-2 py-1  bg-slate-100 hover:bg-slate-200">
            {title}
            {isGit ? <GithubLogo size={20} /> : <ArrowCircleRight size={20}/>}
        </button>
        </a>

    )
}