import { React, useContext, useState } from 'react';
import '../css/login.css';
import LogoGrande from '../assets/images/logogrande.png';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { UsuariosContext } from '../Context/UserContext';

const LogIn = () => {

  const usuarios = useContext(UsuariosContext);
  
  const [activeUser, setUser] = useState( false );
  const [validated, setValidated] = useState( false );

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      //si el form valida bien, hay q ver si el user existe
      let usuarioEncontrado = usuarios.find(usuario => usuario.correo_electronico === e.target.email.value && usuario.password === e.target.clave.value);
      console.log(usuarioEncontrado);

      if (usuarioEncontrado){
        setUser(usuarioEncontrado);
        alert('Bienvenido' + JSON.stringify(activeUser) );
      } else {
        setUser(null);
        alert('El usuario no existe');
        setValidated(true);      
      }
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
                      <Form.Control.Feedback type="invalid">
                        Ingresa una dirección email válida
                      </Form.Control.Feedback>
                    </Form.Group>
        
                    <Form.Group>  
                      <FloatingLabel label="Contraseña" className='input-button'>
                        <Form.Control type="password" placeholder="Clave" id='clave' required/>
                      </FloatingLabel>
                      <Form.Control.Feedback type="invalid">
                        Ingresa una contraseña válida
                      </Form.Control.Feedback>
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

  
export default LogIn;