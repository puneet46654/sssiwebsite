"use client";

import React from "react";

/**
 * Component for smooth scrolling to elements
 */
export function SmoothScrollLink({
  href,
  children,
  className = "",
  smooth = true,
  offset = 0,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  smooth?: boolean;
  offset?: number;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      if (smooth) {
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      } else {
        window.scrollTo(0, top);
      }
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

/**
 * Optimize scroll behavior with CSS containment
 */
export function ScrollOptimizedContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} scroll-optimized-container`}
      style={{
        contain: "layout style paint",
        willChange: "scroll-position",
      }}
    >
      {children}
    </div>
  );
}
