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

  const { usuarios, activeUser, setactiveUser } = useContext(UsuariosContext);
  const navigate = useNavigate();

  const [validated, setValidated] = useState(true);
  console.log('LISTA DE USUARIOS ANTES DE LOGUEARNOS',usuarios);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (!activeUser) {
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        //si el form valida bien, hay q ver si el user existe
        let usuarioEncontrado = usuarios.find(usuario => usuario.correo_electronico === e.target.email.value.trim() && usuario.password === e.target.clave.value.trim());
        console.log('Usuario encontrado:', usuarioEncontrado);
        if (usuarioEncontrado) {
          setactiveUser(usuarioEncontrado);
          /* console.log('Bienvenido', activeUser ); */
          alert('BIENVENIDO A CAR SHOP');
          navigate('/', {
            /* replace: true */ //replace hace que cuando el user vuelva para atras no siga logueado
          });
        } else {
          alert('EL USUARIO NO EXISTE, REVISE LOS DATOS Y REINTENTE');
          setValidated(true);
        }
        e.preventDefault();
        e.stopPropagation();
      }
    } else {
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
              <Card.Img variant="top" src={LogoGrande} style={{ maxHeight: "37vh", maxWidth: "110vh" }}/>
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