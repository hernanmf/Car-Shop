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
import Form from 'react-bootstrap/Form';

import '../css/bloques.css';

const MisPublicaciones = () => {
  
  const { activeUser } = useContext(UsuariosContext);
  const { autos, activeCar, setactiveCar } = useContext(AutosContext);
  let mispublicaciones = autos.filter(auto => auto.idusuario === activeUser.id);
  
  const handleActiveCar = (idAuto) => {
    /* const form = e.currentTarget; */

    console.log(idAuto);
    alert();

   /*  console.log('lo que me trae el value del boton: ',form.btnVer.value );
    alert('lo que me trae el value del boton: ', form.btnVer.value);

    let newactiveCar = mispublicaciones.find((auto => auto.id === form.btnVer.value));
    console.log('lo que me trae el arreglo con find: ',newactiveCar);
    alert('lo que me trae el arreglo con find: ', newactiveCar);
    
    setactiveCar(newactiveCar);
    console.log('Auto activo: ',activeCar);
    alert('Auto activo: ', activeCar);
    
    console.log('Auto activo: ', activeCar);
    alert('Auto activo: ', activeCar);
    e.preventDefault();
    e.stopPropagation();
    

    console.log('lo que me trae el value del boton: ',form.btnVer.value );
    alert('lo que me trae el value del boton: ', form.btnVer.value);

    let newactiveCar = mispublicaciones.find((auto => auto.id === form.btnVer.value));
    console.log('lo que me trae el arreglo con find: ',newactiveCar);
    alert('lo que me trae el arreglo con find: ', newactiveCar);
    
    setactiveCar(newactiveCar);
    console.log('Auto activo: ',activeCar);
    alert('Auto activo: ', activeCar);
    
    console.log('Auto activo: ', activeCar);
    alert('Auto activo: ', activeCar); 
    e.preventDefault();
    e.stopPropagation();
    */
  };

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
                  <Card style={{ maxWidth: '100%', maxHeight: '52vh' }} >
                    <Image alt="" src={auto.fotos[0]} fluid />
                    <Card.Body>
                      <h6>{auto.marca} {auto.modelo} {auto.version}</h6>
                      <h5>$ {auto.precio}</h5>
                      <p className="text-muted">{auto.anio} - {auto.kilometros}km</p>
                      {/* <Form onSubmit={handleActiveCar}> */}
                      <ButtonGroup size="sm">
                      <Button variant="danger" type='submit' id='btnVer' onClick={handleActiveCar(auto.id)} /* value={`${auto.id}`} */ /* onClick={handleActiveCar} */>
                          <Link to="/vistavehiculo" style={{ textDecoration: 'none' }}>
                          Ver
                          </Link>
                        </Button>
                      <Button variant="danger" type='submit' id='btnEditar' value={`${auto.id}`} /* onClick={handleActiveCar} */>
                          <Link to="/editarauto" style={{ textDecoration: 'none' }} >
                            Editar
                          </Link>
                        </Button>
                        <Button variant="danger" type='submit' id='btnEliminar' value={`${auto.id}`}>
                          <Link to="/misdatos" style={{ textDecoration: 'none' }}>
                            Eliminar
                          </Link>
                        </Button>
                      </ButtonGroup>
                      {/* </Form> */}
                    </Card.Body>
                  </Card>
                </Col>))
            }
 
          </Row>
        </div>
        <br />
      </Container>
    </>
  );
}

export default MisPublicaciones;