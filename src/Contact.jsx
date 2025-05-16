import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 mb-4 border-b-4 border-blue-600 inline-block pb-1">Contact</h2>
      <p className="text-gray-700 text-lg mb-1">
        Email: <a href="mailto:skumar300702@gmail.com" className="text-blue-600 hover:underline">skumar300702@gmail.com</a>
      </p>
      <p className="text-gray-700 text-lg mb-1">Phone: 8270155541</p>
      <p className="text-gray-700 text-lg">
        <a href="https://www.linkedin.com/in/sathish-kumar-s-0671111ab/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4">LinkedIn</a>
        <a href="https://github.com/sathishkumar2002" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
      </p>
    </section>
  );
}
