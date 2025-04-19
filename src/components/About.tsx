'use client';

import React from 'react';
import Image from 'next/image';

export default function About() {
  const coreStrengths = [
    "HR policy & compliance (federal and private sector)",
    "Employee advocacy, workplace navigation, and rebuttal strategy",
    "Children's content creation focused on emotional intelligence and growth",
    "Small business systems and nonprofit operations"
  ];
  
  const funFacts = [
    "I hold a master's in HR and I'm currently pursuing a doctorate in communications.",
    "I live in the Washington Metropolitan area, love skating, and enjoy writing stories that reflect joy, identity, and resilience.",
    "I'm passionate about helping Black professionals navigate workplace systems with confidence and clarity."
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">About Char Vernon</h2>
            <h3 className="text-xl text-purple-700 mb-6">
              Founder | HR Strategist | Author | Creative Director
            </h3>
            <p className="text-gray-700 mb-8">
              With over 10 years of experience in Human Resources and organizational development, Char brings a unique blend of strategic insight, creativity, and compassion to every client interaction. She leads Visionary Consults with a focus on empowering professionals and families through workplace consulting, business operations support, and creative storytelling.
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-purple-800 mb-3">Core Strengths:</h4>
              <ul className="space-y-2">
                {coreStrengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-600 mr-2">✦</span>
                    <span className="text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-gray-700 mb-6">
              <span className="font-semibold text-purple-800">Favorite Tools:</span> Empathy, clear communication, Canva, legal research, and storytelling.
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-purple-800 mb-3">Fun Facts:</h4>
              <ul className="space-y-2">
                {funFacts.map((fact, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-600 mr-2">✦</span>
                    <span className="text-gray-700">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
              >
                Contact Char
              </a>
              <a 
                href="#" 
                className="bg-white hover:bg-gray-100 text-purple-700 font-semibold py-2 px-6 rounded-lg shadow-md border border-purple-200 transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative bg-white rounded-lg shadow-lg h-80 w-80 md:h-96 md:w-96 overflow-hidden">
              <Image 
                src="/images/CharVernon.jpeg" 
                alt="Char Vernon - Founder of Visionary Consults" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 