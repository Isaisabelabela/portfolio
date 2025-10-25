// src/components/Hero.tsx
import React from 'react';
import '../styles/Hero.css'; // Vamos criar este arquivo de estilo a seguir

const Hero: React.FC = () => {
  return (
    // Usamos a tag <section> por semântica e um ID para a navegação
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Olá, eu sou <strong>[Seu Nome]</strong>
        </h1>
        <p className="hero-subtitle">
          Desenvolvedor de Software | Especialista em React e TypeScript
        </p>
        <p className="hero-description">
          Sou apaixonado por criar interfaces de usuário intuitivas e eficientes, 
          trazendo soluções criativas para problemas complexos.
        </p>
        <div className="hero-cta-container">
          <a href="#projects" className="hero-cta hero-cta--primary">
            Ver Meus Projetos
          </a>
          <a href="#contact" className="hero-cta hero-cta--secondary">
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;