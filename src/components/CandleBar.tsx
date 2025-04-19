'use client';

import React from 'react';

export default function CandleBar() {
  return (
    <section id="candle-bar" className="py-20 bg-gradient-to-r from-pink-50 to-rose-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Simple SVG logo that will display reliably */}
            <div className="mb-4 flex justify-center">
              <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="40" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#E91E63">
                  Char's Candle Bar
                </text>
              </svg>
            </div>
            <div className="w-24 h-1 bg-pink-400 mb-8 mx-auto"></div>
            <h3 className="text-xl font-semibold text-pink-700 mb-4">
              A Little Light. A Lot of Love.
            </h3>
            <p className="text-gray-700 mb-8 text-lg">
              At Char's Candle Bar, every candle is a handcrafted experience—infused with love, intention, and a touch of luxury. We pour each candle using premium wax blends and thoughtfully curated fragrances designed to calm, uplift, and inspire. Whether you're setting the mood, creating sacred space, or simply indulging in self-care, our candles offer a soft glow and rich aroma that transforms any room into a sanctuary.
            </p>
            <a 
              href="#" 
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
            >
              Shop Candles
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md h-40 flex items-center justify-center">
              <p className="text-gray-500">Candle Image 1</p>
            </div>
            <div className="bg-white rounded-lg shadow-md h-40 flex items-center justify-center">
              <p className="text-gray-500">Candle Image 2</p>
            </div>
            <div className="bg-white rounded-lg shadow-md h-40 flex items-center justify-center">
              <p className="text-gray-500">Candle Image 3</p>
            </div>
            <div className="bg-white rounded-lg shadow-md h-40 flex items-center justify-center">
              <p className="text-gray-500">Candle Image 4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 