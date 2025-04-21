'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  external?: boolean;
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  external = false,
}: ButtonProps) {
  // Variant styles
  const variantStyles = {
    primary: 'bg-[#A1887F] hover:bg-[#8D776F] text-white',
    secondary: 'bg-[#FAF9F6] hover:bg-[#F8E1DA] text-[#708238] border border-[#A1887F]',
    outline: 'bg-transparent hover:bg-[#F8E1DA]/30 text-[#2E2E2E] border border-[#A1887F]',
  };

  // Size styles
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2.5 px-5 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  // Common styles
  const commonStyles = 'font-medium rounded-lg shadow-md transition-all duration-300';

  // Combined classes
  const combinedClasses = `${variantStyles[variant]} ${sizeStyles[size]} ${commonStyles} ${className}`;

  const buttonContent = (
    <motion.span
      className="inline-flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.span>
  );

  // If it's a link
  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <a href={href} className={combinedClasses} onClick={onClick} {...linkProps}>
        {buttonContent}
      </a>
    );
  }

  // If it's a button
  return (
    <button className={combinedClasses} onClick={onClick}>
      {buttonContent}
    </button>
  );
} 