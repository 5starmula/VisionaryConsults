'use client';

import React, { useEffect, ReactNode } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

type AnimateOnScrollProps = {
  children: ReactNode;
  threshold?: number;
  animation?: 'fadeUp' | 'fadeIn' | 'fadeRight' | 'fadeLeft' | 'zoomIn';
  delay?: number;
};

export default function AnimateOnScroll({
  children,
  threshold = 0.1,
  animation = 'fadeUp',
  delay = 0
}: AnimateOnScrollProps) {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { 
    amount: threshold,
    once: true
  });

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    fadeRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animations[animation]}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
} 