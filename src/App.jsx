import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import Skills from "./components/skills";
import Contacto from "./components/Contacto";
import Aboutme from "./components/aboutme";
import Projectos from "./components/projectos";
function App() {
  return (
    <div className='principal'>      
      <Navbar></Navbar>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />}/>          
        <Route path="habilidades" element={<Skills />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="projectos" element={<Projectos />} />
        <Route path="sobre-mi" element={<Aboutme />} />
    {/* <Route path="*" element={<NoPage />} /> */}        
      </Routes>
    </BrowserRouter>            
    </div>
  );
}

export default App;
