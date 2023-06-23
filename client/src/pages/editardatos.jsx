import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UsuariosContext } from '../Context/UserContext';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/bloques.css';

const Editardatos = () => {
  const { activeUser, setactiveUser } = useContext(UsuariosContext);
  
  const handleSubmit = (e) => {
    

  }
  
  return (
    <>
      <Container style={{ minHeight: '80vh', }}>
      <br />
      <div className='bloques-cerrado'>
      <br />
      <h5>MIS DATOS</h5>
          <ListGroup as="ul">
            <ListGroup.Item as="li">
              <h6>Nombre Completo</h6>
              <Form.Control type="text" id="inputNombre" size='sm' className="mb-3" value={activeUser.nombre_completo}/>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <h6>Correo electrónico</h6>
              <Form.Control type="text" id="inputEmail" size='sm' className="mb-3" value={activeUser.correo_electronico} />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <h6>Teléfono</h6>
              <Form.Control type="text" id="inputTelefono" size='sm' className="mb-3" value={activeUser.telefono}/>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <h6>Provincia</h6> 
              <Form.Control type="text" id="inputProvincia" size='sm' className="mb-3" value={activeUser.provincia}/>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <h6>Localidad</h6> 
              <Form.Control type="text" id="inputLocalidad" size='sm' className="mb-3" value={activeUser.localidad}/>
            </ListGroup.Item> 
          </ListGroup>
          <p>id user: {activeUser.id}</p>
          <Row>
            <Col>
              <Button variant="success" type="submit" size="lg" className="button" id='btnConfirmar' onClick={handleSubmit}>Confirmar</Button>
            </Col>
            <Col>
              <Link to="/misdatos" style={{textDecoration: 'none'}}>
                <Button variant="danger" type="submit" size="lg" className="button" id='btnCancelar'>Cancelar</Button>
              </Link>
            </Col>
          </Row>
          <br />
        </div>
      </Container>
    </>
  )
}

export default Editardatos;