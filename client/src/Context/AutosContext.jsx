import { createContext, useEffect, useState } from "react";

export const AutosContext = createContext();

export const AutosProvider = ({ children }) => {
  
  const [autos, setAutos] = useState([]);
  const [listado, setListado] = useState([]);
  const [activeCar, setactiveCar] = useState(false);

  function refreshAutosContext() {
    fetch('http://localhost:3001/publicaciones')
        .then((response) => response.json())
        .then((data) => {
          setAutos(data);
          setListado(data);
        })
        .catch((error) => alert('Sitio Offline'));
  }

    useEffect(() => {
      refreshAutosContext();
    }, []);

  return (
    <AutosContext.Provider value={{ autos ,setAutos , activeCar, setactiveCar, listado, setListado, refreshAutosContext }}>
      { children }
    </AutosContext.Provider>
  )
};