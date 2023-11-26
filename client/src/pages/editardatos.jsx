import React, { useContext, useEffect, useState } from 'react'
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
  const [provincias, setProvincias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/provincias')
    .then((response) => response.json())
    .then((data) => {
      setProvincias(data);
    })
      .catch((error) => {
        alert('No hay provincias elegibles');
      });
  }, []);

  console.log(provincias);

  const handleModificarUsuario = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      //el form valida bien
      console.log(`Info vieja: `,activeUser);
      let newUserData = activeUser;
      newUserData.nombre =form.inputnombre.value.trim();
      newUserData.apellido =form.inputapellido.value.trim();
      newUserData.telefono =form.inputtelefono.value; 
      newUserData.provincia =form.inputprovincia.value.trim();
      newUserData.correoElectronico =form.inputcorreoElectronico.value.trim(); 
      newUserData.contraseña =form.inputcontraseña.value.trim();
      const contraseñaconfirmada =form.inputcontraseñaconfirmada.value.trim();
      if (newUserData.contraseña === contraseñaconfirmada) {
        
        alert ('claves coinciden');
    /*     console.log(`Info nueva: `, newUserData);
        
        setactiveUser(newUserData);
        console.log(`Nuevo usuario activo `, activeUser);
        
        console.log(`Array de usuarios `,usuarios);
        
        console.log('Usuario modificado', newUserData);
        navigate('/misdatos', {}); */
      } else {
        alert('La contraseña no coincide, reingresalas por favor!');
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
              <h6>Nombre/s</h6>
              <Form.Group>  
                  <Form.Control id='inputnombre' type="text" defaultValue={activeUser.nombre} className="mb-3" size='sm' required />
              </Form.Group>
            </ListGroup.Item>
            
            <ListGroup.Item as="li">
              <h6>Apellido/s</h6>
              <Form.Group>  
                  <Form.Control id='inputapellido' type="text" defaultValue={activeUser.apellido} className="mb-3" size='sm' required />
              </Form.Group>
            </ListGroup.Item>
              

            <ListGroup.Item as="li">
              <h6>Correo electrónico</h6>
              <Form.Control id='inputcorreoElectronico' type="email" defaultValue={activeUser.correoElectronico} className="mb-3" size='sm' required />
            </ListGroup.Item>
              
            <ListGroup.Item as="li">
              <h6>Teléfono</h6>
              <Form.Control id='inputtelefono' type="number" defaultValue={activeUser.telefono} className="mb-3" size='sm' required />
            </ListGroup.Item>
              
            <ListGroup.Item as="li">
              <h6>Provincia</h6>
              <Form.Select id="selectProvincia" defaultValue={activeUser.provincia.nombre}size='sm' className="mb-3" required>
                  {
                    provincias.map((opcion) => (
                    <option value={opcion.idProvincia}> {opcion.nombre} </option>
                  ))
                  }
              </Form.Select>
            </ListGroup.Item>
            
            <ListGroup.Item as="li">
              <h6>Cambiar Contraseña</h6> 
              <Form.Control id='inputContraseña' type="password" placeholder='Ingresá tu nueva contraseña' className="mb-3" size='sm' required /> 
              <Form.Control id='inputContraseñaConfirmada' type="password" placeholder='Repeti tu nueva contraseña' className="mb-3" size='sm' required /> 
            </ListGroup.Item> 
          </ListGroup>
          <p className='text-muted'>id user: {activeUser.idUsuario}</p>
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