import { React, useContext, useState } from 'react';
import { UsuariosContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

import '../css/login.css';
import LogoGrande from '../assets/images/logogrande.png';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const LogIn = () => {

  const { usuarios, activeUser, setactiveUser } = useContext(UsuariosContext);
  const navigate = useNavigate();

  const [validated, setValidated] = useState( true );

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      //si el form valida bien, hay q ver si el user existe
      let usuarioEncontrado = usuarios.find(usuario => usuario.correo_electronico === e.target.email.value && usuario.password === e.target.clave.value);
      console.log('Usuario encontrado:',usuarioEncontrado);
      if (usuarioEncontrado) {
        setactiveUser(usuarioEncontrado);
        /* console.log('Bienvenido', activeUser ); */
        alert('BIENVENIDO A CAR SHOP');
        navigate('/', {
          replace: true //replace hace que cuando el user vuelva para atras no siga logueado
        });
      } else {
        alert('EL USUARIO NO EXISTE, REVISE LOS DATOS Y REINTENTE');
        setValidated(true);      
      }
      e.preventDefault();
      e.stopPropagation();
    }
  };


  return (
     <>
      <Container>
        <Col style={{ padding: '1vw' }} >
            <Card>
              <Card.Img variant="top" src={LogoGrande} />
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
                
                  </Form>
                </Card.Body>
            </Card>
          </Col>
        </Container>
      </>
  );
}

  
export default LogIn;