import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'agil',
    title: 'Área de Processo: Metodologia Ágil',
    description: ' ',
    levels: [
        {
        title: 'Finalidade',
        content: 'xxx.',
      },
      {
        title: 'Metas',
        content: 'xxx.',
      },
      {
        title: 'Métricas',
        content: 'XXX.',
      },
      {
        title: 'Framework Zachman',
        content: 'XXX.',
      },
      {
        title: 'Exemplos, Ideias de Atividades e Fatores Críticos',
        content: 'xxx.',
      },
      {
        title: 'Perguntas',
        content: 'XXX',
      },
      {
        title: 'Pontos de Atenção',
        content: 'XXX.',
      },
    ],
  },
];

const Agil = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLevel, setActiveLevel] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const labels = [
    'Finalidade',
    'Metas',
    'Métricas',
    'Framework Zachman',
    'Exemplos, Ideias de Atividades e Fatores Críticos',
    'Perguntas',
    'Pontos de Atenção',
  ];

  return (
    <div>
      <header className="main-header">
        <h1>Categoria do FPLD: PROCESSOS DE SUPORTE E MELHORIA CONTÍNUA</h1>
        <p>
        xxx Processos de Suporte e Melhoria Contínua.
        </p>
      </header>

      <div className="dimensions-wrapper">
        <button className="hamburger" onClick={toggleMenu}>
          ☰ Áreas de Processo
        </button>

        <nav className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
          <ul className="nav-links1">
            <li><Link to="/melhoria">Melhoria Contínua com Entregas de Valor Incrementais</Link></li>
            <li><Link to="/resultados">Monitorar Resultados</Link></li>
             <li>
              <NavLink to="/agil" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Metodologia Ágil
              </NavLink>
            </li>          
          </ul>
        </nav>

        <main className="dimension-content">
          {dimensions.map((dim) => (
            <section key={dim.id}>
              <h2>{dim.title}</h2>
              <p>{dim.description}</p>

              <p><strong>Escolha uma das dimensões (descritas aqui) abaixo para explorar essa área de processo:</strong></p>
              <div className="level-selector">
                {dim.levels.map((level, index) => (
                  <button
                    key={index}
                    className={index === activeLevel ? 'selected' : ''}
                    onClick={() => setActiveLevel(index)}
                  >
                    {labels[index]}
                  </button>
                ))}
              </div>

              <div className="level-detail">
                <h4>{dim.levels[activeLevel].title}</h4>
                <p>{dim.levels[activeLevel].content}</p>
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Agil;
