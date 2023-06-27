import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutosContext } from '../Context/AutosContext';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


import motocicleta from '../assets/images/icons/motocicleta64.png';
import coche from '../assets/images/icons/coche64.png';
import camion from '../assets/images/icons/camion64.png';
import camioneta from '../assets/images/icons/camioneta64.png';

import '../css/bloques.css';

const tipos = [
  { imagen: motocicleta, nombre: 'moto' },
  { imagen: coche, nombre: 'auto' },
  { imagen: camion, nombre: 'camion' },
  { imagen: camioneta, nombre: 'camioneta' }
];

const Tiposvehiculos = () => { 
  const { autos, listado, setListado } = useContext(AutosContext);
  const navigate = useNavigate();

  const handleTipo = (tipoBuscado, e) => { 
    e.preventDefault();
    e.stopPropagation();
    console.log('Listado sin filtrar',autos);
    console.log('Tipo', tipoBuscado);
    let nuevoListado = autos.filter(auto => auto.tipo.toLowerCase() === tipoBuscado);
    console.log('Nuevo listado', nuevoListado);
    setListado(nuevoListado);
    console.log('Listado', listado);
    navigate('/listaautos', {});
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <>
    <div className='bloques'>
      <h6>
        TE PUEDE INTERESAR...
      </h6>
    </div>
     <Container className='bloques'>
      <Row>
        {tipos.map((tipo) => (
          <Col xs={3} md={3}>
            <Image src={tipo.imagen} className='icon-button'
            onClick={(event) => handleTipo(tipo.nombre, event)}/>
          </Col>
        ))}
      </Row>
      </Container>
    </>
  );
}

export default Tiposvehiculos