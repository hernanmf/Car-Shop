import React, { useContext, useEffect, useState } from 'react';
import { AutosContext } from '../Context/AutosContext';
import { UsuariosContext } from '../Context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  const { activeUser } = useContext(UsuariosContext);
  const { autos, setAutos, activeCar, setactiveCar } = useContext(AutosContext);
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:3001/publicaciones/usuarios/'+activeUser.idUsuario;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPublicaciones(data))
      .catch((error) => alert('Falla en mis publicaciones'));
  }, [activeUser.idUsuario,setAutos]);

  console.log('usuario activo');
  console.log(activeUser);
  console.log(publicaciones);

  const handleActiveCar = (idauto, e) => {

    let newactiveCar = autos.find((auto => auto.idpublicacion === idauto));
    setactiveCar(newactiveCar);

    e.preventDefault();
    e.stopPropagation();
  };

  const handleDeleteCar = async (e) => { 
    console.log(activeCar);
    let DeleteCar = window.confirm(`${activeUser.nombre}, estas seguro que quieres eliminar el siguiente vehiculo? \n ${activeCar.version.modelo.marca.nombre} ${activeCar.version.modelo.nombre} ${activeCar.version.nombre} ${activeCar.anio}`);
    if (DeleteCar) {
      //delete de auto
      try {
      const url = 'http://localhost:3001/publicaciones/'+activeCar.idpublicacion;
      const response = await fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+activeUser.access_token, 
            },
          });
        console.log(response);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (response.ok) {
          alert('Vehiculo eliminado correctamente!');
          const url = 'http://localhost:3001/publicaciones/usuarios/'+activeUser.idUsuario;
          await fetch(url)
            .then((response) => response.json())
            .then((data) => setPublicaciones(data))
            .catch((error) => alert('API ERROR no se pudo refrescar mis publicaciones'));
          await fetch('http://localhost:3001/publicaciones')
            .then((response) => response.json())
            .then((data) => { setAutos(data); })
            .catch((error) => {
              alert('API ERROR no se pude refrescar publiaciones');
              setAutos([]);
            });
          navigate('/mispublicaciones', { }); 
        } else {
          throw new Error('API ERROR no se pudo borrar publicacion'); }
        } catch (error) {
          alert('API ERROR no se pudo borrar publicacion');
        }
      /* let newAutos = autos.filter(auto => auto.id !== activeCar.id);
      setAutos(newAutos); */
    }
  }


  return (
    <>
      <Container style={{minHeight: "80vh"}}>
        <br />
        <div className='bloques-cerrado'>
          <br />
          <h5>MIS PUBLICACIONES</h5>
          <br />

          <Row xs={1} md={4} className='justify-content-center'>

            {publicaciones.map((publi) => (
              <Col className='mb-5' key={publi.idpublicacion}>
                <Card style={{ maxWidth: '100%', minHeight: '44vh', maxHeight: '44vh' }} onMouseOver={(event) => handleActiveCar(publi.idpublicacion, event)} onTouchStart={(event) => handleActiveCar(publi.idpublicacion, event)}>
                  <Image alt="" src={publi.fotos[0].url} fluid />
                  <Card.Body>
                    <h6>{publi.version.modelo.marca.nombre} {publi.version.modelo.nombre} {publi.version.nombre}</h6>
                    <h5>$ {publi.precio}</h5>
                    <p className="text-muted">{publi.anio} - {publi.kilometros}km</p>
                    <ButtonGroup size="sm">
                      <Button variant="danger" id='btnVer' onClick={(event) => handleActiveCar(publi.idpublicacion, event)}>
                        <Link to="/vistavehiculo" style={{ color: 'white', textDecoration: 'none' }}>
                          Ver
                        </Link>
                      </Button>
                      <Button variant="danger" id='btnEditar' onClick={(event) => handleActiveCar(publi.idpublicacion, event)}>
                        <Link to="/editarauto" style={{ color: 'white', textDecoration: 'none' }} >
                          Editar
                        </Link>
                      </Button>
                      <Button variant="danger" id='btnEliminar' onClick={(event) => handleDeleteCar(event)}>
                        <Link to="/misdatos" style={{ color: 'white', textDecoration: 'none' }}>
                          Eliminar
                        </Link>
                      </Button>
                    </ButtonGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <Col className='mb-5' >  
              <Link to="/nuevoauto" style={{ textDecoration: 'none' }}>
              <Card style={{ maxWidth: '100%', maxHeight: '52vh' , minHeight:'44vh'}} >
                <Image alt="" src={nuevoIcon} style={{ maxWidth: '100%', maxHeight: '34vh' }} fluid/>
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