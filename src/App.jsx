import React from 'react';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <header className="p-4 bg-blue-800 text-white text-center text-xl font-bold">Sathish Kumar</header>
      <main className="p-4 space-y-10">
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <footer className="p-4 bg-gray-100 text-center">© 2025 Sathish Kumar</footer>
    </div>
  );
}

export default App;
