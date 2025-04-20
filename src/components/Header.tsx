'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-[#708238] shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Visionary Consults Logo" 
              width={100} 
              height={100} 
              priority
            />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#what-we-do" className="text-white hover:text-[#F8E1DA] transition duration-300">
            What We Do
          </Link>
          <Link href="#mission" className="text-white hover:text-[#F8E1DA] transition duration-300">
            Mission
          </Link>
          <Link href="#about" className="text-white hover:text-[#F8E1DA] transition duration-300">
            About
          </Link>
          <Link href="#book-consultation" className="text-white hover:text-[#F8E1DA] transition duration-300">
            Consultation
          </Link>
          <Link href="#books" className="text-white hover:text-[#F8E1DA] transition duration-300">
            Books
          </Link>
          <Link href="#templates" className="text-white hover:text-[#F8E1DA] transition duration-300">
            Templates
          </Link>
          <Link href="#candle-bar" className="text-white hover:text-[#F8E1DA] transition duration-300">
            Candle Bar
          </Link>
          <a 
            href="https://buy.stripe.com/test_14k5nk8Ot3Nl7PG4gg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#A1887F] hover:bg-[#8D776F] text-white text-sm font-medium py-1.5 px-3 rounded-lg shadow-sm transition duration-300"
          >
            Make a Payment
          </a>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#708238] py-4 px-6 shadow-inner">
          <div className="flex flex-col space-y-4">
            <Link href="#what-we-do" className="text-white hover:text-[#F8E1DA] transition duration-300" onClick={() => setIsMenuOpen(false)}>
              What We Do
            </Link>
            <Link href="#mission" className="text-white hover:text-[#F8E1DA] transition duration-300" onClick={() => setIsMenuOpen(false)}>
              Mission
            </Link>
            <Link href="#about" className="text-white hover:text-[#F8E1DA] transition duration-300" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#book-consultation" className="text-white hover:text-[#F8E1DA] transition duration-300" onClick={() => setIsMenuOpen(false)}>
              Consultation
            </Link>
            <Link href="#books" className="text-white hover:text-[#F8E1DA] transition duration-300" onClick={() => setIsMenuOpen(false)}>
              Books
            </Link>
            <Link href="#templates" className="text-white hover:text-[#F8E1DA] transition duration-300" onClick={() => setIsMenuOpen(false)}>
              Templates
            </Link>
            <Link href="#candle-bar" className="text-white hover:text-[#F8E1DA] transition duration-300" onClick={() => setIsMenuOpen(false)}>
              Candle Bar
            </Link>
            <a 
              href="https://buy.stripe.com/test_14k5nk8Ot3Nl7PG4gg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#A1887F] hover:bg-[#8D776F] text-white text-sm font-medium py-1.5 px-3 rounded-lg shadow-sm transition duration-300 flex justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Make a Payment
            </a>
          </div>
        </nav>
      )}
    </header>
  );
} 