import { createContext, useEffect, useState } from "react";

export const AutosContext = createContext();

export const AutosProvider = ({ children }) => {
  const [autos, setAutos] = useState([]);
  const [activeCar, setactiveCar] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/publicaciones')
    .then((response) => response.json())
    .then((data) => {
      setAutos(data);
    })
      .catch((error) => {
        alert('Sitio Offline');
        setAutos([]);
      });
  }, []);
  
  const [listado, setListado] = useState(autos);

  return (
    <AutosContext.Provider value={{ autos ,setAutos , activeCar, setactiveCar, listado, setListado}}>
      { children }
    </AutosContext.Provider>
  )
};