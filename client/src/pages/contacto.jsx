import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/bloques.css';

const contacto = () => {
  return (
    <>
    <Container>
      <h5>Contactanos</h5>
      <div className='bloques-cerrado'>
        <ListGroup as="ul">
          <ListGroup.Item as="li">
            <h6>Nombre Completo</h6>
            <Form.Control type="text" id="inputNombre" size='sm' className="mb-3" />
          </ListGroup.Item>
          
          <ListGroup.Item as="li">
            <h6>Correo electrónico</h6>
            <Form.Control type="text" id="inputEmail" size='sm' className="mb-3" />
          </ListGroup.Item>
          
          <ListGroup.Item as="li">
            <h6>Teléfono</h6>
            <Form.Control type="text" id="inputTelefono" size='sm' className="mb-3" />
          </ListGroup.Item>

          <ListGroup.Item as="li">
            <h6>Motivo</h6>
            <Form.Select defaultValue="Problemas" id="selMotivo">
              <option value="Problemas">Problemas Técnicos</option>
              <option value="Denuncia">Denuncias, estafas..</option>
              <option value="Seguros">Asesoría en Seguros</option>
              <option value="Financiacion">Asesoría en Financiación</option>
            </Form.Select>
          </ListGroup.Item>
          
          <ListGroup.Item as="li">
            <h6>Envianos tu mensaje</h6>
            <Form.Control as="textarea" id="inputMensaje" rows={3} className="mb-3" placeholder='Danos toda la información que puedas para poder resolver la consulta, cuanta mas informacion que puedas darnos, mejor.' />
          </ListGroup.Item>

        </ListGroup>
        <Row>
          <Col>
            <Button variant="success" type="submit" size="lg" className="button" id='btnConfirmar' >Enviar</Button>
          </Col>
          <Col>
            <Button variant="danger" type="submit" size="lg" className="button" id='btnCancelar' href='misdatos'>Cancelar</Button>
          </Col>
        </Row>
      </div>
      </Container>
    </>
  )
};

export default contacto;
