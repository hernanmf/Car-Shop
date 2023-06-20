import React from 'react'
import { Link } from 'react-router-dom';

import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import chevrolet from '../assets/images/brands/chevrolet.jpg';
import fiat from '../assets/images/brands/fiat.jpg';
import ford from '../assets/images/brands/ford.jpg';
import honda from '../assets/images/brands/honda.jpg';
import peugeot from '../assets/images/brands/peugeot.jpg';
import renault from '../assets/images/brands/renault.jpg';
import vw from '../assets/images/brands/vw.jpg';
import citroen from '../assets/images/brands/citroen.jpg';
import jeep from '../assets/images/brands/jeep.jpg';

import '../css/bloques.css';

const Marcas = () => {
  return (
    <>
        <div className='bloques'>
          <h6>
            MARCAS MAS BUSCADAS <Badge bg="secondary"></Badge>
          </h6>
        </div>
     <Container className='bloques'>
      <Row xs={3} md={5} className="justify-content-md-center" >
        
        <Col>
            <Link to="/listaautos"><Image src={chevrolet} className='icon-button' roundedCircle />
            </Link>
        </Col>
        <Col>
            <Link to="/listaautos"><Image src={fiat} className='icon-button' roundedCircle />
            </Link>
        </Col>
        <Col>
          <Link to="/listaautos"><Image src={ford} className='icon-button' roundedCircle />
          </Link>
        </Col>
        <Col>
          <Link to="/listaautos"><Image src={honda} className='icon-button' roundedCircle />
          </Link>
        </Col>
        <Col>
          <Link to="/listaautos"><Image src={peugeot} className='icon-button' roundedCircle />
          </Link>
        </Col>
        <Col>
          <Link to="/listaautos"><Image src={renault} className='icon-button' roundedCircle />
          </Link>
        </Col>
        <Col>
          <Link to="/listaautos"><Image src={vw} className='icon-button' roundedCircle />
          </Link>
        </Col>
        <Col>
          <Link to="/listaautos"><Image src={citroen} className='icon-button' roundedCircle />
          </Link>
        </Col>
        <Col>
          <Link to="/listaautos"><Image src={jeep} className='icon-button' roundedCircle />
          </Link>
        </Col>
        
      </Row>
      </Container>
    </>
  );
}

export default Marcas;