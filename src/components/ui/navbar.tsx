export function Navbar(){
   
    return(
        <nav className="sm:flex hidden">
            <ul className="flex gap-6 text-base">
                <li><a href="#home" className="hover:border-green hover:border-b-4 transition-all ">Home</a></li>
                <li><a href="#sobre" className="hover:border-green hover:border-b-4 transition-all ">Sobre</a></li>
                <li><a href="#projetos" className="hover:border-green hover:border-b-4 transition-all ">Projetos</a></li>
                <li><a href="#footer" className="hover:border-green hover:border-b-4 transition-all ">Contato</a></li>
            </ul>
        </nav>
    )
}