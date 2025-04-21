'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'About', href: '#about' },
    { name: 'Templates', href: '#templates' },
    { name: 'Candles', href: '#candles' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com', icon: '/images/instagram.svg' },
    { name: 'Twitter', href: 'https://twitter.com', icon: '/images/twitter.svg' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: '/images/linkedin.svg' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-[#2E2E2E] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block mb-4">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
                <Image 
                  src="/images/logo-light.png" 
                  alt="Visionary Consults Logo" 
                  width={180} 
                  height={50} 
                  className="h-10 w-auto" 
                />
              </motion.div>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering individuals and businesses to transform their visions into reality through strategic consulting, creative solutions, and purpose-driven content.
            </p>
            <motion.div 
              className="flex space-x-4 mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#3D3D3D] flex items-center justify-center hover:bg-[#A1887F] transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image src={link.icon} alt={link.name} width={20} height={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[#A1887F]">Quick Links</h3>
            <motion.ul 
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {footerLinks.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 inline-block"
                  >
                    <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }} className="flex items-center">
                      <span className="mr-1">→</span> {link.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[#A1887F]">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="mr-2 text-[#A1887F]">✉</span>
                <a href="mailto:info@visionaryconsults.com" className="hover:text-white transition-colors duration-300">
                  info@visionaryconsults.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="mr-2 text-[#A1887F]">📞</span>
                <a href="tel:+1234567890" className="hover:text-white transition-colors duration-300">
                  (123) 456-7890
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="mr-2 text-[#A1887F]">📍</span>
                <span>Washington Metropolitan Area</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-[#3D3D3D] mt-12 pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Visionary Consults. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
} 