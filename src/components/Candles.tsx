'use client';

import React from 'react';

export default function Candles() {
  return (
    <section id="candles" className="py-16 bg-gradient-to-b from-[#F8E1DA] to-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <img 
              src="/Candle.png" 
              alt="Char's Candle Bar Logo" 
              width={300} 
              height={300}
              className="shadow-md"
            />
          </div>
          
          {/* Content */}
          <div className="mb-10">
            {/* Text */}
            <div className="mb-8 px-4">
              <p className="text-[#2E2E2E] text-base leading-relaxed mb-4">
                At Char's Candle Bar, every candle is a handcrafted experience—infused with love, intention, and a touch of luxury. We pour each candle using premium wax blends and thoughtfully curated fragrances designed to calm, uplift, and inspire. Whether you're setting the mood, creating sacred space, or simply indulging in self-care, our candles offer a soft glow and rich aroma that transforms any room into a sanctuary.
              </p>
              <p className="text-[#708238] text-lg font-medium text-center italic">
                Blush pink dreams. Champagne vibes. Golden energy—this is the Char way.
              </p>
            </div>
            
            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-2" style={{ height: "350px" }}>
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/Candle1.jpeg"
                    alt="Luxury handcrafted candle"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-2" style={{ height: "350px" }}>
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/Candle2.jpeg" 
                    alt="Premium scented candle"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="https://buy.stripe.com/test_14k5nk8Ot3Nl7PG4gg" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#A1887F] hover:bg-[#8D776F] text-white font-medium py-2 px-8 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              Buy Candles Now
            </a>
            <p className="mt-3 text-[#2E2E2E] text-xs">
              Handcrafted with love. Limited quantities available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 