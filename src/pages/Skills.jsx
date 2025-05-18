import React from 'react';

export default function Skills() {
  const skills = [
    'Python', 'SQL', 'MySQL', 'Apache Airflow',
    'AWS (S3, Lambda, Glue, Athena, EventBridge)',
    'GCP (BigQuery, GCS, Dataflow, Cloud Composer)',
    'Snowflake', 'ETL Pipelines', 'Automation', 'Data Warehousing'
  ];

  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-blue-600 inline-block pb-1">
        Technical Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:bg-blue-200 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
