import './App.css';
import Index from './pages/index';
import LogIn from './pages/login';
import Menu from './components/menu';

function App() {
  return (
    <div className='App'>  
    <Menu />
    <LogIn />
      {/* <Index /> */}
    </div>
  );
}

export default App;
