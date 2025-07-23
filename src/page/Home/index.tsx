import { Redes } from "../../components/ui/Redes";
import { EscreveTexto } from "../../components/ui/escrevenatela";


export function Home(){
  
    return (
        <section id="home" className="relative sm:w-full h-svh flex flex-col justify-center items-center gap-10 bg-white">
          <div className="absolute top-[250px] flex flex-col items-center w-full sm:max-w-7xl p-2 text-slate-700 mb-3">
              <h1 className="sm:text-2xl text-xl">Olá, eu sou o...</h1>
              <h2 className="sm:text-6xl text-2xl">João Pedro Aguiar Martins</h2>        
          </div>
          <div className="text-slate-700 mt-20">
              <h2 className="sm:text-8xl text-4xl"><EscreveTexto /></h2>
          </div>
          
          <div className="absolute bottom-20 text-black">
            <Redes /> 
          </div>
        </section>  
    )
}