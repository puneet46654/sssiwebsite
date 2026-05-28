"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  quality?: number;
  loading?: "lazy" | "eager";
  blurDataURL?: string;
  onLoadingComplete?: () => void;
  preload?: boolean;
  estimatedWidth?: number;
}

/**
 * Optimized Image Component
 * Features:
 * - Lazy loading with intersection observer
 * - Blur-up effect while loading
 * - Automatic quality optimization
 * - GPU-accelerated transitions
 * - Responsive image serving
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  sizes,
  className = "",
  quality = 80,
  loading = "lazy",
  blurDataURL,
  onLoadingComplete,
  preload = false,
  estimatedWidth,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [shouldRender, setShouldRender] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    margin: "300px 0px",
    once: true,
  });

  // Trigger rendering when in view
  useEffect(() => {
    if (isInView && !shouldRender && !priority) {
      setShouldRender(true);
    }
  }, [isInView, shouldRender, priority]);

  // Preload image if requested
  useEffect(() => {
    if (preload && typeof window !== "undefined") {
      const img = new window.Image();
      img.src = src;
    }
  }, [src, preload]);

  const handleLoadingComplete = useCallback(() => {
    setIsLoaded(true);
    onLoadingComplete?.();
  }, [onLoadingComplete]);

  // Don't render until in view (unless priority)
  if (!shouldRender) {
    return (
      <div
        ref={containerRef}
        className={`${className} ${fill ? "relative" : ""}`}
        style={
          !fill && width && height
            ? { width, height, backgroundColor: "#f0f0f0" }
            : {}
        }
      />
    );
  }

  const imageProps = {
    src,
    alt,
    quality,
    sizes: sizes || (estimatedWidth ? `${estimatedWidth}px` : undefined),
    className: `${className} transition-opacity duration-300 ${
      isLoaded ? "opacity-100" : "opacity-0"
    } gpu-accelerate`,
    onLoadingComplete: handleLoadingComplete,
    placeholder: blurDataURL ? ("blur" as const) : ("empty" as const),
    blurDataURL,
  };

  if (fill) {
    return (
      <div ref={containerRef} className="relative w-full h-full">
        <Image {...imageProps} fill priority={priority} />
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      <Image
        {...imageProps}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? "eager" : loading}
      />
    </div>
  );
}

/**
 * Image preloader utility
 * Preloads images for instant display
 */
export function preloadImages(urls: string[]) {
  if (typeof window === "undefined") return;

  urls.forEach((url) => {
    const img = new window.Image();
    img.src = url;
  });
}

/**
 * Responsive image component with automatic srcSet
 */
export function ResponsiveImage({
  src,
  alt,
  sizes = "100vw",
  ...props
}: OptimizedImageProps & { sizes?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      sizes={sizes}
      quality={85}
      {...props}
    />
  );
}

/**
 * Hero image component with priority loading
 */
export function HeroImage(props: Omit<OptimizedImageProps, "priority">) {
  return (
    <OptimizedImage
      {...props}
      priority
      quality={90}
      preload
    />
  );
}

/**
 * Background image component
 */
export function BackgroundImage({
  src,
  alt,
  children,
  className = "",
  blurDataURL,
}: {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
  blurDataURL?: string;
}) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        blurDataURL={blurDataURL}
        quality={80}
        className="object-cover"
      />
      {children && (
        <div className="absolute inset-0 z-10">
          {children}
        </div>
      )}
    </div>
  );
}
