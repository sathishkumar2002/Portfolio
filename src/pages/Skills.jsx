import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 mb-4 border-b-4 border-blue-600 inline-block pb-1">Technical Skills</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>Languages:</strong> Python, SQL (MySQL)</li>
        <li><strong>Big Data Technologies:</strong> Apache Airflow</li>
        <li><strong>Cloud Technologies:</strong> Google Cloud Platform (BigQuery, Dataflow, GCS, Cloud Composer, GCP Transfer Service, Looker Studio), AWS (S3, Lambda, Glue, EventBridge, SNS, Athena), Snowflake</li>
        <li><strong>Data Engineering & ETL:</strong> ETL Pipelines, Data Warehousing, Performance Optimization, Automation</li>
      </ul>
    </section>
  );
}
