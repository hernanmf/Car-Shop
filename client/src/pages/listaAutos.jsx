import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';

import '../css/bloques.css';

const ListaAutos = () => {
  return (
    <>
      <Container>
      <h5>MIS DATOS</h5>
        <div className='bloques-cerrado'>
          <ListGroup as="ul">
            <ListGroup.Item as="li">
              <img
              alt=""
              src="http://www.motoresapleno.com.ar/wp-content/uploads/2014/04/Ford-Fiesta-Kinetic-Design-Trend-Plus-1.6-Sedan-1.jpg"
              width="80"
              height="80"
              className="d-inline-block"
            />
              <p>Ford Fiesta Kinetic Design Titanium</p> <br />
              <h4>$ 3.400.500</h4>
            </ListGroup.Item>


            <ListGroup.Item as="li"><h6>Correo electrónico</h6> <p>email@example.com</p></ListGroup.Item>
          </ListGroup>
          <Button variant="success" type="submit" size="lg" className="button" id='btnModificar' >Modificar datos</Button>
        </div>
      </Container>
    </>
  );
}

export default ListaAutos