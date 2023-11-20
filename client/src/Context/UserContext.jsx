import { createContext, useState } from "react";

//importacion de los datos desde otro script
let scriptUsuarios = require('../datos/usuarios'); 

export const UsuariosContext = createContext();

export const UsuariosProvider = ({ children }) => {
  
  const [activeUser, setactiveUser] = useState(false);

  /* useEffect(() => {
    fetch('http://localhost:3001/usuarios')
      .then((respuesta) => {
        setUsuarios(respuesta.json());
      })
      .catch((error) => {
        
      });
  }); */

  const [usuarios, setUsuarios] = useState(scriptUsuarios);
  
  return (
    <UsuariosContext.Provider value={{ usuarios , setUsuarios, activeUser, setactiveUser }}>
      { children }
    </UsuariosContext.Provider>
  )
};