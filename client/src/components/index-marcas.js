import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import chevrolet from '../assets/images/brands/chevrolet.jpg';
import fiat from '../assets/images/brands/fiat.jpg';
import ford from '../assets/images/brands/ford.jpg';
import honda from '../assets/images/brands/honda.jpg';
import peugeot from '../assets/images/brands/peugeot.jpg';
import renault from '../assets/images/brands/renault.jpg';
import vw from '../assets/images/brands/vw.jpg';
import citroen from '../assets/images/brands/citroen.jpg';
import jeep from '../assets/images/brands/jeep.jpg';

import '../css/bloques.css';
import { AutosContext } from '../Context/AutosContext';

const marcas = [
  { imagen: chevrolet, nombre:'chevrolet' },
  { imagen: fiat, nombre:'fiat'},
  { imagen: ford, nombre:'ford'},
  { imagen: honda, nombre:'honda'},
  { imagen: peugeot, nombre:'peugeot'},
  { imagen: renault, nombre:'renault'},
  { imagen: vw, nombre:'volkswagen'},
  { imagen: citroen, nombre:'citroen'},
  { imagen: jeep, nombre: 'jeep' }
];

const Marcas = () => {
  const { autos, listado, setListado } = useContext(AutosContext);
  const navigate = useNavigate();

  const handleMarca = (marcaBuscada, e) => { 
    e.preventDefault();
    e.stopPropagation();
    console.log('Listado sin filtrar',autos);
    console.log('Marca', marcaBuscada);
    let nuevoListado = autos.filter(auto => auto.marca.toLowerCase() === marcaBuscada);
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
            MARCAS MAS BUSCADAS <Badge bg="secondary"></Badge>
          </h6>
        </div>
     <Container className='bloques'>
      <Row key='' xs={3} md={5} className="justify-content-md-center" >
          {marcas.map((marca) => (
            <Col>
              <Image src={marca.imagen} className='icon-button' roundedCircle
                onClick={(event) => handleMarca(marca.nombre, event)} />
            </Col>
          ))}
      </Row>
      </Container>
    </>
  );
}

export default Marcas;