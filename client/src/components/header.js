import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  const [show, setShow] = useState(false);
  
  const showHideMenu = () => { 
    show ? setShow(false) : setShow(true);
  }

  const onLogOut = (e) => {
    e.preventDefault();
    showHideMenu();
    let LogOut = window.confirm("Desea cerrar sesión realmente?");
    if (LogOut) {
      alert(`¡CHAU! ${activeUser.nombre_completo} ESPERAMOS QUE VUELVAS PRONTO`);
      setactiveUser(false);
      navigate('/', {
      }); /* con navigate me refresca la pagina y me mata los estados */
    }
  }


  return (
    <>
      <Navbar key={'false'} expand={'sm'} className='colorapp'>
          <Container>
          <Navbar.Brand>
            <Link to="/" style={{textDecoration: 'none'}}>
            <img
              alt=""
              src={LogoChico}
              width="120"
              height="60"
              className="d-inline-block align-top"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} onClick={showHideMenu}/>
        
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
            responsive="sm"
            show={ show }
          >
            
              <Offcanvas.Header closeButton className='colorapp' onClick={showHideMenu}>
                <Link to="/" style={{textDecoration: 'none'}}>
                 <img alt="" src={LogoChico} width="120" height="60" className="d-inline-block align-top"/>  
                </Link>
              </Offcanvas.Header>
            
              <Offcanvas.Body onClick={showHideMenu}>
                <Col xs={12} md={8}>
                <Form className="d-flex">
                  <InputGroup className="mb-1">
                    <Form.Control placeholder="Buscá marcas, modelos y mas.." />
                    <Link to="/listaautos" style={{textDecoration: 'none'}}><Button variant="light" id="button-addon2">Buscar</Button></Link>
                  </InputGroup>
                </Form>
                </Col>
                
              
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>
                  <Link to="/" style={{ textDecoration: 'none' }} onClick={showHideMenu}>
                  Inicio
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contacto" style={{ textDecoration: 'none' }} onClick={showHideMenu}>
                  Contacto
                  </Link>
                </Nav.Link>
                  {activeUser ? <></> :
                  <Nav.Link>
                    <Link to="/login" style={{ textDecoration: 'none' }} onClick={showHideMenu}>
                    Loguearme
                    </Link>
                  </Nav.Link>}
                  
                  {activeUser ?
                  <NavDropdown title={`¡Hola! ${activeUser.nombre_completo}`} id={`offcanvasNavbarDropdown-expand-sm`}>
                    <NavDropdown.Item>
                      <Link to="/misdatos" style={{ textDecoration: '' }} onClick={showHideMenu}>
                      Mis datos
                      </Link>
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item>
                      <Link to="/editardatos" style={{ textDecoration: 'none' }} onClick={showHideMenu}>
                      Editar mis datos
                      </Link>
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item>
                      <Link to="/mispublicaciones" style={{ textDecoration: 'none' }} onClick={showHideMenu}>
                        Mis publicaciones
                      </Link>
                    </NavDropdown.Item>
                   
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