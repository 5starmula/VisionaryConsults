'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/utils/AnimateOnScroll';

export default function BookConsultation() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-[#F8E1DA] to-[#F5ECE8]">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeUp">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-[#708238] p-12 text-white">
                <motion.h3 
                  className="text-2xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Ready to Transform Your Vision?
                </motion.h3>
                <motion.p 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Book a free 15-minute discovery call to explore how we can support your goals.
                </motion.p>
                <motion.ul 
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <li className="flex items-center">
                    <motion.span 
                      whileHover={{ scale: 1.2 }}
                      className="mr-2"
                    >
                      ✓
                    </motion.span> 
                    Personalized approach to your needs
                  </li>
                  <li className="flex items-center">
                    <motion.span 
                      whileHover={{ scale: 1.2 }}
                      className="mr-2"
                    >
                      ✓
                    </motion.span> 
                    Actionable next steps
                  </li>
                  <li className="flex items-center">
                    <motion.span 
                      whileHover={{ scale: 1.2 }}
                      className="mr-2"
                    >
                      ✓
                    </motion.span> 
                    No obligation
                  </li>
                </motion.ul>
              </div>
              <div className="md:w-1/2 p-12">
                <motion.h3 
                  className="text-2xl font-bold mb-6 text-[#2E2E2E]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Schedule Your Call
                </motion.h3>
                <motion.p 
                  className="mb-8 text-[#5A5A5A]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Choose a time that works for you and let's discuss how Visionary Consults can help bring your ideas to life.
                </motion.p>
                <motion.a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#A1887F] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#8D796F] transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  Book Your Free Call
                </motion.a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
} 