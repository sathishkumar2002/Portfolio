import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-4 border-blue-600 inline-block pb-1">
        Professional Experience
      </h2>

      {/* Most recent job */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
        <h3 className="text-xl font-semibold text-blue-800">
          Data Engineer – Cognizant Technology Solutions
        </h3>
        <p className="text-sm text-gray-600 mb-2">Jan 2025 – Present</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Enhanced Snowflake views to enable accurate reporting with new data (DSID).</li>
          <li>Automated metadata validation, reducing manual effort by 80%.</li>
          <li>Developed reverse lineage automation tool for Snowflake pipelines.</li>
          <li>Created Python utilities for SQL dependency tracing.</li>
        </ul>
      </div>

      {/* Previous job */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
        <h3 className="text-xl font-semibold text-blue-800">
          Data Engineer – Cognizant Technology Solutions
        </h3>
        <p className="text-sm text-gray-600 mb-2">Sep 2023 – Dec 2024</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Deployed AWS Lambda for MySQL automation and ECS task orchestration.</li>
          <li>Reduced S3-GCS data transfer time by 50% with GCP Transfer Service.</li>
          <li>Implemented Cloud Composer DAGs to pipeline GCS → BigQuery.</li>
          <li>Built Looker dashboards for DAG health monitoring and record validation.</li>
        </ul>
      </div>

      {/* Internship */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h3 className="text-xl font-semibold text-blue-800">
          AWS Data Engineer Intern – Cognizant
        </h3>
        <p className="text-sm text-gray-600 mb-2">May 2023 – Jul 2023</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Automated CSV to Parquet ETL pipeline via Lambda and Glue.</li>
          <li>Queried Parquet files with Athena; integrated SNS notifications.</li>
          <li>Built 5 real-time dashboards in QuickSight reducing latency by 15%.</li>
        </ul>
      </div>
    </section>
  );
}
