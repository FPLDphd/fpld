import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Main from './pages/Main'
import Conscientiza from './pages/Conscientiza'
import Planeja from './pages/planeja'
import Implementa from './pages/implementa'
import Definicao from './pages/definicao'
import Valor from './pages/valor'
import Cadeia from './pages/cadeia'
import Complex from './pages/complex'
import Pessoasetica from './pages/pessoasetica'
import Recursos from './pages/recursos'
import Contexto from './pages/contexto'
import Aprendizagem from './pages/aprendizagem'
import Engajamento from './pages/engajamento'
import Estrategia from './pages/estrategia'
import Monitora from './pages/monitora'
import Melhoria from './pages/melhoria'
import Resultados from './pages/resultados'
import Agil from './pages/agil'
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
            <li><Link to="/conscientiza">Conscientização</Link></li>
            <li><Link to="/planeja">Planejamento</Link></li>
            <li><Link to="/implementa">Implementação com Melhoria Contínua</Link></li>
            <li><Link to="/monitora">Processos de Suporte e Melhoria Contínua</Link></li>
            <li><Link to="/survey">Ajude a Aprimorar esse Framework!</Link></li>
          </ul>
        </nav>
      </header>

      <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/conscientiza" element={<Conscientiza />} />
        <Route path="/planeja" element={<Planeja/>} />
        <Route path="/implementa" element={<Implementa />} />
        <Route path="/monitora" element={<Monitora />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/definicao" element={<Definicao />} />
        <Route path="/valor" element={<Valor />} />
        <Route path="/cadeia" element={<Cadeia />} />
        <Route path="/complex" element={<Complex />} />
        <Route path="/pessoasetica" element={<Pessoasetica />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/contexto" element={<Contexto />} />
        <Route path="/aprendizagem" element={<Aprendizagem />} />
        <Route path="/engajamento" element={<Engajamento />} />
        <Route path="/estrategia" element={<Estrategia />} />
        <Route path="/melhoria" element={<Melhoria />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/agil" element={<Agil />} />
      </Routes>
      </main>

        <footer className="main-footer">
        &copy; 2025 FPLD. Todos os direitos reservados.
      </footer>
    </div>
  )
}