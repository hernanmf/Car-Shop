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
import { AutosContext } from '../Context/AutosContext';

const Header = () => {

  const { usuarios, activeUser, setactiveUser } = useContext(UsuariosContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { autos, listado, setListado  } = useContext(AutosContext);
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


  const handleBuscar = (e) => {
    e.preventDefault();
      e.stopPropagation();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      //si el form valida bien, hay que listar
      setListado(autos);
      let nuevoListado = autos; 
      console.log('Listado sin filtrar', listado);
      
      const palabrasBuscadas = form.inputBusqueda.value.trim().toLowerCase().split(" ");
      const camposBuscados = ['tipo','marca','modelo','version','anio','kilometros','transmision','rodado','potencia','capacidad_carga','traccion','color','precio','descripcion_adicional'];
      console.log(palabrasBuscadas);
      nuevoListado = nuevoListado.filter(auto => {
        return palabrasBuscadas.every(palabra => { 
          return camposBuscados.some(campo => {
            return auto[campo].toString().toLowerCase().includes(palabra); 
          });
        });
      });
      console.log('Filtado resultado', nuevoListado);
      
      setListado(nuevoListado);
      e.preventDefault();
      e.stopPropagation();
    navigate('/listaautos', {});
    e.preventDefault();
    e.stopPropagation();
    }
  }
  return (
    <>
      <Navbar key={'false'} expand={'sm'} className='colorapp' sticky="top">
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
            
              <Offcanvas.Body>
                <Col xs={12} md={8}>
                <Form className="d-flex" onSubmit={handleBuscar}>
                  <InputGroup className="mb-1">
                    <Form.Control placeholder="Buscá marcas, modelos y mas.." id="inputBusqueda" required/>
                    <Button type="submit" variant="light" id="button-addon2" onClick={showHideMenu}>Buscar</Button>
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
                  <NavDropdown title="Mi Perfil" align={{ false: "start" }} id={`offcanvasNavbarDropdown-expand-sm`}>
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