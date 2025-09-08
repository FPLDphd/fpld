import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'pessoasetica',
    title: 'Área de Processo: Pessoas e Ética',
    description: ' ',
    levels: [
      {
        title: 'Finalidade',
        content: 'É importante apresentar as personas de dados que sejam pertinentes ao contexto organizacional em relação às competências de LD. Isso envolve identificar os perfis dos profissionais de todas as áreas, compreendendo as habilidades existentes e as lacunas em relação às necessidades de LD em diferentes funções. A realização de uma avaliação de LD é recomendada para estabelecer tanto o nível de habilidade individual quanto a maturidade analítica institucional como um todo. Tão importante quanto priorizar as pessoas neste processo, é estabelecer princípios que orientem e incentivem o uso ético e responsável dos dados envolvendo todas as personas da organização e garantindo conformidade com a legislação local.',
      },
      {
        title: 'Metas',
        content: 'Definir personas de dados no contexto da organização possibilita o desenvolvimento de um plano para aprimorar as competências relacionadas à LD, alinhando-as às necessidades dos profissionais e promovendo o aumento da maturidade analítica da organização. A quantidade de profissionais que conhecem as diretrizes éticas para o uso de dados na organização pode ser medida pela participação em reuniões de divulgação, por meio de questionários rápidos (tipo quizz) aplicados em contextos descontraídos ou até mesmo pelo número de acessos às diretrizes na intranet.',
      },
      {
        title: 'Métricas',
        content: 'A distribuição dos profissionais por persona de dados e mesmo os resultados da auto-avaliação de LD são métricas importantes para esse item. A quantidade de Entusiastas de Dados e mesmo Experts com potencial para contribuir na capacitação de LD também deve ser acompanhada.',
      },
      {
        title: 'Framework Zachman',
        content: 'Naturalmente aborda o “QUEM” com muita ênfase, mas o “O QUÊ” falando das personas e funções e da ética no uso de dados que é igualmente importante.',
      },
      {
        title: 'Exemplos, Ideias de Atividades e Fatores Críticos',
        content: 'Além das personas de dados gerais, para  a promoção da LD recomenda-se acrescentar 3 papéis específicas fundamentais: (i) Responsável pela Promoção da LD; (ii) Líder Patrocinador da LD e (iii) Entusiastas de Dados, que são pioneiros na adoção ao uso de dados e demonstram disposição para o aprendizado e forte interesse na sua evolução da LD, independentemente do nível, e podem contribuir fortemente como multiplicadores no programa na organização. O Patrocinador e Responsável devem ser experientes no uso de dados e ter habilidades para incentivar, facilitar e aumentar a adoção ao programa desde o início reduzindo a resistência natural endereçada para a gestão de mudanças. Com a mesma energia e entusiasmo, devem divulgar as diretrizes do uso ético dos dados como parte inerente ao programa de LD. É fundamental disponibilizar políticas que tratem de ética e privacidade, promovendo maior autonomia com responsabilidade no uso de dados e garantindo clareza e objetividade na comunicação. No cenário desejado, a promoção e evolução da LD estabelecem uma linguagem comum que aproxima as diferentes personas de dados e elimina os silos organizacionais. Dessa forma, os extremos de conhecimento restrito apenas a dados ou apenas a negócios deixam de existir, criando uma base mais integrada e colaborativa. É fundamental oferecer suporte individualizado como parte da promoção da LD, incluindo apoio cognitivo e emocional em torno do uso dos dados, estímulo intelectual e compartilhamento de conhecimento entre as personas com a criação de comunidades, dando autonomia para a evolução de cada um sem imposição. E sempre que possível envolver o máximo de personas possível nas priorizações e construção de iniciativas. E uma vez conhecidas as personas de dados na organização, as iniciativas de LD devem deixar claro os papéis e responsabilidades pelas realizações das atividades e para tal recomenda-se utilizar a matriz RACI (Responsável, Aprovador, Consultado, Informado). Esta matriz assegura que cada atividade e decisão dentro do processo tenha um responsável principal (R), um aprovador final (A), indivíduos consultados (C) e aqueles que devem ser informados (I), garantindo transparência e eficiência na execução das ações.',
      },
      {
        title: 'Perguntas',
        content: 'Essas perguntas contribuem para o maior conhecimento dos profissionais pelo responsável com apoio da liderança e patrocinador e podem trazer iniciativas efetivas para a promoção da LD com foco nas pessoas: De que forma podemos envolver os profissionais em discussões sobre o uso de dados e conduzir essas conversas de maneira eficaz? Quanta orientação e autonomia as equipes precisam para desenvolver LD? Como podemos incentivar os profissionais a questionar suas crenças e suposições sobre o uso de dados? O planejamento e a implementação da LD incluíram consultas com as partes interessadas em diferentes níveis e personas de dados? Até que ponto as considerações éticas e de privacidade foram incorporadas na promoção da LD? Como será supervisionada a conduta ética relacionada ao uso dos dados? E algumas perguntas podem ser feitas para toda a organização: Com qual persona de dados me identifico? Qual é o meu nível de LD, e qual é a minha motivação ou disponibilidade para desenvolver minhas habilidades no uso de dados? Como podemos colaborar com a equipe responsável pela promoção da LD?',
      },
      {
        title: 'Pontos de Atenção',
        content: 'É essencial ter cautela com pressões e vieses relacionados às responsabilidades no uso de dados, garantindo que as personas de dados identificadas e o interesse dos entusiastas sejam autênticos e reflitam verdadeiramente os profissionais da organização, e não apenas uma tentativa de “agradar a liderança". Outro ponto de atenção é que o “medo" induzido por questões de ética e privacidade pode facilmente levar a mal-entendidos, dificultando assim a adoção ao uso dos dados.',
      },
    ],
  },
];

const Pessoasetica = () => {
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
            <li>
              <NavLink to="/pessoasetica" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Pessoas e Ética
              </NavLink>
            </li>
            <li><Link to="/recursos">Recursos Necessários: Dados, Tecnologias, Processos e Políticas</Link></li>
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

export default Pessoasetica;
