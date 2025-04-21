'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Candles() {
  const [image1Error, setImage1Error] = useState(false);
  const [image2Error, setImage2Error] = useState(false);

  return (
    <section id="candles" className="py-16 bg-gradient-to-b from-[#F8E1DA] to-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header with logo and title */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-10">
            <div className="mr-0 md:mr-4 mb-4 md:mb-0">
              <Image 
                src="/images/Candle.png" 
                alt="Char's Candle Bar Logo" 
                width={80} 
                height={80}
                className="rounded-full shadow-md"
                priority
                unoptimized
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E]">
                Char's Candle Bar
              </h2>
              <div className="w-20 h-1 bg-[#A1887F] mx-auto md:mx-0 my-3"></div>
            </div>
          </div>
          
          {/* Stacked layout - Text first */}
          <div className="flex flex-col gap-6 mb-10">
            {/* Text content */}
            <div className="w-full mb-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-[#2E2E2E] text-base leading-relaxed mb-4">
                  At Char's Candle Bar, every candle is a handcrafted experience—infused with love, intention, and a touch of luxury. We pour each candle using premium wax blends and thoughtfully curated fragrances designed to calm, uplift, and inspire. Whether you're setting the mood, creating sacred space, or simply indulging in self-care, our candles offer a soft glow and rich aroma that transforms any room into a sanctuary.
                </p>
                <p className="text-[#708238] text-lg font-medium text-center italic">
                  Blush pink dreams. Champagne vibes. Golden energy—this is the Char way.
                </p>
              </div>
            </div>
            
            {/* Image content */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white overflow-hidden rounded-xl shadow-lg p-2">
                <Image
                  src="/images/Candle1.jpeg"
                  alt="Luxury handcrafted candle"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                  priority
                  unoptimized
                />
              </div>
              
              <div className="bg-white overflow-hidden rounded-xl shadow-lg p-2">
                <Image
                  src="/images/Candle2.jpeg"
                  alt="Premium scented candle"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Call to action button */}
          <div className="text-center">
            <a 
              href="https://buy.stripe.com/test_14k5nk8Ot3Nl7PG4gg" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#A1887F] hover:bg-[#8D776F] text-white font-medium py-2 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:-translate-y-1"
            >
              Buy Candles Now
            </a>
            <p className="mt-3 text-[#2E2E2E] text-xs">Handcrafted with love. Limited quantities available.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 