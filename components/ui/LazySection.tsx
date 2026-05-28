"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type LazySectionProps = {
  loader: () => Promise<{ default: React.ComponentType<unknown> }>;
  placeholder?: ReactNode;
  priority?: boolean;
  rootMargin?: string;
  ssr?: boolean;
};

export default function LazySection({
  loader,
  placeholder = <div className="min-h-[320px] w-full rounded-[24px] bg-slate-800/90" />,
  priority = true,
  rootMargin = "300px 0px",
  ssr = false,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [Section, setSection] = useState<React.ComponentType<unknown> | null>(null);

  useEffect(() => {
    if (isVisible) return;

    const loadSection = () => {
      const DynamicSection = dynamic(loader, {
        ssr,
        loading: () => placeholder,
      });
      setSection(() => DynamicSection);
      setIsVisible(true);
    };

    if (priority) {
      loadSection();
      return;
    }

    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadSection();
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.02 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible, loader, placeholder, priority, rootMargin, ssr]);

  return <div ref={ref}>{isVisible && Section ? <Section /> : placeholder}</div>;
}
