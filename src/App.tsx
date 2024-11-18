import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Home } from "./page/Home";
import { Projetos } from "./page/Projetos";
import { Sobre } from "./page/Sobre";



export function App() {
  return (
    <main>
      <Header />
      <Home />
      <Sobre />
      <Projetos />
      <Footer />
    </main>
    
  )
}


