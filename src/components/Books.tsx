'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimateOnScroll from './utils/AnimateOnScroll';
import CTA from './CTA';

export default function Books() {
  const books = [
    {
      title: "The Adventure of Zara",
      description: "A tale of courage, friendship, and discovery for young readers.",
      image: "/images/book1.jpg",
      age: "Ages 5-8"
    },
    {
      title: "Dreams Take Flight",
      description: "An inspiring story about believing in yourself and reaching for the stars.",
      image: "/images/book2.jpg",
      age: "Ages 6-10"
    },
    {
      title: "Colors of Courage",
      description: "A vibrant journey through emotions and bravery for children developing emotional intelligence.",
      image: "/images/book3.jpg",
      age: "Ages 4-7"
    }
  ];

  return (
    <section id="books" className="py-20 bg-gradient-to-r from-[#FBEEE6] to-[#F5F9F0]">
      <div className="container mx-auto px-4 mb-16">
        <AnimateOnScroll animation="fadeUp">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Children's Books
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
              Our books inspire young minds through stories that celebrate diversity, resilience, and creativity. Each book comes with engaging activities to extend the learning journey.
            </motion.p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <AnimateOnScroll key={index} animation="fadeUp" delay={index * 0.2}>
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
                whileHover={{ 
                  rotate: 2,
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>
                  <div className="absolute top-4 right-4 bg-[#708238] text-white text-xs font-bold py-1 px-2 rounded">
                    {book.age}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#708238] mb-2">{book.title}</h3>
                  <p className="text-[#2E2E2E] mb-4">{book.description}</p>
                  <motion.a 
                    href="#contact"
                    className="inline-block text-[#A1887F] font-medium hover:text-[#8D776F] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Explore book →
                  </motion.a>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
      
      <CTA 
        title="Inspiring Young Readers"
        description="Our children's books promote emotional intelligence, diversity, and resilience through engaging storytelling and interactive activities."
        buttonText="Explore Our Books"
        buttonLink="#contact"
        variant="secondary"
        isExternal={false}
      />
    </section>
  );
} 