'use client';

import React from 'react';

export default function Templates() {
  const templates = [
    {
      title: "Hiring & Recruitment Toolkit",
      image: "template-placeholder.jpg",
      description: "A complete set of forms and templates to streamline your hiring process from job descriptions to offer letters. Perfect for building a consistent and compliant recruitment workflow."
    },
    {
      title: "Employment Management Essentials",
      image: "template-placeholder.jpg",
      description: "Everything you need to manage employees with confidence. Includes performance evaluations, disciplinary forms, attendance trackers, and more to support day-to-day HR operations."
    },
    {
      title: "Compliance & Policies Starter Pack",
      image: "template-placeholder.jpg",
      description: "Protect your business with HR documents aligned with federal labor standards. Includes at-will acknowledgments, confidentiality agreements, code of conduct templates, and basic policy."
    },
    {
      title: "Leadership Assessment Framework",
      image: "template-placeholder.jpg",
      description: "Evaluation templates to assess and develop leadership skills within your team or organization."
    }
  ];

  return (
    <section id="templates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Templates</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical templates and resources to help you optimize your professional life and business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Template Image Placeholder</p>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-purple-800 mb-2">{template.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                <a 
                  href="#" 
                  className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg text-sm transition duration-300"
                >
                  Shop on Etsy
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Templates button */}
        <div className="mt-12 text-center">
          <a 
            href="https://etsy.com/shop/visionaryconsults" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300"
          >
            View All Templates
          </a>
        </div>
      </div>
    </section>
  );
} 