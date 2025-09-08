import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main-page">
      <header className="main-header">
        <h1>Participe da Pesquisa sobre a Promoção de Literacia em Dados (LD) </h1>
        <p>
          <strong>
            Desde já, agradeço a sua contribuição!
          </strong>
        </p>
      </header>

      <section className="main-section" id="overview">
        <h2>Apresentação</h2>

        <p>
          Sou Jacqueline David Planas e esta pesquisa aplicada é parte do meu <strong>Doutorado do Programa de Engenharia de Computação e Sistemas Digitais da Escola Politécnica da Universidade de São Paulo</strong>, 
          sob orientação da professora Solange Nice de Alves Souza. 
          O objetivo é validar uma proposta de <strong>Framework para a Promoção da Literacia em Dados (FPLD)</strong> nas organizações com a colaboração de profissionais especialistas.
        </p>

        <p>
          O questionário é direcionado a profissionais da área de dados e cultura analítica que trabalham em ambientes organizacionais, 
          e busca a avaliação de especialistas sobre o framework. Todas as respostas são sigilosas e utilizadas exclusivamente para fins acadêmicos.
        </p>
        
         <p>
          Vamos começar?
        </p>

         <a class="botao2" href="https://docs.google.com/forms/d/1EXfk3v7WJXwkhlQWJHT4_2ku_tBtO83SgDHc19v-NMU/edit" target="_blank">
          Preencha o formulário clicando aqui!
        </a>

        <p>
        Caso queira marcar uma reunião para preenchimento guiado ou tenha alguma dúvida, estou disponível pelo e-mail: 
        </p>
        
        <a class="botao" href="mailto:jacqueline.david.planas@usp.br" target="_blank">
         jacqueline.david.planas@usp.br
        </a>
  

      </section>
    </div>

  );
};

export default Main;
