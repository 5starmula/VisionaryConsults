'use client';

import React from 'react';

export default function CandleBar() {
  return (
    <section id="candle-bar" className="py-20 bg-[#F8E1DA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#A1887F]">
            Char's Candle Collection
          </h2>
          <div className="w-32 h-1 bg-[#A1887F] mx-auto my-4"></div>
          <p className="text-xl text-[#708238] font-medium">
              A Little Light. A Lot of Love.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <p className="text-[#2E2E2E] mb-6 text-lg leading-relaxed">
            At Char's Candle Bar, every candle is a handcrafted experience—infused with love, intention, and a touch of luxury. We pour each candle using premium wax blends and thoughtfully curated fragrances designed to calm, uplift, and inspire. Whether you're setting the mood, creating sacred space, or simply indulging in self-care, our candles offer a soft glow and rich aroma that transforms any room into a sanctuary.
            </p>
          <div className="text-center">
            <a 
              href="#" 
              className="inline-block bg-[#A1887F] hover:bg-[#8D776F] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
            >
              Shop Candles
            </a>
          </div>
          </div>
          
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="h-32 flex items-center justify-center bg-[#FAF9F6] rounded mb-3">
              <span className="text-[#A1887F] font-medium">Candle Image 1</span>
            </div>
            <h3 className="text-[#708238]">Lavender Dreams</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="h-32 flex items-center justify-center bg-[#FAF9F6] rounded mb-3">
              <span className="text-[#A1887F] font-medium">Candle Image 2</span>
            </div>
            <h3 className="text-[#708238]">Vanilla Bliss</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="h-32 flex items-center justify-center bg-[#FAF9F6] rounded mb-3">
              <span className="text-[#A1887F] font-medium">Candle Image 3</span>
            </div>
            <h3 className="text-[#708238]">Citrus Garden</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="h-32 flex items-center justify-center bg-[#FAF9F6] rounded mb-3">
              <span className="text-[#A1887F] font-medium">Candle Image 4</span>
            </div>
            <h3 className="text-[#708238]">Ocean Breeze</h3>
          </div>
        </div>
      </div>
    </section>
  );
} 