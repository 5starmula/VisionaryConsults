'use client';

import React, { ReactNode } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  variants,
  className = '',
  delay = 0,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once,
    amount: threshold
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 