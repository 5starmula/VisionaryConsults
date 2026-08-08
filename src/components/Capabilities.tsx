'use client';

import React from 'react';

export default function Capabilities() {
  const capabilities = [
    'Administrative Operations & Executive Support',
    'Human Resources & Workforce Solutions',
    'Communications & Technical Writing',
    'Quality Improvement & Compliance',
    'Organizational Development',
    'Workforce Development',
    'Training & Curriculum Development',
    'Project & Program Support',
    'Business Consulting',
  ];

  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">Our Capabilities</h2>
          <div className="w-24 h-1 bg-[#A1887F] mx-auto mb-8"></div>
          <p className="text-lg text-[#2E2E2E] mb-12 leading-relaxed">
            Visionary Consults provides strategic consulting and business support services across multiple professional disciplines. Our capabilities allow us to support organizations of all sizes with practical, results-oriented solutions.
          </p>

          <h3 className="text-2xl font-bold text-[#708238] mb-8">Core Capabilities</h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {capabilities.map((capability, index) => (
              <li key={index} className="flex items-start text-[#2E2E2E]">
                <span className="text-[#708238] mr-3 mt-1">•</span>
                <span>{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
