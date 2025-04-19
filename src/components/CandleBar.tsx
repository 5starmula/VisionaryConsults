'use client';

import React from 'react';

// Base64 encoded image for reliable display on Vercel
const CANDLE_LOGO_BASE64 = "data:image/png;base64,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";

export default function CandleBar() {
  return (
    <section id="candle-bar" className="py-20 bg-gradient-to-r from-pink-50 to-rose-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Using base64 encoded image for reliable Vercel display */}
            <img
              src={CANDLE_LOGO_BASE64}
              alt="Char's Candle Bar"
              className="mb-4 max-w-full h-auto mx-auto"
              style={{ maxWidth: '280px', display: 'block' }}
            />
            <div className="w-24 h-1 bg-pink-400 mb-8"></div>
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