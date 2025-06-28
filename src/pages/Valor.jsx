import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'entregavalor',
    title: 'Área de Processo: Entregas de Valor',
    description: ' ',
    levels: [
      {
        title: 'Finalidade',
        content: 'Nesse item é essencial apresentar o conceito de entregas de valor orientadas por dados, evidenciando a importância do uso intencional dos dados com foco na solução de problemas, aprendizados e impacto incremental nos resultados do negócio. Deve-se divulgar essa abordagem garantindo clareza sobre o problema e o resultado desejado. Isso contribuirá para uma maior adoção da LD e do uso de dados, além de facilitar a priorização e melhorar a eficácia dos projetos analíticos. É igualmente importante reforçar que as áreas técnicas devem colaborar diretamente com as áreas de negócios para compreender suas necessidades e traduzi-las em soluções de dados, transformando-as em oportunidades e maximizando as entregas de valor.',
      },
      {
        title: 'Metas',
        content: 'Para aumentar a adoção do uso de dados na orientação das tomadas de decisão e o engajamento no desenvolvimento de LD, é crucial evidenciar a relevância do uso de dados para resolver problemas e promover melhorias na organização. Deve-se construir uma ponte entre as discussões técnicas e de negócios para entender melhor os problemas e necessidades, facilitando a criação de soluções viáveis que aumentem as entregas de valor orientadas por dados. Além disso, é importante a priorização dos projetos analíticos, mostrando claramente seu retorno e contribuição para a organização.',
      },
      {
        title: 'Métricas',
        content: 'Deve representar um impacto de negócio que deve estar alinhado com as prioridades da organização e é comumente traduzido pelo ROI de projetos de dados. Desenvolver este racional pode ser desafiador, mas é fundamental reunir os profissionais necessários para defini-la, mesmo que seja baseada em premissas. Um bom exemplo é considerar que um projeto de melhoria e qualidade dos dados cadastrais não deveria ter como métrica o número de contatos enriquecidos, mas sim o incremento de vendas ou respostas nas campanhas segmentadas com tal melhoria. Alguns exemplos de métricas comuns para medir entregas de valor no nível estratégico são: crescimento da receita, redução de custos e satisfação do cliente. No nível tático é comum medir a eficiência operacional ou a qualidade de produtos e serviços. E no nível operacional a produtividade dos funcionários e tempos de resposta.',
      },
      {
        title: 'Framework Zachman',
        content: 'Esse item deve aproximar as áreas técnicas e de negócios, envolvendo o responsáveis (“QUEM”) pelas entregas de valor, que representam a melhor tradução do uso intencional de dados (“POR QUÊ”). ',
      },
      {
        title: 'Exemplos, Ideias de Atividades e Fatores Críticos',
        content: 'Se existe a necessidade da promoção da LD é porque a organização tem dados e precisa extrair seu valor. As possibilidades de entrega de valor com o uso de dados são inúmeras, por isso é tão fundamental que exista clareza das necessidades/dores/problemas que devem ser resolvidas com o uso de dados na organização e, sim, é parte fundamental da estratégia de promoção de DL.Para tangibilizar as possíveis entregas de valor com dados é interessante fazer uma lista de possibilidades em diferentes contextos, incluindo \textit{benchmarking} em organizações concorrentes, inclusive de outros países na busca por um diferencial competitivo. Por exemplo, a estratégia de vacinação do COVID-19 baseada em dados que salvou muitas vidas pode sensibilizar e motivar o uso de dados e desenvolvimento da LD em qualquer contexto da vida pessoal e profissional. A recomendação chave para o sucesso é começar com os resultados esperados em mente. Caso contrário, seria como montar um quebra-cabeça de 1.000 peças sem a foto da tampa.',
      },
      {
        title: 'Perguntas',
        content: 'As perguntas propostas devem ajudar a definir o propósito, o destino e o valor da jornada de dados, facilitando a identificação do objetivo do uso dos dados e garantindo que as entregas de valor esperadas estejam claras e possam ser mensuradas. Alguns exemplos recomendados:  (i) essa organização tem uma visão clara dos seus objetivos e como o uso de dados pode ajudar a alcançá-los? (ii) qual é o maior desafio (ame o problema!) que impede o objetivo estratégico dessa organização? (iii) vamos discutir como os dados podem ajudar a encontrar uma solução? - Outra estratégia para provocar reflexão na definição ou mesmos priorização das entregas de valor, são perguntas do tipo: se o valor esperado dessa iniciativa for alcançado, nos tornará mais competitivos? Mais ágeis para responder às mudanças do mercado? Haverá melhoraria nas competências analíticas da organização? Haverão oportunidades de inovação, melhoria e/ou crescimento? Promove mudanças para aumentar vantagens com melhorias? Quem são os principais beneficiários da entrega de valor dos dados? Quais são os times na organização que enfrentam dificuldades, priorizam os projetos, lidam com os problemas e recebem os \textit{insights} para tomar decisões e agir?',
      },
      {
        title: 'Pontos de Atenção',
        content: 'O uso de dados orientado a valor jamais parte do dado em si, mas sim do problema. Então, muito cuidado com iniciativas desconectadas que priorizam dados sobre a entrega de valor ou resolução de problemas, que demandam tempo e recurso sem clareza da sua necessidade. É como desenvolver um remédio para uma organização que não sente dor. Outro ponto de atenção é a importância da formalização e responsabilização por medir e acompanhar as entregas de valor esperadas.',
      },
    ],
  },
];

const Valor = () => {
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
            <li><Link to="/definicao">Definição de LD no Context</Link></li>
            <li>
              <NavLink to="/valor" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Entregas de Valor
              </NavLink>
            </li>
            <li><Link to="/cadeia">Cadeia de Valor do Uso de Dados</Link></li>
            <li><Link to="/complex">Clareza da Complexidade do Uso de Dados</Link></li>
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

export default Valor;
