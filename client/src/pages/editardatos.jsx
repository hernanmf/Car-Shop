import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/bloques.css';

const Editardatos = () => {
  return (
    <>
      <Container style={{ minHeight: '80vh', }}>
       <br />
       <br />
      <h5>MIS DATOS</h5>
        <div className='bloques-cerrado'>
          <ListGroup as="ul">
            <ListGroup.Item as="li">
              <h6>Nombre Completo</h6>
              <Form.Control type="text" id="inputNombre" size='sm' className="mb-3" />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <h6>Correo electrónico</h6>
              <Form.Control type="text" id="inputEmail" size='sm' className="mb-3"/>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <h6>Teléfono</h6>
              <Form.Control type="text" id="inputTelefono" size='sm' className="mb-3"/>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <h6>Provincia</h6> 
              <Form.Control type="text" id="inputProvincia" size='sm' className="mb-3"/>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <h6>Localidad</h6> 
              <Form.Control type="text" id="inputLocalidad" size='sm' className="mb-3"/>
            </ListGroup.Item> 
          </ListGroup>
          <p>id user: ññañañañañalsldasd</p>
          <Row>
            <Col>
              <Button variant="success" type="submit" size="lg" className="button" id='btnConfirmar' >Confirmar</Button>
            </Col>
            <Col>
              <Button variant="danger" type="submit" size="lg" className="button" id='btnCancelar' href='misdatos'>Cancelar</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default Editardatos;