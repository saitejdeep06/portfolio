import React from "react";

export default function Projects() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold">Analytics Pipeline Platform</h3>
          <ul className="list-disc list-inside">
            <li>Web-based platform for launching projects with built-in batch and stream data pipelines (CSV, JSON, Twitter streams).</li>
            <li>Automated the migration of big data lab research to analytics pipelines.</li>
            <li>Tech Stack: Python, Kafka, Spark (Streaming, MLlib), Elasticsearch, Docker, Azure</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Data Engineering Workflows</h3>
          <ul className="list-disc list-inside">
            <li>Scalable ETL for batch (50GB/day) and online clickstreams (1M clicks/min).</li>
            <li>Data warehouse setup, supporting research and analytics.</li>
            <li>Tech Stack: Python, Django, Node.js, MySQL, Kafka, AWS, Aerospike, Docker</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Microservice Migration & Monitoring</h3>
          <ul className="list-disc list-inside">
            <li>Monolith to microservice migration for critical website components (&lt;10ms response time).</li>
            <li>Developed monitoring and error resolution framework for distributed architectures.</li>
            <li>Tech Stack: Python, FastAPI, Kafka, Kubernetes, Docker, AWS, Elasticsearch, NewRelic</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Promotion Claims Automation</h3>
          <ul className="list-disc list-inside">
            <li>Automated computation engine for complex data model, improving vendor claims by 70%.</li>
            <li>Tech Stack: Python, Django, MySQL, Jenkins, Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
}