'use client';

import React from 'react';
import Image from 'next/image';
import Header from './Header';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative w-full">
      <Header />
      <div id="hero" className="bg-gradient-to-r from-[#FAF9F6] to-[#F8E1DA] min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-[#2E2E2E] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                Welcome to <span className="text-[#A1887F]">Visionary</span> Consults
              </motion.h1>
              <motion.p 
                className="text-[#2E2E2E] mb-8 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              >
                Your trusted partner in professional growth, creative development, and purposeful living. Whether you are navigating a career crossroads, building a business, or seeking tools to empower young minds, you're in the right place
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              >
                <motion.a 
                  href="#what-we-do" 
                  className="bg-[#A1887F] hover:bg-[#8D776F] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 text-center"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Services
                </motion.a>
                <motion.a 
                  href="#about" 
                  className="bg-[#FAF9F6] hover:bg-[#F8E1DA] text-[#708238] font-semibold py-3 px-6 rounded-lg shadow-md border border-[#A1887F] transition-all duration-300 text-center"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Char
                </motion.a>
              </motion.div>
            </div>
            <motion.div 
              className="order-1 md:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/heropic.jpg" 
                  alt="Visionary Consults Hero" 
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-2xl transition-transform duration-700"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/20 to-transparent rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 