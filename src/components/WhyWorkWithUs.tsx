'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimateOnScroll from '../components/utils/AnimateOnScroll';

export default function WhyWorkWithUs() {
  const values = [
    {
      title: "Personalized Experience",
      description: "We don't believe in one-size-fits-all. Every solution is tailored to your specific needs and vision.",
      icon: "👤"
    },
    {
      title: "Integrity & Transparency",
      description: "Open communication and honest interactions are at the heart of our consulting approach.",
      icon: "✓"
    },
    {
      title: "Results-Oriented",
      description: "Our focus is on tangible outcomes that drive real change for your career or business.",
      icon: "🎯"
    },
    {
      title: "Continuous Growth",
      description: "We believe in the power of learning and evolving, constantly refining our methods to serve you better.",
      icon: "📈"
    }
  ];

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">Why Work With Us</h2>
            <div className="w-24 h-1 bg-[#A1887F] mx-auto mb-6"></div>
            <p className="text-[#2E2E2E] max-w-2xl mx-auto">
              Our values guide everything we do. When you partner with Visionary Consults, you get:
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <AnimateOnScroll key={index} animation="fadeUp" delay={index * 0.2}>
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-8 h-full border border-transparent hover:border-[#A1887F] transition-colors"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  borderColor: "#A1887F"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div 
                  className="text-4xl mb-4 text-[#708238]"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-[#708238] mb-3">{value.title}</h3>
                <p className="text-[#2E2E2E]">{value.description}</p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
} 