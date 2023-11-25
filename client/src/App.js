import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React, { useContext } from "react";
import { UsuariosContext } from './Context/UserContext';

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
import MisPublicaciones from './pages/misPublicaciones';
import Contacto from './pages/contacto';
import NuevoUsuario from './pages/nuevoUsuario';

function App() {
  const { activeUser } = useContext(UsuariosContext);

  return (
    <>
      <div className='App'>  
        <Router>
          <Header />
          <Routes>
            <Route path="*" element={ <Home /> } />
            <Route path="/" element={<Home />} />
            <Route path="/listaautos" element={<ListaAutos />} />
            <Route path="/vistavehiculo" element={<VistaVehiculo />} />
            {  
              activeUser?
                <>
                  <Route path="/misdatos" element={<Misdatos />} />
                  <Route path="/mispublicaciones" element={<MisPublicaciones />} />
                  <Route path="/nuevoauto" element={<NuevoAuto />} />
                  <Route path="/editarauto" element={<EditarAuto />} />
                  <Route path="/editardatos" element={<Editardatos />} />
                  <Route path="/contacto" element={<Contacto />} />
                </>
                :
                <>
                  <Route path="/login" element={<LogIn />} />
                  <Route path="/nuevousuario" element={<NuevoUsuario />} />
                </>
            }
            </Routes>
          <Footer />  
        </Router>
      </div>
    </>
  );
}

export default App;
