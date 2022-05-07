import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Work from './components/Work';
// tambah skip to content
function App() {
  return (
    <>
      <a className="absolute left-1/2 -translate-y-full focus:translate-y-0 z-20" href="#main">
        Skip to content
      </a>
      <NavBar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
    </>
  );
}

export default App;
