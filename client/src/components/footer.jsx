import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../css/nav.css';
import LogoChico from '../assets/images/logochico.png';

const Footer = () => {
  const navigate = useNavigate();

  return (
     <Navbar variant="dark" className='colorapp' >
        <Container>
        <Navbar.Brand onClick={navigate('/', {})} >
          <img
              alt=""
              src={LogoChico}
              width="160"
              height="80"
              className="d-inline-block"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link onClick={navigate('/', {})}>Inicio</Nav.Link>
            <Nav.Link onClick={navigate('/contacto', {})}>Contacto</Nav.Link>
            <Nav.Link onClick={navigate('/', {})}>FAQ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Footer;