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
        content: 'Este item é crítico porque serve como base estruturante para outros componentes, envolvendo dependências que impactam diretamente o sucesso das demais iniciativas. Por isso é preciso esclarecer e reforçar que a disponibilidade de dados, tecnologias, processos e políticas é essencial para atender às necessidades específicas de cada persona, pois, caso contrário, restrições podem comprometer as entregas de valor orientadas por dados na organização. É importante estabelecer e fortalecer parcerias com áreas responsáveis por esses recursos, como Governança de Dados, Engenharia de Dados e Recursos Humanos, colaborando para reduzir restrições existentes, mas sem assumir essa responsabilidade diretamente.  Se necessário, é válido apoiar a avaliação da disponibilidade dos recursos para todas as personas, a fim de obter uma visão clara e abrangente das necessidades e lacunas, identificando-as como oportunidades de melhoria.',
      },
      {
        title: 'Metas',
        content: 'É essencial evidenciar as necessidades de recursos e as restrições relacionadas a dados, tecnologia, processos e políticas, facilitando assim a tomada de ações corretivas e a priorização de projetos e investimentos necessários.',
      },
      {
        title: 'Métricas',
        content: 'O nível de satisfação das diferentes personas de dados em relação aos recursos disponíveis e ao apoio organizacional para a evolução da LD e do uso de dados, assim como a satisfação dos profissionais responsáveis por prover esses recursos, constitui um indicador essencial para consolidar uma relação de benefício mútuo no ambiente organizacional. Além disso, a alocação de investimentos na promoção da LD pode configurar-se como métrica estratégica, em alguns casos confidencial, a ser acompanhada pela liderança e pelos responsáveis diretos.',
      },
      {
        title: 'Framework Zachman',
        content: 'O “QUEM” é reforçado neste item na construção de parcerias e reforço das responsabilidades de cada área. A avaliação das necessidades e restrições descreve “O QUÊ” precisa ser feito e contribui para “COMO” priorizar.',
      },
      {
        title: 'Exemplos, Ideias de Atividades e Fatores Críticos',
        content: 'Estabelecer fortes parcerias com responsáveis pelos recursos e contribuir para melhorias com base nas métricas do programa de LD e feedbacks dos usuários, além de aproveitar a proximidade com diferentes personas de dados. O Patrocinador deve exercer grande influência para priorização de tempo e investimentos necessários para a evolução da LD, lembrando que devem ser de longo prazo.',
      },
      {
        title: 'Perguntas',
        content: 'Para entender o nível de satisfação e necessidades em torno do uso de dados, as seguintes perguntas devem ser respondidas por todos os profissionais da organização: Quais barreiras impedem o uso sistemático e eficaz dos dados nesta organização? Qual é o nível de satisfação dos profissionais com o acesso aos dados necessários para suas funções? Os dados necessários estão disponíveis com consistência, precisão, compreensão e completude? Como avaliam a infraestrutura associada? A tecnologia é confiável e adequada para cada função e necessidade? Há cobrança pelo uso ético dos dados e conformidade com regulamentações? Quais políticas a organização adota para garantir o uso ético e regulamentado dos dados?  A instituição oferece apoio financeiro para o programa de LD?',
      },
      {
        title: 'Pontos de Atenção',
        content: 'A organização deve priorizar o programa de Governança de Dados para potencializar os benefícios da LD na organização. E a contribuição para melhoria dos recursos sem se responsabilizar diretamente por tal compromisso é desafiador, mas fundamental para manter o foco nas pessoas e entregas de valor com dados para a organização.',
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

export default Recursos;
