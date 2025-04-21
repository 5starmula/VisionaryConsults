'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/utils/AnimateOnScroll';

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-[#708238] text-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeUp">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Mission
            </motion.h2>
            
            <motion.div 
              className="w-24 h-1 bg-white mx-auto mb-10"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.span 
                className="absolute -left-8 -top-8 text-6xl opacity-20"
                initial={{ rotate: -15 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                "
              </motion.span>
              
              <motion.p 
                className="text-xl md:text-2xl italic leading-relaxed mb-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                To empower visionaries by nurturing ideas into plans, transforming plans into pathways, and guiding pathways to purpose-driven action.
              </motion.p>
              
              <motion.span 
                className="absolute -right-8 bottom-0 text-6xl opacity-20"
                initial={{ rotate: 15 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                "
              </motion.span>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <AnimateOnScroll animation="fadeUp" delay={0.1}>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg h-full"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <motion.div 
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    🌱
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Nurture</h3>
                  <p>We create space for visions to grow, providing the care and resources needed for development and refinement.</p>
                </motion.div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fadeUp" delay={0.2}>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg h-full"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <motion.div 
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    🔄
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Transform</h3>
                  <p>We help turn abstract ideas into concrete strategies, bridging the gap between imagination and implementation.</p>
                </motion.div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fadeUp" delay={0.3}>
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg h-full"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <motion.div 
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    🚀
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Guide</h3>
                  <p>We provide the support, expertise, and accountability needed to navigate the journey from concept to reality.</p>
                </motion.div>
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
} 