import React from 'react';
import './Main.css';
import FPLDImage from '../FPLD.png';  
import EstruturaFPLDImage from '../EstruturaFPLD.png';  

const Main = () => {
  return (
    <div className="main-page">
      <header className="main-header">
        <h1>Framework para Promoção de Literacia em Dados (FPLD)</h1>
        <p>Maximizando o Valor dos Dados nas Organizações</p>
      </header>

      <section className="main-section" id="overview">
        <h2>Sobre</h2>
        <p>
        O FPLD proposto tem como objetivo estimular, apoiar e estruturar ações que desenvolvam e disseminem a literacia em dados (LD) para tracionar a geração de valor com o uso de dados dentro das organizações.
        Essa pesquisa visa compreender e aperfeiçoar esse processo, como uma jornada incremental para a transformação analítica organizacional, com a visão de que identificar seus desafios permite antecipar ações que minimizem seus riscos.
        Neste contexto, a promoção da LD envolve ações intencionais voltadas à sua valorização, divulgação e fortalecimento, com o objetivo de torná-la uma competência amplamente reconhecida, estrategicamente posicionada e em constante aprimoramento dentro das organizações.<br /><br />
      </p>
      </section>
      <section className="main-section" id="overview">
        <h2>Estrutura do FPLD</h2>       
        <p>O FPLD foi construído a partir das melhores práticas da literatura e seus desdobramentos, visando encontrar soluções para superar barreiras que impedem a evolução da LD e facilitar o aproveitamento de dados para gerar valor.
        Sua estrutura é composta por categorias que englobam áreas de processo, descritas por sete dimensões, conforme ilustrado abaixo:     
        </p>
        <img src={EstruturaFPLDImage} alt="EstruturaFPLD" style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem' }} />
         <p>
        Dessa forma, a estrutura do FPLD proposto transcende as descrições tradicionais de processos, apresentando alternativas e soluções para atender às necessidades e desafios identificados na literatura. 
        </p>
      </section>
      <section className="main-section" id="overview">
        <h2>FPLD</h2>
         <p>O FPLD integra as categorias Conscientização, Planejamento e Implementação com Melhoria Contínua, que consistem em conjuntos de áreas de processos independentes que ajudam a estabelecer definições, metas e práticas, além de permitir a execução dessas práticas e a construção de capacidades. 
          A quarta categoria denominada Processos de Suporte e Melhoria Contínua deve auxiliar a adoção, execução e foco nas entregas de valor do FPLD. <br /><br />
          
          A figura a seguir mostra uma visão geral do FPLD, com as categorias, áreas de processo e as expectativas e necessidades associadas a cada uma delas:
        </p>
        <img src={FPLDImage} alt="FPLD" style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem' }} />
         <p>
        Dessa forma, o FPLD visa aprimorar o desenvolvimento de estratégias para fortalecer a cultura data-driven e fomentar o uso de dados, acelerando e tornando mais eficaz a transformação analítica voltada à geração de valor nas organizações. <br /><br />
        
        A seguir, vamos explorar cada categoria do FPLD em detalhes com o objetivo de elucidar sua estrutura e funcionamento.
        </p>
      </section>
    </div>
  );
};

export default Main;
