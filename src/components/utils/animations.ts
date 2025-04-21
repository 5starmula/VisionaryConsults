import { Variants } from 'framer-motion';

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

// Fade in animation with Y axis movement (from bottom)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Fade in animation with Y axis movement (from top)
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Staggered children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Button hover animation
export const buttonHover = {
  scale: 1.05,
  transition: { 
    duration: 0.2,
    ease: "easeInOut"
  }
};

// Image hover animation
export const imageHover = {
  scale: 1.03,
  transition: { 
    duration: 0.3,
    ease: "easeInOut"
  }
};

// Page transition animation
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      ease: "easeInOut" 
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.3,
      ease: "easeInOut" 
    }
  }
};

// Animation for scroll-triggered elements
export const scrollReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    transition: {
      duration: 0.5
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}; 