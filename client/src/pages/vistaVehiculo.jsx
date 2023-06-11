import React from 'react'

import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import '../css/bloques.css';

const VistaVehiculo = () => {
  return (
    <div className='bloques-cerrado'>
      <Container>

        <p className="text-muted">2017 - 70000 km - Publicado: 20/03/2023</p>
        <h4>Ford Fiesta Kinetic Design Titanium</h4>
      
        <Carousel /* className="d-block w-100" */ interval={6000} >
          <Carousel.Item>
            <img
              style={{ /* minWidth:'100vw', */ maxWidth:'100vw', minHeight:'33vh', maxHeight:'33vh'  }}
              /* className="d-block w-100"  */
              src="http://www.motoresapleno.com.ar/wp-content/uploads/2014/04/Ford-Fiesta-Kinetic-Design-Trend-Plus-1.6-Sedan-1.jpg"
              alt=""
              />
          </Carousel.Item>          
          
          <Carousel.Item>
            <img style={{ /* minWidth:'100vw', */ maxWidth:'100vw', minHeight:'33vh', maxHeight:'33vh'  }}
            /* className="d-block w-100" */
            src="https://resizer.glanacion.com/resizer/dWlOngl_skg1doCItj44-FwuyMI=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/VOC5FV2Y2NFZXL7MVI75I3IJWI.jpg"
            alt=""
            />
          </Carousel.Item>  
          
          <Carousel.Item>
            <img style={{ /* minWidth:'100vw', */ maxWidth:'100vw', minHeight:'33vh', maxHeight:'33vh'  }}/* className="d-block w-100" */  
            src="https://img.remediosdigitales.com/404f41/citroen_c4_cactus_10/1366_2000.jpg"
            alt=""
            />
          </Carousel.Item>           
        
        </Carousel>
        <br />
        <h1>$ 4.400.000</h1>
        <br />

        <Accordion defaultActiveKey={['0','1']} alwaysOpen>
          
          <Accordion.Item eventKey="0">
          <Accordion.Header>Características</Accordion.Header>
            <Accordion.Body>
              
              <Table responsive hover striped borderless>
                <tbody >
                  <tr>
                    <td>Marca</td>
                    <td>Ford</td>
                  </tr>
                  <tr>
                    <td>Modelo</td>
                    <td>Fiesta KD</td>
                  </tr>
                  <tr>
                    <td>Version</td>
                    <td>Titanium</td>
                  </tr>
                  <tr>
                    <td>Año</td>
                    <td>2017</td>
                  </tr>
                  <tr>
                    <td>Kilometros</td>
                    <td>70000</td>
                  </tr>
                  <tr>
                    <td>Tipo Vehiculo</td>
                    <td>Auto</td>
                  </tr>
                  <tr>
                    <td>Transmision</td>
                    <td>Manual</td>
                  </tr>
                  <tr>
                    <td>Rodado</td>
                    <td>17</td>
                  </tr>
                  <tr>
                    <td>Potencia(cv)</td>
                    <td>96</td>
                  </tr>
                  <tr>
                    <td>Cap. carga(KG)</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>Traccion</td>
                    <td>Delantera</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>Gris</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          
          <Accordion.Item eventKey="1">
            <Accordion.Header>Descripcion</Accordion.Header>
            <Accordion.Body>
            
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
            
        <br />
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>Información del vendedor</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Fulano de tal</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger">Contactar</Button>
          </Card.Body>
        </Card>
      

        <br />

        <h5>Consejos de seguridad</h5>
        <Row xs={1} md={2} className='justify-content-center'>
          
          <Col /*key={}*/ className='mb-3' >
            <Card style={{ maxWidth: '100%' }}>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Seguí estos consejos cuando contactes al vendedor:</Card.Subtitle>
                <Card.Text>
                  Desconfiá si el vendedor dice que vive en el exterior o quiere venderlo muy rápido porque se muda.
                  <br/>
                  Si aseguran que Car Shop tiene el vehículo en un depósito, están mintiendo, no tenemos vehículos. No te contactes más con el vendedor y denunciá su publicación.
                  <br/>
                  Si acordás una visita, verificá la seguridad del lugar.
                  <br/>
                  No confíes en el vendedor si te presiona para que envíes un pago.
                  <br/>
                  Nunca te pediremos contraseñas, PIN o códigos de verificación por teléfono, e-mail o WhatsApp. No compartas estos datos con nadie.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col /*key={}*/ className='mb-3' >
            <Card style={{ maxWidth: '100%' }}>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Tené en cuenta esto antes de pagar:</Card.Subtitle>
                <Card.Text>
                  Dudá de ofertas debajo del precio de mercado. Asesorate sobre cual puede ser el rango de precios.
                  <br />
                  No pagues sin verificar personalmente la documentación y el estado del vehículo.
                  <br/>
                  Revisá que no haya impuestos sin pagar y que no tenga multas.
                  <br/>
                  Dudá si la cuenta que te brindan para hacer una transferencia es de un banco desconocido.
                  <br />
                  El precio puede incluir costos adicionales como acarreo, patentamiento y otros costos gubernamentales. Confirma el precio final con el vendedor del vehículo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <p className="text-muted">¿Tuviste algun problema con la publicación? <a href='#'>Avisanos</a></p>
        <p className="text-muted">id de publicacion: 93834783</p>
      </Container>
    </div>
  );
}

export default VistaVehiculo;