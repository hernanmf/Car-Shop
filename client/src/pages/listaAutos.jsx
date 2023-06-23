import React, { useContext } from 'react'
import { AutosContext } from '../Context/AutosContext';
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import '../css/bloques.css';

const ListaAutos = () => {

  const autos = useContext(AutosContext);
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <div className='bloques-cerrado'>
          <br />
          <h5>AUTOS</h5>
          <br />

          <Row xs={1} md={4} className='justify-content-center'>
          
            {autos.map((auto) => (
              <Col className='mb-5' >
                <Card style={{ maxWidth: '100%', height: '24rem', maxHeight: '52vh' }} >
                  <Image
                    alt=""
                    src={auto.fotos[0]}
                    fluid
                    style={{ maxWidth: '100%', minHeight: '25vh', maxHeight: '27vh'  }}
                  />
                  <Card.Body>
                    <h6>{auto.marca} {auto.modelo} {auto.version}</h6>
                    <h5>$ {auto.precio}</h5>
                    <p className="text-muted">{auto.anio} - {auto.kilometros} km</p>
                    <Button variant="danger" onClick={navigate('/vistavehiculo', {})}>Ver mas</Button>
                  </Card.Body>
                </Card>
              </Col>))
            }
            </Row>
        </div>
      </Container>
    </>
  );
}

export default ListaAutos