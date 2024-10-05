import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import About from "./componeents/About";
import SideBar from './componeents/SideBar';

function App() {
  return (
    <div className='bg-fuchsia-500'>
      <SideBar />
      <About />
    </div>
  );
}

export default App;
