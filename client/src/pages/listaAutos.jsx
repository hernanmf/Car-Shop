import React from 'react'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../css/bloques.css';

const ListaAutos = () => {
  return (
    <>
      <Container>
        <div className='bloques-cerrado'>
          <div className='cards-container'>

          <Row xs={1} md={3} /* className="g-3" */>
          
            <Col /* key={} */>
            <Card style={{ width: '18rem' }}>
            <img
              alt=""
              src="http://www.motoresapleno.com.ar/wp-content/uploads/2014/04/Ford-Fiesta-Kinetic-Design-Trend-Plus-1.6-Sedan-1.jpg"
              width='100%'
              height="100%"
              className="d-inline-block"
            />
            <Card.Body>
              <h6>Ford Fiesta Kinetic Design Titanium</h6>
              <h5>$ 3.400.000</h5>
              <p className="text-muted">2017 - 70000 km</p>
              <Button variant="danger">Ver mas</Button>
            </Card.Body>
            </Card>
              </Col>
              
            <Col /* key={} */>
            <Card style={{ width: '18rem' }}>
            <img
              alt=""
              src="http://www.motoresapleno.com.ar/wp-content/uploads/2014/04/Ford-Fiesta-Kinetic-Design-Trend-Plus-1.6-Sedan-1.jpg"
              width='100%'
              height="100%"
              className="d-inline-block"
            />
            <Card.Body>
              <h6>Ford Fiesta Kinetic Design Titanium</h6>
              <h5>$ 3.400.000</h5>
              <p className="text-muted">2017 - 70000 km</p>
              <Button variant="danger">Ver mas</Button>
            </Card.Body>
            </Card>
              </Col>
              
            <Col /* key={} */>
            <Card style={{ width: '18rem' }}>
            <img
              alt=""
              src="http://www.motoresapleno.com.ar/wp-content/uploads/2014/04/Ford-Fiesta-Kinetic-Design-Trend-Plus-1.6-Sedan-1.jpg"
              width='100%'
              height="100%"
              className="d-inline-block"
            />
            <Card.Body>
              <h6>Ford Fiesta Kinetic Design Titanium</h6>
              <h5>$ 3.400.000</h5>
              <p className="text-muted">2017 - 70000 km</p>
              <Button variant="danger">Ver mas</Button>
            </Card.Body>
            </Card>
            </Col>
          
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ListaAutos