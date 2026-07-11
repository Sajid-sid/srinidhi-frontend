import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

import Repair from "./components/Repair";
import AMC from "./components/AMC";


import Products from '../src/pages/Products.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Services from './components/Services.jsx'
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/amc" element={<AMC />} />

       <Route path="/products" element={<Products />} />
       
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/service" element={<Services/>}/>
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;