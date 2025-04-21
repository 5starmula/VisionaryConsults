'use client';

import React from 'react';
import Image from 'next/image';
import Header from './Header';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, slideInLeft, slideInRight } from './utils/animations';

export default function Hero() {
  return (
    <div className="relative w-full">
      <Header />
      <div id="hero" className="bg-gradient-to-r from-[#FAF9F6] to-[#F8E1DA] min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 md:order-1"
              initial="hidden"
              animate="visible"
              variants={slideInLeft}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-[#2E2E2E] mb-6"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Welcome to Visionary Consults
              </motion.h1>
              <motion.p 
                className="text-[#2E2E2E] mb-8 text-lg"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                Your trusted partner in professional growth, creative development, and purposeful living. Whether you are navigating a career crossroads, building a business, or seeking tools to empower young minds, you're in the right place
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <motion.a 
                  href="#what-we-do" 
                  className="bg-[#A1887F] hover:bg-[#8D776F] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Services
                </motion.a>
                <motion.a 
                  href="#about" 
                  className="bg-[#FAF9F6] hover:bg-[#F8E1DA] text-[#708238] font-semibold py-3 px-6 rounded-lg shadow-md border border-[#A1887F] transition duration-300 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Char
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div 
              className="order-1 md:order-2 flex justify-center"
              initial="hidden"
              animate="visible"
              variants={slideInRight}
            >
              <motion.div 
                className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <Image 
                  src="/images/heropic.jpg" 
                  alt="Visionary Consults Hero" 
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 