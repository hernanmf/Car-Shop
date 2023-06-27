/*  VERSION MIA QUE AL REFRESCAR SE PIERDEN LOS DATOS NUEVOS DEL CONTEXTO */
import { createContext, useState } from "react";

let scriptUsuarios = require('../datos/usuarios'); //importacion de los datos desde otro script

export const UsuariosContext = createContext();

export const UsuariosProvider = ({ children }) => {
  
  const [activeUser, setactiveUser] = useState(false);
  const [usuarios, setUsuarios] = useState(scriptUsuarios);
  
  return (
    <UsuariosContext.Provider value={{ usuarios , setUsuarios, activeUser, setactiveUser }}>
      { children }
    </UsuariosContext.Provider>
  )
};

/*  VERSION DE CHATGPT QUE AL REFRESCAR SI PERSISTEN LOS DATOS NUEVOS DEL CONTEXTO--- pero que no funciona
import { createContext, useState, useEffect } from "react";

export const UsuariosContext = createContext();

export const UsuariosProvider = ({ children }) => {
  
  const [activeUser, setactiveUser] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  
  // Cargar los datos de usuarios del almacenamiento local cuando se cargue la página
  useEffect(() => {
    const storedUsuarios = localStorage.getItem('usuarios');
    if (storedUsuarios) {
      setUsuarios(JSON.parse(storedUsuarios));
    } else {
      setUsuarios(require('../datos/usuarios'));
    }
  }, []);
  
  // Guardar los datos de usuarios en el almacenamiento local cada vez que se actualicen
  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }, [usuarios]);
  
  return (
    <UsuariosContext.Provider value={{ usuarios, setUsuarios, activeUser, setactiveUser }}>
      { children }
    </UsuariosContext.Provider>
  )
};
*/