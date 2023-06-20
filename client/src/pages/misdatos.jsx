import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';

import MisPublicaciones from './misPublicaciones';
import '../css/bloques.css';

const Misdatos = () => {
  return (
    <>
      <br />
      <Container >
      <h5>MIS DATOS</h5>
        <div className='bloques-cerrado'>
          <ListGroup as="ul">
            <ListGroup.Item as="li"><h6>Nombre Completo</h6> <p>Hernan Martinez</p></ListGroup.Item>
            <ListGroup.Item as="li"><h6>Correo electrónico</h6> <p>email@example.com</p></ListGroup.Item>
            <ListGroup.Item as="li"><h6>Teléfono</h6> <p>+54 223 1234567</p></ListGroup.Item>
            <ListGroup.Item as="li"><h6>Provincia</h6> <p>Buenos Aires</p></ListGroup.Item>
            <ListGroup.Item as="li"><h6>Localidad</h6> <p>Mar del Plata</p></ListGroup.Item>  
          </ListGroup>
          <p>id user: ññañañañañalsldasd</p> 
          <Button variant="success" type="submit" size="lg" className="button" id='btnModificar' href='/editardatos'>Modificar datos</Button>
        </div>
        <br />
        <MisPublicaciones />
      </Container>
    </>
  );
} 

export default Misdatos;