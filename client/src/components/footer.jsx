import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../css/nav.css';
import LogoChico from '../assets/images/logochico.png';

const Footer = () => {
  return (
     <Navbar variant="dark" className='colorapp'>
        <Container>
        <Navbar.Brand>
          <Link to="/" style={{textDecoration: 'none'}}>
          <img
              alt=""
              src={LogoChico}
              width="160"
              height="80"
              className="d-inline-block"
            />
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link><Link to="/" style={{textDecoration: 'none'}}>Inicio</Link></Nav.Link>
            <Nav.Link><Link to="/contacto" style={{textDecoration: 'none'}}>Contacto</Link></Nav.Link>
            <Nav.Link><Link to="/" style={{textDecoration: 'none'}}>FAQ</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Footer;