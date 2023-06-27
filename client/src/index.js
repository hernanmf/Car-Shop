import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { AutosProvider } from './Context/AutosContext';
import { UsuariosProvider } from './Context/UserContext';

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