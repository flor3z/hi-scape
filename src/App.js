import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Services2 from './components/pages/Services2';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services2" element={<Services2 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
