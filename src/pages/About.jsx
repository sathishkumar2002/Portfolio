import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 mb-4 border-b-4 border-blue-600 inline-block pb-1">About Me</h2>
      <p className="text-lg leading-relaxed text-gray-800">
        I am a results-driven Data Engineer with 2 years of experience in building scalable ETL pipelines, data migration, and automation using AWS and GCP.
        Skilled in designing high-performance data architectures leveraging Lambda, S3, Glue, BigQuery, and Airflow to optimize data transfers and enable real-time analytics.
        Proficient in Python, SQL, with a strong focus on data quality, performance optimization, and cloud automation to support business intelligence and decision-making.
      </p>
    </section>
  );
}
