import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'engajamento',
    title: 'Área de Processo: Engajamento com foco na Colaboração e Comunicação',
    description: ' ',
    levels: [
      {
        title: 'Finalidade',
        content: 'Fortalecer uma cultura data-driven requer uma estratégia de engajamento que se concentre na comunicação eficaz e no fomento da colaboração, promovendo o compromisso com o uso de dados para gerar entregas de valor e reduzir os riscos associados à baixa adesão ao programa de LD e à resistência às mudanças necessárias para desenvolver habilidades no uso de dados. Promover discussões voltadas para a geração de oportunidades de melhoria contínua e o aumento das entregas de valor, inclusive envolvendo a liderança, também contribui para fortalecer uma cultura de dados aberta e confiável. Inspirar e motivar os profissionais é crucial, e isso pode ser alcançado estabelecendo canais de comunicação que amplifiquem narrativas significativas sobre as entregas de valor resultantes do uso de dados, sejam grandes realizações ou pequenas vitórias. Essa abordagem cria uma estratégia de engajamento clara e convincente, evidenciando e celebrando os avanços que o programa de LD promove em diferentes níveis e equipes como conquistas para a organização, impacto positivo nas atitudes das pessoas para a evolução da LD e aumento de satisfação com o trabalho realizado. Além disso, conectar diferentes equipes em uma rede colaborativa e melhorar a comunicação ao incentivar a troca de experiências no uso de dados contribui para criar um ambiente propício ao apoio mútuo e ao compartilhamento de conhecimentos. Estabelecer parcerias institucionais essenciais sustenta a promoção da LD através de uma abordagem centrada em comunidades. Facilitar o desenvolvimento dos profissionais, compreendendo suas preferências e necessidades individuais sempre que possível, é fundamental, incluindo o fornecimento de apoio emocional para aumentar o engajamento. Isso faz parte da gestão de mudanças inerente à transformação analítica, que deve ser tanto técnica, relacionada ao uso de dados, quanto comportamental, envolvendo uma forma colaborativa de pensar e agir, além de habilidades como negociação e autoconfiança. Comunicar de forma clara e consistente as estratégias, políticas e normas relacionadas ao uso de dados, especialmente o programa de LD e seus benefícios, é essencial, assim como incentivar a participação em pesquisas de satisfação e feedbacks assegurando uma comunicação bidirecional e inclusiva. Outras iniciativas para aumentar a visibilidade são utilizar uma identidade visual com branding e utilizar linguagem simples para facilitar a compreensão e atratividade do programa. Além disso, explorar diversos canais e formatos de comunicação interna ajuda a aumentar a disseminação do conteúdo e o engajamento, reduzindo os riscos associados à falta de adesão.',
      },
      {
        title: 'Metas',
        content: 'Este item deve impulsionar o engajamento e a persistência no uso de dados, além de facilitar um aprendizado contínuo entre os profissionais envolvidos. Para isso, é essencial aumentar a adesão ao programa de LD, sustentando essa participação com um plano de comunicação eficaz que minimize os riscos de baixa adesão e resistência a mudanças. Além disso, comunicar de forma assertiva e impactante os resultados mensuráveis que beneficiam a organização e estabelecer canais de comunicação e feedback eficazes são fundamentais para garantir que todos estejam cientes dos avanços, incentivar a participação dos profissionais e criar um ambiente colaborativo e aberto ao aprendizado. Outro ponto importante é fomentar a colaboração entre as diferentes equipes, cultivando um compromisso compartilhado com a melhoria contínua. Para isso, a criação de comunidades de pioneiros será incentivada, permitindo que suas histórias de sucesso sejam amplamente comunicadas e celebradas. Para apoiar essa transformação analítica, será essencial construir parcerias internas que proporcionem desenvolvimento profissional, contemplando tanto habilidades técnicas quanto comportamentais.',
      },
      {
        title: 'Métricas',
        content: 'O número de entusiastas de dados, participantes de comunidades em torno do uso de dados e interações entre profissionais em todos estes contextos são métricas interessantes para medir o engajamento. Se estabelecido um programa de relacionamento com o usuário de dados para um grupo de profissionais como teste, métricas como taxa de adesão ao treinamento e entregas de valor documentadas podem ser comparadas "ao grupo controle", que não teve as ações de comunicação e engajamento estabelecidas para medir a efetividade dessa proposta.',
      },
      {
        title: 'Framework Zachman',
        content: 'A importância do coletivo envolve o  “QUEM”, a força do engajamento o “COMO” e o plano de comunicação sustenta “O QUÊ” precisa ser feito em conjunto para mover a organização na direção desejada.',
      },
      {
        title: 'Exemplos, Ideias de Atividades e Fatores Críticos',
        content: 'Os desafios mais significativos que confrontam organizações em termos de adoção do uso de dados não são técnicos, mas comportamentais ou sociais. É importante lembrar que a economia não se concentra no dinheiro, mas no comportamento humano. Os economistas analisam as ações das pessoas, em vez de suas palavras, pois as decisões refletem o que consideram melhor para si mesmas. As escolhas são feitas de maneira racional, com base em interesses econômicos, e, ao longo do dia, as pessoas constantemente calculam os custos e benefícios de suas ações antes de decidir como agir. Daí a importância de considerar as atitudes e um processo de gestão de mudança na promoção da DL com impacto e mudanças de ações orientadas por dados. A intenção e a ação são muito diferentes, neste caso um programa de relacionamento ao usuário de dados (assim como os programas de relacionamento com clientes) podem promover resultados de engajamento e colaboração satisfatórios, além de facilitar o desenvolvimento de um plano de comunicação e organização da sua implementação, que pode ser realizado inclusive com o apoio e suporte das áreas de Comunicação e Marketing da organização quando pertinente, assim como o branding contribuindo para uma promoção da LD de forma mais atrativa e interessante. Despertar o interesse para o uso de dados é o primeiro passo para fidelizar o “cliente usuário de dados”. Esse processo pode ser acompanhado por meio de réguas de relacionamento aplicadas a determinados grupos da organização, permitindo avaliar seus benefícios ao longo do tempo. Enxergar a adoção do uso de dados como um processo de fidelização dos profissionais, apoiado pela promoção da LD, pode inspirar iniciativas relevantes e inovadoras. Outro desafio importante é criar, impulsionar e engajar uma comunidade de dados que fortaleça a cultura data-driven e amplie as entregas de valor a partir da colaboração entre os profissionais. Recomenda-se iniciar com os pioneiros e com a participação voluntária, estimulando a motivação intrínseca, o impulso de agir porque algo é interessante, desafiador e envolvente, que é essencial para níveis elevados de criatividade. Em contraste, os motivadores condicionais, do tipo “desde que”, frequentemente observados em organizações, mostram-se mais propensos a restringir do que a estimular a criatividade. Para que essa área de processo tenha sucesso, o alinhamento com a liderança é decisivo e indispensável para construir confiança no apoio organizacional.',
      },
      {
        title: 'Perguntas',
        content: 'Essas perguntas podem ser provocações importantes para os envolvidos no engajamento da promoção da LD: Como podemos garantir que os profissionais priorizem o trabalho para desenvolvimento da LD? Como podemos estabelecer estruturas de colaboração na nossa organização? Como partilhamos e desenvolvemos conhecimento dentro das equipes? Como podemos garantir que profissionais de todas as hierarquias colaborem de maneira igualitária? Como podemos garantir que todos na organização se sintam suficientemente seguros para participar em discussões profundas sobre dados? Como podemos estimular a colaboração entre profissionais? Como podemos conectar a equipe de promoção da LD à uma comunidade mais ampla na organização e vice-versa? Como podemos usar nossas conexões para criar comprometimento com o trabalho da equipe de promoção da LD e com o uso de dados em geral? E com foco maior na comunicação, temos: Como comunico valor e inspiro ação dos patrocinadores? Como podemos contar melhores histórias com dados? Como criamos melhores canais para obter diferenciais competitivos e compartilhar conhecimento? Como o propósito da promoção e desenvolvimento da LD será comunicado aos profissionais? Que canais de comunicação serão implementados?',
      },
      {
        title: 'Pontos de Atenção',
        content: 'Um cenário comum nas organizações é a existência de silos de dados fortalecidos, onde diferentes equipes trabalham de forma independente e desconectada. Apesar desse desafio, é essencial integrar esses silos, promovendo uma colaboração mais estreita entre os times. No entanto, sem o apoio da liderança, qualquer esforço nessa direção será inútil.',
      },
    ],
  },
];

const Engajamento = () => {
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
            <li><Link to="/pessoasetica">Pessoas e Ética </Link></li>
            <li><Link to="/recursos">Recursos Necessários: Dados, Tecnologias, Processos e Políticas</Link></li>
            <li><Link to="/contexto">Contexto </Link></li>
            <li><Link to="/aprendizagem">Métodos de Aprendizagem </Link></li>
            <li>
              <NavLink to="/engajamento" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Engajamento com foco na Colaboração e Comunicação
              </NavLink>
            </li>
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

export default Engajamento;
