import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'estrategia',
    title: 'Área de Processo: Construção da Estratégia de Promoção da LD',
    description: ' ',
    levels: [
      {
        title: 'Finalidade',
        content: 'Para promover a LD de forma eficaz é fundamental desenvolver uma estratégia alinhada aos objetivos institucionais e às necessidades do negócio. Essa estratégia deve ser construída com base em metodologias ágeis, permitindo flexibilidade e entrega incremental de valor através de etapas curtas e bem definidas. O ponto de partida é comunicar de forma clara o valor que se pretende entregar, representando seu propósito e impacto potencial (objetivos e metas). Em seguida, é preciso focar na prática dessa visão (método), condicionada a infraestrutura e recursos necessários (dados, tecnologia, processos e políticas) e pessoas envolvidas, promovendo ações que possibilitem a transformação analítica e implementando as mudanças necessárias com base no contexto organizacional e nas necessidades de capacitação dos profissionais. A implementação da estratégia deve ser gradual e iterativa, com foco em pequenas mudanças coordenadas e significativas a cada sprint (intervalos preestabelecidos de trabalho) que, acumuladas, geram grandes resultados combinados ao longo do tempo. O método de avaliação das entregas de valor deve ser estabelecido para mensuração e divulgação dos impactos no negócio e retorno sobre o investimento (ROI) sempre que possível. Dessa forma, é possível garantir que a estratégia esteja gerando os resultados esperados e realizar ajustes conforme necessário. Todos os processos do FPLD apresentados anteriormente são base para essa construção, que resumidamente deve englobar os seguintes elementos: - Exige um líder responsável que compreenda e comunique claramente a importância estratégica da LD e estabeleça metas tangíveis relevantes para a construção e promoção da LD alinhadas com a liderança da organização em direção às suas metas estratégicas. - Envolver parcerias sólidas com todos os times envolvidos, em especial GD, Recursos Humanos e Negócios envolvendo patrocinadores. - Desenvolver a aprimorar continuamente modelos de aprendizagem eficazes que enfatizam colaboração, engajamento e a teoria aplicada ao contexto, integrando a aprendizagem ao ambiente de trabalho apoiada por uma comunicação clara com o compromisso compartilhado com a melhoria contínua. - Considerar que a eficácia do uso de dados é influenciada pelas características dos usuários (habilidades e atitudes), pelos recursos e restrições existentes e, pelo apoio e exigências organizacionais. Parte do plano deve envolver a gestão de mudanças para superar resistências institucionais frente à complexidade do uso de dados.',
      },
      {
        title: 'Metas',
        content: 'Desenvolver uma estratégia para um programa sustentável de LD, com o objetivo de incentivar o desenvolvimento de habilidades analíticas e o raciocínio crítico para aumentar as entregas de valor baseadas em dados nas organizações. Esse programa deve fomentar uma cultura orientada por dados e de melhoria contínua estimulando os profissionais de diferentes perfis a enfrentarem os desafios técnicos, culturais e sociais envolvidos na complexa mudança organizacional analítica.',
      },
      {
        title: 'Métricas',
        content: 'As métricas descritas em cada área de processo desse FPLD compõem as métricas da estratégia como um todo, lembrando que as entregas são incrementais, mas tangíveis e integradas para geração de valor a partir de ações planejadas nessa fase alinhadas com as prioridades da organização.',
      },
      {
        title: 'Framework Zachman',
        content: 'Esta etapa representa o output da Categoria Planejamento do FPLD e integra todos os elementos de suas áreas de processo já descritos: “QUEM”, “O QUÊ”, “COMO”, “ONDE” e “QUANDO”. Lembrando que a estratégia não é o objetivo e sim o plano que define as decisões necessárias para alcançá-lo de forma simples e objetiva, propiciando foco maior na sua execução e assim deve representar o “COMO” a promoção da LD será implementada, as prioridades estabelecidas representam o “QUANDO” e direcionada por este FPLD e maximizando o valor dos dados para a organização.',
      },
      {
        title: 'Exemplos, Ideias de Atividades e Fatores Críticos',
        content: 'A estratégia construída nessa área de processo deve ser vista como uma ferramenta essencial para orientar pequenas mudanças e alinhar as partes interessadas. No entanto, é importante reconhecer que a estratégia por si só não gera ação. É recomendado adotar uma abordagem que envolva 1% de inspiração (estratégia) e 99% de transpiração (execução diária). A estratégia serve principalmente como um meio para engajar as partes interessadas, alinhar expectativas ajudando a evitar a necessidade de justificar continuamente o trabalho no futuro, e permitindo que a organização opere de forma coesa, especialmente em contextos complexos com múltiplas partes envolvidas como este já descrito anteriormente. Se a organização está comprometida e prioriza esse investimento, a estratégia também garantirá os recursos necessários para ser eficaz. Embora a estratégia em si não seja um sucesso isolado ou uma solução para a quebra de silos, ela fornece a direção necessária para enfrentar problemas de forma proativa, em vez de evitá-los. Assim, é crucial que a estratégia de LD direcionada por este FPLD seja continuamente integrada ao cotidiano, garantindo que a execução seja tão robusta quanto o planejamento.',
      },
      {
        title: 'Perguntas',
        content: 'Nesta etapa, é fundamental avaliar se a estratégia construída está clara e objetiva para ser comunicada a toda a organização: todas as personas de dados compreendem seu objetivo e seu papel no planejamento proposto?',
      },
      {
        title: 'Pontos de Atenção',
        content: 'A construção da estratégia, por não gerar valor tangível imediato, não deve se tornar motivo de comemorações nem demandar tempo excessivo. É essencial preservar o foco nas etapas subsequentes que efetivamente entregam resultados.',
      },
    ],
  },
];

const Estrategia = () => {
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
            <li><Link to="/pessoasetica">Pessoas e Ética </Link></li>
            <li><Link to="/recursos">Recursos Necessários: Dados, Tecnologias, Processos e Políticas</Link></li>
            <li><Link to="/contexto">Contexto </Link></li>
            <li><Link to="/aprendizagem">Métodos de Aprendizagem </Link></li>
            <li><Link to="/engajamento">Engajamento com foco na Colaboração e Comunicação</Link></li>
            <li>
              <NavLink to="/estrategia" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Construção da Estratégia de Promoção da LD
              </NavLink>
            </li>
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

export default Estrategia;
