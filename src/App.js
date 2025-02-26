import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from './components/Home';
import Footer from './components/footer';
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <div className='relative bg-fuchsia-500'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/services' element={<Services/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
