import React from 'react';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-gray-100 to-blue-50 min-h-screen">
      <main className="space-y-12">
        <About />
        <hr className="border-t border-gray-200 my-12 w-3/4 mx-auto" />
        <Skills />
        <hr className="border-t border-gray-200 my-12 w-3/4 mx-auto" />
        <Experience />
        <hr className="border-t border-gray-200 my-12 w-3/4 mx-auto" />
        <Certifications />
        <hr className="border-t border-gray-200 my-12 w-3/4 mx-auto" />
        <Contact />
        <hr className="border-t border-gray-200 my-12 w-3/4 mx-auto" />
      </main>
      <footer className="p-4 bg-gray-100 text-center text-sm text-gray-500">
        © 2025 Sathish Kumar
      </footer>
    </div>
  );
}
