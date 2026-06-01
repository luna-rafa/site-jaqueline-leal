import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Sobre from "./components/Sobre/Sobre";
import CardsEntrada from "./components/CardsEntrada/CardsEntrada";
import Ancoradas from "./components/Ancoradas/Ancoradas";
import Atendimento from "./components/Atendimento/Atendimento";
import Expectativas from "./components/Expectativas/Expectativas";
import Contato from "./components/Contato/Contato";
import NR1Empresas from "./pages/NR1Empresas";
import FAQ from "./components/FAQ/FAQ";

function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <CardsEntrada />
      <Ancoradas />
      <Atendimento />
      <FAQ />
      <Expectativas />
      <Contato />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nr1-empresas" element={<NR1Empresas />} />
      </Routes>
    </BrowserRouter>
  );
}