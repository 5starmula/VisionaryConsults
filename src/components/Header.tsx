'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, fadeInDown, buttonHover } from './utils/animations';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { href: "#what-we-do", label: "What We Do" },
    { href: "#mission", label: "Mission" },
    { href: "#about", label: "About" },
    { href: "#book-consultation", label: "Consultation" },
    { href: "#books", label: "Books" },
    { href: "#templates", label: "Templates" },
    { href: "#candles", label: "Candles" },
  ];
  
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full bg-[#2E2E2E] shadow-md"
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/Visionary_Consults_Enhanced.png" 
              alt="Visionary Consults Logo" 
              width={150} 
              height={150} 
              className="w-20 h-20 md:w-36 md:h-36"
              priority
            />
          </Link>
        </motion.div>
        
        {/* Mobile menu button */}
        <motion.button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </motion.button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={item.href} className="text-[#F8E1DA] hover:text-white transition duration-300">
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.a 
            href="https://pci.jotform.com/form/253065665915161" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#A1887F] hover:bg-[#8D776F] text-white text-sm font-medium py-1.5 px-3 rounded-lg shadow-sm transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
          >
Book Consultation
          </motion.a>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden bg-[#2E2E2E] py-4 px-6 shadow-inner"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex flex-col space-y-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={fadeIn}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    href={item.href} 
                    className="text-[#F8E1DA] hover:text-white transition duration-300" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a 
                href="https://pci.jotform.com/form/253065665915161" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#A1887F] hover:bg-[#8D776F] text-white text-sm font-medium py-1.5 px-3 rounded-lg shadow-sm transition duration-300 flex justify-center"
                onClick={() => setIsMenuOpen(false)}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
    Book Consultation
              </motion.a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 