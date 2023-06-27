/*  VERSION MIA QUE AL REFRESCAR SE PIERDEN LOS DATOS NUEVOS DEL CONTEXTO */
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

/*  VERSION DE CHATGPT QUE AL REFRESCAR SI PERSISTEN LOS DATOS NUEVOS DEL CONTEXTO -- pero que no funciona
import { createContext, useState, useEffect } from "react";

export const AutosContext = createContext();

export const AutosProvider = ({ children }) => {
  const [activeCar, setactiveCar] = useState(false);
  const [autos, setAutos] = useState([]);
  const [listado, setListado] = useState([]);

  // Cargar los datos de autos del almacenamiento local cuando se cargue la página
  useEffect(() => {
    const storedAutos = localStorage.getItem('autos');
    if (storedAutos) {
      setAutos(JSON.parse(storedAutos));
      setListado(JSON.parse(storedAutos));
    } else {
      setAutos(require('../datos/autos'));
      setListado(require('../datos/autos'));
    }
  }, []);

  // Guardar los datos de autos en el almacenamiento local cada vez que se actualicen
  useEffect(() => {
    localStorage.setItem('autos', JSON.stringify(autos));
  }, [autos]);

  return (
    <AutosContext.Provider value={{ autos, setAutos, activeCar, setactiveCar, listado, setListado }}>
      {children}
    </AutosContext.Provider>
  );
};*/