
import { Navbar } from "../ui/navbar"
import { Sidebar } from "../ui/sidebar"



export function Header(){
    return (
        <header className="w-full h-20  shadow-zinc-750 shadow-md bg-white text-gray-800 text-lg font-bold z-10 fixed">
            <div className=" max-w-6xl m-auto flex items-center flex-row p-4 justify-between">
                <div>
           
                </div>
              <Navbar />
              <Sidebar />
             </div>
            
        </header>
    )
}