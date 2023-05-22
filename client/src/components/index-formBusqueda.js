import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import '../css/bloques.css';

const FormBusqueda = () => {
  return (
    <>
      <Card className='bloques-cerrado'>
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTipoVehiculo">
                <Form.Select defaultValue="Auto">
                  <option value="Auto"> Auto </option>
                  <option value="Camioneta"> Camioneta </option>
                  <option value="Camion"> Camión </option>
                  <option value="Colectivo"> Colectivo </option>
                  <option value="Maquinaria"> Maquinaria </option>
                  <option value="Moto"> Moto </option>
                  <option value="Remloque"> Remloque o trailer </option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridMarca">
                <Form.Control type="text" placeholder="Marca" />
              </Form.Group>
            </Row>

            <Row className="mb-0">
              
              <Form.Group className="mb-3" as={Col} controlId="formGridModelo">
                <Form.Control type="text" placeholder="Modelo" />
              </Form.Group>
              
              <Form.Group className="mb-3" as={Col} controlId="formGridAnio">
                <Form.Control type="number" placeholder="Año" />
              </Form.Group>
            
              <Form.Group className="mb-3" as={Col} id="formGridButton">
                <Button type="button" className="button" variant="danger">BUSCAR</Button>
              </Form.Group>
            
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default FormBusqueda;