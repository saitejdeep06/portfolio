import React from "react";

export default function Skills() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <h3 className="font-bold">Programming</h3>
          <ul className="list-disc list-inside">
            <li>Python</li>
            <li>SQL</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Data Engineering</h3>
          <ul className="list-disc list-inside">
            <li>Airflow</li>
            <li>Kafka</li>
            <li>Spark</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Elasticsearch (ELK)</li>
            <li>Aerospike</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">DevOps & Cloud</h3>
          <ul className="list-disc list-inside">
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>AWS (S3, EMR, EC2, RDS, Redshift, Athena, Quicksight)</li>
            <li>Azure</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Other Tools</h3>
          <ul className="list-disc list-inside">
            <li>Django</li>
            <li>FastAPI</li>
            <li>Jenkins</li>
            <li>Git</li>
            <li>JIRA</li>
            <li>NewRelic</li>
          </ul>
        </div>
      </div>
    </section>
  );
}