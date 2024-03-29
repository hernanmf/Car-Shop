import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AutosContext } from '../Context/AutosContext';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/bloques.css';

const EditarAuto = () => {
  const { autos , activeCar , setactiveCar } = useContext(AutosContext);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [versiones, setVersiones] = useState([]);
  let listaModelos = modelos;
  /* let listaVersiones = versiones; */

  useEffect(() => {
    fetch('http://localhost:3001/versiones')
    .then((response) => response.json())
    .then((data) => {
      setVersiones(data);
    })
      .catch((error) => {
        alert('No hay provincias elegibles');
      });
    fetch('http://localhost:3001/modelos')
    .then((response) => response.json())
    .then((data) => {
      setModelos(data);
    })
      .catch((error) => {
        alert('No hay provincias elegibles');
      });
    fetch('http://localhost:3001/marcas')
    .then((response) => response.json())
    .then((data) => {
      setMarcas(data);
    })
      .catch((error) => {
        alert('No hay provincias elegibles');
      });
  }, []);

  const handleModificarVehiculo = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      alert("POR FAVOR REVISE LOS DATOS");
      setValidated(true);
      e.preventDefault();
      e.stopPropagation();
    } else {
      //el form valida bien
      console.log(`Info vieja: `, activeCar); 
      
      let newCarData = activeCar;
      newCarData.tipo =form.selectTipo.value.trim(); 
      newCarData.marca =form.selectMarca.value.trim(); 
      newCarData.modelo =form.selectModelo.value.trim(); 
      newCarData.anio =form.inputAnio.value; 
      newCarData.kilometros =form.inputKilometros.value; 
      newCarData.precio =form.inputPrecio.value; 
      newCarData.version = form.selectVersion.value.trim(); 
      newCarData.transmision =form.inputTransmision.value.trim(); 
      newCarData.rodado =form.inputRodado.value; 
      newCarData.potencia =form.inputPotencia.value.trim(); 
      newCarData.capacidad_carga =form.inputCapacidadCarga.value; 
      newCarData.traccion =form.inputTraccion.value.trim(); 
      newCarData.color =form.inputColor.value.trim(); 
      newCarData.descripcion_adicional =form.inputDescripcion.value.trim(); 
      newCarData.fotos[0] =form.inputFoto1.value.trim(); 
      newCarData.fotos[1] =form.inputFoto2.value.trim(); 
      newCarData.fotos[2] =form.inputFoto3.value.trim(); 
      
      console.log(`Info nueva: `,newCarData);
      
      setactiveCar(newCarData);
      console.log(`Nuevo vehiculo activo `, activeCar);
      
      console.log(`Array de vehiculos `,autos);
      alert('Vehiculo modificado con exito!');
      navigate('/misdatos', {});
      }
      setValidated(true);
      e.preventDefault();
      e.stopPropagation();
  }

  const handleCambiaMarca = (e) => {
    const form = e.currentTarget;
    console.log(form);
    const Marca = form.selectMarca.value;
    listaModelos = modelos.filter((modelo) => modelo.marca.nombre === Marca);
   }

  return (
    <>
      <Container>
      <br />
      <div className='bloques-cerrado'>
        <br />
        <h5>EDITAR AUTO</h5>
        <br />
        <Form validated={validated} onSubmit={handleModificarVehiculo}>
        <Row xs={1} md={2} className='justify-content-center'>
          
          <Col className='mb-3'>  
          <ListGroup as="ul">

            <ListGroup.Item as="li" key={'selMarca'}>
              <h6>Marca</h6>
                <Form.Select id="selectMarca" onChange={handleCambiaMarca} defaultValue={activeCar.version.modelo.marca.nombre} size='sm' className="mb-3" required>
                {marcas.map((opcion) => (
                  <option value={opcion.nombre}> {opcion.nombre} </option>))
                }
              </Form.Select>
            </ListGroup.Item>

            <ListGroup.Item as="li" key={'selModelo'}>
              <h6>Modelo</h6>
              <Form.Select id="selectModelo" defaultValue={activeCar.version.modelo.nombre}size='sm' className="mb-3" required>
                {listaModelos.map((opcion) => (
                  <option value={opcion.idModelo}> {opcion.nombre} </option>))
                }
              </Form.Select>
            </ListGroup.Item>

            <ListGroup.Item as="li" key={'selVersion'}>
              <h6>Versión</h6> 
              <Form.Select id="selectVersion" defaultValue={activeCar.version.nombre} size='sm' className="mb-3" required>
                {versiones.map((opcion) => (
                  <option value={opcion.idVersion}> {opcion.nombre} </option>))
                }
              </Form.Select>
            </ListGroup.Item>

            <ListGroup.Item as="li" key={'inAnio'}>
              <h6>Año</h6> 
              <Form.Control type="number" id="inputAnio" defaultValue={activeCar.anio} size='sm' className="mb-3" required/>
            </ListGroup.Item> 

            <ListGroup.Item as="li" key={'inKilometros'}>
              <h6>Kilómetros</h6> 
              <Form.Control type="number" id="inputKilometros" defaultValue={activeCar.kilometros} size='sm' className="mb-3"/>
            </ListGroup.Item> 

            <ListGroup.Item as="li" key={'inPrecio'}>
              <h6>Precio</h6> 
              <Form.Control type="number" id="inputPrecio" defaultValue={activeCar.precio} size='sm' className="mb-3" required/>
              </ListGroup.Item>
            </ListGroup>
          </Col>  

          <Col className='mb-3'>  
            <ListGroup as="ul">

            <ListGroup.Item as="li" key={'selTipo'}>
              <h6>Tipo de Vehículo</h6>
              <Form.Select id="selectTipo" defaultValue={activeCar.tipo} size='sm' className="mb-3" required>
                  <option value="Auto"> Auto </option>
                  <option value="Camioneta"> Camioneta </option>
                  <option value="Camiones"> Camión </option>
                  <option value="Colectivo"> Colectivo </option>
                  <option value="Maquinaria"> Maquinaria </option>
                  <option value="Moto"> Moto </option>
                  <option value="Remloque"> Remloque o trailer </option>
                </Form.Select>
                </ListGroup.Item>
                
            <ListGroup.Item as="li" key={'selTransmision'}>
            <h6>Transmisión*</h6>
            <Form.Select id="inputTransmision" defaultValue={activeCar.transmision} size='sm' className="mb-3">
                <option value="Manual"> Manual </option>
                <option value="Automática"> Automática </option>
            </Form.Select>
            </ListGroup.Item>

            <ListGroup.Item as="li" key={'inRodado'}>
              <h6>Rodado*</h6> 
              <Form.Control type="number" id="inputRodado" defaultValue={activeCar.rodado} size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li" key={'inPotencia'}>
              <h6>Potencia(CV)*</h6> 
              <Form.Control type="number" id="inputPotencia" defaultValue={activeCar.potencia} size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li" key={'inCapacidadCarga'}>
              <h6>Capacidad de Carga*</h6> 
              <Form.Control type="number" id="inputCapacidadCarga" defaultValue={activeCar.capacidad_carga} size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li" key={'selTraccion'}>
              <h6>Tracción*</h6> 
              <Form.Select defaultValue={activeCar.traccion} id="inputTraccion" size='sm' className="mb-3">
                <option value="Delantera">Delantera</option>
                <option value="Trasera">Trasera</option>
                <option value="Integral">Integral</option>
            </Form.Select>
            </ListGroup.Item>
          </ListGroup>
          </Col>
              
          <Col className='mb-3' style={ {width: "100%"} }>  
          <ListGroup as="ul" key={'inColor'}>
            <ListGroup.Item as="li">
              <h6>Color*</h6> 
              <Form.Control type="text" id="inputColor" defaultValue={activeCar.color} size='sm' className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li" key={'inDescripcioAdicional'}>
              <h6>Descripcion adicional*</h6> 
              <Form.Control as="textarea" id="inputDescripcionAdicional" defaultValue={activeCar.descripcion_adicional} rows={3} className="mb-3"/>
            </ListGroup.Item>

            <ListGroup.Item as="li" key={'inFotos'}>
              <h6>Fotos del vehículo</h6>
                {activeCar.fotos[0]?       
                    <Form.Control type="text" multiple id="inputFoto1" defaultValue={activeCar.fotos[0].url} size='sm' className="mb-3" required />
                    :
                    <Form.Control type="text" multiple id="inputFoto1" size='sm' className="mb-3" required />}
                {activeCar.fotos[1]?       
                    <Form.Control type="text" multiple id="inputFoto2" defaultValue={activeCar.fotos[1].url} size='sm' className="mb-3" required />
                    :
                    <Form.Control type="text" multiple id="inputFoto2" size='sm' className="mb-3" required />}
                {activeCar.fotos[2]?       
                    <Form.Control type="text" multiple id="inputFoto3" defaultValue={activeCar.fotos[2].url} size='sm' className="mb-3" required />
                    :
                    <Form.Control type="text" multiple id="inputFoto3" size='sm' className="mb-3" required />}
            </ListGroup.Item>
          </ListGroup>
          </Col>
        </Row>
            
          <p className="text-muted">Los datos con asterisco son opcionales, para el resto, te recomendamos ser lo mas preciso que puedas para describir mejor tu vehículo y así, poder mejorar tus oportunidades de venta. Y al menos una imagen del vehiculo que estas vendiendo</p>
          <br />
          <Row>
            <Col>
              <Button variant="success" type="submit" size="lg" className="button" id='btnConfirmar'>Confirmar</Button>
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

export default EditarAuto;