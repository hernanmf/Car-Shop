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
        <Navbar.Brand href="#home" >
          <img
              alt=""
              src={LogoChico}
              width="160"
              height="80"
              className="d-inline-block"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Footer;