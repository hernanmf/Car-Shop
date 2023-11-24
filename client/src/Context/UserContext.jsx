import { createContext, useState } from "react";

export const UsuariosContext = createContext();

export const UsuariosProvider = ({ children }) => {
  
  const [activeUser, setactiveUser] = useState(false);

  return (
    <UsuariosContext.Provider value={{ activeUser, setactiveUser }}>
      { children }
    </UsuariosContext.Provider>
  )
};