import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'contexto',
    title: 'Área de Processo: Contexto',
    description: ' ',
    levels: [
      {
        title: 'Finalidade',
        content: 'Evidenciar os benefícios do uso de dados integrado ao contexto organizacional é crucial para alinhar sua adoção com a visão e os objetivos institucionais, garantindo que o uso intencional dos dados se traduza em entregas de valor concretas e sustente a evolução da LD de maneira viável e prática. Isso é essencial para superar a resistência natural a mudanças em sistemas complexos, muitas vezes motivada pelo aumento percebido na carga de trabalho e pela falta de familiaridade com a complexidade dos dados. Além disso, é fundamental criar uma cultura de aprendizagem com uma visão clara e apoio da liderança garantindo a disponibilidade de tempo e experiências, assegurando o envolvimento de todos os times e equilibrando responsabilização e autonomia, de forma a não desencorajar o uso genuíno dos dados para melhoria. É essencial promover um ambiente que recompense a curiosidade, em vez de punir a falta de LD, e que valorize e incentive o uso efetivo de dados para otimizar o desempenho organizacional e aumentar a competitividade da organização no mercado.',
      },
      {
        title: 'Metas',
        content: 'Promover a LD integrada ao contexto de negócios é essencial para garantir que todos na organização compartilhem uma linguagem comum que conecte dados e negócios. Além disso, é fundamental criar uma cultura organizacional que valorize o aprendizado e a melhoria contínua, a fim de minimizar a resistência às mudanças e facilitar a adoção de novas práticas.',
      },
      {
        title: 'Métricas',
        content: 'A percepção de apoio organizacional e cultura de aprendizagem das diferentes personas de dados e diferentes níveis de LD ou líderes versus não líderes são métricas importantes para analisar e acompanhar ao longo da implementação do FPLD.',
      },
      {
        title: 'Framework Zachman',
        content: 'A integração de dados e negócio depende fortemente do contexto, portanto é um “COMO” inegociável nessa estrutura. As prioridades da organização se tornam mais claras e alinhadas com as entregas de valor desejadas, e de forma implícita representam “ONDE” no contexto e “QUANDO” no momento do negócio a estratégia de LD deve atuar. Da mesma forma, a cultura de aprendizagem e melhoria contínua descrevem “O QUÊ” não pode faltar nessa estratégia como parte da gestão de mudança desejada.',
      },
      {
        title: 'Exemplos, Ideias de Atividades e Fatores Críticos',
        content: 'As entregas de valor destacadas na Categoria de Conscientização do FPLD já evidenciam a prioridade do uso intencional dos dados, mas é fundamental enfatizar a necessidade de integrar esses dados ao contexto específico, o que merece atenção especial em relação às demais áreas de processo. Para que isso aconteça, todos os envolvidos devem compartilhar um entendimento mínimo comum. É igualmente importante superar as chamadas zonas de perigo, que surgem quando há forte conhecimento técnico, mas pouca visão de negócio, ou o contrário. A promoção eficaz da LD é o caminho para eliminar esses desequilíbrios e fortalecer a integração entre dados e estratégia organizacional. Incentivar os profissionais a enxergarem os dados como parte da solução de problemas e a interpretarem problemas de dados como desafios de negócio aumenta efetivamente o interesse e o investimento em dados nas organizações. Para que esses esforços se sustentem, os dados devem estar profundamente incorporados na organização, permanecendo protegidos e utilizados mesmo diante de movimentações de funções ou mudanças na liderança. É essencial que todos os profissionais reconheçam a utilidade e o potencial valor dos dados. Além disso, é fundamental cultivar um ambiente que priorize o uso de dados para melhoria contínua, e não para responsabilização. O programa de LD deve promover discussões abertas e seguras, garantindo a participação de todos e criando um clima de confiança. Mais do que disponibilizar recursos, é importante fomentar a colaboração entre os profissionais e oferecer treinamento e suporte que possibilitem o uso eficaz dos dados.',
      },
      {
        title: 'Perguntas',
        content: 'Para os líderes, é interessante perguntar qual é a velocidade com que conseguem resolver problemas ou identificar oportunidades na organização usando dados. Entendem que a evolução da LD na organização poderia aumentar essa velocidade? E que reconheçam a responsabilidade que exercem no fortalecimento da cultura data-driven: Como podemos criar um clima de confiança e uma atmosfera aberta e de respeito em torno do uso de dados na organização? Como podemos garantir que os dados desta organização sejam usados para melhoria contínua e não apenas para fins de responsabilização? Para todos os profissionais, é fundamental entender se eles percebem que recebem apoio organizacional e fazem parte de uma cultura de aprendizagem. Como você classifica a cultura analítica e de aprendizagem na organização, ou as iniciativas estratégicas para aprimorar a cultura analítica? As opções poderia ser: imatura, em desenvolvimento, desenvolvida ou resistente. Em relação aos objetivos da promoção da LD em sua organização, considerando motivações, expectativas e conceituação, qual(is) nível(is) se aplica(m)? Estratégico, tático e/ou operacional. Quais tipos de análise são realizados para resolver problemas de negócio? Descritiva, diagnóstica, preditiva e/ou prescritiva.',
      },
      {
        title: 'Pontos de Atenção',
        content: 'Se os dados revelarem algo negativo e forem utilizados apenas como punição e não busca de melhorias e aprendizado, os profissionais podem tentar esconder ou manipular os dados, resultando em métricas de vaidade ou mesmo disputa de poder.',
      },
    ],
  },
];

const Contexto = () => {
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
          <br /> <br />Após a conscientização sobre a importância e complexidade da LD, esta etapa propõe explorar pilares essenciais - como pessoas, ética, recursos, contexto, aprendizagem e comunicação - para construir uma estratégia sólida. 
          A adoção de metodologias ágeis fortalece esse processo ao permitir uma implementação gradual, com entregas de valor incremental e foco prático, seguindo o princípio de “sonhe grande e comece pequeno”.
         </p>
      </header>

      <div className="dimensions-wrapper">
        <button className="hamburger" onClick={toggleMenu}>
          ☰ Áreas de Processo
        </button>

        <nav className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
          <ul className="nav-links1">
            <li><Link to="/pessoasetica"> Pessoas e Ética</Link></li>
            <li><Link to="/recursos">Recursos Necessários: Dados, Tecnologias, Processos e Políticas</Link></li>
            <li>
              <NavLink to="/contexto" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Contexto
              </NavLink>
            </li>
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

export default Contexto;
