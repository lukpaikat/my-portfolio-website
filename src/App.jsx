import React from 'react';
import NavBar from './components/NavBar';
// tambah skip to content
function App() {
  return (
    <div>
      <NavBar />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
