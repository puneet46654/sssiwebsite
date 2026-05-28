"use client";

import {
  motion,
  useAnimationControls,
  useInView,
  type Variants,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const images = {
  desktop: {
    src: "/images/home/hero/image1.webp",
    alt: "SSI Mantra 3 Robotic System",
  },
  mobile: {
    src: "/images/home/hero/mobile.webp",
    alt: "SSI Mantra 3 Robotic System Mobile",
  },
};

function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const isInView = useInView(sectionRef, {
    amount: 0.35,
    margin: "0px 0px -10% 0px",
  });

  const contentControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      contentControls.start("visible");
      
      const timer = setTimeout(() => {
        setIsMobileExpanded(true);
      }, 700);
      
      return () => clearTimeout(timer);
    } else {
      contentControls.set("hidden");
      setIsMobileExpanded(false);
    }
  }, [isInView, contentControls]);

  return (
    <section
      ref={sectionRef}
      className="relative mt-[80px] w-full overflow-hidden bg-black lg:mt-[120px]"
    >
      <div className="relative h-[calc(100dvh-80px)] min-h-[500px] w-full overflow-hidden lg:h-[calc(100dvh-120px)]">
        
        <div className="absolute inset-0 hidden h-full w-full bg-black md:block">
          <motion.div
            initial={{ scale: 1.05 }}
            animate={isInView ? { scale: 1 } : { scale: 1.05 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full w-full"
          >
            <Image
              src={images.desktop.src}
              alt={images.desktop.alt}
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 block h-full w-full bg-black md:hidden">
          <motion.div
            initial={{ scale: 1.05 }}
            animate={isInView ? { scale: 1 } : { scale: 1.05 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full w-full"
          >
            <Image
              src={images.mobile.src}
              alt={images.mobile.alt}
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover object-top"
            />
          </motion.div>
        </div>

        <div 
          className="pointer-events-none absolute inset-0 z-0" 
          style={{
            background: "linear-gradient(180deg, #000 1.63%, rgba(0, 0, 0, 0.42) 10.73%, rgba(0, 0, 0, 0.00) 32.47%), linear-gradient(60deg, #000 11.34%, rgba(0, 0, 0, 0.00) 48.41%)"
          }}
        />
        
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Content */}
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end pb-16 md:pb-24 lg:pb-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={contentControls}
            className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-3 px-6 lg:px-10"
          >
            <motion.h1
              variants={itemVariants}
              className="flex flex-wrap gap-x-2 gap-y-1 capitalize drop-shadow-lg"
            >
              <span className="text-[28px] font-light leading-tight text-white md:text-[36px] md:leading-[1.2] lg:text-[48px]">
                SSI
              </span>

              <span className="text-[28px] font-medium leading-tight text-[#0BD3D3] md:text-[36px] md:leading-[1.2] lg:text-[48px]">
                Mantra 3
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-[90%] text-[16px] font-light leading-relaxed text-[#E5E5E5] drop-shadow-lg md:max-w-xl md:text-[20px] md:leading-[1.6] lg:max-w-2xl"
            >
              Multi-arm robotic system for minimally invasive surgery.
            </motion.p>

            {/* Custom Expanding Button */}
            <motion.div
              variants={itemVariants}
              className="pointer-events-auto mt-6 md:mt-8"
            >
              <button
                className={`group relative flex h-14 items-center overflow-hidden rounded-full bg-[#099F9E] outline-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:w-14 md:hover:w-[185px] ${
                  isMobileExpanded ? "w-[185px]" : "w-14"
                }`}
                aria-label="Learn more about SSI Mantra 3"
              >
                {/* Button Text */}
                <span 
                  className={`whitespace-nowrap pl-6 text-[18px] font-medium tracking-wide text-white transition-opacity duration-300 ease-out md:opacity-0 md:delay-0 md:group-hover:delay-100 md:group-hover:opacity-100 ${
                    isMobileExpanded ? "opacity-100 delay-200" : "opacity-0"
                  }`}
                >
                  Learn more
                </span>

                {/* Arrow Icon */}
                <div className="absolute right-0 flex h-14 w-14 shrink-0 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(HeroSection);
