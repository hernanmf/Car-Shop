import React, { useContext } from 'react'
import { AutosContext } from '../Context/AutosContext';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import '../css/bloques.css';

const ListaAutos = () => {

  const autos = useContext( AutosContext );
  console.log(autos);
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
                    style={{ maxWidth: '100%', /* height: '24rem', */maxHeight: '27vh'  }}
                  />
                  <Card.Body>
                    <h6>{auto.marca} {auto.modelo} {auto.version}</h6>
                    <h5>$ {auto.precio}</h5>
                    <p className="text-muted">{auto.anio} - {auto.kilometros} km</p>
                    <Button variant="danger" href='/vistavehiculo'>Ver mas</Button>
                  </Card.Body>
                </Card>
              </Col>))
            }
              
            <Col className='mb-5'>
            <Card style={{ maxWidth: '100%', height: '24rem', maxHeight:'52vh' }} >
            <Image
              alt=""
                  src="https://resizer.glanacion.com/resizer/dWlOngl_skg1doCItj44-FwuyMI=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/VOC5FV2Y2NFZXL7MVI75I3IJWI.jpg"
                  style={{ maxWidth: '100%', /* height: '24rem', */maxHeight: '327h'  }}
              fluid    
            />
            <Card.Body>
              <h6>Ford Fiesta Kinetic Design Titanium</h6>
              <h5>$ 2.200.000</h5>
              <p className="text-muted">2017 - 70000 km</p>
              <Button variant="danger" href='/vistavehiculo'>Ver mas</Button>
            </Card.Body>
            </Card>
              </Col>
              
            <Col className='mb-5'>
            <Card style={{ maxWidth: '100%', height: '24rem', maxHeight:'52vh'}}>
            <Image
              alt=""
                  src="https://img.remediosdigitales.com/404f41/citroen_c4_cactus_10/1366_2000.jpg"
                  style={{ maxWidth: '100%', /* height: '24rem', */maxHeight: '327h'  }}
              fluid
            />
            <Card.Body>
              <h6>Citroen C4 Cactus</h6>
              <h5>$ 3.300.000</h5>
              <p className="text-muted">2017 - 70000 km</p>
              <Button variant="danger" href='/vistavehiculo'>Ver mas</Button>
            </Card.Body>
            </Card>
            </Col>
            
            <Col className='mb-5'>
            <Card style={{ maxWidth: '100%',height: '24rem', maxHeight:'52vh' }} >
            <Image
              alt=""
                  src="http://www.motoresapleno.com.ar/wp-content/uploads/2014/04/Ford-Fiesta-Kinetic-Design-Trend-Plus-1.6-Sedan-1.jpg"
                  style={{ maxWidth: '100%', /* height: '24rem', */maxHeight: '327h'  }}
              fluid
            />
            <Card.Body>
              <h6>Ford Fiesta Kinetic Design Titanium</h6>
              <h5>$ 4.400.000</h5>
              <p className="text-muted">2017 - 70000 km</p>
              <Button variant="danger" href='/vistavehiculo'>Ver mas</Button>
            </Card.Body>
            </Card>
            </Col>
            
            <Col className='mb-5'>
            <Card style={{ maxWidth: '100%', height: '24rem', maxHeight:'52vh' }} >
            <Image
              alt=""
                  src="http://www.motoresapleno.com.ar/wp-content/uploads/2014/04/Ford-Fiesta-Kinetic-Design-Trend-Plus-1.6-Sedan-1.jpg"
                  style={{ maxWidth: '100%', /* height: '24rem', */maxHeight: '327h'  }}
              fluid    
            />
            <Card.Body>
              <h6>Ford Fiesta Kinetic Design Titanium</h6>
              <h5>$ 5.500.000</h5>
              <p className="text-muted">2017 - 70000 km</p>
              <Button variant="danger" href='/vistavehiculo'>Ver mas</Button>
            </Card.Body>
            </Card>
            </Col>

            <Col className='mb-5'>
            <Card style={{ maxWidth: '100%',height: '24rem', maxHeight:'52vh' }} >
            <Image
              alt=""
                  src="https://img.remediosdigitales.com/404f41/citroen_c4_cactus_10/1366_2000.jpg"
                  style={{ maxWidth: '100%', /* height: '24rem', */maxHeight: '327h'  }}
              fluid 
            />
            <Card.Body>
              <h6>Ford Fiesta Kinetic Design Titanium</h6>
              <h5>$ 6.600.000</h5>
              <p className="text-muted">2017 - 70000 km</p>
              <Button variant="danger" href='/vistavehiculo'>Ver mas</Button>
            </Card.Body>
            </Card>
            </Col>
          
            </Row>
        </div>
      </Container>
    </>
  );
}

export default ListaAutos