'use client';

import React, { useRef, useEffect } from 'react';
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
                Visionary Consults, LLC
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
                Strategic HR Solutions for Modern Professionals
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Empowering professionals and organizations with innovative HR strategies, personal development resources, and creative business solutions.
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
              <div className="bg-gray-200 rounded-lg h-80 w-80 md:h-96 md:w-96 flex items-center justify-center">
                <p className="text-gray-500 text-center">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 