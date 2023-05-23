import React from 'react';
import '../css/login.css';
import LogoGrande from '../assets/images/logogrande.png';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const LogIn = () => {
  return (
     <>
      <Container>
        <Col style={{ padding: '1vw' }} >
            <Card>
              <Card.Img variant="top" src={LogoGrande} />
                <Card.Body>
                  <Card.Title>INICIA SESIÓN</Card.Title>
                  <Form style={{ margin: '1vw' }}>
                    <FloatingLabel controlId="floatingInput" label="Correo electrónico" className='input-button'>
                      <Form.Control type="email" placeholder="tuusuario@email.com" />
                    </FloatingLabel>
        
                    <FloatingLabel controlId="floatingPassword" label="Constraseña" className='input-button'>
                      <Form.Control type="password" placeholder="Clave" />
                    </FloatingLabel>
      
                    <Button variant="danger" type="submit" size="lg" className='input-button'>Ingresar</Button>
                  </Form>
                </Card.Body>
            </Card>
          </Col>
        </Container>
      </>
  );
}

export default LogIn;