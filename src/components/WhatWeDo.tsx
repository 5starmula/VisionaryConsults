'use client';

import React from 'react';

export default function WhatWeDo() {
  const services = [
    {
      title: "HR Strategy & Consulting",
      description: "Customized HR solutions to help your organization thrive. From policy development to organizational design, we provide the strategic guidance you need.",
      icon: "📊"
    },
    {
      title: "Professional Development",
      description: "Empowering career growth through personalized coaching, skill-building resources, and leadership development programs.",
      icon: "🚀"
    },
    {
      title: "Creative Business Solutions",
      description: "Innovative templates, systems, and tools designed to streamline your business operations and boost productivity.",
      icon: "💡"
    }
  ];

  return (
    <section id="what-we-do" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Visionary Consults, we provide comprehensive solutions to help professionals and organizations reach their full potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300 border border-gray-100 group hover:border-purple-200">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3 group-hover:text-purple-600 transition duration-300">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 