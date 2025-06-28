import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'recursos',
    title: 'Área de Processo: Recursos Necessários: Dados, Tecnologias, Processos e Políticas',
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

const Recursos = () => {
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
        <h1>Categoria do FPLD: PLANEJAMENTO</h1>
        <p>
          O sucesso na promoção da LD depende de um planejamento abrangente e alinhado aos objetivos estratégicos da organização, com foco na remoção de obstáculos e identificação de pontos críticos. 
          Após a conscientização sobre a importância e complexidade da LD, esta etapa propõe explorar pilares essenciais — como pessoas, ética, recursos, contexto, aprendizagem e comunicação — para construir uma estratégia sólida. 
          A adoção de metodologias ágeis fortalece esse processo ao permitir uma implementação gradual, com entregas de valor incremental e foco prático, seguindo o princípio de “sonhe grande e comece pequeno”.
         </p>
      </header>

      <div className="dimensions-wrapper">
        <button className="hamburger" onClick={toggleMenu}>
          ☰ Áreas de Processo
        </button>

        <nav className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
          <ul className="nav-links1">
            <li><Link to="/pessoasetica">Pessoas e Ética</Link></li>
            <li>
              <NavLink to="/recursos" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Recursos Necessários: Dados, Tecnologias, Processos e Políticas
              </NavLink>
            </li>
            <li><Link to="/contexto">Contexto </Link></li>
            <li><Link to="/aprendizagem">Métodos de Aprendizagem </Link></li>
            <li><Link to="/engajamento">Engajamento com foco na Colaboração e Comunicação</Link></li>
            <li><Link to="/estrategia">Construção da Estratégia de Promoção da LD</Link></li>
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

export default Recursos;
