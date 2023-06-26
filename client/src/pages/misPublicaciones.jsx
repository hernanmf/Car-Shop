import React, { useContext } from 'react';
import { AutosContext } from '../Context/AutosContext';
import { UsuariosContext } from '../Context/UserContext';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import nuevoIcon from '../assets/images/icons/nuevoauto.png'
import '../css/bloques.css';

const MisPublicaciones = () => {
  
  const { activeUser } = useContext(UsuariosContext);
  const { autos, setAutos , activeCar, setactiveCar } = useContext(AutosContext);
  let mispublicaciones = autos.filter(auto => auto.idusuario === activeUser.id);
  
  const handleActiveCar = (idauto, e) => {

    let newactiveCar = autos.find((auto => auto.id === idauto));
    setactiveCar(newactiveCar);

    e.preventDefault();
    e.stopPropagation();
  };

  const handleDeleteCar = (idauto, e) => { 
    console.log(activeCar);
    let DeleteCar = window.confirm(`${activeUser.nombre_completo}, estas seguro que quieres eliminar el siguiente vehiculo? \n ${activeCar.marca} ${activeCar.modelo} ${activeCar.version} ${activeCar.anio}`);
    if (DeleteCar) {
      let newAutos = autos.filter(auto => auto.id !== activeCar.id);
      setAutos(newAutos);
      alert('Vehiculo eliminado correctamente!');
    }
    e.preventDefault();
    e.stopPropagation();
  }


  return (
    <>
      <Container style={{/* height: "100vh" ,*/minHeight: "75vh"}}>
        <br />
        <div className='bloques-cerrado'>
          <br />
          <h5>MIS PUBLICACIONES</h5>
          <br />

          <Row xs={1} md={4} className='justify-content-center'>

            {mispublicaciones.map((auto) => (
                <Col className='mb-5' >
                <Card style={{ maxWidth: '100%', minHeight:'44vh' ,maxHeight: '44vh' }} onMouseOver={(event) =>handleActiveCar(auto.id,event)} onTouchStart={(event) =>handleActiveCar(auto.id,event)}>
                    <Image alt="" src={auto.fotos[0]} fluid />
                    <Card.Body>
                      <h6>{auto.marca} {auto.modelo} {auto.version}</h6>
                      <h5>$ {auto.precio}</h5>
                      <p className="text-muted">{auto.anio} - {auto.kilometros}km</p>
                    <ButtonGroup size="sm">
                      <Button variant="danger" id='btnVer' onClick={(event) =>handleActiveCar(auto.id,event)}>
                          <Link to="/vistavehiculo" style={{ textDecoration: 'none' }}>
                          Ver
                          </Link>
                        </Button>
                      <Button variant="danger" id='btnEditar' onClick={(event) =>handleActiveCar(auto.id,event)}>
                          <Link to="/editarauto" style={{ textDecoration: 'none' }} >
                            Editar
                          </Link>
                        </Button>
                        <Button variant="danger" id='btnEliminar' onClick={(event) =>handleDeleteCar(auto.id,event)}>
                          <Link to="/misdatos" style={{ textDecoration: 'none' }}>
                            Eliminar
                          </Link>
                        </Button>
                      </ButtonGroup>
                    </Card.Body>
                  </Card>
                </Col>))
              }
            <Col className='mb-5' >  
              <Link to="/nuevoauto" style={{ textDecoration: 'none' }}>
              <Card style={{ maxWidth: '100%', maxHeight: '52vh' , minHeight:'44vh'}} >
                <Image alt="" src={nuevoIcon} fluid style={{ maxWidth: '100%', maxHeight: '34vh' }}/>
                  <Card.Body>
                    <ButtonGroup size="sm">
                        <Button variant="danger" id='btnCargar'>
                          Agregar nuevo vehiculo
                        </Button>
                    </ButtonGroup>
                  </Card.Body>
              </Card>
                      </Link>
            </Col>
          </Row>
        </div>
        <br />
      </Container>
    </>
  );
}

export default MisPublicaciones;