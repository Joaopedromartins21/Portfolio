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
                  Me chamo <Destaque text="João Pedro Aguiar Martins" />, tenho {getAge('1999/10/27')} anos,
                </p>
                <p>
                  Sou formado em <Destaque text="Sistemas de Informacao " />,e apaixonado por tecnologia e desenvolvimento de software. Tenho como foco o <Destaque text="Desenvolvimento web" />.
                  especialmente com React e outras tecnologias modernas do ecossistema <Destaque text="JavaScript"/>.
                </p>
                <p>
                Tenho interesse em <Destaque text ="linguagens orientadas a objetos"/>, ambientes Linux e frameworks voltados para construção de aplicações robustas e escaláveis. Gosto de aprender constantemente e me mantenho atualizado com as melhores práticas e inovações do setor.
                </p>
                <p>Ao longo da minha trajetória, tive a oportunidade de estagiar no <Destaque text ="Ministério da Gestão e Inovação"/>, onde pude aplicar meus conhecimentos em um ambiente real e colaborar com soluções práticas para a área pública.
                </p>
              </div>
            </div>
            <div className=" w-full h-20 ">
                <Tech />
            </div>
          </div>
          
        </section>
        
      
    )
}