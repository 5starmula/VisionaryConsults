'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/utils/AnimateOnScroll';

export default function WhatWeDo() {
  const services = [
    {
      title: "Career & HR Consulting",
      description: "Resume development, workplace strategies, and hiring guidance.",
      icon: "📊"
    },
    {
      title: "Children's Books",
      description: "Explore our inspiring collection of books and printable activities that nurture resilience and creativity.",
      icon: "📚"
    },
    {
      title: "Business & Admin Support",
      description: "Back-end operations, nonprofit support, templates, and forms for solopreneurs and small teams.",
      icon: "💡"
    }
  ];

  return (
    <section id="what-we-do" className="py-20 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">What We Do</h2>
            <div className="w-24 h-1 bg-[#A1887F] mx-auto mb-6"></div>
            <p className="text-[#2E2E2E] max-w-2xl mx-auto">
              At Visionary Consults, we believe in blending passion with purpose. Our services and offerings span across:
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimateOnScroll key={index} animation="fadeUp" delay={index * 0.2}>
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-8 h-full border border-[#F8E1DA] group hover:border-[#A1887F]"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-[#708238] mb-3 group-hover:text-[#A1887F] transition duration-300">{service.title}</h3>
                <p className="text-[#2E2E2E]">{service.description}</p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
} 