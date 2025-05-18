import React from 'react';
import awsLogo from '../assets/gcp-certified.png';
import gcpLogo from '../assets/gcp-certified.jpeg';

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 mb-4 border-b-4 border-blue-600 inline-block pb-1">Certifications</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700 text-lg">
        <li>AWS Certified Solutions Architect Associate</li>
        <li>AWS Certified Cloud Practitioner</li>
        <li>Google Cloud Certified Professional Data Engineer</li>
      </ul>
      <div className="flex justify-center items-center space-x-6">
        <img src={awsLogo} alt="AWS Certified" className="h-16" />
        <img src={gcpLogo} alt="GCP Certified" className="h-16" />
      </div>
    </section>
  );
}
