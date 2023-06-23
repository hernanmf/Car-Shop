import React from 'react'
import { useNavigate } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/bloques.css';

const NuevoAuto = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
      <br />
      <h5>Nuevo auto</h5>
        <div className='bloques-cerrado'>
          <ListGroup as="ul">

            <ListGroup.Item as="li">
              <h6>Tipo de Vehículo</h6>
              <Form.Select defaultValue="Auto">
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
              <Form.Control type="text" id="inputMarca" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Modelo</h6>
              <Form.Control type="text" id="inputModelo" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Versión*</h6> 
              <Form.Control type="text" id="inputVersión" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Año</h6> 
              <Form.Control type="number" id="inputAnio" size='sm' className="mb-3"/>
            </ListGroup.Item> 

            <ListGroup.Item as="li">
              <h6>Kilómetros</h6> 
              <Form.Control type="number" id="inputKilometros" size='sm' className="mb-3"/>
            </ListGroup.Item> 

            <ListGroup.Item as="li">
            <h6>Transmisión*</h6>
            <Form.Select defaultValue="Manual">
                <option value="Manual"> Manual </option>
                <option value="Automática"> Automática </option>
            </Form.Select>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Rodado*</h6> 
              <Form.Control type="number" id="inputRodado" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Potencia(CV)*</h6> 
              <Form.Control type="number" id="inputPotencia" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Capacidad de Carga*</h6> 
              <Form.Control type="number" id="inputCapacidadCarga" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Tracción*</h6> 
              <Form.Select defaultValue="Delantera">
                <option value="Delantera">Delantera</option>
                <option value="Trasera">Trasera</option>
                <option value="Integral">Integral</option>
            </Form.Select>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Color*</h6> 
              <Form.Control type="text" id="inputColor" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Precio</h6> 
              <Form.Control type="number" id="inputPrecio" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Descripcion adicional*</h6> 
              <Form.Control as="textarea" id="inputDescripcion" rows={3} className="mb-3" placeholder='Aquí puedes poner cualquier otra información que creas que pueda ser importante para completar la descripcion de tu vehículo' />
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Fotos del vehículo</h6> 
              <Form.Control type="file" multiple id="inputFotos" size='sm'  className="mb-3"/>
            </ListGroup.Item>
          
          </ListGroup>
          <p className="text-muted">Los datos con asterisco son opcionales, para el resto, te recomendamos ser lo mas preciso que puedas para describir mejor tu vehículo y así, poder mejorar tus oportunidades de venta.</p>
          <br />
          <Row>
            <Col>
              <Button variant="success" type="submit" size="lg" className="button" id='btnConfirmar'>Publicar</Button>
            </Col>
            <Col>
              <Button variant="danger" size="lg" className="button" id='btnCancelar' onClick={navigate('/misdatos', {})}>Cancelar</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default NuevoAuto;