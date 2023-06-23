import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import FormBusqueda   from './index-formBusqueda';
import Tiposvehiculos from './index-tiposvehiculos';
import Segurosyfinanciacion  from './index-segurosyfinanciacionacceso';
import Marcas  from './index-marcas';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/componentesIndex.css';
import '../css/bloques.css';

const ComponentesIndex = () => {
  return (
    <div className='bloques'>
      <Link to="/nuevoauto" style={{textDecoration: 'none'}}>
        <div className="d-grid gap-2">
          <Button variant="outline-danger" size="lg" to='/nuevoauto'>
            VENDÉ TU AUTO
          </Button>
        </div>
      </Link>
      <FormBusqueda />
      <Tiposvehiculos />
      <Marcas />
      <Segurosyfinanciacion />
    </div>
  )
}

export default ComponentesIndex;