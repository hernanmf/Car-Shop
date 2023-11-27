import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UsuariosContext } from '../Context/UserContext';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/bloques.css';

const Editardatos = () => {

  const { usuarios, activeUser, setactiveUser } = useContext(UsuariosContext);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleModificarUsuario = (e) => {
    e.preventDefault();
      e.stopPropagation();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      alert('Alguno de los datos no fue ingresado correctamente, revise y vuelva a intentar');
    } else {
      //el form valida bien
      let newUserData = activeUser;
      console.log(`Info vieja: `, activeUser);
      newUserData.nombre_completo = form.inputnombre_completo.value.trim();
      newUserData.correo_electronico = form.inputcorreo_electronico.value.trim();
      newUserData.telefono = form.inputtelefono.value;
      newUserData.provincia = form.inputprovincia.value.trim();
      newUserData.password = form.inputContrasenia.value.trim();
      console.log(`Info nueva: `, newUserData);
      let contraseniaconfirmada = form.inputContraseniaConfirmada.value.trim();
      console.log(contraseniaconfirmada);
      console.log(newUserData.password);
      if (newUserData.password === contraseniaconfirmada) {
        setactiveUser(newUserData);
        console.log(`Nuevo usuario activo `, activeUser);
        console.log(`Array de usuarios `, usuarios);
        console.log('Usuario modificado', newUserData);
        alert('Los cambios se han realizado!');
        navigate('/misdatos', {});
      }else{
        alert('La contraseña no coincide, reingresalas por favor');
      }
    }
    setValidated(true);
    e.preventDefault();
    e.stopPropagation();
  }
  
  return (
    <>
      <Container style={{ minHeight: '80vh', }}>
      <br />
      <div className='bloques-cerrado'>
      <br />
      <h5>MIS DATOS</h5>
        <Form validated={validated} onSubmit={handleModificarUsuario}> 
          <ListGroup as="ul">
            <ListGroup.Item as="li">
              <h6>Nombre Completo</h6>
              <Form.Group>  
                  <Form.Control id='inputnombre_completo' type="text" defaultValue={activeUser.nombre_completo} className="mb-3" size='sm' required />
              </Form.Group>
            </ListGroup.Item>
              

            <ListGroup.Item as="li">
              <h6>Correo electrónico</h6>
              <Form.Control id='inputcorreo_electronico' type="email" defaultValue={activeUser.correo_electronico} className="mb-3" size='sm' required />
            </ListGroup.Item>
              
            <ListGroup.Item as="li">
              <h6>Teléfono</h6>
              <Form.Control id='inputtelefono' type="number" defaultValue={activeUser.telefono} className="mb-3" size='sm' required />
            </ListGroup.Item>
              
            <ListGroup.Item as="li">
              <h6>Provincia</h6> 
              <Form.Control id='inputprovincia' type="text" defaultValue={activeUser.provincia} className="mb-3" size='sm' required />  
            </ListGroup.Item>
            
            <ListGroup.Item as="li">
              <h6>Cambiar Contraseña</h6> 
              <Form.Control id='inputContrasenia' type="password" placeholder='Ingresá tu nueva contraseña' className="mb-3" size='sm' required /> 
              <Form.Control id='inputContraseniaConfirmada' type="password" placeholder='Repeti tu nueva contraseña' className="mb-3" size='sm' required /> 
            </ListGroup.Item> 
          </ListGroup>
          <p className='text-muted'>id user: {activeUser.id}</p>
          <Row>
            <Col>
              <Button variant="success" type="submit" size="lg" className="button" id='btnConfirmar'>Confirmar</Button>
            </Col>
            <Col>
              <Link to="/misdatos" style={{textDecoration: 'none'}}>
                <Button variant="danger" type="button" size="lg" className="button" id='btnCancelar'>Cancelar</Button>
              </Link>
            </Col>
          </Row>
          </Form>   
          <br />
        </div>
      </Container>
    </>
  )
}

export default Editardatos;