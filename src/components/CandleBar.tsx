'use client';

import React from 'react';
import Image from 'next/image';

export default function CandleBar() {
  return (
    <section id="candle-bar" className="py-20 bg-gradient-to-r from-pink-50 to-rose-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/Candle.png"
              alt="Char's Candle Bar"
              width={400}
              height={200}
              className="mb-4"
            />
            <div className="w-24 h-1 bg-pink-400 mb-8"></div>
            <h3 className="text-xl font-semibold text-pink-700 mb-4">
              A Little Light. A Lot of Love.
            </h3>
            <p className="text-gray-700 mb-8 text-lg">
              Handcrafted candles infused with love, intention, and a touch of luxury. Blush pink dreams. Champagne vibes. Golden energy—this is the Char way.
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