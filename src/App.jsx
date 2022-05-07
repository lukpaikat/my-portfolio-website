import React from 'react';
import About from './components/About';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
// tambah skip to content
function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <h1 id="work" className="mt-20 text-3xl font-bold underline h-screen">
          Hello world!
        </h1>
      </main>
    </div>
  );
}

export default App;
