import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from "react";

import './App.css';
import LogIn from './pages/login';
import Home from './pages/home';
import Header  from "./components/header";
import Footer  from "./components/footer";
import Misdatos from './pages/misdatos';
import Editardatos from './pages/editardatos';
import ListaAutos from './pages/listaAutos';
import VistaVehiculo from './pages/vistaVehiculo';
import EditarAuto from './pages/editarAuto';
import NuevoAuto from './pages/nuevoAuto';

function App() {
  return (
    <>
      <div className='App'>  
        <Header />

          <Router>
            <Routes>
            <Route path="*" element={ <Home /> } />
            <Route path="/login" element={ <LogIn /> } />
            <Route path="/" element={ <Home /> } />
            <Route path="/miperfil" element={ <Misdatos /> } />
            <Route path="/vehiculos" element={<ListaAutos />} />
            <Route path="/nuevoauto" element={<NuevoAuto />} />
            <Route path="/editarauto" element={<EditarAuto />} />
            <Route path="/vistavehiculo" element={<VistaVehiculo />} />
            <Route path="/editardatos" element={<Editardatos />} />
            </Routes>
          </Router>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
