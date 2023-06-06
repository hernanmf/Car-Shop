import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import '../css/bloques.css';

const MisPublicaciones = () => {
  return (
    <>
      <div className='bloques-cerrado'>
        <Container>
          <h5>MIS PUBLICACIONES</h5>
          <br />

          <Row xs={1} md={4}>
          
            <Col /* key={} */className='mb-5' >
              <Card style={{ width: '18rem', height: '24rem'}} >
                <Image alt="" src="http://www.motoresapleno.com.ar/wp-content/uploads/2014/04/Ford-Fiesta-Kinetic-Design-Trend-Plus-1.6-Sedan-1.jpg" fluid/>
                <Card.Body>
                  <h6>Ford Fiesta Kinetic Design Titanium</h6>
                  <h5>$ 3.400.000</h5>
                  <p className="text-muted">2017 - 70000 km</p>
                  <ButtonGroup size="sm">
                    <Button variant="danger">Ver</Button>
                    <Button variant="danger">Editar</Button>
                    <Button variant="danger">Eliminar</Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
            
            <Col /* key={} */className='mb-5' >
              <Card style={{ width: '18rem', height: '24rem'}} >
                <Image alt="" src="http://www.motoresapleno.com.ar/wp-content/uploads/2014/04/Ford-Fiesta-Kinetic-Design-Trend-Plus-1.6-Sedan-1.jpg" fluid/>
                <Card.Body>
                  <h6>Ford Fiesta Kinetic Design Titanium</h6>
                  <h5>$ 3.400.000</h5>
                  <p className="text-muted">2017 - 70000 km</p>
                  <ButtonGroup size="sm">
                    <Button variant="danger">Ver</Button>
                    <Button variant="danger">Editar</Button>
                    <Button variant="danger">Eliminar</Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
}

export default MisPublicaciones;