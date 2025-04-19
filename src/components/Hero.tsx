'use client';

import React from 'react';
import Image from 'next/image';
import Header from './Header';

export default function Hero() {
  return (
    <div className="relative w-full">
      <Header />
      <div id="hero" className="bg-gradient-to-r from-purple-100 to-indigo-100 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-6">
                Welcome to Visionary Consults
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                Your trusted partner in professional growth, creative development, and purposeful living. Whether you are navigating a career crossroads, building a business, or seeking tools to empower young minds, you're in the right place
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#what-we-do" 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 text-center"
                >
                  Our Services
                </a>
                <a 
                  href="#about" 
                  className="bg-white hover:bg-gray-100 text-purple-700 font-semibold py-3 px-6 rounded-lg shadow-md border border-purple-200 transition duration-300 text-center"
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