import React from "react";

export default function Home() {
  return (
    <section className="mb-10">
      <h1 className="text-4xl font-bold mb-2">SAI TEJ DEEP CHALLAGALI</h1>
      <p className="text-lg mb-2">Bangalore, India</p>
      <p className="mb-2">
        <a href="tel:+917416529927" className="underline">(+91)-7416529927</a> |{" "}
        <a href="mailto:saitejchallagalli@gmail.com" className="underline">saitejchallagalli@gmail.com</a>
      </p>
      <p className="mb-2">
        <a href="https://leetcode.com/u/saitejchallagalli" target="_blank" rel="noopener noreferrer" className="underline">
          Leetcode Profile
        </a>
      </p>
      <p className="mt-4">
        <strong>Summary:</strong> Engineer with a passion for distributed systems, data engineering, and building scalable, automated analytics platforms. Delivered impactful solutions across SaaS, ETL, and microservices.
      </p>
    </section>
  );
}