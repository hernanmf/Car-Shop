import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UsuariosContext } from '../Context/UserContext';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NuevoUsuario = () => {

  const { usuarios, setUsuarios } = useContext(UsuariosContext);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleAgregarUsuario = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      //el form valida bien
      let newListadoUsuarios = usuarios;
      console.log('Listado de usuarios', newListadoUsuarios);
      let usuarioExiste = usuarios.find(usuario => usuario.correo_electronico === form.inputcorreo_electronico.value.trim() || usuario.telefono === form.inputtelefono.value);
      console.log('Usuario existe? ',usuarioExiste);
      if (!usuarioExiste) {
        let newUserData = {
          id: newListadoUsuarios.length + 1,
          nombre_completo: form.inputnombre_completo.value.trim(),
          correo_electronico: form.inputcorreo_electronico.value.trim(),
          password: form.inputpassword.value.trim(),
          telefono: form.inputtelefono.value,
          provincia: form.inputprovincia.value.trim(),
          localidad: form.inputlocalidad.value.trim()
        };
        console.log(`Nuevo usuario: `, newUserData);
        newListadoUsuarios.push(newUserData);
        console.log(`Nuevo listado de usuarios`, newListadoUsuarios);
        setUsuarios(newListadoUsuarios);
        
        console.log(`${newUserData.nombre_completo} te has registrado exitosamente! \n Logueate y busca ese vehículo que tanto estas buscando!`);
        window.alert(`${newUserData.nombre_completo} te has registrado exitosamente! \n Logueate y busca ese vehículo que tanto estas buscando!`);
        navigate('/login', {});
        e.preventDefault();
        e.stopPropagation();
      } else {
        console.log('Ya hay alguien listado con ese correo electronico o telefono, revise los datos y vuelva a intentar');
        window.alert('Ya hay alguien listado con ese correo electronico o telefono, revise los datos y vuelva a intentar');
      }
    }
    setValidated(true);
  }

  return (
    <>
      <Container style={{ minHeight: '80vh', }}>
      <br />
      <div className='bloques-cerrado'>
      <br />
      <h5>TUS DATOS</h5>
        <Form validated={validated} onSubmit={handleAgregarUsuario}> 
          <ListGroup as="ul">
            <ListGroup.Item as="li">
              <h6>Nombre Completo</h6>
              <Form.Group>  
                  <Form.Control id='inputnombre_completo' type="text"  className="mb-3" size='sm' required />
              </Form.Group>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Correo electrónico</h6>
              <Form.Control id='inputcorreo_electronico' type="email"  className="mb-3" size='sm' required />
            </ListGroup.Item>
              
            <ListGroup.Item as="li">
              <h6>Contraseña</h6>
              <Form.Control id='inputpassword' type="password" className="mb-3" size='sm' required />
              </ListGroup.Item>
              
            <ListGroup.Item as="li">
              <h6>Teléfono</h6>
              <Form.Control id='inputtelefono' type="number" className="mb-3" size='sm' required />
            </ListGroup.Item>
              
            <ListGroup.Item as="li">
              <h6>Provincia</h6> 
              <Form.Control id='inputprovincia' type="text" className="mb-3" size='sm' required />  
            </ListGroup.Item>
            
            <ListGroup.Item as="li">
              <h6>Localidad</h6> 
              <Form.Control id='inputlocalidad' type="text" className="mb-3" size='sm' required /> 
            </ListGroup.Item> 
          </ListGroup>
          <p className="text-muted">Deberas completar todos los datos, luego para acceder a tu cuenta te pediremos tu correo electrónico y la contraseña</p>
          <br />
          <Row>
            <Col>
              <Button variant="success" type="submit" size="lg" className="button" id='btnConfirmar'>Confirmar</Button>
            </Col>
            <Col>
              <Link to="/login" style={{textDecoration: 'none'}}>
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

export default NuevoUsuario;