// src/App.tsx
import React from 'react';

// Importa os estilos principais
import './styles/App.css';
// Importa os estilos da nossa nova seção de introdução
import './styles/Cover.css'; 

import Cover from './components/Cover'; // Importa o componente Cover
import Header from './components/Header';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  const skills = [
    { name: 'HTML', img: 'html.png' },
    { name: 'CSS', img: 'css.png' },
    { name: 'JavaScript', img: 'javascript.png' },
    { name: 'TypeScript', img: 'ty.png' },
    { name: 'React', img: 'React-icon.png' },
    { name: 'SAP ABAP', img: 'sap.jpeg' },
    { name: 'Python', img: 'py.jpeg' },
    { name: 'Pandas', img: 'pyPandas.png' },
    { name: 'NumPy', img: 'pyNumPy.png' }
  ];

  const certificateImages = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg'
  ];
  const doubledCertificates = [...certificateImages, ...certificateImages];
  return (
    <>
      {/* A seção de capa criativa vem primeiro */}
      <Cover />

      {/* O Header vem depois, mas com 'position: sticky' ele ficará fixo ao rolar */}
      <Header />

      <main>

{/* Seção Sobre Mim */}
        <section id="about" className="container">
          {/* Novo wrapper para a imagem e o texto */}
          <div className="about-section-wrapper">
            {/* Container da imagem */}
            <div className="about-image-container">
              {/* Ajuste o 'src' para o caminho real da sua foto */}
              <img 
                src="/assets/fotoPerfil.jpg" 
                alt="Isabela de Paula Barbosa" 
              />
            </div>

            {/* Conteúdo de texto */}
            <div className="about-content">
              <h2>Sobre Mim</h2> {/* Mantive o título aqui para o alinhamento */}
              <p>
                Oi! Eu sou a Isabela, estudante de Ciência da Computação na 
                Universidade Federal de Uberlândia (UFU) e apaixonada por 
                tecnologia, aprendizado constante e inovação. 
              </p>
              <p>
                Atuo na área de TI com foco em SAP ABAP, desenvolvendo e dando 
                suporte a soluções que envolvem relatórios ALV, rotinas internas, 
                funções, classes e análise de debug. Também participei de projetos 
                de desenvolvimento web usando TypeScript, React e integração com 
                SAP via API, conectando o mundo do front-end ao back-end de forma eficiente.
              </p>
              <p>
                Além disso, tenho experiência com bancos de dados (SQL/MySQL) e 
                ciência de dados com Python, aplicando bibliotecas como Pandas, 
                NumPy e Scikit-Learn. Sou curiosa, comunicativa e gosto de 
                transformar ideias em soluções práticas.
              </p>
              <p className="about-mission">
                Acredito no poder da tecnologia para simplificar processos, 
                gerar impacto e criar oportunidades — e é isso que me motiva 
                todos os dias.
              </p>
            </div>
          </div> {/* Fim de .about-section-wrapper */}
        </section>

        {/* Seção de Skills */}
        <section id="skills" className="container">
          <h2>Minhas Skills</h2>
          <div className="skills-grid">
            {/* Vamos mapear a lista de skills para criar um card para cada uma.
              O caminho da imagem vem direto da pasta 'public', como você organizou.
            */}
            {skills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <img src={`/assets/skills/${skill.img}`} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Certificados */}
<section id="certificates" className="container">
        <h2>Certificados e Destaques</h2>

        {/* Bloco de Destaque para o Projeto ODS */}
        <div className="project-highlight">
          <h3>Selo ODS: Pensamento Computacional para Meninas</h3>
          <p>
            Durante a faculdade, tive a honra de participar de um projeto de extensão 
            dando aulas de pensamento computacional para garotas do ensino médio 
            de escola pública, com o intuito de motivar garotas a ingressarem 
            no ramo da tecnologia - uma área com baixa participação feminina.
          </p>
          <p>
            Tive a alegria de participar de um momento muito especial na UFU: 
            a certificação de iniciativas educacionais alinhadas com os Objetivos 
            de Desenvolvimento Sustentável (ODS). O projeto foi contemplado com o 
            Selo ODS, reconhecendo seu impacto social e educacional.
          </p>
          
          {/* Caixa de Agradecimentos */}
          <div className="project-thanks">
            <p>
              💖 Agradeço imensamente à professora Maria Adriana Vidigal de Lima, 
              por sua orientação atenciosa, confiança e por acreditar no 
              potencial transformador da educação.
            </p>
            <p>
              💖 Um agradecimento especial também à minha colega e amiga 
              Ana Barbara Campos Conti, por toda a parceria, dedicação e 
              companheirismo.
            </p>
            <p>
              💖 E claro, ao time maravilhoso do Include Girls, que tornou 
              esse projeto possível com muito empenho, sensibilidade e um 
              compromisso verdadeiro com a inclusão.
            </p>
          </div>

          <p className="project-conclusion">
            Educação muda vidas. E quando ela anda de mãos dadas com inclusão, 
            representatividade e propósito, o impacto vai muito além da sala de aula. ✨
          </p>
        </div>

        {/* Carrossel de Certificados */}
        <div className="carousel-container">
          <div className="carousel-track">
            {doubledCertificates.map((imgName, index) => (
              <div className="carousel-slide" key={index}>
                <img 
                  src={`/assets/certificados/${imgName}`} 
                  alt={`Certificado ${index + 1}`} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Seção de Projetos */}
        <section id="projects" className="container">
          <h2>Meus Projetos</h2>
          {/* ... */}
        </section>

        {/* Seção de Contato */}
<section id="contact" className="container">
          <h2>Vamos Conversar!</h2>
          <p className="contact-intro">
            Estou sempre aberta a novas oportunidades e conexões. Sinta-se a vontade 
            para entrar em contato ou baixar meu currículo.
          </p>

          {/* Links de Contato */}
          <div className="contact-links">
            <a 
              href="mailto:isabelabarbosa2002@hotmail.com" 
              className="contact-link-item"
            >
              <FaEnvelope size={20} />
              <span>isabelabarbosa2002@hotmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/isabeladepaulabarbosa/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link-item"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Botão de Download do CV */}
          <div className="contact-cv">
            <a 
              href="/assets/CVIsabeladePaulaBarbosa.pdf" 
              download="CV_Isabela_de_Paula_Barbosa.pdf"
              className="cta-button"
            >
              Download do meu CV
            </a>
          </div>
        </section>
      </main>

      {/* --- 3. ADICIONE O RODAPÉ NO FINAL --- */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Isabela de Paula Barbosa
        </p>
      </footer>
    </>
  );
}

export default App;