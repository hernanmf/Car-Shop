import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';

import '../css/nav.css';
import LogoChico from '../assets/images/logochico.png';
import { UsuariosContext } from '../Context/UserContext';

const Header = () => {

  const { usuarios, activeUser, setactiveUser } = useContext(UsuariosContext);
  const navigate = useNavigate();

  const onLogOut = () => {
    let LogOut = window.confirm("Desea cerrar sesión realmente?");
    if (LogOut) {
      setactiveUser(false);
      navigate('/', {
        replace: true //replace hace que cuando el user vuelva para atras no siga logueado
      });
    }
  }


  return (
    <>
      <Navbar key={'false'} expand={'sm'} className='colorapp'>
          <Container >
          <Navbar.Brand href="/">
            <img
              alt=""
              src={LogoChico}
              width="120"
              height="60"
              className="d-inline-block align-top"
            /></Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
            responsive="sm"
          >
            
              <Offcanvas.Header closeButton className='colorapp'>
                 <img href="#" alt="" src={LogoChico} width="120" height="60" className="d-inline-block align-top"/>  
            </Offcanvas.Header>
            
              <Offcanvas.Body>
                <Col xs={12} md={8}>
                <Form className="d-flex">
                  <InputGroup className="mb-1">
                    <Form.Control placeholder="Buscá marcas, modelos y mas.." />
                    <Button variant="light" id="button-addon2" href='/listaautos'>Buscar</Button>
                  </InputGroup>
                </Form>
                </Col>
                
              
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Inicio</Nav.Link>
                  <Nav.Link href="/contacto">Contacto</Nav.Link>
                  {activeUser ? <></> :
                  <Nav.Link href="/login">Loguearme</Nav.Link> }
                  
                  {activeUser ?
                  <NavDropdown title={`¡Hola! ${activeUser.nombre_completo}`} id={`offcanvasNavbarDropdown-expand-sm`}>
                    <NavDropdown.Item href="/misdatos">Mis datos</NavDropdown.Item>
                    <NavDropdown.Item href="/editardatos">Editar mis datos</NavDropdown.Item>
                    <NavDropdown.Item href="/mispublicaciones">Mis publicaciones</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={onLogOut}>Cerrar sesión</NavDropdown.Item>
                  </NavDropdown>
                  : <></>}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
      </Navbar>
    </>
  );
}

export default Header;

/* import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
onClick={navigate('/misdatos', {})} */