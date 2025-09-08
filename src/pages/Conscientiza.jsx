import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Main.css';

const Conscientiza = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <header className="main-header">
        <h1>Categoria do FPLD: CONSCIENTIZAÇÃO</h1>
        <p>
          A promoção da LD torna-se eficaz quando todos os colaboradores, independentemente da área de atuação, reconhecem o valor do uso intencional de dados e compreendem com clareza seu papel nesse processo. 
          Em organizações competitivas da Era Digital, os dados devem ser tratados como um recurso vital para o crescimento sustentável. 
          <br /> <br />O primeiro passo, portanto, é a CONSCIENTIZAÇÃO, que visa despertar o interesse, alinhar conhecimentos e garantir o apoio da liderança. 
          Essa etapa também se conecta à busca por propósito no trabalho, onde habilidades em dados podem empoderar os profissionais a inovar, resolver problemas com mais eficiência e encontrar mais significado em suas atividades.
        </p>
      </header>

      <div className="dimensions-wrapper">
        {}
        <button className="hamburger" onClick={toggleMenu}>
          ☰ Áreas de Processo
        </button>

        <nav className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
          <ul className="nav-links1">
            <li><Link to="/definicao">Definição de LD no Contexto</Link></li>
            <li><Link to="/valor">Entregas de Valor</Link></li>
            <li><Link to="/cadeia">Cadeia de Valor do Uso de Dados</Link></li>
            <li><Link to="/complex">Clareza da Complexidade do Uso de Dados</Link></li>
          </ul>
        </nav>

        <main className="conscientiza-content">
          <h2>Escolha uma das áreas de processo da categoria CONSCIENTIZAÇÃO ao lado.</h2>
        </main>
      </div>
    </div>
  );
};

export default Conscientiza;
