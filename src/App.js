import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
