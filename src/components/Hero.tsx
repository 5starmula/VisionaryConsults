'use client';

import React from 'react';
import Image from 'next/image';
import Header from './Header';

export default function Hero() {
  return (
    <div className="relative w-full">
      <Header />
      <div id="hero" className="bg-gradient-to-r from-[#FAF9F6] to-[#F8E1DA] min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold text-[#2E2E2E] mb-6">
                Welcome to Visionary Consults
              </h1>
              <p className="text-[#2E2E2E] mb-8 text-lg">
                Your trusted partner in professional growth, creative development, and purposeful living. Whether you are navigating a career crossroads, building a business, or seeking tools to empower young minds, you're in the right place
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#what-we-do" 
                  className="bg-[#A1887F] hover:bg-[#8D776F] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 text-center"
                >
                  Our Services
                </a>
                <a 
                  href="#about" 
                  className="bg-[#FAF9F6] hover:bg-[#F8E1DA] text-[#708238] font-semibold py-3 px-6 rounded-lg shadow-md border border-[#A1887F] transition duration-300 text-center"
                >
                  About Char
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/heropic.jpg" 
                  alt="Visionary Consults Hero" 
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 