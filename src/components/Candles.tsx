'use client';

import React from 'react';
import Image from 'next/image';

export default function Candles() {
  return (
    <section id="candles" className="py-16 bg-[#F8E1DA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Image 
              src="/images/Candle.png" 
              alt="Char's Candle Bar Logo" 
              width={100} 
              height={100}
              className="rounded-full"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">
            Char's Candle Bar
          </h2>
          <div className="w-32 h-1 bg-[#A1887F] mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
          <p className="text-[#2E2E2E] text-lg leading-relaxed mb-6">
            At Char's Candle Bar, every candle is a handcrafted experience—infused with love, intention, and a touch of luxury. We pour each candle using premium wax blends and thoughtfully curated fragrances designed to calm, uplift, and inspire. Whether you're setting the mood, creating sacred space, or simply indulging in self-care, our candles offer a soft glow and rich aroma that transforms any room into a sanctuary.
          </p>
          <p className="text-[#708238] text-xl font-medium text-center italic">
            Blush pink dreams. Champagne vibes. Golden energy—this is the Char way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/Candle1.jpeg"
              alt="Luxury handcrafted candle"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/Candle2.jpeg"
              alt="Premium scented candle"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://buy.stripe.com/test_14k5nk8Ot3Nl7PG4gg" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#A1887F] hover:bg-[#8D776F] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
          >
            Buy Candles Now
          </a>
        </div>
      </div>
    </section>
  );
} 