'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimateOnScroll from './utils/AnimateOnScroll';
import CTA from './CTA';

export default function Templates() {
  const templates = [
    {
      title: "HR Documentation Bundle",
      description: "Essential templates for HR professionals including policies, onboarding documents, and performance review forms.",
      image: "/images/template1.jpg",
      tag: "HR"
    },
    {
      title: "Small Business Toolkit",
      description: "Comprehensive templates for small business owners, including budget trackers, project plans, and marketing calendars.",
      image: "/images/template2.jpg",
      tag: "Business"
    },
    {
      title: "Career Development Pack",
      description: "Resume templates, cover letter frameworks, and interview preparation guides for career advancement.",
      image: "/images/template3.jpg",
      tag: "Career"
    }
  ];

  return (
    <section id="templates" className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 mb-16">
        <AnimateOnScroll animation="fadeUp">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Professional Templates
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-[#A1887F] mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.p 
              className="text-[#2E2E2E] max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Save time and elevate your work with our professionally designed templates. From HR documentation to business planning, we've got you covered.
            </motion.p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <AnimateOnScroll key={index} animation="fadeUp" delay={index * 0.2}>
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="relative h-48">
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[#708238] text-white text-xs font-bold py-1 px-2 rounded">
                    {template.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">{template.title}</h3>
                  <p className="text-[#5A5A5A] mb-4">{template.description}</p>
                  <motion.a 
                    href="#contact"
                    className="inline-block text-[#A1887F] font-medium hover:text-[#8D776F] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Learn more →
                  </motion.a>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
      
      <CTA 
        title="Ready to Streamline Your Work?"
        description="Our templates are designed to save you time and elevate your professional documents. Start using them today."
        buttonText="Browse Templates"
        buttonLink="#contact"
        variant="primary"
        isExternal={false}
      />
    </section>
  );
} 