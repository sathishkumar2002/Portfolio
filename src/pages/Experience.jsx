import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 mb-4 border-b-4 border-blue-600 inline-block pb-1">Professional Experience</h2>
      <div className="space-y-6 text-gray-700 text-lg">
        <div>
          <h3 className="font-semibold text-xl">Data Engineer – Cognizant Technology Solutions (Jan 2025 – Present)</h3>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>Enhanced Snowflake views to enable accurate reporting with new data (DSID).</li>
            <li>Automated metadata validation, reducing manual effort by 80%.</li>
            <li>Developed reverse lineage automation tool for Snowflake pipelines.</li>
            <li>Created Python utilities for SQL dependency tracing.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Data Engineer – Cognizant Technology Solutions (Sep 2023 – Dec 2024)</h3>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>Deployed AWS Lambda for MySQL automation and ECS task orchestration.</li>
            <li>Reduced S3-GCS data transfer time by 50% with GCP Transfer Service.</li>
            <li>Implemented Cloud Composer DAGs to pipeline GCS → BigQuery.</li>
            <li>Built Looker dashboards for DAG health monitoring and record validation.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl">AWS Data Engineer Intern – Cognizant (May 2023 – Jul 2023)</h3>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>Automated CSV to Parquet ETL pipeline via Lambda and Glue.</li>
            <li>Queried Parquet files with Athena; integrated SNS notifications.</li>
            <li>Built 5 real-time dashboards in QuickSight reducing latency by 15%.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
