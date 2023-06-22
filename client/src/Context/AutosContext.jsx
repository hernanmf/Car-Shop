import { createContext } from "react";
import '../datos/autos';

let autos = require('../datos/autos'); //importacion de los datos desde otro script

export const AutosContext = createContext();

export const AutosProvider = ({ children }) => {
  return (
    <AutosContext.Provider value={ autos }>
      { children }
    </AutosContext.Provider>
  )
};