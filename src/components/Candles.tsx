'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './utils/ScrollReveal';
import { fadeInUp, fadeIn, scaleUp, buttonHover } from './utils/animations';

export default function Candles() {
  return (
    <section id="candles" className="py-16 bg-gradient-to-b from-[#F8E1DA] to-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <ScrollReveal variants={scaleUp}>
            <div className="flex justify-center mb-10">
              <motion.img 
                src="/Candle.png" 
                alt="Char's Candle Bar Logo" 
                width={300} 
                height={300}
                className="shadow-md"
                whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
              />
            </div>
          </ScrollReveal>
          
          {/* Content */}
          <div className="mb-10">
            {/* Text */}
            <ScrollReveal variants={fadeInUp} delay={0.2}>
              <div className="mb-8 px-4">
                <p className="text-[#2E2E2E] text-base leading-relaxed mb-4">
                  At Char's Candle Bar, every candle is a handcrafted experience—infused with love, intention, and a touch of luxury. We pour each candle using premium wax blends and thoughtfully curated fragrances designed to calm, uplift, and inspire. Whether you're setting the mood, creating sacred space, or simply indulging in self-care, our candles offer a soft glow and rich aroma that transforms any room into a sanctuary.
                </p>
                <motion.p 
                  className="text-[#708238] text-lg font-medium text-center italic"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Blush pink dreams. Champagne vibes. Golden energy—this is the Char way.
                </motion.p>
              </div>
            </ScrollReveal>
            
            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScrollReveal variants={fadeIn} delay={0.4}>
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-2"
                  style={{ height: "350px" }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.img
                      src="/Candle1.jpeg"
                      alt="Luxury handcrafted candle"
                      className="max-h-full w-auto object-contain"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </ScrollReveal>
              
              <ScrollReveal variants={fadeIn} delay={0.6}>
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-2"
                  style={{ height: "350px" }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.img
                      src="/Candle2.jpeg" 
                      alt="Premium scented candle"
                      className="max-h-full w-auto object-contain"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>

          {/* CTA */}
          <ScrollReveal variants={fadeInUp} delay={0.8}>
            <div className="text-center">
              <motion.a 
                href="https://buy.stripe.com/test_14k5nk8Ot3Nl7PG4gg" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#A1887F] hover:bg-[#8D776F] text-white font-medium py-2 px-8 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy Candles Now
              </motion.a>
              <p className="mt-3 text-[#2E2E2E] text-xs">
                Handcrafted with love. Limited quantities available.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
} 