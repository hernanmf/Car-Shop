import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AutosContext } from '../Context/AutosContext';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import '../css/bloques.css';

const FormBusqueda = () => {
  const navigate = useNavigate();
  const { autos, listado, setListado  } = useContext(AutosContext);
  
  const handleSubmit = (e) => {
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
      setListado(autos);
      let nuevoListado = autos;
      console.log('Listado sin filtrar', listado);
      let tipo = form.inputTipo.value.trim();
      console.log(tipo);
      let marca = form.inputMarca.value.trim();
      let modelo = form.inputModelo.value.trim();
      let anio = Number(form.inputAnio.value);
      e.preventDefault();
      e.stopPropagation();
      if (tipo!=='') {
        nuevoListado = nuevoListado.filter(auto => auto.tipo === tipo);  
      }
      console.log('Filtado por tipo', nuevoListado);
      if (marca!=='') {
        nuevoListado = nuevoListado.filter(auto => auto.marca === marca);  
      }
      console.log('Filtrado por marca', nuevoListado);
      if (modelo!=='') {
        nuevoListado = nuevoListado.filter(auto => auto.modelo === modelo);  
      }
      console.log('Filtrado por modelo', nuevoListado);
      if (anio) {
        nuevoListado = nuevoListado.filter(auto => auto.anio === anio);  
      }
      console.log('Filtrado por año y lista final', nuevoListado);
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
      <Card className='bloques-cerrado'>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} >
                <Form.Select defaultValue="Auto" id="inputTipo" required>
                  <option value="Auto"> Auto </option>
                  <option value="Camioneta"> Camioneta </option>
                  <option value="Camion"> Camión </option>
                  <option value="Colectivo"> Colectivo </option>
                  <option value="Maquinaria"> Maquinaria </option>
                  <option value="Moto"> Moto </option>
                  <option value="Remloque"> Remloque o trailer </option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Control type="text" placeholder="Marca" id="inputMarca"/>
              </Form.Group>
            </Row>

            <Row className="mb-0">
              
              <Form.Group className="mb-3" as={Col} >
                <Form.Control type="text" placeholder="Modelo" id="inputModelo"/>
              </Form.Group>
              
              <Form.Group className="mb-3" as={Col}>
                <Form.Control type="number" placeholder="Año" id="inputAnio"/>
              </Form.Group>
            
              <Form.Group className="mb-3" as={Col} id="formGridButton">
                  <Button type="submit" className="button" variant="danger">BUSCAR</Button>
              </Form.Group>
            
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default FormBusqueda;