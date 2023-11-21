import React, { useContext } from 'react'
import { AutosContext } from '../Context/AutosContext';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import FormBusqueda from '../components/index-formBusqueda';
import Tiposvehiculos from '../components/index-tiposvehiculos';
import Marcas  from '../components/index-marcas';

import '../css/bloques.css';

const ListaAutos = () => {

  const { listado, setactiveCar} = useContext(AutosContext);
  
  const handleActiveCar = (idauto, e) => {

    let newactiveCar = listado.find((auto => auto.idpublicacion === idauto));
    setactiveCar(newactiveCar);

    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      {listado.length ===0 ?
        <>
          <div className='bloques'>
            <h1>No se han encontrado resultados con las caracteristicas que buscabas, volve a intentarlo</h1>
            <FormBusqueda />
            <Tiposvehiculos />
            <Marcas />
          </div>
        </>
      :
        <Container style={{ minHeight: '77vh' }}>
          <div className='bloques-cerrado'>
            <br />
            <h5>VEHÍCULOS</h5>
            <br />
            <Row key='' xs={1} md={4} className='justify-content-center'>
              {listado.map((auto) => (
                <Col className='mb-5' >
                  <Card style={{ maxWidth: '100%', minHeight: '47vh', maxHeight: '47vh' }} onMouseOver={(event) => handleActiveCar(auto.idpublicacion, event)} onTouchStart={(event) => handleActiveCar(auto.idpublicacion, event)}>
                    <Image
                      alt=""
                      src={auto.fotos[0]}
                      style={{ maxWidth: '100%', minHeight: '25vh', maxHeight: '27vh' }}
                      fluid
                      />
                     <Card.Body>
                      <h6>{auto.version.modelo.marca.nombre} {auto.version.modelo.nombre} {auto.version.nombre}</h6>
                      <h5>$ {auto.precio}</h5>
                      <p className="text-muted">{auto.anio} - {auto.kilometros} km</p>
                      <Button variant="danger" id='btnVer' onClick={(event) => handleActiveCar(auto.idpublicacion, event)}>
                        <Link to="/vistavehiculo" style={{ color:'white' ,textDecoration: 'none' }}>
                        Ver mas
                        </Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>))}
            </Row>
          </div>
        </Container>
      }                  
    </>
  );
}

export default ListaAutos