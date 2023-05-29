import React from 'react';

import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Misdatos = () => {
  return (
    <Container className="justify-content-center">
      
      <Form>

        <Form.Group as={Row} className="mb-2" controlId="formPlaintextName">
          <Form.Label column sm="2">Nombre Completo</Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="Hernan Martinez" />
          </Col>
        </Form.Group>
     
        <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
          <Form.Label column sm="2">Correo electrónico</Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="email@example.com" />
          </Col>
        </Form.Group>
     
        <Form.Group as={Row} className="mb-2" controlId="formPlaintextTelephone">
          <Form.Label column sm="2">Teléfono</Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="+54 223 1234567" />
          </Col>
        </Form.Group>
     
        <Form.Group as={Row} className="mb-2" controlId="formPlaintextProvince">
          <Form.Label column sm="2">Provincia</Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="Buenos Aires" />
          </Col>
        </Form.Group>
     
        <Form.Group as={Row} className="mb-2" controlId="formPlaintextLocation">
          <Form.Label column sm="2">Localidad</Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="Mar del Plata" />
          </Col>
        </Form.Group>
     
      </Form>

    </Container>
  );
}

export default Misdatos;