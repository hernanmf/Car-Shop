import { createContext, useState } from "react";

let scriptUsuarios = require('../datos/usuarios'); //importacion de los datos desde otro script

export const UsuariosContext = createContext();

export const UsuariosProvider = ({ children }) => {
  
  const [activeUser, setactiveUser] = useState(false);
  const [usuarios, setUsuarios] = useState(scriptUsuarios);
  
  return (
    <UsuariosContext.Provider value={{ usuarios , setUsuarios, activeUser, setactiveUser }}>
      { children }
    </UsuariosContext.Provider>
  )
};