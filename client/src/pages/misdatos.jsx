import React, { useContext } from 'react';
import { UsuariosContext } from '../Context/UserContext';
import { Link } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';

import MisPublicaciones from './misPublicaciones';
import '../css/bloques.css';

const Misdatos = () => {
  const { activeUser } = useContext(UsuariosContext);

  return (
    <>
      <br />
      <Container >
      <div className='bloques-cerrado'>
        <br />
        <h5>MIS DATOS</h5>
          <ListGroup as="ul">
            <ListGroup.Item as="li"><h6>Nombre Completo</h6> <p>{activeUser.nombre_completo}</p></ListGroup.Item>
            <ListGroup.Item as="li"><h6>Correo electrónico</h6> <p>{activeUser.correo_electronico}</p></ListGroup.Item>
            <ListGroup.Item as="li"><h6>Teléfono</h6> <p>{activeUser.telefono}</p></ListGroup.Item>
            <ListGroup.Item as="li"><h6>Provincia</h6> <p>{activeUser.provincia}</p></ListGroup.Item>
          </ListGroup>
          <p>id user: {activeUser.id}</p> 
          <Link to="/editardatos" style={{textDecoration: 'none'}}>
            <Button variant="success" type="submit" size="lg" className="button" id='btnModificar'>Modificar datos</Button>
          </Link>
        <br />
        <br />
        </div>
        <MisPublicaciones />
      </Container>
    </>
  );
} 

export default Misdatos;