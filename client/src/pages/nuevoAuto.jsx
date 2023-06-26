import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AutosContext } from '../Context/AutosContext';
import { UsuariosContext } from '../Context/UserContext';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/bloques.css';

const NuevoAuto = () => {
  const { autos, setAutos, activeCar, setactiveCar } = useContext(AutosContext);
  const {activeUser} = useContext(UsuariosContext)
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  
  const handleAgregarVehiculo = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      alert("POR FAVOR REVISE LOS DATOS");
      setValidated(true);
      e.preventDefault();
      e.stopPropagation();
    } else {
      //el form valida bien
      let newCarData = autos[autos.length-1];
      console.log('Ultimo objeto del array', newCarData);
      newCarData.id = autos.length;
      newCarData.idusuario = activeUser.id;
      newCarData.tipo =form.inputTipo.value.trim(); 
      newCarData.marca =form.inputMarca.value.trim(); 
      newCarData.modelo =form.inputModelo.value.trim(); 
      newCarData.anio =form.inputAnio.value; 
      newCarData.kilometros =form.inputKilometros.value; 
      newCarData.precio =form.inputPrecio.value; 
      newCarData.version = form.inputVersion.value.trim(); 
      newCarData.transmision =form.inputTransmision.value.trim(); 
      newCarData.rodado =form.inputRodado.value; 
      newCarData.potencia =form.inputPotencia.value.trim(); 
      newCarData.capacidad_carga =form.inputCapacidadCarga.value; 
      newCarData.traccion =form.inputTraccion.value.trim(); 
      newCarData.color =form.inputColor.value.trim(); 
      newCarData.descripcion_adicional =form.inputDescripcion.value.trim(); 
      newCarData.fotos[0] =form.inputFoto1.value.trim(); 
      newCarData.fotos[1] =form.inputFoto2.value.trim(); 
      newCarData.fotos[2] = form.inputFoto3.value.trim(); 
      
      console.log('Nuevo auto', newCarData);
      let newAutosListado = autos;
      newAutosListado.push(newCarData);
      setAutos(newAutosListado);

      console.log('Nuevo listado de autos', autos);
      setactiveCar(newCarData);
      alert('Vehiculo publicado con exito!');
      navigate('/vistaVehiculo', {});
  }

  return (
    <>
      <Container>
      <br />
      <div className='bloques-cerrado'>
      <br />
      <h5>Nuevo auto</h5>
      <Form validated={validated} onSubmit={handleAgregarVehiculo}>
        <Row xs={1} md={2} className='justify-content-center'>
          
          <Col className='mb-3'>  
          <ListGroup as="ul">

            <ListGroup.Item as="li">
              <h6>Marca</h6>
              <Form.Control type="text" id="inputMarca"size='sm' className="mb-3" required/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Modelo</h6>
              <Form.Control type="text" id="inputModelo" size='sm' className="mb-3" required/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Versión*</h6> 
              <Form.Control type="text" id="inputVersion" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Año</h6> 
              <Form.Control type="number" id="inputAnio" size='sm' className="mb-3" required/>
            </ListGroup.Item> 

            <ListGroup.Item as="li">
              <h6>Kilómetros</h6> 
              <Form.Control type="number" id="inputKilometros" size='sm' className="mb-3"/>
            </ListGroup.Item> 

            <ListGroup.Item as="li">
              <h6>Precio</h6> 
              <Form.Control type="number" id="inputPrecio" size='sm' className="mb-3" required/>
              </ListGroup.Item>
            </ListGroup>
          </Col>  

          <Col className='mb-3'>  
            <ListGroup as="ul">

            <ListGroup.Item as="li">
              <h6>Tipo de Vehículo</h6>
              <Form.Select id="inputTipo" size='sm' className="mb-3" required>
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
            <h6>Transmisión*</h6>
            <Form.Select id="inputTransmision" size='sm' className="mb-3">
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
              <Form.Select id="inputTraccion" size='sm' className="mb-3">
                <option value="Delantera">Delantera</option>
                <option value="Trasera">Trasera</option>
                <option value="Integral">Integral</option>
            </Form.Select>
            </ListGroup.Item>
          </ListGroup>
          </Col>
              
          <Col className='mb-3' style={ {width: "100%"} }>  
          <ListGroup as="ul">
            <ListGroup.Item as="li">
              <h6>Color*</h6> 
              <Form.Control type="text" id="inputColor" size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Descripcion adicional*</h6> 
              <Form.Control as="textarea" id="inputDescripcion" rows={3} className="mb-3" placeholder='Aquí puedes poner cualquier otra información que creas que pueda ser importante para completar la descripcion de tu vehículo'/>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Fotos del vehículo</h6> 
              <Form.Control type="text" multiple id="inputFoto1" size='sm'  className="mb-3" required/>
              <Form.Control type="text" multiple id="inputFoto2" size='sm'  className="mb-3"/>
              <Form.Control type="text" multiple id="inputFoto3" size='sm'  className="mb-3"/>
            </ListGroup.Item>
          </ListGroup>
          </Col>
        </Row>   
          <p className="text-muted">Los datos con asterisco son opcionales, para el resto, te recomendamos ser lo mas preciso que puedas para describir mejor tu vehículo y así, poder mejorar tus oportunidades de venta. Y al menos una imagen del vehiculo que estas vendiendo</p>
          <br />
          <Row>
            <Col>
              <Button variant="success" type="submit" size="lg" className="button" id='btnConfirmar'>Publicar</Button>
            </Col>
            <Col>
              <Link to="/misdatos" style={{textDecoration: 'none'}}>
                <Button variant="danger" size="lg" className="button" id='btnCancelar'>Cancelar</Button>
              </Link>
            </Col>
            </Row>
          </Form>
          <br />
        </div>
      </Container>
    </>
  )
}

export default NuevoAuto;