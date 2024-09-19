import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <>
      <h1 className='text-center text-3xl font-bold underline'>Hello tailwind</h1>
      <FontAwesomeIcon icon={faReact} />
    </>
  );
}

export default App;
