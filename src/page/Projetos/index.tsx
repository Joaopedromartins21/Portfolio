import { Card } from "../../components/ui/cardProjetos";
import { Title } from "../../components/ui/title";
import Chatbot from "../../assets/Chatbot.png"
import henrique from "../../assets/henrique.jpg"
import Taskflow from "../../assets/Taskflow.jpg";


 export function Projetos() {
    return (
      <section id="projetos" className="w-full py-28 flex items-center justify-center">
      <div className="w-full sm:w-[1080px] m-auto flex flex-col gap-10">
        <Title title="Projetos" />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4"> 
          <Card
                title="Task Flow"
                description="TaskFlow é uma aplicação de gerenciamento de tarefas e notas, projetada para ajudar usuários a organizar suas atividades diárias, definir metas e acompanhar seu progresso de forma intuitiva e eficiente. Com uma interface limpa e funcionalidades robustas, o TaskFlow visa aumentar a produtividade e a organização pessoal."
                cover={Taskflow}
                tag1="JavaScript/TypeScript"
                tag2="HTML5/CSS"
                tag3="BootStrap"
                
                linkGit="https://github.com/Joaopedromartins21/Task-Flow"
                linkURL="https://task-flow-dun-xi.vercel.app/"
          />
        <Card
                title="ChatBot Vonix"
                description="Site de Chatbot Usado para viagens "
                cover={Chatbot}
                tag1="JavaScript"
                tag2="CSS"
                tag3="Gemini"
                linkGit="https://github.com/Joaopedromartins21/Chatbot"
                linkURL="https://github.com/Joaopedromartins21/Chatbot" 
          />
         <Card
                title="Henrique Tech"
                description="Site profissional para a empresa HenriqueTech, venda de tecnologia e soluções digitais para empresas e empreendedores."
                cover={henrique}
                tag1="JavaScript/TypeScript"
                tag2="HTML5/CSS"
                tag3="BootStrap"
                
                linkGit="https://github.com/Joaopedromartins21/HenriqueTechFinal"
                linkURL="https://henriquetech.com.br/"
          />
          

          
        </div>
      </div>

    </section>
    )
}
