// src/components/Cover.tsx
import React from 'react';
import '../styles/Cover.css'; // O estilo para o Cover

const Cover: React.FC = () => {
  return (
    // Adicionamos um ID para ser o primeiro ponto de navegação
    <section id="cover" className="cover-section">
      <div className="cover-content">
        <span className="cover-pre-title">Portfólio</span>
        <h1 className="cover-name">Isabela de Paula Barbosa</h1>
        <p className="cover-tagline">Estudante de Ciência da Computação</p>
      </div>
    </section>
  );
};

export default Cover;