'use client';

import React from 'react';

export default function WhyWorkWithUs() {
  const values = [
    "Person-centered",
    "Justice-aware",
    "Results-driven",
    "And deeply intentional"
  ];

  return (
    <section id="why-work-with-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">Why Work With Us?</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 mb-8">
            We combine strategic insight with creative heart. Our work is:
          </p>
          
          <div className="flex flex-col space-y-3 mb-8">
            {values.map((value, index) => (
              <div key={index} className="text-lg font-medium text-purple-800">
                {value}
              </div>
            ))}
          </div>
          
          <p className="text-lg text-gray-700">
            Whether you're climbing the career ladder or reading bedtime stories with your child—we're here to support your vision.
          </p>
        </div>
      </div>
    </section>
  );
} 