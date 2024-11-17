import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Header from "./components/Header";
import Home from './components/Home';
import Footer from './components/footer';
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className='relative bg-fuchsia-500'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
