'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/utils/AnimateOnScroll';
import CTA from '@/components/CTA';

export default function Candles() {
  return (
    <section id="candles" className="py-16 bg-[#FFF6F3]">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeUp">
          <div className="flex items-center justify-center mb-8">
            <motion.div 
              className="mr-4"
              whileHover={{ rotate: [0, -10, 0], transition: { duration: 0.5 } }}
            >
              <Image
                src="/Candle.png"
                alt="Visionary Consults Candle Logo"
                width={60}
                height={60}
              />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E]">
              Luxury Candles
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <AnimateOnScroll animation="fadeUp" delay={0.1}>
              <p className="text-center text-[#2E2E2E] mb-12">
                Indulge in the soothing ambiance of our handcrafted luxury candles, designed to transform your space and elevate your self-care routine. Each candle is carefully crafted with premium ingredients to create a perfect blend of aesthetics and aromatherapy.
              </p>
            </AnimateOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimateOnScroll animation="fadeRight" delay={0.2}>
                <motion.div 
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="relative h-[350px]">
                    <Image
                      src="/Candle1.jpeg"
                      alt="Luxury handcrafted candle"
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-bold text-[#708238]">Serenity Collection</h3>
                    <p className="text-[#2E2E2E] text-sm">Pure soy wax with essential oils</p>
                  </div>
                </motion.div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fadeLeft" delay={0.3}>
                <motion.div 
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="relative h-[350px]">
                    <Image
                      src="/Candle2.jpeg"
                      alt="Premium scented candle"
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-bold text-[#708238]">Harmony Collection</h3>
                    <p className="text-[#2E2E2E] text-sm">Long-burning coconut blend with premium fragrance</p>
                  </div>
                </motion.div>
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
      
      <CTA 
        title="Elevate Your Space"
        description="Transform your environment with our handcrafted luxury candles, designed to create moments of peace and tranquility."
        buttonText="Shop Candles Now"
        buttonLink="https://buy.stripe.com/test_14k5nk8Ot3Nl7PG4gg"
        variant="secondary"
        isExternal={true}
      />
    </section>
  );
} 