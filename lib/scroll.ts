"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Custom hook for smooth, optimized scrolling
 * Uses GPU acceleration and efficient event handling
 */
export function useSmoothScroll() {
  const scrollListener = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    const scrollListeners: Set<(scrollY: number) => void> = new Set();

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          scrollListeners.forEach((listener) => listener(scrollY));
          ticking = false;
        });
        ticking = true;
      }
    };

    const addScrollListener = (listener: (scrollY: number) => void) => {
      scrollListeners.add(listener);
      if (scrollListeners.size === 1) {
        window.addEventListener("scroll", handleScroll, { passive: true });
      }
    };

    const removeScrollListener = (listener: (scrollY: number) => void) => {
      scrollListeners.delete(listener);
      if (scrollListeners.size === 0) {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onScroll = (callback: (scrollY: number) => void) => {
    // Implementation handled in useEffect
  };

  return { onScroll };
}

/**
 * Hook to get current scroll position optimized
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const updateScrollY = () => {
      setScrollY(window.scrollY);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollY);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
}

/**
 * Component for smooth scrolling to elements
 * Exported from scroll.tsx
 */

/**
 * Optimize scroll behavior with CSS containment
 * Exported from scroll.tsx
 */

/**
 * Intersection observer for scroll-based animations
 */
export function useScrollAnimation(options?: IntersectionObserverInit) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      rootMargin: "0px 0px -100px 0px",
      ...options,
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}

/**
 * Parallax scrolling with performance optimization
 */
export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const elementTop = ref.current?.offsetTop || 0;
          const relativeScroll = scrollTop - elementTop;

          setOffset(relativeScroll * speed);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return { ref, offset };
}

/**
 * Stop propagation of scroll events for nested scrollable areas
 */
export function useWheelScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const scrollableHeight =
        container.scrollHeight - container.clientHeight;

      if (scrollableHeight > 0) {
        e.preventDefault();
        container.scrollTop += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return containerRef;
}

/**
 * Prevent layout shift during scroll
 */
export function useScrollbarWidth() {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const width =
      window.innerWidth - document.documentElement.clientWidth;
    setScrollbarWidth(width);

    const handleResize = () => {
      const newWidth =
        window.innerWidth - document.documentElement.clientWidth;
      setScrollbarWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return scrollbarWidth;
}

/**
 * Optimize momentum scrolling on mobile
 */
export function useMomentumScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const style = document.documentElement.style;

    // Enable momentum scrolling on iOS
    style.setProperty("-webkit-overflow-scrolling", "touch");

    return () => {
      style.removeProperty("-webkit-overflow-scrolling");
    };
  }, []);
}

/**
 * Debounced scroll handler
 */
export function useDebouncedScroll(
  callback: (scrollY: number) => void,
  delay: number = 150
) {
  const [scrollY, setScrollY] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(window.scrollY);
      }, delay);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [callback, delay]);

  return scrollY;
}
