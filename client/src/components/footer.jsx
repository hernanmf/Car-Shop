import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../css/nav.css';
import LogoChico from '../assets/images/logochico.png';

const Footer = () => {
  return (
     <Navbar variant="dark" className='colorapp' >
        <Container>
        <Navbar.Brand href="/" >
          <img
              alt=""
              src={LogoChico}
              width="160"
              height="80"
              className="d-inline-block"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Footer;