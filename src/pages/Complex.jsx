import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'complexidade',
    title: 'Área de Processo: Clareza da Complexidade do Uso de Dados',
    description: ' ',
    levels: [
      {
        title: 'Finalidade',
        content: 'É essencial dar luz à complexidade inerente ao uso de dados, abordando os desafios interconectados que permeiam toda a estrutura organizacional e desvendando as tensões que surgem ao fomentar o uso de dados na organização. Isso envolve explorar as conexões entre os diversos fatores dinâmicos que influenciam a adoção e o desenvolvimento da LD, os quais devem ser tratados de forma integrada. Além disso, busca-se reforçar a importância de um responsável por desenvolver um programa que facilite esse processo complexo, promovendo a LD e o aumento da adoção ao uso de dados orientado a valor com apoio e envolvimento de patrocinadores. Por fim, é essencial promover mudanças na conscientização sobre a LD e nas práticas profissionais relacionadas ao uso de dados.',
      },
      {
        title: 'Metas',
        content: 'Dar tração à cadeia de valor do uso de dados, focando nas entregas e incentivando todos a enfrentarem os desafios percebidos sem se intimidarem pela complexidade, enxergando a evolução da LD como uma motivação para capacitação. Para tal, garantir que a liderança compreenda a importância de desenvolver um programa de LD na organização é fundamental, incluindo a nomeação de um patrocinador para priorizar o tema e obter o \textit{buy-in} das equipes. Além disso, é necessário nomear ou contratar um responsável pelo programa de LD orientado a valor, promovendo práticas sustentáveis e integradas com equipes multifuncionais, tudo com base no FPLD e com o apoio do patrocinador.',
      },
      {
        title: 'Métricas',
        content: 'A nomeação do patrocinador e de um profissional para liderar essa iniciativa devem ser métricas prioritárias neste processo. Acompanhar o número de pessoas comprometidas com as iniciativas de dados, assim como o volume e resultados da autoavaliação de competências da LD e até o grau de interações nas reuniões também evidenciam se a etapa de conscientização está sendo concluída com sucesso. Uma pesquisa sobre o grau de interesse no programa de LD (mesmo que anônima) no início e ao final de um \textit{workshop} de conscientização do tema também pode ser útil. Essa categoria estará cumprida com sucesso quando despertar o interesse de todos, com clareza da sua importância e expectativa de resultados ou entregas de valor.',
      },
      {
        title: 'Framework Zachman',
        content: 'A identificação do responsável pela promoção da LD, assim como dos patrocinadores do programa, e o encorajamento de todas as equipes envolvem o “QUEM”, enquanto a proposta de decompor a sua complexidade faz parte do “COMO”.',
      },
      {
        title: 'Exemplos, Ideias de Atividades e Fatores Críticos',
        content: 'O corpo humano é um sistema complexo, assim como o uso de dados. Essa analogia simplifica muito a explicação: ambos são compostos por diversas partes ou subsistemas interdependentes que desempenham funções específicas, mas trabalham em conjunto para garantir a sobrevivência e o funcionamento do organismo. As entregas de valor no uso de dados podem ser comparadas a um organismo vivo, ilustrando a complexidade da jornada de dados. Essa complexidade faz do estudo do corpo humano (e do uso de dados) um campo rico e desafiador, que demanda a colaboração de várias disciplinas ou áreas dentro de uma organização. A conscientização da sua complexidade deve focar no propósito da adoção do uso de dados e da necessidade de trabalhar de forma colaborativa e em equipe para o sucesso de todos e da organização. Esse foco deve ser refletido nas mudanças comportamentais desejadas, alinhadas com os objetivos definidos e continuamente monitorados para garantir o progresso da LD e aumento das entregas de valor. Essa conscientização deve ser feita com a liderança e com toda a organização para garantir que todos estejam alinhados e comprometidos (e não somente envolvidos) remando na mesma direção. A fábula do Porco e da Galinha pode representar essa necessidade de forma leve e divertida com narrativas ou quadrinhos, na qual a moral da história é que o comprometimento tem um custo maior do que o envolvimento. O porco, ao se comprometer totalmente com a tarefa de preparar o café da manhã, acabou se sacrificando. Já a galinha, que apenas se envolveu parcialmente, saiu ilesa. Produzir entregas de valor com dados e fortalecer a cultura \textit{data-driven} exige o comprometimento de todos, além do investimento da organização.',
      },
      {
        title: 'Perguntas',
        content: 'Para toda a organização, pode-se fazer uma pesquisa de interesse sobre o desenvolvimento da LD após trabalhar em todas as áreas de processo da Conscientização, perguntando por exemplo: Qual é o seu interesse em participar de projetos para geração de valor com dados com o desenvolvimento da LD? Inclusive, envolvê-los para que se sintam parte e medir o engajamento: Você tem alguma sugestão de caso de uso para o programa que possa contribuir com os objetivos da organização ou conhece iniciativas que possam fortalecer o programa? Para a liderança, é importante entender o momento da organização, perguntando, por exemplo: Quais são as etapas dessa complexa jornada nessa organização? Em quais condições se encontram? Envolvem quais funções? Onde essa organização está atualmente em relação à promoção da LD? Ativamente explorando a LD, apenas começando os esforços para LD, iniciaram esforços no passado, mas não foram continuados, tem um programa formal implementado a menos de um ano, tem um programa implementado com sucesso há mais de um ano. Se houver um programa de LD, qual é o estilo da sua liderança: descentralizada, centralizada ou distribuída? Existe uma estratégia de LD clara que explica o que pretendem alcançar e como planejam atingir os objetivos propostos?',
      },
      {
        title: 'Pontos de Atenção',
        content: 'Apesar do crescente interesse por dados, a transformação de dados em valor através da LD, ainda não é uma prioridade para muitas organizações. Sem investimento e recursos dedicados, um programa de LD é inviável, dada sua complexidade e a necessidade de comprometimento de toda a organização.',
      },
    ],
  },
];

const Complex = () => {
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
            <li><Link to="/valor">Cadeia de Valor do Uso de Dados</Link></li>
            <li>
              <NavLink to="/complex" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Clareza da Complexidade do Uso de Dados
              </NavLink>
            </li>
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

export default Complex;
