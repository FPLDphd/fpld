import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'aprendizagem',
    title: 'Área de Processo: Métodos de Aprendizagem',
    description: ' ',
    levels: [
      {
        title: 'Finalidade',
        content: 'Capacitar os profissionais da organização, independentemente de seu estágio de desenvolvimento ou perfil, é essencial para transformá-los em pensadores curiosos, analíticos, criativos e críticos que enfrentam a complexidade dos desafios relacionados a dados com confiança. Para alcançar esse objetivo, é necessário oferecer programas de desenvolvimento profissional contínuo, utilizando métodos de aprendizagem eficazes que aprimorem a capacidade dos colaboradores de compreender, interpretar e utilizar dados em suas funções. Esses programas devem equilibrar teoria com práticas personalizadas ao contexto da organização, adotando uma abordagem criativa, colaborativa e intencional, com uma duração adequada. Além disso, a criação de uma infraestrutura de suporte envolve estabelecer parcerias entre diferentes áreas para avaliar as necessidades de desenvolvimento da LD e os recursos de treinamento. Isso permitirá a criação de programas e currículos customizados para diversos grupos e momentos da organização. A eficácia dos métodos deve ser testada com pilotos, avaliada com feedbacks para promover melhorias contínuas e revisada em ciclos regulares. A criação de conteúdo de alta qualidade é crucial, e o apoio de consultores externos ou acadêmicos pode ser benéfico quando necessário. Por fim, identificar profissionais com potencial para se tornarem instrutores ou Entusiastas e Experts de Dados contribui significativamente para aumentar o suporte aos aprendizes. Esses profissionais ajudam a disseminar conhecimento e fomentar a colaboração, conectando o desenvolvimento analítico ao trabalho diário e à investigação coletiva com dados, promovendo uma cultura de aprendizagem e melhoria contínua.',
      },
      {
        title: 'Metas',
        content: 'Liderar o desenvolvimento de um programa de treinamento contínuo em LD é fundamental para aumentar as entregas de valor orientadas por dados na organização. É também essencial identificar e divulgar instrutores para o programa de LD, que receberão o direcionamento adequado para oferecer suporte e promover melhorias no desenvolvimento da LD. Além disso, é importante manter pilotos do programa para garantir a melhoria contínua, baseando-se nos feedbacks dos profissionais, na disponibilidade de novos recursos e nas boas práticas da literatura e do mercado.',
      },
      {
        title: 'Métricas',
        content: 'A quantidade de profissionais capacitados, bem como sua avaliação da aprendizagem e entregas de valor produzidas como parte da capacitação são métricas interessantes para garantir metodologias eficientes. A comparação das respostas de líderes e não líderes para a demanda de apresentação de dados ao tomar decisões na organização também é interessante para sensibilizar a aprendizagem.',
      },
      {
        title: 'Framework Zachman',
        content: 'Reforçando que a LD tem forte relação com a capacitação, este “COMO” é chave para o sucesso da sua evolução na organização, apresentando também “O QUÊ” precisa ser feito como foco na melhoria contínua.',
      },
      {
        title: 'Exemplos, Ideias de Atividades e Fatores Críticos',
        content: 'As abordagens pedagógicas devem superar as barreiras de aprendizado e não deve ser do tipo ‘faça você mesmo’. Exige orientação e deve ser interessante e intencional para a resolução de problemas reais, dentro e/ou fora do contexto do trabalho. O objetivo não deve ser tornar o treinamento para capacitação das competências da LD obrigatório, mas oferecer uma oportunidade interessante para aprimorar a relação entre os profissionais e os dados produzindo entregas de valor de impacto real. Estratégias com recompensas ou mesmo gamificação podem, muitas vezes, produzir menos daquilo que está se tentando encorajar. A conscientização e sensibilização propostas neste FPLD parecem mais eficazes que a obrigatoriedade. Por isso é que as doações de sangue voluntárias aumentam sempre que há um caso de desastre natural ou outras calamidades. Por outro lado, é natural que exista a resistência à mudança devido ao desconforto em adquirir novas habilidades ou mesmo restrição de tempo, e em alguns casos, existe a necessidade de vencer a barreira do medo, e chegar na fase da curiosidade. É uma evolução que leva tempo, e buscar relatos dos pioneiros e entusiastas é importante, assim como envolver todos os interessados na escolha do problema a ser resolvido e na divulgação dos resultados. Vale lembrar que não é simples e exige dedicação, por isso a cultura de aprendizagem e o suporte a todos profissionais são fundamentais. Assim como a realização de pilotos e melhorias a partir dos feedbacks de participantes. O uso de dados deve se tornar um componente integral e integrado do trabalho de todas as personas de dados.',
      },
      {
        title: 'Perguntas',
        content: 'Essas perguntas devem ser regularmente revisadas com o responsável e o patrocinador da LD: Como podemos capacitar os profissionais da organização a tomar decisões baseadas em dados e gerar mais valor? O que caracteriza um ensino eficaz do uso de dados e como podemos mensurá-lo? De que forma é possível treinar o uso de dados no dia a dia da organização, fortalecendo também o responsável pela promoção da LD? E aos líderes: Vocês demandam suas equipes a apresentarem dados que embasam suas recomendações ou decisões? Assim como para suas equipes: Os líderes dessa organização demandam suas equipes a apresentarem dados que embasam suas recomendações ou decisões?',
      },
      {
        title: 'Pontos de Atenção',
        content: 'A formação de profissionais como instrutores pode ser necessária, uma vez que a abordagem que integra dados e negócios torna a contratação de treinamento como serviço externo mais difícil.',
      },
    ],
  },
];

const Aprendizagem = () => {
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
               <li>
              <NavLink to="/aprendizagem" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Métodos de Aprendizagem
              </NavLink>
            </li>
            <li><Link to="/engajamento">Engajamento com foco na Colaboração e Comunicação</Link></li>
            <li><Link to="/estrategia">Construção da Estratégia de Promoção da LD</Link></li>
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

export default Aprendizagem;
