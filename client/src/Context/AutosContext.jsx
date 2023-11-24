import { createContext, useContext, useEffect, useState } from "react";
import { UsuariosContext } from "./UserContext";

export const AutosContext = createContext();

export const AutosProvider = ({ children }) => {
  
  const { activeUser } = useContext(UsuariosContext);
  const [autos, setAutos] = useState([]);
  const [activeCar, setactiveCar] = useState(false);

  async function refreshAutosContext() {
    await fetch('http://localhost:3001/publicaciones')
    .then((response) => response.json())
    .then((data) => {
      setAutos(data);
    })
    .catch((error) => alert('Sitio Offline'));
  }

  useEffect(() => {
    refreshAutosContext();
  }, [activeUser]);
  
  const [listado, setListado] = useState(autos);

  return (
    <AutosContext.Provider value={{ autos ,setAutos , activeCar, setactiveCar, listado, setListado, refreshAutosContext }}>
      { children }
    </AutosContext.Provider>
  )
};