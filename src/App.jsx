// src/App.jsx
import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Properties from "./components/pages/Properties";
import Contact from "./components/pages/Contact";
import ScrollToTop from "./components/layout/ScrollToTop";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="properties">
        <Properties />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
