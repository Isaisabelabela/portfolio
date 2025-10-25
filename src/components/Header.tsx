// src/components/Header.tsx
import React, { useState } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navClassName = `nav ${isMenuOpen ? 'nav--open' : ''}`;

  return (
    <header className="header">
      

      <nav className={navClassName} aria-label="Navegação principal">
        <ul className="nav-list">
          <li><a href="#cover">Início</a></li> {/* Adicionando "Início" */}
          <li><a href="#about">Sobre Mim</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certificates">Certificados</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isMenuOpen}
      >
        <div className="hamburger"></div>
      </button>
    </header>
  );
};

export default Header;