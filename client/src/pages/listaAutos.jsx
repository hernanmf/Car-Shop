import React from 'react'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import '../css/bloques.css';

const ListaAutos = () => {
  return (
    <>
      <div className='bloques-cerrado'>
        <Container>
          <h5>AUTOS</h5>
          <br />

          <Row xs={1} md={4} className='justify-content-center'>
          
            <Col /*key={}*/ className='mb-5' >
            <Card style={{ width: '18rem', height: '24rem'}} >
            <Image
              alt=""
              src="http://www.motoresapleno.com.ar/wp-content/uploads/2014/04/Ford-Fiesta-Kinetic-Design-Trend-Plus-1.6-Sedan-1.jpg"
              fluid
            />
            <Card.Body>
              <h6>Ford Fiesta Kinetic Design Titanium</h6>
              <h5>$ 3.400.000</h5>
              <p className="text-muted">2017 - 70000 km</p>
              <Button variant="danger">Ver mas</Button>
            </Card.Body>
            </Card>
            </Col>
              
            <Col /* key={} */ className='mb-5'>
            <Card style={{ width: '18rem', height: '24rem' }} >
            <Image
              alt=""
              src="https://resizer.glanacion.com/resizer/dWlOngl_skg1doCItj44-FwuyMI=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/VOC5FV2Y2NFZXL7MVI75I3IJWI.jpg"
              fluid    
            />
            <Card.Body>
              <h6>Ford Fiesta Kinetic Design Titanium</h6>
              <h5>$ 3.400.000</h5>
              <p className="text-muted">2017 - 70000 km</p>
              <Button variant="danger">Ver mas</Button>
            </Card.Body>
            </Card>
              </Col>
              
            <Col /* key={} */ className='mb-5'>
            <Card style={{ width: '18rem', height: '24rem'}}>
            <Image
              alt=""
              src="https://img.remediosdigitales.com/404f41/citroen_c4_cactus_10/1366_2000.jpg"
              fluid
            />
            <Card.Body>
              <h6>Ford Fiesta Kinetic Design Titanium</h6>
              <h5>$ 3.400.000</h5>
              <p className="text-muted">2017 - 70000 km</p>
              <Button variant="danger">Ver mas</Button>
            </Card.Body>
            </Card>
            </Col>
            
            <Col /* key={} */ className='mb-5'>
            <Card style={{ width: '18rem',height: '24rem' }} >
            <Image
              alt=""
              src="http://www.motoresapleno.com.ar/wp-content/uploads/2014/04/Ford-Fiesta-Kinetic-Design-Trend-Plus-1.6-Sedan-1.jpg"
              fluid
            />
            <Card.Body>
              <h6>Ford Fiesta Kinetic Design Titanium</h6>
              <h5>$ 3.400.000</h5>
              <p className="text-muted">2017 - 70000 km</p>
              <Button variant="danger">Ver mas</Button>
            </Card.Body>
            </Card>
            </Col>
            
            <Col /* key={} */ className='mb-5'>
            <Card style={{ width: '18rem', height: '24rem' }} >
            <Image
              alt=""
              src="http://www.motoresapleno.com.ar/wp-content/uploads/2014/04/Ford-Fiesta-Kinetic-Design-Trend-Plus-1.6-Sedan-1.jpg"
              fluid    
            />
            <Card.Body>
              <h6>Ford Fiesta Kinetic Design Titanium</h6>
              <h5>$ 3.400.000</h5>
              <p className="text-muted">2017 - 70000 km</p>
              <Button variant="danger">Ver mas</Button>
            </Card.Body>
            </Card>
            </Col>

            <Col /* key={} */ className='mb-5'>
            <Card style={{ width: '18rem',height: '24rem' }} >
            <Image
              alt=""
              src="https://img.remediosdigitales.com/404f41/citroen_c4_cactus_10/1366_2000.jpg"
              fluid 
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
        </Container>
      </div>
    </>
  );
}

export default ListaAutos