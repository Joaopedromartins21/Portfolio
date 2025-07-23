import { Card } from "../../components/ui/cardProjetos";
import { Title } from "../../components/ui/title";
import Chatbot from "../../assets/Chatbot.png"
import henrique from "../../assets/henrique.jpg"
import vsmassoterapia from "../../assets/vsmassoterapia.png"
import coral from "../../assets/coral.png"
import orquestra from "../../assets/orquestra.png"
import Taskflow from "../../assets/Taskflow.png";


 export function Projetos() {
    return (
      <section id="projetos" className="w-full py-28 flex items-center justify-center">
      <div className="w-full sm:w-[1080px] m-auto flex flex-col gap-10">
        <Title title="Projetos" />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4"> 
          <Card
                title="Orquestra"
                description="Orquestra é um sistema de gestão de entregas completo, projetado para otimizar as operações de distribuidoras e empresas de logística. Ele oferece funcionalidades robustas para gerentes e motoristas, permitindo o controle de clientes, produtos, estoque, pedidos, finanças e frota de veículos."
                cover={orquestra}
                tag1="JavaScript/TypeScript"
                tag2="HTML5/CSS"
                tag3="BootStrap"
                linkGit="https://github.com/Joaopedromartins21/Orquestra"
                linkURL="https://orquestra-sage.vercel.app/"
          />
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
          
                title="Vsmassoterapia"
                description="Site profissional para a empresa vsmassoterapia."
                cover={vsmassoterapia}
                tag1="JavaScript/TypeScript"
                tag2="HTML5/CSS"
                tag3="BootStrap"
                linkURL="https://vsmassoterapia.com.br/"
          />
          <Card
          
                title="Coralbrasilia"
                description="Site profissional para a empresa CoralBrasilia."
                cover={coral}
                tag1="JavaScript/TypeScript"
                tag2="HTML5/CSS"
                tag3="BootStrap"
                linkURL="https://https://coralbrasilia.com.br/"
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
