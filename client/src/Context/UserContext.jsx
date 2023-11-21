import { createContext, useEffect, useState } from "react";

export const UsuariosContext = createContext();

export const UsuariosProvider = ({ children }) => {
  
  const [activeUser, setactiveUser] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

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