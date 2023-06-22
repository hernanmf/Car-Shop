import { createContext } from "react";
/* import '../datos/usuarios'; */

let usuarios = require('../datos/usuarios'); //importacion de los datos desde otro script

export const UsuariosContext = createContext();

export const UsuariosProvider = ({ children }) => {
  return (
    <UsuariosContext.Provider value={ usuarios }>
      { children }
    </UsuariosContext.Provider>
  )
};