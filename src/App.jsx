import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Main from './pages/Main'
import Conscientiza from './pages/Conscientiza'
import Planeja from './pages/Planeja'
import Implementa from './pages/Implementa'
import Definicao from './pages/Definicao'
import Valor from './pages/Valor'
import Cadeia from './pages/Cadeia'
import Complex from './pages/Complex'
import Pessoasetica from './pages/Pessoasetica'
import Recursos from './pages/Recursos'
import Contexto from './pages/Contexto'
import Aprendizagem from './pages/Aprendizagem'
import Engajamento from './pages/Engajamento'
import Estrategia from './pages/Estrategia'
import Monitora from './pages/Monitora'
import Melhoria from './pages/Melhoria'
import Resultados from './pages/Resultados'
import Agil from './pages/Agil'
import Survey from './pages/Survey'

export default function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <h1>FPLD</h1>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className="nav-links">
            <li><Link to="/">Sobre</Link></li>
            <li><Link to="/Conscientiza">Conscientização</Link></li>
            <li><Link to="/Planeja">Planejamento</Link></li>
            <li><Link to="/Implementa">Implementação com Melhoria Contínua</Link></li>
            <li><Link to="/Monitora">Processos de Suporte e Melhoria Contínua</Link></li>
            <li><Link to="/Survey">Ajude a Aprimorar esse Framework!</Link></li>
          </ul>
        </nav>
      </header>

      <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Conscientiza" element={<Conscientiza />} />
        <Route path="/Planeja" element={<Planeja/>} />
        <Route path="/Implementa" element={<Implementa />} />
        <Route path="/Monitora" element={<Monitora />} />
        <Route path="/Survey" element={<Survey />} />
        <Route path="/Definicao" element={<Definicao />} />
        <Route path="/Valor" element={<Valor />} />
        <Route path="/Cadeia" element={<Cadeia />} />
        <Route path="/Complex" element={<Complex />} />
        <Route path="/Pessoasetica" element={<Pessoasetica />} />
        <Route path="/Recursos" element={<Recursos />} />
        <Route path="/Contexto" element={<Contexto />} />
        <Route path="/Aprendizagem" element={<Aprendizagem />} />
        <Route path="/Engajamento" element={<Engajamento />} />
        <Route path="/Estrategia" element={<Estrategia />} />
        <Route path="/Melhoria" element={<Melhoria />} />
        <Route path="/Resultados" element={<Resultados />} />
        <Route path="/Agil" element={<Agil />} />
      </Routes>
      </main>

        <footer className="main-footer">
        &copy; 2025 FPLD. Todos os direitos reservados.
      </footer>
    </div>
  )
}