import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'cadeiavalor',
    title: 'Área de Processo: Cadeia de Valor do Uso de Dados',
    description: ' ',
    levels: [
      {
        title: 'Finalidade',
        content: 'Descrever o processo de uso dos dados de forma apropriada (ou desejada) de acordo com a infraestrutura, processos e políticas da organização, percorrendo todas as etapas desde a clareza do problema com o propósito de uso dos dados até a entrega de valor em linguagem comum, envolvendo conhecimento técnico e de negócio.',
      },
      {
        title: 'Metas',
        content: 'Entender as etapas e a complexidade do processo de uso de dados para assegurar entregas de valor, aumentar a conscientização sobre a importância da LD e seu impacto positivo nos processos de negócios e tomadas de decisões, encorajando os profissionais para o seu desenvolvimento. Além disso, busca-se fomentar a colaboração e o trabalho em equipes multifuncionais, garantindo a fluidez da cadeia de valor e a clareza sobre a necessidade de envolvimento de todas as funções e perfis nas diferentes etapas para alcançar resultados efetivos com o uso de dados.',
      },
      {
        title: 'Métricas',
        content: 'Uma métrica interessante é a quantidade de exemplos concretos de entregas de valor orientadas por dados documentadas na organização, ou mesmo o número de grupos multifuncionais que estão neste percurso, bem como acompanhar o status e tempo dessas jornadas com o desejo de torná-las mais frequentes e ágeis com a promoção e evolução efetiva da LD.',
      },
      {
        title: 'Framework Zachman',
        content: 'A descrição do processo de uso dos dados permeia o “COMO”, que deve ser mostrado com clareza nesse processo. Além disso, promove aproximação das áreas e colaboração das equipes, fortalecendo conjuntamente o “QUEM”.',
      },
      {
        title: 'Exemplos, Ideias de Atividades e Fatores Críticos',
        content: 'Desenhar a jornada desejada ou ideal de uso de dados na organização facilita a conscientização e possibilita uma disseminação mais autoexplicativa e simples. Acrescentar ferramentas disponíveis e links para políticas e processos também enriquece essa iniciativa. Todos devem se identificar ou atuar em alguma etapa dessa jornada em uma organização orientada por dados (data-driven). Outra sugestão é contar uma história que descreva com detalhes a jornada de uso de dados na organização, inclusive com exemplos de entregas de valor.',
      },
      {
        title: 'Perguntas',
        content: 'As seguintes perguntas podem garantir entendimento da cadeia de valor de dados e motivação a essa exploração: (i) conseguimos citar exemplos concretos de uso de dados com entregas de valor nessa organização? (ii) quais as etapas percorridas para alcança-lo? (iii) onde falhamos na tentativa de entregarmos valor com o uso de dados ao percorrer essa cadeia de valor? (iv) concordamos que o uso de dados leva a mudanças na prática profissional? (v) Entendem a importância de percorrer essa jornada?',
      },
      {
        title: 'Pontos de Atenção',
        content: 'Se a organização não tiver uma jornada de dados a ser divulgada, vale refletir sobre qual seria e disponibilizar recurso para tal antes de investir na promoção da LD.',
      },
    ],
  },
];

const Cadeia = () => {
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
        <h1>Categoria do FPLD: CONSCIENTIZAÇÃO</h1>
        <p>
          A promoção da LD torna-se eficaz quando todos os colaboradores, independentemente da área de atuação, reconhecem o valor do uso intencional de dados e compreendem com clareza seu papel nesse processo. 
          Em organizações competitivas da Era Digital, os dados devem ser tratados como um recurso vital para o crescimento sustentável. 
          O primeiro passo, portanto, é a CONSCIENTIZAÇÃO, que visa despertar o interesse, alinhar conhecimentos e garantir o apoio da liderança. 
          Essa etapa também se conecta à busca por propósito no trabalho, típica do século XXI, onde habilidades em dados podem empoderar os profissionais a inovar, resolver problemas com mais eficiência e encontrar mais significado em suas atividades.
        </p>
      </header>

      <div className="dimensions-wrapper">
        <button className="hamburger" onClick={toggleMenu}>
          ☰ Áreas de Processo
        </button>

        <nav className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
          <ul className="nav-links1">
            <li><Link to="/definicao">Definição de LD no Contexto</Link></li>
            <li><Link to="/valor">Entregas de Valor</Link></li>
              <li>
              <NavLink to="/cadeia" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Cadeia de Valor do Uso de Dados
              </NavLink>
            </li>
            <li><Link to="/complex">Clareza da Complexidade do Uso de Dados</Link></li>
          </ul>
        </nav>

        <main className="dimension-content">
          {dimensions.map((dim) => (
            <section key={dim.id}>
              <h2>{dim.title}</h2>
              <p>{dim.description}</p>

              <p><strong>Escolha uma das dimensões abaixo para explorar essa área de processo:</strong></p>
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

export default Cadeia;
