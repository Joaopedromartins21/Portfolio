
import { Redes } from "../ui/Redes";

export function Footer(){
    return(
        <footer id="footer" className="w-full p-4 bg-zinc-800 text-gray-100 font-light">
            <div className=" max-w-6xl m-auto p-6 rounded-xl ">
                <header className="flex flex-col mb-4">
                    <span>Vamos conversar?</span>
                    <p>
                        Tem alguma ideia que precisa tirar do papel, sinta-se a vontade para me mandar um mensagem, quem sabe eu possa ajudar!
                    </p>
                </header> 
                <div className="flex flex-col items-center">
                   <Redes />
                   <div className="w-full flex flex-col items-center sm:flex-row sm:justify-between">
                        <span className="text-xs text-zinc-400">© 2024 - Todos direitos reservados</span>
                        <span className="text-xs text-zinc-400">Desenvolvido por Joao Pedro Aguiar </span>
                   </div>
                   
                </div>
            </div>
                
        </footer>
    )
}