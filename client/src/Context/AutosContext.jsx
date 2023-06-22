import { createContext } from "react";

let autos = require('../datos/autos'); //importacion de los datos desde otro script

export const AutosContext = createContext();

export const AutosProvider = ({ children }) => {
  return (
    <AutosContext.Provider value={ autos }>
      { children }
    </AutosContext.Provider>
  )
};