import { React, useContext, useState } from 'react';
import { UsuariosContext } from '../Context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

import '../css/login.css';
import LogoGrande from '../assets/images/logogrande.png';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const LogIn = () => {

  const { activeUser, setActiveUser, setUserToken} = useContext(UsuariosContext);
  const navigate = useNavigate();

  const [validated, setValidated] = useState(true);
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (!activeUser) {
      if (form.checkValidity() === true) {
        //si el form valida bien, hay q ver si el user existe
        const cuentaUsuario = {
          'contraseña': e.target.clave.value.trim(),
          'correoElectronico': e.target.email.value.trim(),
        }
        console.log(cuentaUsuario);
        try {
          const response = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              //Authorization: 'Bearer {token}', 
            },
            body: JSON.stringify(cuentaUsuario)
          });
          console.log(response);
          if (!response.ok) {
            throw new Error('API ERROR login');
          }
          const jsonResponse = await response.json();
          console.log(jsonResponse);
          setActiveUser(jsonResponse.usuario);
          setUserToken(jsonResponse.access_token);
          alert('BIENVENIDO A CAR SHOP');
          navigate('/', { }); 
        } catch (error) {
          alert('Usuario o clave erroneos, revise los datos y reintente nuevamente');
          setValidated(true);
        }
    }
    }else {
      alert('NO SE PERMITE INGRESO DE USUARIO SI NO CERRO LA SESION DEL ANTERIOR');
      navigate('/', {});
      e.preventDefault();
      e.stopPropagation();
    }
  };


  return (
     <>
      <Container style={{ minHeight: '78vh' }}>
        <Col style={{ padding: '1vw' }} >
          <Card style={{ maxWidth: "110vh", margin: "0 auto" }}>
              <Link to="/home" style={{ color: 'red' ,textDecoration: 'none' }}>
              <Card.Img variant="top" src={LogoGrande} style={{ maxHeight: "37vh", maxWidth: "110vh" }} />
              </Link>
              <Card.Body>
                <Card.Title>INICIA SESIÓN</Card.Title>
    
                <Form validated={validated} onSubmit={handleSubmit} style={{ margin: '1vw' }}>
                    
                  <Form.Group>  
                    <FloatingLabel label="Correo electrónico" className='input-button'>
                      <Form.Control type="email" placeholder="tuusuario@email.com" id='email' required />
                    </FloatingLabel>
                  </Form.Group>
        
                  <Form.Group>  
                    <FloatingLabel label="Contraseña" className='input-button'>
                      <Form.Control type="password" placeholder="Clave" id='clave' required/>
                    </FloatingLabel>
                  </Form.Group>
                  <Button variant="danger" type="submit" size="lg" className='input-button' id='btnIngresar'> Ingresar</Button>
              
                  <h6>¿NO TENES CUENTA? <Link to="/nuevoUsuario" style={{ color: 'red' ,textDecoration: 'none' }}>
                      UNITE
                    </Link>
                  </h6>
                  </Form>
                </Card.Body>
            </Card>
        </Col>
      </Container>
    </>
  );
}

export default LogIn;