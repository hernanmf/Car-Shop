import React from 'react'

import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel';

import '../css/bloques.css';

const VistaVehiculo = () => {
  return (
    <div className='bloques-cerrado'>
      <Container>

        <p className="text-muted">2017 - 70000 km - Publicado: 20/03/2023</p>
        <h4>Ford Fiesta Kinetic Design Titanium</h4>
      
        <Carousel className="d-block w-100" interval={6000}>
          <Carousel.Item>
            <img style={{ width: '90%',height: '', maxHeight:'600px' }}/* className="d-block w-100" */  
            src="http://www.motoresapleno.com.ar/wp-content/uploads/2014/04/Ford-Fiesta-Kinetic-Design-Trend-Plus-1.6-Sedan-1.jpg"
            alt=""
            />
          </Carousel.Item>          
          
          <Carousel.Item>
            <img style={{ width: '90%',height: '', maxHeight:'600px' }}/* className="d-block w-100" */  
            src="https://resizer.glanacion.com/resizer/dWlOngl_skg1doCItj44-FwuyMI=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/VOC5FV2Y2NFZXL7MVI75I3IJWI.jpg"
            alt=""
            />
          </Carousel.Item>  
          
          <Carousel.Item>
            <img style={{ width: '90%',height: '', maxHeight:'600px' }}/* className="d-block w-100" */  
            src="https://img.remediosdigitales.com/404f41/citroen_c4_cactus_10/1366_2000.jpg"
            alt=""
            />
          </Carousel.Item>   
          
          <Carousel.Item>
            <img style={{ width: '90%',height: '', maxHeight:'600px' }}/* className="d-block w-100" */  
            src="http://www.motoresapleno.com.ar/wp-content/uploads/2014/04/Ford-Fiesta-Kinetic-Design-Trend-Plus-1.6-Sedan-1.jpg"
            alt=""
            />
          </Carousel.Item>          
        
        </Carousel>
        <br />
        <h1>$ 4.400.000</h1>



      </Container>
    </div>
  );
}

export default VistaVehiculo;