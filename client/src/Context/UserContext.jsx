import { createContext, useEffect, useState } from "react";

export const UsuariosContext = createContext();

export const UsuariosProvider = ({ children }) => {
  
  const [usuarios, setUsuarios] = useState([]);
  const [activeUser, setactiveUser] = useState(false);
 
  useEffect(() => {
    fetch('http://localhost:3001/usuarios')
    .then((response) => response.json())
    .then((data) => setUsuarios(data))
    .catch((error) => alert('Sitio Offline'));
  },[]);

  return (
    <UsuariosContext.Provider value={{ usuarios , setUsuarios, activeUser, setactiveUser }}>
      { children }
    </UsuariosContext.Provider>
  )
};