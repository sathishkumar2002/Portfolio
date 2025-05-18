import React from 'react';
import profile from '../assets/profile.jpeg'; // Replace with correct path and filename

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 px-4"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="S.SathishKumar"
            className="w-60 h-[400px] object-cover rounded-xl shadow-lg border-4 border-white"
          />
        </div>

        {/* Intro Text */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl font-bold tracking-wide">Sathish Kumar</h1>
          <p className="text-xl font-medium text-blue-100">Data Engineer | AWS & GCP Certified</p>
          <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
            I'm a results-driven data engineer with 2 years of experience in building scalable ETL pipelines, automation, and cloud-native analytics using AWS, GCP, and Snowflake.
            I focus on making data reliable, fast, and business-ready using technologies like Airflow, Lambda, Glue, BigQuery, and Python.
          </p>
        </div>
      </div>
    </section>
  );
}
