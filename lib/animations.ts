/**
 * Animation optimization utilities for Framer Motion
 * Provides optimized animation presets for smooth, GPU-accelerated performance
 */

import type { Variants } from "framer-motion";

/**
 * Standard easing functions optimized for performance
 * Using cubic-bezier for hardware acceleration
 */
export const EASING = {
  // Smooth and natural
  smooth: [0.25, 0.46, 0.45, 0.94],
  // Faster with gentle ease-out
  fast: [0.33, 0.66, 0.66, 1],
  // Spring-like feeling
  spring: [0.68, -0.55, 0.265, 1.55],
  // Quick and snappy
  snappy: [0.25, 1, 0.5, 1],
  // Very smooth, iPhone-like
  apple: [0.25, 0.1, 0.25, 1],
  // No easing, linear
  linear: [0, 0, 1, 1],
} as const;

/**
 * Optimized fade-in animation (opacity only)
 * Uses GPU-accelerated opacity property
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: EASING.smooth,
    },
  },
};

/**
 * Fade in with slight scale for depth
 * Uses transform and opacity for GPU acceleration
 */
export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: EASING.smooth,
    },
  },
};

/**
 * Slide up animation
 * Uses transform for GPU acceleration
 */
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASING.smooth,
    },
  },
};

/**
 * Slide down animation
 */
export const slideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASING.smooth,
    },
  },
};

/**
 * Slide from left animation
 */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: EASING.smooth,
    },
  },
};

/**
 * Slide from right animation
 */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: EASING.smooth,
    },
  },
};

/**
 * Container animation with staggered children
 * Optimized for performance with sequential reveal
 */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      duration: 0.3,
    },
  },
};

/**
 * Item animation for use within containers
 * Minimal, lightweight animation
 */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: EASING.smooth,
    },
  },
};

/**
 * Hover scale animation
 * Minimal, responsive to user interaction
 */
export const hoverScale: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: EASING.snappy,
    },
  },
};

/**
 * Rotate animation (subtle)
 */
export const rotate: Variants = {
  hidden: { opacity: 0, rotate: -5 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: EASING.smooth,
    },
  },
};

/**
 * Pulse animation for attention
 * Optimized with opacity instead of scaling
 */
export const pulse: Variants = {
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Bounce animation (minimal, smooth)
 * Using transform for GPU acceleration
 */
export const bounce: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: EASING.spring,
    },
  },
};

/**
 * Optimize animation for reduced motion preferences
 */
export function getReducedMotionVariants(variants: Variants): Variants {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.1 } },
  };
}

/**
 * Image reveal animation (aspect ratio safe)
 * For images that need smooth reveal
 */
export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    clip: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
  },
  visible: {
    opacity: 1,
    clip: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: {
      duration: 0.8,
      ease: EASING.smooth,
    },
  },
};

/**
 * Text reveal animation for headings
 * Letter-by-letter effect using opacity
 */
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASING.smooth,
    },
  },
};

/**
 * Parallax animation values
 * Safe for use with will-change
 */
export const parallax = {
  slow: { y: [0, 10], transition: { duration: 2 } },
  medium: { y: [0, 20], transition: { duration: 2 } },
  fast: { y: [0, 30], transition: { duration: 2 } },
};

/**
 * Optimized exit animation
 * Fast fade out for smooth page transitions
 */
export const exitAnimation: Variants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

/**
 * Performance configuration for viewport
 * Recommended settings for smooth animations
 */
export const VIEWPORT_CONFIG = {
  once: false,
  amount: 0.2,
  margin: "0px 0px -100px 0px",
} as const;

/**
 * Viewport for first-time-only animations
 * Good for hero sections
 */
export const VIEWPORT_ONCE = {
  once: true,
  amount: 0.3,
} as const;

/**
 * Transition presets for common use cases
 */
export const TRANSITIONS = {
  fast: { duration: 0.2, ease: EASING.snappy },
  normal: { duration: 0.4, ease: EASING.smooth },
  slow: { duration: 0.6, ease: EASING.apple },
  verySlow: { duration: 1, ease: EASING.smooth },
} as const;

/**
 * Combine variants with reduced motion support
 */
export function createVariants(
  variants: Variants,
  options: { reduceMotion?: boolean } = {}
): Variants {
  if (options.reduceMotion) {
    return getReducedMotionVariants(variants);
  }
  return variants;
}

/**
 * Get animation duration based on viewport size
 * Mobile devices get shorter animations for better performance
 */
export function getAnimationDuration(baseTime: number): number {
  if (typeof window === "undefined") return baseTime;

  // Reduce duration on mobile for better performance
  if (window.innerWidth < 768) {
    return baseTime * 0.7;
  }

  return baseTime;
}

/**
 * Detect reduced motion preference
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Safe animation with motion preference detection
 */
export function getSafeVariants(
  fullVariants: Variants,
  reducedVariants: Variants
): Variants {
  return prefersReducedMotion() ? reducedVariants : fullVariants;
}
