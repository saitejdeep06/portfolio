import React from "react";

export default function Experience() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>

      <div className="mb-6">
        <h3 className="text-xl font-bold">SaaS Platform Architect (Bangalore, India)</h3>
        <p className="italic">Sep 2021 – May 2025</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Improved client onboarding and integration by architecting a SaaS platform, boosting operational efficiency by 60%.</li>
          <li>Designed a distributed, configurable data processing system for validation, transformation, and storage of diverse data formats, enhancing data governance and availability.</li>
          <li>Engineered a unified monitoring framework for microservices, reducing error resolution turnaround time by 80%.</li>
          <li>Developed a batch ETL process to analyze mobile user data via a dashboard for detailed user engagement metrics.</li>
          <li>Led a geographically distributed team, ensuring proficiency across time zones with Agile methodologies and targeted training.</li>
        </ul>
        <p className="mt-2">
          <strong>Tools:</strong> Python, Django, FastAPI, Kafka, Airflow, Spark, PostgreSQL, Elasticsearch, Cassandra, AWS (S3, EMR, Athena, Quicksight), Docker, Kubernetes
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold">Data Engineering & Analytics Projects (JAIN DEEMED TO BE University)</h3>
        <p className="italic">Feb 2023 – Dec 2024</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Developed a web-based configurable platform with built-in data pipelines for batch and stream processing (CSV, JSON, Twitter streams) to automate big data research projects.</li>
          <li>Built scalable ETL workflows for both batch (50 GB/day) and online clickstreams (1M clicks/min) to establish a data warehouse.</li>
          <li>Enhanced website efficiency by migrating a monolith to microservices, achieving &lt;10ms response time and improving scalability.</li>
          <li>Reengineered guest member workflow to reduce website latency by 20% and streamline user experience.</li>
          <li>Developed automated computation engine for complex data model, improving vendor claims by 70%.</li>
        </ul>
        <p className="mt-2">
          <strong>Tools:</strong> Linux, Python, NodeJS, Django, MySQL, Aerospike, ELK (Elasticsearch, Logstash, Kibana), Kafka, AWS (EC2, RDS, S3, Redshift), NewRelic, Docker, Kubernetes, Jenkins, Git, Agile, JIRA.
        </p>
      </div>
    </section>
  );
}