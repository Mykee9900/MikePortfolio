import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Header from "./components/Header";
import Home from './components/Home';
import Footer from './components/footer';

function App() {
  return (
    <div className='relative bg-fuchsia-500'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
