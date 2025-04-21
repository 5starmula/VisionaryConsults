'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimateOnScroll from '../components/utils/AnimateOnScroll';

export default function About() {
  const coreStrengths = [
    "HR policy & compliance (federal and private sector)",
    "Employee advocacy, workplace navigation, and rebuttal strategy",
    "Children's content creation focused on emotional intelligence and growth",
    "Small business systems and nonprofit operations"
  ];
  
  const funFacts = [
    "I hold a master's in HR and I'm currently pursuing a doctorate in communications.",
    "I live in the Washington Metropolitan area, love skating, and enjoy writing stories that reflect joy, identity, and resilience.",
    "I'm passionate about helping Black professionals navigate workplace systems with confidence and clarity."
  ];

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll animation="fadeRight">
            <div className="relative">
              <motion.div 
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Image
                  src="/images/founder.jpg"
                  alt="Founder of Visionary Consults"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#A1887F] rounded-lg z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              <motion.div 
                className="absolute -top-8 -left-8 w-48 h-48 bg-[#708238] rounded-lg z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeLeft">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About Visionary Consults
              </motion.h2>
              
              <motion.div 
                className="w-24 h-1 bg-[#A1887F] mb-8"
                initial={{ width: 0 }}
                animate={{ width: 96 }} // 24 * 4 = 96px
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              
              <div className="space-y-4">
                <motion.p 
                  className="text-[#2E2E2E]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Visionary Consults was founded with a simple but powerful mission: to help clients transform their visions into reality, whether in their careers, businesses, or creative pursuits.
                </motion.p>
                
                <motion.p 
                  className="text-[#2E2E2E]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Our founder, with over 15 years of experience in HR, leadership development, and creative storytelling, brings a unique blend of strategic thinking and creative problem-solving to every client engagement.
                </motion.p>
                
                <motion.p 
                  className="text-[#2E2E2E]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  We believe that every individual and organization has untapped potential. Our job is to help you identify it, nurture it, and transform it into tangible results that make a difference.
                </motion.p>
              </div>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a 
                  href="#contact"
                  className="inline-block bg-[#708238] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#5A6D2A] transition duration-300"
                >
                  Book a Consultation
                </a>
              </motion.div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
} 