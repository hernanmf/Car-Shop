import React from 'react';

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
    <div class='bloques'>
      <div className="d-grid gap-2">
      <Button variant="outline-danger" size="lg">
        VENDÉ TU AUTO
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