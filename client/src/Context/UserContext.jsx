import { createContext, useEffect, useState } from "react";

export const UsuariosContext = createContext();

export const UsuariosProvider = ({ children }) => {
  
  const [usuarios, setUsuarios] = useState([]);
  const [activeUser, setactiveUser] = useState(false);
  
  function refreshUsuariosContext() { 
    fetch('http://localhost:3001/usuarios')
    .then((response) => response.json())
    .then((data) => setUsuarios(data))
    .catch((error) => alert('Sitio Offline'));
  }
  useEffect(() => {
    refreshUsuariosContext();
  },[]);

  return (
    <UsuariosContext.Provider value={{ usuarios , setUsuarios, activeUser, setactiveUser, refreshUsuariosContext }}>
      { children }
    </UsuariosContext.Provider>
  )
};