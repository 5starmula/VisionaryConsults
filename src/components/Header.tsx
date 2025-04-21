'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full bg-[#2E2E2E] ${scrolled ? 'shadow-lg' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Visionary Consults Logo" 
              width={100} 
              height={100} 
              priority
              className="transition-all duration-300"
            />
          </Link>
        </motion.div>
        
        {/* Mobile menu button */}
        <motion.button 
          className="md:hidden text-white p-2 rounded-full bg-[#3E3E3E] hover:bg-[#4E4E4E]"
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
          {[
            { href: "#what-we-do", label: "What We Do" },
            { href: "#mission", label: "Mission" },
            { href: "#about", label: "About" },
            { href: "#book-consultation", label: "Consultation" },
            { href: "#books", label: "Books" },
            { href: "#templates", label: "Templates" },
            { href: "#candles", label: "Candles" },
          ].map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <Link 
                href={link.href} 
                className="text-[#F8E1DA] hover:text-white relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
          <motion.a 
            href="https://buy.stripe.com/test_14k5nk8Ot3Nl7PG4gg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#A1887F] hover:bg-[#8D776F] text-white text-sm font-medium py-1.5 px-4 rounded-lg shadow-md transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Make a Payment
          </motion.a>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden bg-[#2E2E2E] py-4 px-6 shadow-inner overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="flex flex-col space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {[
                { href: "#what-we-do", label: "What We Do" },
                { href: "#mission", label: "Mission" },
                { href: "#about", label: "About" },
                { href: "#book-consultation", label: "Consultation" },
                { href: "#books", label: "Books" },
                { href: "#templates", label: "Templates" },
                { href: "#candles", label: "Candles" },
              ].map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-[#F8E1DA] hover:text-white transition duration-300 block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a 
                href="https://buy.stripe.com/test_14k5nk8Ot3Nl7PG4gg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#A1887F] hover:bg-[#8D776F] text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md transition-all duration-300 flex justify-center mt-2"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Make a Payment
              </motion.a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 