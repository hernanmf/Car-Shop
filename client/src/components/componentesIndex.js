import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UsuariosContext } from '../Context/UserContext';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormBusqueda   from './index-formBusqueda';
import Tiposvehiculos from './index-tiposvehiculos';
import Segurosyfinanciacion  from './index-segurosyfinanciacionacceso';
import Marcas  from './index-marcas';

import '../css/componentesIndex.css';
import '../css/bloques.css';

const ComponentesIndex = () => {
  const { activeUser } = useContext(UsuariosContext);
  const navigate = useNavigate();
  
  const handleVenderVehiculo = () => {
    if (activeUser) {
      navigate('/nuevoauto', {});
      }else{
        let loguearme = window.confirm(`PARA VENDER TU VEHÍCULO, PRIMERO DEBERAS LOGUEARTE. \n DESEAS HACERLO?`);
        if (loguearme) {
          navigate('/login', {});
        }
      } 
  }

  return (
    <div className='bloques'>
        <div className="d-grid gap-2">
          <Button variant="outline-danger" size="lg" onClick={handleVenderVehiculo}>
            VENDÉ TU VEHÍCULO
          </Button>
        </div>
      <FormBusqueda />
      <Tiposvehiculos />
      <Marcas />
      <Segurosyfinanciacion />
    </div>
  )
}

export default ComponentesIndex;