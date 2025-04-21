'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimateOnScroll from '../components/utils/AnimateOnScroll';
import Button from '../components/ui/Button';

type CTAProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'primary' | 'secondary';
  isExternal?: boolean;
};

export default function CTA({
  title,
  description,
  buttonText,
  buttonLink,
  variant = 'primary',
  isExternal = false
}: CTAProps) {
  const bgColors = {
    primary: 'bg-gradient-to-r from-[#708238] to-[#5A6D2A] text-white',
    secondary: 'bg-gradient-to-r from-[#F8E1DA] to-[#F5ECE8] text-[#2E2E2E]'
  };

  const buttonVariant = variant === 'primary' ? 'secondary' : 'primary';
  
  return (
    <section className={`py-16 ${bgColors[variant]}`}>
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeUp">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                href={buttonLink} 
                variant={buttonVariant} 
                size="lg"
                external={isExternal}
              >
                {buttonText}
              </Button>
            </motion.div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
} 