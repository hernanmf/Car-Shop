import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UsuariosContext } from '../Context/UserContext';

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

const Header = () => {

  const { usuarios, activeUser, setactiveUser } = useContext(UsuariosContext);
  const navigate = useNavigate();

  const onLogOut = () => {
    let confirmLogOut = window.confirm("Desea cerrar sesión realmente?");
    if (confirmLogOut) {
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
          <Navbar.Brand onClick={ navigate('/', {}) }>
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
                 <img onClick={ navigate('/', {}) } alt="" src={LogoChico} width="120" height="60" className="d-inline-block align-top"/>  
            </Offcanvas.Header>
            
              <Offcanvas.Body>
                <Col xs={12} md={8}>
                <Form className="d-flex">
                  <InputGroup className="mb-1">
                    <Form.Control placeholder="Buscá marcas, modelos y mas.." />
                    <Button variant="light" id="button-addon2" onClick={ navigate('/listaautos', {}) } >Buscar</Button>
                  </InputGroup>
                </Form>
                </Col>
                
              
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* <Nav.Link onClick={ navigate('/', {}) }>Inicio</Nav.Link> */}
                  <Nav.Link onClick={ navigate('/contacto', {}) }>Contacto</Nav.Link>
                  { !activeUser ? <Nav.Link onClick={navigate('/login', {})}>Loguearme</Nav.Link> : <></>}
                  { activeUser ?
                  <NavDropdown title={activeUser? `¡Hola! ${activeUser.nombre_completo}`: `¡Hola!`} id={`offcanvasNavbarDropdown-expand-sm`}>
                    <NavDropdown.Item onClick={ navigate('/misdatos', {}) } >Mis datos</NavDropdown.Item>
                    <NavDropdown.Item onClick={ navigate('/editardatos', {}) }>Editar mis datos</NavDropdown.Item>
                    <NavDropdown.Item onClick={ navigate('/mispublicaciones', {}) }>Mis publicaciones</NavDropdown.Item>
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