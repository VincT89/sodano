import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root.jsx';
// font ospitati in locale (nessuna richiesta a Google Fonts → nessun trasferimento di dati)
import '@fontsource/sora/400.css';
import '@fontsource/sora/600.css';
import '@fontsource/sora/700.css';
import '@fontsource/sora/800.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/600.css';
import './styles/global.css';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <Root url={window.location.pathname} />
  </React.StrictMode>
);

// pagine generate in build: React "si aggancia" all'HTML già presente; in sviluppo la pagina parte vuota
if (container.firstElementChild) ReactDOM.hydrateRoot(container, app);
else ReactDOM.createRoot(container).render(app);
