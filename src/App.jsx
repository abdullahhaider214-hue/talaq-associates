import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopBar from './Components/HomePage/TopBar';
import Navbar from './Components/HomePage/Navbar';
import Footer from './Components/HomePage/Footer';
import FloatingSocials from "./Components/Shared/FloatingSocials";

import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Projects from './Pages/Projects';
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />

      <FloatingSocials />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;