'use client';

import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-[#FAF9F6] to-[#F8E1DA]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">Meet Char Vernon</h2>
            <h3 className="text-xl text-[#708238] mb-6">
              Founder | HR Strategist | Author | Creative Director
            </h3>
            <p className="text-[#2E2E2E] mb-6">
              Char Vernon is the Founder and Principal Consultant of Visionary Consults. With extensive experience supporting federal government, healthcare, nonprofit organizations, and private industry, she has built a career helping organizations improve operations, strengthen workforce initiatives, develop effective processes, and deliver high-quality administrative and organizational support.
            </p>
            <p className="text-[#2E2E2E] mb-8">
              Her expertise includes executive administration, human resources, quality improvement, communications, technical writing, project coordination, training, curriculum development, and organizational strategy. Char holds a Master of Science in Human Resources Management and a Bachelor of Science in Criminology. She is also an author and curriculum developer who creates practical resources that help individuals and organizations grow with confidence.
            </p>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative bg-white rounded-lg shadow-lg inline-block max-h-96 md:max-h-[28rem]">
              <img 
                src="/images/CharVernon2.png" 
                alt="Char Vernon - Founder of Visionary Consults" 
                className="block max-h-96 md:max-h-[28rem] w-auto h-auto object-contain rounded-lg"
                style={{ objectPosition: 'center top' }}
                onError={(e) => {
                  e.currentTarget.src = '/images/CharVernon.jpeg';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 