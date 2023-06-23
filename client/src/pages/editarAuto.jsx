import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/bloques.css';
import { Link } from 'react-router-dom';

const EditarAuto = () => {
  return (
    <>
      <Container>
      <br />
      <div className='bloques-cerrado'>
        <br />
          <h5>EDTIAR AUTO</h5>
        <br />
          <ListGroup as="ul">

            <ListGroup.Item as="li">
              <h6>Tipo de Vehículo</h6>
              <Form.Select defaultValue="Auto" id="selEditarTipo">
                  <option value="Auto"> Auto </option>
                  <option value="Camioneta"> Camioneta </option>
                  <option value="Camion"> Camión </option>
                  <option value="Colectivo"> Colectivo </option>
                  <option value="Maquinaria"> Maquinaria </option>
                  <option value="Moto"> Moto </option>
                  <option value="Remloque"> Remloque o trailer </option>
                </Form.Select>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Marca</h6>
              <Form.Control type="text" id="inputEditarMarca" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Modelo</h6>
              <Form.Control type="text" id="inputEditarModelo" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Versión*</h6> 
              <Form.Control type="text" id="inputEditarVersión" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Año</h6> 
              <Form.Control type="number" id="inputEditarAnio" size='sm' className="mb-3"/>
            </ListGroup.Item> 

            <ListGroup.Item as="li">
              <h6>Kilómetros</h6> 
              <Form.Control type="number" id="inputEditarKilometros" size='sm' className="mb-3"/>
            </ListGroup.Item> 

            <ListGroup.Item as="li">
            <h6>Transmisión*</h6>
            <Form.Select defaultValue="Manual" id="selEditarTransmision">
                <option value="Manual"> Manual </option>
                <option value="Automática"> Automática </option>
            </Form.Select>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Rodado*</h6> 
              <Form.Control type="number" id="inputEditarRodado" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Potencia(CV)*</h6> 
              <Form.Control type="number" id="inputEditarPotencia" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Capacidad de Carga*</h6> 
              <Form.Control type="number" id="inputEditarCapacidadCarga" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Tracción*</h6> 
              <Form.Select defaultValue="Delantera" id="selEditarTraccion">
                <option value="Delantera">Delantera</option>
                <option value="Trasera">Trasera</option>
                <option value="Integral">Integral</option>
            </Form.Select>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Color*</h6> 
              <Form.Control type="text" id="inputEditarColor" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Precio</h6> 
              <Form.Control type="number" id="inputEditarPrecio" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Descripcion adicional*</h6> 
              <Form.Control as="textarea" id="inputEditarDescripcion" rows={3} className="mb-3" placeholder='Aquí puedes poner cualquier otra información que creas que pueda ser importante para completar la descripcion de tu vehículo' />
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Fotos del vehículo</h6> 
              <Form.Control type="file" multiple id="inputEditarFotos" size='sm'  className="mb-3"/>
            </ListGroup.Item>
          
          </ListGroup>
          <p className="text-muted">Los datos con asterisco son opcionales, para el resto, te recomendamos ser lo mas preciso que puedas para describir mejor tu vehículo y así, poder mejorar tus oportunidades de venta.</p>
          <br />
          <Row>
            <Col>
              <Button variant="success" type="submit" size="lg" className="button" id='btnConfirmar' >Confirmar</Button>
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

export default EditarAuto;