import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'resultados',
    title: 'Área de Processo: Monitorar Resultados',
    description: ' ',
    levels: [
        {
        title: 'Finalidade',
        content: 'É fundamental monitorar regularmente o progresso da estratégia para motivar sua consistência, analisar métricas de desempenho do FPLD para ajustar atividades conforme necessário e, sempre que possível, avaliar o impacto do uso de dados com as entregas de valor mensuradas. Essa abordagem com métricas por área de processo permite uma avaliação abrangente que vai além dos resultados esperados de negócio e possibilita a identificação e implementação de melhorias contínuas com base nas métricas de desempenho, padrões de adoção do uso de dados e mudanças comportamentais desejadas. É importante garantir que a comunicação de todos os resultados seja clara e eficaz, assim como os planos de ação e melhorias implementadas a partir deste monitoramento.',
      },
      {
        title: 'Metas',
        content: 'Desenvolver e implementar um sistema eficaz de monitoramento e avaliação contínua dos resultados da promoção da LD em todas as categorias e áreas de processo do FPLD, garantindo que esses insights alimentem a sua melhoria contínua e estejam integrados de forma coesa à comunicação da estratégia.',
      },
      {
        title: 'Métricas',
        content: 'A métrica desse processo deve ser o percentual de métricas das demais áreas de processo desse FPLD mensuradas e analisadas conforme planejado.',
      },
      {
        title: 'Framework Zachman',
        content: 'A mensuração dos resultados das iniciativas deste FPLD deve evidenciar o “POR QUÊ” da estratégia, utilizando uma linguagem que conecte dados e negócio, traduzida em entregas de valor. É igualmente importante comunicar esses resultados de forma clara, pois eles servem como insumos para processos de melhoria e orientam o “QUÊ” deve ser produzido na estratégia.',
      },
      {
        title: 'Exemplos, Ideias de Atividades e Fatores Críticos',
        content: 'A frase atribuída a William Deming é uma inspiração para esse processo: "Não se gerencia o que não se mede, não se mede o que não se define, não se define o que não se entender, e não há sucesso no que não se gerencia." Essa área de processo deve participar das definições para entender a forma correta de mensurar cada métrica, bem como se é viável. A proposta é fazer a avaliação em cada um dos processos e da estratégia de forma integral e interrelacionada através da mensuração da entrega de valor a cada sprint. A melhoria contínua se manifesta por meio de resultados de negócios e/ou aprendizados, e é sempre uma constante.',
      },
      {
        title: 'Perguntas',
        content: 'Quais melhorias no FPLD podem ser aplicadas a partir da análise das métricas? Os envolvidos propõem melhorias a partir do monitoramento dos resultados? Pode citar exemplos concretos que devem ser divulgados na organização?',
      },
      {
        title: 'Pontos de Atenção',
        content: 'O tempo necessário para realizar uma avaliação realista dos resultados de aprendizagem pode ser um desafio e deve ser discutido e acordado previamente.',
      },
    ],
  },
];

const Resultados = () => {
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
             <li>
              <NavLink to="/resultados" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Monitorar Resultados
              </NavLink>
            </li>
            <li><Link to="/agil">Metodologia Ágil</Link></li> 
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

export default Resultados;
