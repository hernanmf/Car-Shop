import { createContext, useState } from "react";

export const UsuariosContext = createContext();

export const UsuariosProvider = ({ children }) => {
  
  const [activeUser, setActiveUser] = useState(false);
  const [userToken, setUserToken] = useState(false);
  const [misPublicaciones, setMisPublicaciones] = useState();

  return (
    <UsuariosContext.Provider value={{ activeUser, setActiveUser, userToken, setUserToken, misPublicaciones, setMisPublicaciones}}>
      { children }
    </UsuariosContext.Provider>
  )
};