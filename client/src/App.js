/* import { Route, BrowserRouter } from 'react-router-dom';  */

import './App.css';
import LogIn from './pages/login';
import Home from './pages/home';
import Misdatos from './pages/misdatos';
import Header  from "./components/header";
import Editardatos from './pages/editardatos';

function App() {
  return (
    <>
    <div className='App'>  
      <Header />
      <Editardatos />
      <Misdatos />
      <LogIn />
      <Home />
        
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
