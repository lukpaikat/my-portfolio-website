import React from 'react';
import About from './components/About';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
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
        <h1 id="work" className="mt-20 text-3xl font-bold underline h-screen">
          Hello world!
        </h1>
      </main>
    </>
  );
}

export default App;
