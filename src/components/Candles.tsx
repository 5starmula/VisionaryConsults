'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import ScrollReveal from './utils/ScrollReveal';
import { fadeInUp, fadeIn, scaleUp } from './utils/animations';
import Image from 'next/image';

// Define the star type
interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Candles() {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 15]);
  
  // Stars/sparkles animation for decoration
  const [stars, setStars] = React.useState<Star[]>([]);
  useEffect(() => {
    const newStars = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 5 + 2,
      delay: Math.random() * 2
    }));
    setStars(newStars);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="candles" className="py-20 bg-gradient-to-b from-[#F8E1DA] to-[#FAF9F6] relative overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div 
        className="absolute top-20 right-10 w-24 h-24 rounded-full bg-[#F8E1DA]/30 opacity-50"
        style={{ y: y1, rotate }}
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
        style={{ y: y2 }}
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
      
      {/* Floating stars/sparkles */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-[#A1887F]/30 rounded-full z-10"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto" ref={containerRef}>
          {/* Section Header with slide-in animation */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">Char's Candle Bar</h2>
            <motion.div 
              className="w-24 h-1 bg-[#A1887F] mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            />
          </motion.div>

          {/* Logo with improved hover animation */}
          <ScrollReveal variants={scaleUp}>
            <div className="flex justify-center mb-10">
              <motion.div 
                className="rounded-full bg-white p-3 shadow-lg"
                whileHover={{ 
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  y: -8,
                  scale: 1.05,
                  rotate: [0, -3, 3, -3, 0], 
                  transition: { duration: 0.5 }
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image 
                  src="/Candle.png" 
                  alt="Char's Candle Bar Logo" 
                  width={280} 
                  height={280}
                  className="rounded-full"
                />
              </motion.div>
            </div>
          </ScrollReveal>
          
          {/* Content with staggered text animation */}
          <div className="mb-14">
            {/* Text */}
            <ScrollReveal variants={fadeInUp} delay={0.2}>
              <motion.div 
                className="mb-10 px-4 md:px-8 bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm"
                variants={staggerContainer}
                initial="hidden"
                animate={controls}
              >
                <motion.p 
                  className="text-[#2E2E2E] text-base leading-relaxed mb-6"
                  variants={textVariant}
                >
                  At Char's Candle Bar, every candle is a handcrafted experience—infused with love, intention, and a touch of luxury. We pour each candle using premium wax blends and thoughtfully curated fragrances designed to calm, uplift, and inspire. Whether you're setting the mood, creating sacred space, or simply indulging in self-care, our candles offer a soft glow and rich aroma that transforms any room into a sanctuary.
                </motion.p>
                <motion.p 
                  className="text-[#708238] text-lg md:text-xl font-medium text-center italic"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Blush pink dreams. Champagne vibes. Golden energy—this is the Char way.
                </motion.p>
              </motion.div>
            </ScrollReveal>
            
            {/* Images with improved hover effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <ScrollReveal variants={fadeIn} delay={0.4}>
                <motion.div 
                  className="bg-white rounded-2xl shadow-lg p-3 overflow-hidden border border-[#F8E1DA]"
                  style={{ height: "350px" }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                    borderColor: "#A1887F",
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full h-full flex items-center justify-center relative rounded-xl overflow-hidden">
                    <motion.div
                      className="absolute inset-0 z-10 bg-black/20 opacity-0 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div 
                          className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <motion.div className="w-10 h-10 rounded-full bg-white/80" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
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
                    borderColor: "#A1887F",
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full h-full flex items-center justify-center relative rounded-xl overflow-hidden">
                    <motion.div
                      className="absolute inset-0 z-10 bg-black/20 opacity-0 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div 
                          className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <motion.div className="w-10 h-10 rounded-full bg-white/80" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
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

          {/* CTA with enhanced button animation */}
          <ScrollReveal variants={fadeInUp} delay={0.8}>
            <motion.div 
              className="text-center bg-white/70 backdrop-blur-sm rounded-2xl py-8 px-4 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.a 
                href="https://buy.stripe.com/test_14k5nk8Ot3Nl7PG4gg" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#A1887F] hover:bg-[#8D776F] text-white font-medium py-3 px-10 rounded-full shadow-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(161, 136, 127, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: ["0px 5px 15px rgba(161, 136, 127, 0.2)", "0px 10px 20px rgba(161, 136, 127, 0.4)", "0px 5px 15px rgba(161, 136, 127, 0.2)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Buy Candles Now
              </motion.a>
              <motion.p 
                className="mt-4 text-[#2E2E2E] text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Handcrafted with love. Limited quantities available.
              </motion.p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
} 