import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'implementa',
    title: 'Área de Processo: Execução Ágil da Estratégia de Promoção da LD',
    description: ' ',
    levels: [
      {
        title: 'Finalidade',
        content: 'Assegurar que a execução seja sustentada por práticas que favoreçam colaboração adaptável, comunicação constante e participação ativa de todas as áreas envolvidas. Com rituais como dailys, plannings, reviews e retrospectivas, cria-se um ciclo de aprendizado permanente, que possibilita identificar obstáculos, mensurar avanços e otimizar processos. Além disso, essa abordagem viabiliza a rápida detecção de lacunas de recursos, sejam dados, infraestrutura, financeiros ou humanos, permitindo o engajamento de patrocinadores e parceiros na busca conjunta de soluções.',
      },
      {
        title: 'Metas',
        content: 'O objetivo é impulsionar a fluência em dados, aumentando a capacidade dos profissionais de utilizarem dados de forma eficaz em suas funções. Isso resultará em entregas de valor mais rápidas e ágeis, promovendo a colaboração entre os times de dados, tecnologia, negócios e recursos humanos, com o apoio dos patrocinadores do programa. Acompanhar de perto as métricas e indicadores de desempenho definidos no planejamento é fundamental para garantir que as entregas estejam alinhadas com o esperado e propor ajustes quando necessário.',
      },
      {
        title: 'Métricas',
        content: 'As métricas de gestão de projetos, como percentual de iniciativas da promoção da LD implementadas conforme o esperado para a sprint, além das métricas de desempenho e análises de melhoria de todas as áreas de processo priorizadas. O nível de satisfação dos participantes é outra métrica que também deve ser monitorado e utilizado para melhorias. E a evolução do nível de LD dos envolvidos deve ser avaliada dependendo das iniciativas realizadas.',
      },
      {
        title: 'Framework Zachman',
        content: 'Na implementação da estratégia ágil o “O QUÊ”, o “QUEM”, o “COMO”, o “ONDE” e o “QUANDO” permanecem em foco constante, sendo revisados de maneira conjunta e coordenada.',
      },
      {
        title: 'Exemplos, Ideias de Atividades e Fatores Críticos',
        content: 'É o momento de focar nas prioridades definidas por sprint, monitorar os resultados, comunicar à organização e fazer ajustes sempre que necessário. Promover a LD como eixo estruturante, de modo que as entregas de valor baseadas em dados se expandam de forma contínua e sustentável. É essencial defender os princípios planejados, orientar as ações de forma colaborativa e em equipe, fazer os ajustes necessários e, ao mesmo tempo, celebrar as conquistas, fortalecendo a confiança nos times. A promoção da LD é um sucesso quando todos os profissionais da organização, de diferentes áreas e perfis, reconhecem a importância do uso de dados, sabem qual é sua parte e a cumprem com clareza do seu propósito. Em qualquer organização rentável e competitiva da Era Digital, os dados com uso intencional devem ser como o sangue que corre nas veias para manter o corpo, ou melhor, a organização viva, forte e crescendo na direção desejada. O nível de LD deve ser reavaliado quando pertinente.',
      },
      {
        title: 'Perguntas',
        content: 'Algumas perguntas valem ser repetidas com frequência aos envolvidos na implementação: Como podemos aprimorar a implementação e evolução da promoção da LD na organização? Quais são as oportunidades e os recursos envolvidos? De que maneira iremos sustentar a utilização de dados e a promoção da LD em nossa organização? A motivação para a organização utilizar dados e priorizar a promoção da LD continua relevante diante das mudanças organizacionais e dos fatores econômicos?',
      },
      {
        title: 'Pontos de Atenção',
        content: 'Se necessário, com o apoio da liderança é possível criar senso de urgência de uso dos dados, e não imposição, como catalisador para a ação.',
      },
    ],
  },
];

const Implementa = () => {
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
        <h1>Categoria do FPLD: IMPLEMENTAÇÃO COM MELHORIA CONTÍNUA</h1>
        <p>
        A fase de planejamento estabeleceu as bases do projeto, mas é na implementação que o verdadeiro valor se concretiza. 
        Este é o momento de transformar estratégias em ação, executando com energia e consistência as prioridades definidas. 
        A adoção da metodologia ágil orienta essa etapa, pois, a cada <i>sprint</i>, a promoção da LD é conduzida de forma estruturada e incremental, permitindo alcançar os resultados esperados enquanto se garante a melhoria contínua por meio de ajustes dinâmicos e alinhados às necessidades organizacionais.
        </p>
      </header>

      <div className="dimensions-wrapper">
        <button className="hamburger" onClick={toggleMenu}>
          ☰ Áreas de Processo
        </button>

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

export default Implementa;