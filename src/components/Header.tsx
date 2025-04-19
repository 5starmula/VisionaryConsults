'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
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
          className="md:hidden text-gray-700"
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
        <nav className="hidden md:flex space-x-6">
          <Link href="#what-we-do" className="text-gray-700 hover:text-purple-600 transition duration-300">
            What We Do
          </Link>
          <Link href="#mission" className="text-gray-700 hover:text-purple-600 transition duration-300">
            Mission
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-purple-600 transition duration-300">
            About
          </Link>
          <Link href="#book-consultation" className="text-gray-700 hover:text-purple-600 transition duration-300">
            Consultation
          </Link>
          <Link href="#books" className="text-gray-700 hover:text-purple-600 transition duration-300">
            Books
          </Link>
          <Link href="#templates" className="text-gray-700 hover:text-purple-600 transition duration-300">
            Templates
          </Link>
          <Link href="#candle-bar" className="text-gray-700 hover:text-purple-600 transition duration-300">
            Candle Bar
          </Link>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-inner">
          <div className="flex flex-col space-y-4">
            <Link href="#what-we-do" className="text-gray-700 hover:text-purple-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>
              What We Do
            </Link>
            <Link href="#mission" className="text-gray-700 hover:text-purple-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>
              Mission
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-purple-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#book-consultation" className="text-gray-700 hover:text-purple-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>
              Consultation
            </Link>
            <Link href="#books" className="text-gray-700 hover:text-purple-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>
              Books
            </Link>
            <Link href="#templates" className="text-gray-700 hover:text-purple-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>
              Templates
            </Link>
            <Link href="#candle-bar" className="text-gray-700 hover:text-purple-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>
              Candle Bar
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
} 