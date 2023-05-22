import React from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

import '../css/bloques.css';
import creditoimg from '../images/creditoimg.jpg';
import seguroimg from '../images/seguroimg.jpg';

const Segurosyfinanciacion = () => {
  return (
    <>
      <div className='bloques'>
        <Row xs={2} md={2} className="g-4">
          <Col style={{ padding: '3vw' }}>
            <Card>
              <Card.Img variant="top" src={seguroimg} />
                <Card.Body>
                  <Card.Title>ASEGURÁ TU AUTO</Card.Title>
                </Card.Body>
            </Card>
          </Col>
          <Col style={{ padding: '3vw' }}>
            <Card >
              <Card.Img variant="top" src={creditoimg}/>
                <Card.Body>
                  <Card.Title>SIMULÁ TU CRÉDITO</Card.Title>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Segurosyfinanciacion;
