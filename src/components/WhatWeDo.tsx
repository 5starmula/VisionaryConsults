'use client';

import React from 'react';

export default function WhatWeDo() {
  const services = [
    {
      title: "Career & HR Consulting",
      description: "Resume development, workplace strategies, and hiring guidance.",
      icon: "📊"
    },
    {
      title: "Children's Books",
      description: "Explore our inspiring collection of books and printable activities that nurture resilience and creativity.",
      icon: "📚"
    },
    {
      title: "Business & Admin Support",
      description: "Back-end operations, nonprofit support, templates, and forms for solopreneurs and small teams.",
      icon: "💡"
    }
  ];

  return (
    <section id="what-we-do" className="py-20 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-[#A1887F] mx-auto mb-6"></div>
          <p className="text-[#2E2E2E] max-w-2xl mx-auto">
            At Visionary Consults, we believe in blending passion with purpose. Our services and offerings span across:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300 border border-[#F8E1DA] group hover:border-[#A1887F]">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#708238] mb-3 group-hover:text-[#A1887F] transition duration-300">{service.title}</h3>
              <p className="text-[#2E2E2E]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 