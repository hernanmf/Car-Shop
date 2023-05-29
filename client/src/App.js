import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 

import './App.css';
import LogIn from './pages/login';
import Home from './pages/home';
import Header  from "./components/header";

function App() {
  return (
    <>
    <div className='App'>  
      <Header />
      <LogIn />
      <Home />
        
        {/* <Routes>
            <Route path="*" element={<> NOT FOUND </>} />
            <Route path="/" element={<LogIn />} />
            <Route path="/home" element={<Home />} />
          </Routes> */}
    </div>
    </>
  );
}

export default App;
