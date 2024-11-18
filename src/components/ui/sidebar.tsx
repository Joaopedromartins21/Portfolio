import {  Menu, X } from "lucide-react"
import { useState } from "react"




export function Sidebar(){
    const [isOpen, setIsOpen] = useState(false)

    function ToogleMenu(){
        setIsOpen(!isOpen)
    }

    return(
        <nav className="absolute right-0 top-7 mr-10 sm:hidden">
            <div className="flex items-end justify-end">
                <button onClick={ToogleMenu}>
                    {isOpen ? <X className="text-green font-bold"/> : <Menu className="text-green font-bold" />}
                </button>
                 
            </div>
            {isOpen && (
                <div className=" w-full bg-white rounded-xl shadow-sm p-4 mt-10 flex justify-end">
                    <ul className="flex flex-row gap-6 text-base">
                        <li><a href="#home" className="hover:border-green hover:border-b-4 transition-all " onClick={ToogleMenu}>Home</a></li>
                        <li><a href="#sobre" className="hover:border-green hover:border-b-4 transition-all " onClick={ToogleMenu}>Sobre</a></li>
                        <li><a href="#projetos" className="hover:border-green hover:border-b-4 transition-all" onClick={ToogleMenu}>Projetos</a></li>
                        <li><a href="#footer" className="hover:border-green hover:border-b-4 transition-all" onClick={ToogleMenu}>Contato</a></li>
                    </ul>
                </div>
            )}  
        </nav>
    )
}