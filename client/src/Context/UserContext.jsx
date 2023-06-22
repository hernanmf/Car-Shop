import { createContext, useState } from "react";

let usuarios = require('../datos/usuarios'); //importacion de los datos desde otro script

export const UsuariosContext = createContext();

export const UsuariosProvider = ({ children }) => {
  
  const [activeUser, setactiveUser] = useState( false );
  
  return (
    <UsuariosContext.Provider value={{ usuarios, activeUser, setactiveUser }}>
      { children }
    </UsuariosContext.Provider>
  )
};