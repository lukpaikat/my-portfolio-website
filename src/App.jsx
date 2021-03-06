import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Work from './components/Work';
import 'animate.css';

function App() {
  return (
    <>
      <a className="absolute left-1/2 -translate-y-full focus:translate-y-0 z-20" href="#main">
        Skip to content
      </a>
      <NavBar />
      <main id="main" className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
