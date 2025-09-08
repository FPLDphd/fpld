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
        content: 'Essa área deve fornecer suporte \n contínuo e especializado para a implementação e prática da metodologia ágil na promoção da LD na organização, garantindo que as equipes possam aproveitar ao máximo os benefícios da agilidade, como maior eficiência, adaptabilidade e entrega contínua de valor facilitando a adoção ao uso de dados com a evolução da LD.',
      },
      {
        title: 'Metas',
        content: 'É fundamental assegurar que a implementação da metodologia ágil seja eficaz, adaptável e alinhada com as entregas de valor da promoção da LD, promovendo uma cultura data-driven de melhoria contínua e colaboração. Para tal, é necessário oferecer programas contínuos de capacitação e treinamento em metodologias ágeis e profissionais capacitados para conduzir seus rituais na organização.',
      },
      {
        title: 'Métricas',
        content: 'Deve ser avaliada a quantidade de profissionais envolvidos na promoção da LD e nas entregas de valor, que estão capacitados para trabalhar com a metodologia ágil, ou o percentual com experiências prévias que podem contribuir para essa área do processo.',
      },
      {
        title: 'Framework Zachman',
        content: 'A metodologia ágil traduz “COMO” o FPLD deve ser implementado e a capacitação de todos os envolvidos para trabalharem dessa forma é fundamental para que a organização possa se adaptar rapidamente às mudanças necessárias evoluindo a LD dos profissionais, entregando valor com o uso de dados e aprendendo com os erros na busca constantes por melhorias.',
      },
      {
        title: 'Exemplos, Ideias de Atividades e Fatores Críticos',
        content: 'Essa capacitação deve integrar teoria e prática. Assim como no uso de dados, a metodologia ágil inclui conceitos, rituais fundamentais e ferramentas para definição de prioridades, gestão da produtividade, e forma de trabalho iterativa e incremental que exigem aplicação prática.',
      },
      {
        title: 'Perguntas',
        content: 'Quais alternativas existem na organização para implementar essa área de processo sem exigir altos investimentos? Se for necessário contratar novos serviços, qual abordagem parece mais adequada para o perfil de profissionais que serão treinados? Além disso, tivemos experiências anteriores com treinamentos em metodologia ágil na organização? Se sim, os resultados foram satisfatórios? Quais os desafios mais comuns na implementação da metodologia ágil e como antecipá-los?',
      },
      {
        title: 'Pontos de Atenção',
        content: 'É essencial contar com profissionais experientes em metodologia ágil para apoiar a formação e a condução do FPLD, pois o conhecimento teórico isolado não assegura sua aplicação eficaz.',
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
        O processo de suporte e melhoria contínua é diferente por permear todas as demais categorias.
        Explica como a área de processo será monitorada e aprimorada ao longo do tempo. Isso inclui práticas para <i>feedback</i>, análise de desempenho e implementação de melhorias com metodologia ágil.
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
