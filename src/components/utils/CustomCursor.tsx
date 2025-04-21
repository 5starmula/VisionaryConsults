'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
}

export default function CustomCursor() {
  const [cursor, setCursor] = useState<CursorState>({ 
    x: 0, 
    y: 0, 
    isHovering: false 
  });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Only show on non-touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
      
      const onMouseMove = (e: MouseEvent) => {
        setCursor(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
      };
      
      const onMouseEnter = () => {
        setCursor(prev => ({ ...prev, isHovering: true }));
      };
      
      const onMouseLeave = () => {
        setCursor(prev => ({ ...prev, isHovering: false }));
      };
      
      document.addEventListener('mousemove', onMouseMove);
      
      const allClickableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"]'
      );
      
      allClickableElements.forEach(element => {
        element.addEventListener('mouseenter', onMouseEnter);
        element.addEventListener('mouseleave', onMouseLeave);
      });
      
      return () => {
        document.removeEventListener('mousemove', onMouseMove);
        
        allClickableElements.forEach(element => {
          element.removeEventListener('mouseenter', onMouseEnter);
          element.removeEventListener('mouseleave', onMouseLeave);
        });
      };
    }
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 rounded-full bg-[#A1887F] z-50 pointer-events-none"
        animate={{
          x: cursor.x - 10,
          y: cursor.y - 10,
          scale: cursor.isHovering ? 1.5 : 1,
          opacity: cursor.isHovering ? 0.5 : 0.8,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Secondary cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#A1887F] z-50 pointer-events-none"
        animate={{
          x: cursor.x - 16,
          y: cursor.y - 16,
          scale: cursor.isHovering ? 1.2 : 1,
          opacity: 0.5,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
      />
    </>
  );
} 