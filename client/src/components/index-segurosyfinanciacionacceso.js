import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

import '../css/bloques.css';
import creditoimg from '../assets/images/creditoimg.jpg';
import seguroimg from '../assets/images/seguroimg.jpg';
import { UsuariosContext } from '../Context/UserContext';

const Segurosyfinanciacion = () => {

  const { activeUser } = useContext(UsuariosContext);
  const navigate = useNavigate();

  const handleDebeLoguearse = () => {
    if (activeUser) {
      navigate('/contacto', {});
      }else{
        let loguearme = window.confirm(`PRIMERO DEBERAS LOGUEARTE. \n DESEAS HACERLO?`);
        if (loguearme) {
          navigate('/login', {});
        }
      } 
  }

  return (
    <>
      <div className='bloques'>
        <Row xs={2} md={2} className="g-4">
          <Col style={{ padding: '3vw' }}>
            <Card onClick={handleDebeLoguearse}>
              <Card.Img variant="top" src={seguroimg} />
              <Card.Body>
                <Card.Title>ASEGURÁ TU AUTO</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ padding: '3vw' }}>
            <Card onClick={handleDebeLoguearse}>
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
