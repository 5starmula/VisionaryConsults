'use client';

import React from 'react';
import Image from 'next/image';

export default function Candles() {
  return (
    <section id="candles" className="py-24 bg-gradient-to-b from-[#F8E1DA] to-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with logo and title */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-16">
            <div className="mr-0 md:mr-6 mb-6 md:mb-0">
              <Image 
                src="/images/Candle.png" 
                alt="Char's Candle Bar Logo" 
                width={120} 
                height={120}
                className="rounded-full shadow-md"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E]">
                Char's Candle Bar
              </h2>
              <div className="w-24 h-1 bg-[#A1887F] mx-auto md:mx-0 my-4"></div>
            </div>
          </div>
          
          {/* Main content with images and text */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-[#2E2E2E] text-lg leading-relaxed mb-6">
                  At Char's Candle Bar, every candle is a handcrafted experience—infused with love, intention, and a touch of luxury. We pour each candle using premium wax blends and thoughtfully curated fragrances designed to calm, uplift, and inspire. Whether you're setting the mood, creating sacred space, or simply indulging in self-care, our candles offer a soft glow and rich aroma that transforms any room into a sanctuary.
                </p>
                <p className="text-[#708238] text-xl font-medium text-center italic">
                  Blush pink dreams. Champagne vibes. Golden energy—this is the Char way.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 grid grid-cols-1 gap-5">
              <div className="overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative h-[300px] md:h-[350px]">
                  <Image
                    src="/images/Candle1.jpeg"
                    alt="Luxury handcrafted candle"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    priority
                  />
                </div>
              </div>
              
              <div className="overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative h-[300px] md:h-[350px]">
                  <Image
                    src="/images/Candle2.jpeg"
                    alt="Premium scented candle"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Call to action button */}
          <div className="text-center">
            <a 
              href="https://buy.stripe.com/test_14k5nk8Ot3Nl7PG4gg" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#A1887F] hover:bg-[#8D776F] text-white font-semibold py-3 px-10 rounded-full shadow-lg transform transition-transform duration-300 hover:-translate-y-1"
            >
              Buy Candles Now
            </a>
            <p className="mt-4 text-[#2E2E2E] text-sm">Handcrafted with love. Limited quantities available.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 