import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

import '../css/bloques.css';
import creditoimg from '../assets/images/creditoimg.jpg';
import seguroimg from '../assets/images/seguroimg.jpg';

const Segurosyfinanciacion = () => {
  return (
    <>
      <div className='bloques'>
        <Row xs={2} md={2} className="g-4">
          <Col style={{ padding: '3vw' }}>
            <Link to={"/contacto"} className='link'>
            <Card>
              <Card.Img variant="top" src={seguroimg} />
                <Card.Body>
                  <Card.Title>ASEGURÁ TU AUTO</Card.Title>
                </Card.Body>
              </Card>
              </Link>
          </Col>
          <Col style={{ padding: '3vw' }}>
            <Link to={"/contacto"} className='link'>
            <Card >
              <Card.Img variant="top" src={creditoimg}/>
                <Card.Body>
                  <Card.Title>SIMULÁ TU CRÉDITO</Card.Title>
                </Card.Body>
              </Card>
              </Link>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Segurosyfinanciacion;
