import React from 'react'

import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';

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


        <h5>Características y detalles del auto</h5>


        <p className="text-muted">¿Tuviste algun problema con la publicación? <a href='#'>Avisanos</a></p>

        <Table responsive striped hover bordered>
          <tbody >
            <tr>
              <th>Marca</th>
              <th>Ford</th>
            </tr>
            <tr>
              <th>Modelo</th>
              <th>Fiesta KD</th>
            </tr>
            <tr>
              <th>Version</th>
              <th>Titanium</th>
            </tr>
            <tr>
              <th>Año</th>
              <th>2017</th>
            </tr>
            <tr>
              <th>Kilometros</th>
              <th>70000</th>
            </tr>
            <tr>
              <th>Tipo Vehiculo</th>
              <th>Auto</th>
            </tr>
            <tr>
              <th>Transmision</th>
              <th>Manual</th>
            </tr>
            <tr>
              <th>Rodado</th>
              <th>17</th>
            </tr>
            <tr>
              <th>Potencia(cv)</th>
              <th>96</th>
            </tr>
            <tr>
              <th>Cap. carga(KG)</th>
              <th>400</th>
            </tr>
            <tr>
              <th>Traccion</th>
              <th>Delantera</th>
            </tr>
            <tr>
              <th>Color</th>
              <th>Gris</th>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default VistaVehiculo;