// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importa os estilos globais que você acabou de criar
import './styles/Index.css';

// Importa os estilos específicos do App (opcional, mas bom ter)
import './styles/App.css';

// Pega a div#root do seu index.html e renderiza a aplicação dentro dela
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);