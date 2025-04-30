'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './utils/ScrollReveal';
import { fadeInUp, fadeIn, scaleUp } from './utils/animations';
import Image from 'next/image';

export default function Candles() {
  return (
    <section id="candles" className="py-20 bg-gradient-to-b from-[#F8E1DA] to-[#FAF9F6] relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-10 w-24 h-24 rounded-full bg-[#F8E1DA]/30 opacity-50"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-40 left-10 w-32 h-32 rounded-full bg-[#A1887F]/20 opacity-50"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -15, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Animated Header */}
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8,
                  ease: "easeOut",
                }
              }}
              whileInView={{
                textShadow: [
                  "0 0 0px rgba(161, 136, 127, 0)",
                  "0 0 5px rgba(161, 136, 127, 0.5)",
                  "0 0 0px rgba(161, 136, 127, 0)"
                ],
                transition: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Char's Candle Bar
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-[#A1887F] mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          {/* Logo - removed from circle and animations */}
          <div className="flex justify-center mb-10 relative w-[280px] h-[280px] mx-auto">
            <Image 
              src="/charscandle.jpg" 
              alt="Char's Candle Bar Logo" 
              fill
              priority
              sizes="(max-width: 280px) 100vw, 280px"
              style={{ objectFit: 'contain' }}
              className="rounded-lg"
            />
          </div>
          
          {/* Content */}
          <div className="mb-14">
            {/* Text */}
            <ScrollReveal variants={fadeInUp} delay={0.2}>
              <div className="mb-10 px-4 md:px-8 bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <p className="text-[#2E2E2E] text-base leading-relaxed mb-6">
                  At Char's Candle Bar, every candle is a handcrafted experience—infused with love, intention, and a touch of luxury. We pour each candle using premium wax blends and thoughtfully curated fragrances designed to calm, uplift, and inspire. Whether you're setting the mood, creating sacred space, or simply indulging in self-care, our candles offer a soft glow and rich aroma that transforms any room into a sanctuary.
                </p>
                <motion.p 
                  className="text-[#708238] text-lg md:text-xl font-medium text-center italic"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <ScrollReveal variants={fadeIn} delay={0.4}>
                <motion.div 
                  className="bg-white rounded-2xl shadow-lg p-3 overflow-hidden border border-[#F8E1DA]"
                  style={{ height: "350px" }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                    borderColor: "#A1887F"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full flex items-center justify-center relative rounded-xl overflow-hidden">
                    <Image
                      src="/Candle1.jpeg"
                      alt="Luxury handcrafted candle"
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </motion.div>
              </ScrollReveal>
              
              <ScrollReveal variants={fadeIn} delay={0.6}>
                <motion.div 
                  className="bg-white rounded-2xl shadow-lg p-3 overflow-hidden border border-[#F8E1DA]"
                  style={{ height: "350px" }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                    borderColor: "#A1887F"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full flex items-center justify-center relative rounded-xl overflow-hidden">
                    <Image
                      src="/Candle2.jpeg" 
                      alt="Premium scented candle"
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>

          {/* CTA */}
          <ScrollReveal variants={fadeInUp} delay={0.8}>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl py-8 px-4 shadow-md">
              <motion.a 
                href="https://www.etsy.com/shop/VisionaryConsultsLLC?ref=shop-header-name&listing_id=4296049993&from_page=listing" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#A1887F] hover:bg-[#8D776F] text-white font-medium py-3 px-10 rounded-full shadow-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(161, 136, 127, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Buy Candles Now
              </motion.a>
              <p className="mt-4 text-[#2E2E2E] text-sm">
                Handcrafted with love. Limited quantities available.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
} 