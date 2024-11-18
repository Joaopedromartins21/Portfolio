import { Tech } from "../../components/ui/tech";
import { Title } from "../../components/ui/title";
import { Destaque } from "../../components/ui/destaque";

export function Sobre() {

  function getAge(dateString: any) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return Number(age);
}
    return (
        
        <section id="sobre" className="w-full h-[1280px] sm:h-svh py-28 flex items-center justify-center">
          <div className="w-full sm:max-w-[1080px] h-[1000px] m-auto p-10 flex flex-col gap-8">
            <Title title="Sobre" />
            <div className=" flex flex-col sm:flex-row gap-8 p-5 text-black">
              <div className="w-full sm:w-1/2 flex items-center justify-center">
                <img alt="Foto perfil Em Breve" className="w-[300px]" />
              </div>
              <div className="w-full sm:w-1/2 flex flex-col justify-center font-JMH gap-4 text-gray-600">
                <p>
                  Me chamo <Destaque text="Joao Pedro Aguiar" />, tenho {getAge('1999/10/27')} anos,
                </p>
                <p>
                  Sou estudante de <Destaque text="Sistemas de Informacao " />, e focado em <Destaque text="Desenvolvimento Frontend, e Back-End" />.
                </p>
                <p>
                Meus interesses são focados em linguagens de programação orientadas a objetos, bem como 
                no ambiente Linux e em frameworks para aplicações. Estou constantemente buscando aprimorar minhas habilidades técnicas e acompanhar as últimas tendências do setor.
                Tenho uma paixão genuína pela programação e estou animado em aplicar meus conhecimentos em projetos desafiadores. Estou aberto a oportunidades que me permitam crescer 
                profissionalmente e contribuir com soluções inovadoras.Tenho Conhecimento em Diversas Tecnologias Como: <Destaque text=".Net, C#, JavaScript, TypeScript, Node Js, " />.
                </p>
                <p>Além disso, atualmente Faco Estagio no <Destaque text="Ministerio Da Gestao e Inovacao" />,
                   Estou em constante aprendizado e atualização para acompanhar as melhores práticas e inovações no campo da tecnologia e do desenvolvimento.</p>
              </div>
            </div>
            <div className=" w-full h-20 ">
                <Tech />
            </div>
          </div>
          
        </section>
        
      
    )
}