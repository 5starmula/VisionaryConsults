'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from './animations';

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionTransition({
  children,
  className = '',
  delay = 0,
}: SectionTransitionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 