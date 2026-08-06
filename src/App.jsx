import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import TopBar from './Components/HomePage/TopBar';
import ScrollToTop from "./Components/Shared/ScrollToTop";
import Navbar from './Components/HomePage/Navbar';
import Footer from './Components/HomePage/Footer';
import FloatingSocials from "./Components/Shared/FloatingSocials";

import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Projects from './Pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TopBar />
      <Navbar />

      <FloatingSocials />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;