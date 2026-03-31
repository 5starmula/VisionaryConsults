'use client';

import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-[#FAF9F6] to-[#F8E1DA]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">About Char Vernon</h2>
            <h3 className="text-xl text-[#708238] mb-6">
              Founder | HR Strategist | Author | Creative Director
            </h3>
            <p className="text-[#2E2E2E] mb-6">
              Char Vernon is an author, HR professional, and creative entrepreneur with over 15 years of experience in human resources, executive support, and workforce strategy. She holds a Master&apos;s degree in Human Resource Management and is currently pursuing her Doctorate in Communications, combining real-world expertise with advanced academic insight.
            </p>
            <p className="text-[#2E2E2E] mb-6">
              As the founder of Visionary Consults, LLC, Char creates practical tools, career resources, and engaging content designed to empower individuals to navigate both professional and personal challenges with confidence.
            </p>
            <p className="text-[#2E2E2E] mb-6">
              Her body of work spans multiple genres, from workforce development guides like <em>2025 is a Shhh Show: The Struggles in Today&apos;s Job Market</em> to imaginative children&apos;s books such as <em>Brandon&apos;s Brave Biking Bonanza</em>. Her children&apos;s stories blend rhythm, creativity, and life lessons, encouraging resilience, critical thinking, and confidence in young readers.
            </p>
            <p className="text-[#2E2E2E] mb-8">
              From her first publication to a growing catalog of books and resources, Char&apos;s work reflects continuous growth, authenticity, and a commitment to creating meaningful, impactful content.
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