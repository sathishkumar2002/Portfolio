import React from 'react';
import awsLogo from '../assets/aws-certified.png';
import gcpLogo from '../assets/gcp-certified.png';

export default function Certifications() {
  return (
    <section id="certifications" className="text-center py-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-blue-600 inline-block pb-1">
        Certifications
      </h2>
      <ul className="text-lg text-gray-700 mb-6">
        <li>AWS Certified Solutions Architect Associate</li>
        <li>Google Cloud Certified Professional Data Engineer</li>
      </ul>
      <div className="flex justify-center items-center gap-10 mt-4">
        <img
          src={awsLogo}
          alt="AWS Certified"
          className="h-20 hover:scale-110 transition-transform duration-300"
        />
        <img
          src={gcpLogo}
          alt="GCP Certified"
          className="h-20 hover:scale-110 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
