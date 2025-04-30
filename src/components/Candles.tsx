'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './utils/ScrollReveal';
import { fadeInUp, fadeIn, scaleUp } from './utils/animations';
import Image from 'next/image';

const Candles = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

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
          <div className="text-center mb-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-2"
              variants={itemVariants}
            >
              Char's Candle Bar
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-[#A1887F] mx-auto mb-4"
              variants={itemVariants}
            />
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-6 relative h-[400px] w-[400px] mx-auto">
            <Image 
              src="/newcandles.png"
              alt="Char's Candle Bar Logo" 
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '100%',
              }}
              className="!relative"
            />
          </div>
          
          {/* Content */}
          <div className="mb-10">
            {/* Text */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-8"
              variants={itemVariants}
            >
              <p className="text-[#2E2E2E] text-lg leading-relaxed">
                Welcome to Char's Candle Bar, where we craft unique, hand-poured candles that bring warmth and ambiance to your space. 
                Each candle is carefully made with premium soy wax and essential oils, ensuring a clean, long-lasting burn and delightful fragrance.
              </p>
            </motion.div>

            {/* Image Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4"
              variants={itemVariants}
            >
              <div className="w-full h-[400px] rounded-lg overflow-hidden bg-white shadow-md">
                <Image
                  src="/images/Candle1.jpeg"
                  alt="Hand-poured candle making process"
                  width={400}
                  height={400}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="w-full h-[400px] rounded-lg overflow-hidden bg-white shadow-md">
                <Image
                  src="/images/Candle2.jpeg"
                  alt="Finished candle products"
                  width={400}
                  height={400}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </motion.div>
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
};

export default Candles; 