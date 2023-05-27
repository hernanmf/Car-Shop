import './App.css';
import Index from './pages/index';
import LogIn from './pages/login';
import Header from './components/header';

function App() {
  return (
    <div className='App'>  
    <Header />
    <LogIn />
      {/* <Index /> */}
    </div>
  );
}

export default App;
