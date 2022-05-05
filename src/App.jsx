import React from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
// tambah skip to content
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <h1 id="about" className="mt-20 text-3xl font-bold underline h-screen">
        Hello world!
      </h1>
      <h1 id="skills" className="mt-20 text-3xl font-bold underline h-screen">
        Hello world!
      </h1>
      <h1 id="work" className="mt-20 text-3xl font-bold underline h-screen">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
