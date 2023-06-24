import { createContext, useState } from "react";

let scriptAutos = require('../datos/autos'); //importacion de los datos desde otro script

export const AutosContext = createContext();

export const AutosProvider = ({ children }) => {

  const [activeCar, setactiveCar] = useState(false);
  const [ autos ] = useState(scriptAutos);

  return (
    <AutosContext.Provider value={{ autos, activeCar, setactiveCar }}>
      { children }
    </AutosContext.Provider>
  )
};