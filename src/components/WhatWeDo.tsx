'use client';

import React from 'react';

export default function WhatWeDo() {
  const services = [
    {
      title: "Professional Consulting & Business Solutions",
      description: "Strategic consulting and business support designed to strengthen organizations through administrative operations, executive support, human resources, communications, organizational development, quality improvement, and business strategy.",
      icon: "💼"
    },
    {
      title: "Administrative & Organizational Support",
      description: "Professional administrative support, executive assistance, project coordination, records management, meeting support, workflow improvement, and operational efficiency.",
      icon: "🗂️"
    },
    {
      title: "Training & Educational Resources",
      description: "Curriculum development, workforce development, children's educational resources, professional development materials, and customized learning solutions.",
      icon: "🎓"
    },
    {
      title: "Business Resources & Templates",
      description: "Professionally developed templates, guides, tools, and digital resources created from real-world experience to help professionals and organizations work smarter.",
      icon: "📄"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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