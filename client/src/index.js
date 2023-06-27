import React from 'react';
import ReactDOM from 'react-dom/client';
import { UsuariosProvider } from './Context/UserContext';
import { AutosProvider } from './Context/AutosContext';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsuariosProvider>
      <AutosProvider>
        <App />
      </AutosProvider>
    </UsuariosProvider>
  </React.StrictMode>
);