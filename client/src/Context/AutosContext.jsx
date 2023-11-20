import { createContext, useState } from "react";

let scriptAutos = require('../datos/autos'); //importacion de los datos desde otro script

export const AutosContext = createContext();

export const AutosProvider = ({ children }) => {

  const [activeCar, setactiveCar] = useState(false);
  const [autos, setAutos] = useState(scriptAutos);
  const [listado, setListado] = useState(autos);

  return (
    <AutosContext.Provider value={{ autos ,setAutos , activeCar, setactiveCar, listado, setListado}}>
      { children }
    </AutosContext.Provider>
  )
};