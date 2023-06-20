import React from 'react';
import { Link } from 'react-router-dom';

import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


import motocicleta from '../assets/images/icons/motocicleta64.png';
import coche from '../assets/images/icons/coche64.png';
import camion from '../assets/images/icons/camion64.png';
import camioneta from '../assets/images/icons/camioneta64.png';

import '../css/bloques.css';

const Tiposvehiculos = () => {
  return (
    <>
    <div className='bloques'>
      <h6>
        TE PUEDE INTERESAR... <Badge bg="secondary"></Badge>
      </h6>
    </div>
     <Container className='bloques'>
      <Row>
        
        <Col xs={3} md={3}>
          <Link to="/listaautos"><Image src={coche} className='icon-button'/></Link>
        </Col>
        <Col xs={3} md={3}>
          <Link to="/listaautos"><Image src={motocicleta} className='icon-button'/></Link>
        </Col>
        <Col xs={3} md={3}>
          <Link to="/listaautos"><Image src={camioneta} className='icon-button'/></Link>
        </Col>
        <Col xs={3} md={3}>
          <Link to="/listaautos"><Image src={camion} className='icon-button'/></Link>
        </Col>
        
      </Row>
      </Container>
    </>
  );
}

export default Tiposvehiculos