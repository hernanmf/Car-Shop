import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NuevoUsuario = () => {

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

  const handleAgregarUsuario = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      //el form valida bien
      const contrasenia = form.inputContrasenia.value.trim();
      const contraseniaConfirmada = form.inputContraseniaConfirmada.value.trim();
      if (contrasenia === contraseniaConfirmada) {
          let newUserData = {
            nombre: form.inputNombre.value.trim(),
            apellido: form.inputApellido.value.trim(),
            correoElectronico: form.inputCorreoElectronico.value.trim(),
            contraseña: contrasenia,
            telefono: form.inputTelefono.value,
            idprovincia: Number(form.selectProvincia.value),
          };
          console.log(`Nuevo usuario: `, newUserData);
          try {
          const response = await fetch('http://localhost:3001/usuarios', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              //Authorization: 'Bearer {token}', 
            },
            body: JSON.stringify(newUserData)
          });
          const jsonResponse = await response.json();
          console.log('response');
          console.log(jsonResponse)
            if (!response.ok) {
              jsonResponse.message.forEach((mensaje) => {
                window.alert(mensaje);
              });
            throw new Error('API ERROR login');
          }
          console.log(`${newUserData.nombre} te has registrado exitosamente! \nLogueate y busca ese vehículo que tanto estas buscando!`);
          window.alert(`${newUserData.nombre} te has registrado exitosamente! \nLogueate y busca ese vehículo que tanto estas buscando!`);
          navigate('/login', {}); 
          } catch (error) {
            alert('Revisa los datos e intenta nuevamente');
            setValidated(true);
          }
      } else {
        console.log('Las contraseñas no coinciden, revise los datos y vuelva a intentar');
        window.alert('Las contraseñas no coinciden, revise los datos y vuelva a intentar');
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
              <h6>Nombre</h6>
              <Form.Group>  
                  <Form.Control id='inputNombre' type="text"  className="mb-3" size='sm' required />
              </Form.Group>
            </ListGroup.Item>
            
              <ListGroup.Item as="li">
              <h6>Apellido</h6>
              <Form.Group>  
                  <Form.Control id='inputApellido' type="text"  className="mb-3" size='sm' required />
              </Form.Group>
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <h6>Correo electrónico</h6>
              <Form.Control id='inputCorreoElectronico' type="email"  className="mb-3" size='sm' required />
            </ListGroup.Item>
              
            <ListGroup.Item as="li">
              <h6>Teléfono</h6>
              <Form.Control id='inputTelefono' type="number" className="mb-3" size='sm' required />
            </ListGroup.Item>
              
            <ListGroup.Item as="li">
              <h6>Provincia</h6> 
              <Form.Select id="selectProvincia" size='sm' className="mb-3" required>
                  {
                    provincias.map((opcion) => (
                    <option value={opcion.idProvincia}> {opcion.nombre} </option>
                  ))
                  }
              </Form.Select>
            </ListGroup.Item>
              
            <ListGroup.Item as="li">
              <h6>Contraseña</h6>
              <Form.Control id='inputContrasenia' type="password" placeholder='Ingresá tu contraseña' className="mb-3" size='sm' required /> 
              <Form.Control id='inputContraseniaConfirmada' type="password" placeholder='Repeti tu contraseña' className="mb-3" size='sm' required />
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