import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Main.css';


const dimensions = [
  {
    id: 'melhoria',
    title: 'Área de Processo: Melhoria Contínua com Entregas de Valor Incrementais',
    description: ' ',
    levels: [
        {
        title: 'Finalidade',
        content: 'A proposta de implementação com melhoria contínua apresentada na categoria anterior demanda apoio e aprimoramento constantes para atender às necessidades dinâmicas dos negócios com entregas de valor incremental. É necessário estabelecer um processo robusto de revisão e ajuste das iniciativas da estratégia de promoção da LD com ciclos regulares de análise, identificação e implementação das melhorias com base em feedback, métricas de desempenho e atualizações do nível de LD, como uma retroalimentação do ciclo Plan, Do, Study, Act/Adjust (PDSA). Em paralelo, exige a realização de pesquisas e benchmarking para identificar novas tendências e melhores práticas para atualização regular de iniciativas e do conteúdo do programa de LD inicialmente proposto. Outras iniciativas nessa linha incluem a facilitação de sessões de brainstorming e workshops para explorar oportunidades de melhorias colaborativas, além da documentação e disseminação de lições aprendidas e melhores práticas como parte da gestão do conhecimento. Por fim, à medida que novos desafios surgem, é preciso identificar soluções e implementá-las de forma eficiente. A resolução de problemas e a capacidade de escalar iniciativas para os patrocinadores, buscando os recursos e o apoio necessários são essenciais para avançar nessa jornada.',
      },
      {
        title: 'Metas',
        content: 'É fundamental estabelecer um processo robusto de revisão e ajuste da estratégia, fundamentado em feedbacks e métricas de desempenho, para garantir a melhoria contínua. Esse processo deve assegurar que a estratégia de LD esteja sempre alinhada com os objetivos organizacionais e às melhores práticas tanto da literatura quanto do mercado e envolver práticas de gestão de conhecimento para disseminar resultados. Além disso, realizar avaliações periódicas das competências dos colaboradores em LD é essencial para monitorar e ajustar o desenvolvimento contínuo dessas habilidades na organização.',
      },
      {
        title: 'Métricas',
        content: 'As métricas são as mesmas da categoria Implementação, com foco nos ajustes necessários, remoção de obstáculos e feedacks par melhoria.',
      },
      {
        title: 'Framework Zachman',
        content: 'Esse item deve evidenciar o “QUÊ” e “COMO” a melhoria contínua pode ser promovida na estratégia proposta, envolvendo os profissionais necessários (“QUEM”) no momento adequado (“QUANDO”).',
      },
      {
        title: 'Exemplos, Ideias de Atividades e Fatores Críticos',
        content: 'Esse processo deve apoiar o plano elaborado, com foco na entrega de valor mais significativa mesmo complexa, que requer tempo. Naturalmente, depende da implementação bem-sucedida das entregas de valor incrementais priorizadas a cada sprint, e deve, portanto, contribuir para a avaliação de riscos e para a definição de ações de mitigação apropriadas sempre que necessário. Além disso, é fundamental aprender sobre o tema por meio de conteúdos científicos, publicações profissionais e benchmarking com outras organizações.',
      },
      {
        title: 'Perguntas',
        content: 'Além das perguntas da categoria Implementação, vale destacar: Como serão incorporados os aprendizados e feedbacks como melhorias ao longo do processo? Quais são as melhores práticas e lições aprendidas de outras organizações ou da literatura que podem ser aplicadas nessa organização? Quais conhecimentos ou conteúdos interessantes devo compartilhar com a comunidade?',
      },
      {
        title: 'Pontos de Atenção',
        content: 'É necessário coordenar e planejar adequadamente para que as pequenas melhorias incrementais se integrem de forma coesa, evitando resultados fragmentados ou conflitantes.',
      },
    ],
  },
];

const Melhoria = () => {
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
            <li>
              <NavLink to="/melhoria" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Melhoria Contínua com Entregas de Valor Incrementais
              </NavLink>
            </li>
            <li><Link to="/resultados">Monitorar Resultados</Link></li>
            <li><Link to="/agil">Metodologia Ágil</Link></li> 
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

export default Melhoria;
