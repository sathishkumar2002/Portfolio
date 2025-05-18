import React from 'react';
import profile from '../assets/profile.jpeg';

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16 text-center"
    >
      <img
        src={profile}
        alt="Sathish Kumar"
        className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg"
      />
      <h1 className="text-4xl font-bold mt-4">Sathish Kumar</h1>
      <p className="text-lg mt-2">Data Engineer | AWS & GCP Certified</p>
    </section>
  );
}
