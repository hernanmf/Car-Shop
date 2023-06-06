/* import { Route, BrowserRouter } from 'react-router-dom';  */

import './App.css';
import LogIn from './pages/login';
import Home from './pages/home';
import Misdatos from './pages/misdatos';
import Header  from "./components/header";
import Footer  from "./components/footer";
import Editardatos from './pages/editardatos';
import ListaAutos from './pages/listaAutos';
import MisPublicaciones from './pages/misPublicaciones';

function App() {
  return (
    <>
    <div className='App'>  
      <Header />
      <MisPublicaciones />
      <ListaAutos />
      <Editardatos />
      <Misdatos />
      <LogIn />
      <Home />
      <Footer />
        
        {/* <Header />
        <BrowserRouter>
            <Route path="*" element={<> NOT FOUND </>} />
            <Route path="" element={<LogIn />} />
            <Route path="/home" element={<Home />} />
        </BrowserRouter> */}
    </div>
    </>
  );
}

export default App;
