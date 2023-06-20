import { React, useState } from 'react';
import '../css/login.css';
import LogoGrande from '../assets/images/logogrande.png';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

let Usuarios = [{
  "email": "hernanmartinezf@gmail.com",
  "clave": "123456789"
  },
  {
    "email": "admin",
    "clave": "admin"
  },
  {
  "email": "a",
  "clave": "0"
  }
];

const LogIn = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
     <>
      <Container>
        <Col style={{ padding: '1vw' }} >
            <Card>
              <Card.Img variant="top" src={LogoGrande} />
                <Card.Body>
                  <Card.Title>INICIA SESIÓN</Card.Title>
                  <Form validated={validated} /* onSubmit={handleSubmit} */ style={{ margin: '1vw' }}>
                    <Form.Group>  
                    <FloatingLabel controlId="floatingInput" label="Correo electrónico" className='input-button'>
                    <Form.Control type="email" placeholder="tuusuario@email.com" id='email' required />
                    </FloatingLabel>
                    </Form.Group>
        
                    <Form.Group>  
                    <FloatingLabel controlId="floatingPassword" label="Contraseña" className='input-button'>
                      <Form.Control type="password" placeholder="Clave" id='clave' required/>
                    </FloatingLabel>
                    </Form.Group>
                    
                    <Button variant="danger" type="submit" size="lg" className='input-button' id='btnIngresar'>Ingresar</Button>
                  </Form>
                </Card.Body>
            </Card>
          </Col>
        </Container>
      </>
  );
}

let email = document.getElementById("email");
let clave = document.getElementById("clave");
let btnIngresar = document.getElementById("btnIngresar");


  
export default LogIn;