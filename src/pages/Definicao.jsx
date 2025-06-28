import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'definicaoLD',
    title: 'Área de Processo: Definição de LD no Contexto',
    description: ' ',
    levels: [
      {
        title: 'Finalidade',
        content: 'Nesse item deve-se alinhar uma definição comum de LD dentro do contexto da organização para promover a importância do uso de dados orientado a valor. Isso implica na criação de uma compreensão clara, motivadora da LD e na sua disseminação, engajando toda a organização em torno do tema, tanto nos níveis estratégicos quanto operacionais, envolvendo líderes patrocinadores.',
      },
      {
        title: 'Metas',
        content: 'É fundamental ensinar o conceito de LD para despertar o interesse por seu desenvolvimento em toda a organização, tanto de forma <em>top-down</em> quanto <em>bottom-up</em>, destacando sua importância e necessidade, além de estabelecer uma linguagem comum para a aprendizagem do uso de dados orientado a valor.',
      },
      {
        title: 'Métricas',
        content: 'Recomenda-se medir o alcance da divulgação pela quantidade e percentual do total de profissionais, incluindo líderes e não líderes, que participam das reuniões sobre LD. A frequência das reuniões realizadas para a divulgação do conceito de LD na organização também deve ser monitorada. Além disso, a conscientização e a aprendizagem podem ser avaliadas pelo percentual de acertos em um quiz aplicado em tempo real durante as reuniões.',
      },
      {
        title: 'Framework Zachman',
        content: 'Definição comum da LD disseminada esclarece seu conceito, contemplando “O QUÊ”. A clareza da sua importância e necessidade contribuem para o “POR QUÊ” da evolução da LD.',
      },
      {
        title: 'Exemplos, Ideias de Atividades e Fatores Críticos',
        content: ' Para promover a conscientização ativa sobre o conceito de LD na organização, é importante apresentá-lo de forma clara e envolvente, por exemplo, mostrando a geração de dados da empresa por mês, dia ou minuto. Além disso, recomenda-se incluir uma autoavaliação do nível de LD como parte da dinâmica da reunião, o que promove tanto a aprendizagem quanto a mensuração do conhecimento. Outra sugestão é apresentar um ranking das empresas mais valiosas, destacando a importância do uso de dados para a rentabilidade e sua relação com a LD.',
      },
      {
        title: 'Perguntas',
        content: 'As perguntas a serem feitas são: Você conhece o termo LD ou DL em inglês? Como descreveria a LD? Sabe qual é o seu nível atual de LD? E qual é o nível de maturidade analítica da organização?',
      },
      {
        title: 'Pontos de Atenção',
        content: 'O apoio da liderança é o alicerce que garante a estabilidade e o sucesso de qualquer iniciativa de transformação analítica. Assim, é fundamental que os líderes abram espaço na agenda da organização e mostrem interesse na promoção e evolução da LD. A falta de apoio pode sinalizar resistência à mudança e dificultar a implementação do \textit{framework}, sugerindo a necessidade de reconsiderar se é o momento certo para investir no projeto.',
      },
    ],
  },
];

const Definicao = () => {
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
            <li>
              <NavLink to="/definicao" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Definição de LD no Contexto
              </NavLink>
            </li>
            <li><Link to="/valor">Entregas de Valor</Link></li>
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

export default Definicao;
