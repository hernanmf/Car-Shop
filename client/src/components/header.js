import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import InputGroup from 'react-bootstrap/InputGroup';


import '../css/nav.css';
import LogoChico from '../assets/images/logochico.png';
import { UsuariosContext } from '../Context/UserContext';
import { AutosContext } from '../Context/AutosContext';

const Header = () => {

  const { activeUser, setActiveUser } = useContext(UsuariosContext);
  const navigate = useNavigate();
  const { autos, listado, setListado, refreshAutosContext } = useContext(AutosContext);
  const [colorLetra, setColorLetra] = useState('white');
  const [show, setShow] = useState(false);
  
  //showHideMenu colorletra y show hacen cambios cuando se muestra el menu burguer
  const showHideMenu = () => {
    if (show) {
      setShow(false);
      setColorLetra('white');
    } else {
      setShow(true);
      setColorLetra('black');
    }
  }

  const cerrarBurguerMenu = () => {
    if (show) { showHideMenu(); }
  }

  const onLogOut = (e) => {
    e.preventDefault();
    let LogOut = window.confirm("Desea cerrar sesión realmente?");
    if (LogOut) {
      alert(`¡Chau! ${activeUser.nombre} esperamos que vuelvas pronto!`);
      setActiveUser(false);
      cerrarBurguerMenu();
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
      refreshAutosContext();
      let nuevoListado = autos; 

      const palabrasBuscadas = form.inputBusqueda.value.trim().toLowerCase().split(" ");
      const camposBuscados = ['tipo','anio','kilometros','transmision','rodado','potencia','capacidadcarga','traccion','color','precio','descripcionadicional'];
      nuevoListado = nuevoListado.filter(auto => {
        return palabrasBuscadas.every(palabra => { 
          return camposBuscados.some(campo => {
            if (auto.version.modelo.marca.nombre.toString().toLowerCase().includes(palabra)) {
              return auto.version.modelo.marca.nombre.toString().toLowerCase().includes(palabra);
            }
            if (auto.version.modelo.nombre.toString().toLowerCase().includes(palabra)) {
              return auto.version.modelo.nombre.toString().toLowerCase().includes(palabra);
            }
            if (auto.version.nombre.toString().toLowerCase().includes(palabra)) {
              return auto.version.nombre.toString().toLowerCase().includes(palabra);
            }
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
        <Container fluid>
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

          
          {(activeUser && !show)?
            <Nav.Link>
              <Link to="/misdatos" style={{ color: colorLetra, textDecoration: 'none' }} onClick={cerrarBurguerMenu}>
                ¡Hola {activeUser.nombre}!
              </Link>
            </Nav.Link>
            : <></>} 

          <Form className="d-flex" onSubmit={handleBuscar}>
            <InputGroup className="mb-1">
              <Form.Control placeholder="Marcas, modelos y mas.." id="inputBusqueda" required />
              <Button type="submit" variant="light" id="button-addon2" >Buscar</Button>
            </InputGroup>
          </Form>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} onClick={showHideMenu}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
              responsive="sm"
              show={ show }
              >
            
              <Offcanvas.Header closeButton className='colorapp' onClick={showHideMenu} >
                <Link to="/" style={{textDecoration: 'none'}}>
                 <img alt="" src={LogoChico} width="120" height="60" className="d-inline-block align-top"/>  
                </Link>
              </Offcanvas.Header>
            
              <Offcanvas.Body className='colorindex'>
                
              <Nav className="justify-content-end flex-grow-1 pe-3" variant="underline">
                <Nav.Link>
                  <Link to="/" style={{ color: colorLetra ,textDecoration: 'none' }} onClick={cerrarBurguerMenu}>
                  Inicio
                  </Link>
                </Nav.Link>
                { show? <></> : <Navbar.Text>I</Navbar.Text> }
                {activeUser ?
                  <>
                    <Nav.Link>
                      <Link to="/mispublicaciones" style={{ color: colorLetra ,textDecoration: 'none' }} onClick={cerrarBurguerMenu}>
                      Mis Publicaciones
                      </Link>
                    </Nav.Link>
                    { show? <></> : <Navbar.Text>I</Navbar.Text> }
                    <Nav.Link>
                      <Link to="/misdatos" style={{ color: colorLetra ,textDecoration: 'none' }} onClick={cerrarBurguerMenu}>
                      Mi Perfil
                      </Link>
                    </Nav.Link>
                    { show? <></> : <Navbar.Text>I</Navbar.Text> }
                    <Nav.Link>
                      <Link to="/" style={{ color: colorLetra ,textDecoration: 'none' }} onClick={onLogOut}>
                      Cerrar Sesión
                      </Link>
                    </Nav.Link>
                  </>  
                    :
                  <>
                    <Nav.Link>
                      <Link to="/login" style={{ color: colorLetra ,textDecoration: 'none' }} onClick={cerrarBurguerMenu}>
                      Loguearme
                      </Link>
                    </Nav.Link>
                    { show? <></> : <Navbar.Text>I</Navbar.Text> }
                    <Nav.Link>
                      <Link to="/nuevoUsuario" style={{ color: colorLetra ,textDecoration: 'none' }} onClick={cerrarBurguerMenu}>
                      Registrarme
                      </Link>
                    </Nav.Link>
                  </>}
                </Nav>
              </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;