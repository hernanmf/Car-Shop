import { createContext, useState } from "react";
export const ServiciosContext = createContext(null);//crea el contexto
//proveedor del contexto
export default function ServiciosContextProvider({children}){
     const [servicios, setServicios]=useState([
        {
            id: "Pizza Dog",
            nombre: "Pizza Dog",
            servicio: "Restaurante",
            imagen: "https://www.alfaforni.com/wp-content/uploads/2022/10/20220928_142615-scaled.jpg",
            precio: 20,
            informacion: "Es la primera pizzeria Pet friendly de la zona. hay un sector exclusivo para las mascotas donde pueden disfrutar de un plato de alimento balanceado y agua. O si prefiere puede llevar a su mascota a su meza para que compartan el una experiencia inigualable",
            votos:45,
            puntuacion:180,
            localidad:"Ayacucho"
           },
             {
            id: "Palace",
            nombre: "Palace",
            servicio: "Hotel",
            imagen: "https://www.lugaresconhistoria.com/wp-content/uploads/2013/03/palace_hotel_madrid-ciukes.jpg",
            precio: 750,
            informacion: "Hotel de 5 estrellas para que pueda disfrutar de una experiencia unica. Disfrute de nuestra nueva pileta apta para mascotas. Cuidados caninos, zala de entretenimiento para gatos y nuestro exclusivo centro de estetica para mascotas. Todo esto ademas de nuestros servicios tradicionales! Contactese con nosotros para mas informacion",
            votos:250,
            puntuacion:1250,
            localidad:"Tandil"
           },
           {
            id: "CatZone",
            nombre: "CatZone",
            servicio: "Restaurante",
            imagen: "https://media-cdn.tripadvisor.com/media/photo-s/09/0e/f2/a4/patio-de-comidas.jpg",
            precio: 15,
            informacion: "disfrute de nuestro patio de comidas. tenemos lo mejores calzones de la ciudad. si viene con su mascota le regalamos un delicioso cafe!",
            votos:11,
            puntuacion:33,
            localidad:"tandil"
           }
     ])
        //paso en el value lo que quiero ocmpartir a los otros componentes
    return(
        <ServiciosContext.Provider value={{servicios, setServicios}}
        >
            {children}
        </ServiciosContext.Provider>
    )
}
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/

import Home from "./Home/Home.js";
import ServiciosContextProvider from './context/ServiciosContext.js';
import Tarjetero from "./tarjetero/Tarjetero";
function App() {
  return (
    <div >
      <ServiciosContextProvider>
        <Tarjetero/>
      </ServiciosContextProvider>
    </div>
  );
}
export default App;

/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/

import Tarjeta from '../tarjeta/Tarjeta'
import "./tarjetero.css"
import TarjetaBlog from '../tarjetaBlog/TarjetaBlog'
import CrearTarjeta from '../tarjeta/crearTarjeta/CrearTarjeta'
import { useContext } from 'react'
import { ServiciosContext } from '../context/ServiciosContext'
const Tarjetero = () => {
  const contextServicios=useContext(ServiciosContext)
  const tarjetas=contextServicios.servicios.map((t)=>(
    <Tarjeta  key={t.id} id={t.id} nombre={t.nombre} servicio={t.servicio} imagen={t.imagen} puntuacion={t.puntuacion} precio={t.precio} info={t.informacion} votos={t.votos} />
  ))
  console.log(contextServicios)
  return (
    <div className='tarjetero'>
        <TarjetaBlog/>
        <CrearTarjeta/>
        {tarjetas}
    </div>
  )
}
export default Tarjetero;

/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/

import {  useState } from 'react'
import "./tarjeta.css"
import ModalTarjeta from './modalTarjeta/ModalTarjeta';
import PuntuarTarjeta from './puntuarTarjeta/PuntuarTarjeta';
const Tarjeta = ({ id, nombre, servicio, imagen, puntuacion, precio, info, votos }) => {
  const [arrValores, setArrValores] = useState([id, nombre, servicio, imagen, puntuacion, precio, info, votos]);
  const actualizarArr = (nuevoArrValores) => {
    setArrValores(nuevoArrValores)
  };
  const actualizarPuntaje = (nuevoPuntaje) => {
    setPuntaje(nuevoPuntaje);
  };
  const actualizarSumaValoraciones = (nuevaSumaValoraciones) => {
    setSumaValoraciones(nuevaSumaValoraciones)
  };
  const [showModal, setShowModal] = useState(false);
  const [puntaje, setPuntaje] = useState(arrValores[4]);
  const [voto, setVoto] = useState(arrValores[7]);
  const [sumaValoraciones, setSumaValoraciones] = useState(puntuacion)
  const mostrar = () => {
    if (showModal === false) setShowModal(true)
    console.log(arrValores)
  };
  const ocultar = () => {
    setShowModal(false);
  };
  const votar = () => {
    setVoto(voto + 1);
    console.log("valor de puntaje en votar", puntaje)
  };
  return (
    <div className="tarjeta" onClick={mostrar}>
      <div className="tarjeta-content">
        <img className="imgTarjeta" src={arrValores[3]} alt="imagen"></img>
        <div className="data">
          <div>
            <h4>{arrValores[1]}</h4>
          </div>
          <PuntuarTarjeta puntuacion={sumaValoraciones} votos={voto} />
          <div className="precio">$ {arrValores[5]}</div>
          {/* <div className="nuevoPuntaje">Nuevo puntaje: {puntaje}</div>  div de prueba para chequear que se esten enviando los puntajes desde el componente hijo al componente padre*/}
          <div>votos: {voto}</div>
          <div className="menuVotar">
            <button className="cancelar" onClick={ocultar}>
              X
            </button>
            <input
              key={arrValores[1] + arrValores[7]}
              className="inpValoracion"
              type="range"
              min="1"
              max="5"
              name="valoracion"
            />
          </div>
        </div>
        <div className="info">{arrValores[6]}</div>
      </div>
      {showModal && (
        <ModalTarjeta onClose={ocultar} actualizarArr={actualizarArr} actualizarPuntaje={actualizarPuntaje} arrValores={arrValores} puntaje={puntaje} voto={voto} actualizarSumaValoraciones={actualizarSumaValoraciones} votar={votar} />
      )}
    </div>
  );
};
export default Tarjeta;

/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/

import React from 'react'
import { useContext } from 'react';
import { ServiciosContext } from '../../context/ServiciosContext';
import { Button } from 'react-bootstrap';
import "./crearTarjeta.css"
const CrearTarjeta = () => {
    const contextServicios= useContext (ServiciosContext)
    /* console.log(contextServicios.servicios) */
    //const [servicios, setServicios] = useState([]);
    const handleAddPost = (event) => {
      event.preventDefault();
// Obtener los valores del formulario
    const {nombre, servicio, imagen, precio,informacion,localidad} = event.target.elements;
// Agregar el nuevo post al arreglo de servicios
contextServicios.setServicios([
    {
     id: nombre.value,
     nombre: nombre.value,
     servicio: servicio.value,
     imagen: imagen.value,
     precio: precio.value,
     informacion: informacion.value,
     votos:1,
     puntuacion:5,
     localidad:localidad.value
    },
    ...contextServicios.servicios,
    ]);
// Limpiar los inputs del formulario
     nombre.value=''
     imagen.value=''
     precio.value=null
     informacion.value=''
     localidad.value=''
    }
  return (
    <div className='marcoCrearTarjeta'>
        <form className='formCrearTarjeta' onSubmit={handleAddPost}>
            <div><p>Nombre:</p><input type='text' name='nombre' ></input></div>
            <div><p>Elija un servicio:</p>
                <select id="servicio" name="servicio" defaultValue={"Restaurante"}>
                    <option>Hotel</option>
                    <option>Restaurante</option>
                    <option>Paseador</option>
                    <option>Aerolinea</option>
                    <option>Veterinaria</option>
                    <option>Actividad</option>
                </select></div>
            <div><p>seleccione una imagen:</p><input type='file' name='imagen'/></div>
            <div><p>defina el precio:</p><input type='number'name='precio' ></input></div>
            <div><p>Ingrese la localidad:</p><input type='text' name='localidad'></input></div>
            <textarea type='text' name='informacion' placeholder='Escribe aqui la informacion sobre tu servicio!!!' />
            <Button className='btnAbrir btn-enviar' type='submit'>Enviar</Button>
        </form>
    </div>
  )
}
export default CrearTarjeta;