import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Main.css';

const Monitora = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <header className="main-header">
        <h1>Categoria do FPLD: PROCESSOS DE SUPORTE E MELHORIA CONTÍNUA</h1>
        <p>
        xxx Processos de Suporte e Melhoria Contínua.
        </p>
      </header>

      <div className="dimensions-wrapper">
        {}
        <button className="hamburger" onClick={toggleMenu}>
          ☰ Áreas de Processo
        </button>

        <nav className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
          <ul className="nav-links1">
            <li><Link to="/melhoria">Melhoria Contínua com Entregas de Valor Incrementais</Link></li>
            <li><Link to="/resultados">Monitorar Resultados</Link></li>
            <li><Link to="/agil">Metodologia Ágil</Link></li>          </ul>
        </nav>
        <main className="monitora-content">
          <h2>Escolha uma das áreas de processo da categoria PROCESSOS DE SUPORTE E MELHORIA CONTÍNUA ao lado.</h2>
        </main>
      </div>
    </div>
  );
};


export default Monitora;
