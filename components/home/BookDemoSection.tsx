"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 15,
    },
  },
};

function BookDemoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isSectionInView = useInView(sectionRef, {
    once: false,
    amount: 0.35,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shouldAutoOpenButton = isMobile && isSectionInView;

  return (
    <section
      ref={sectionRef}
      className="relative -mt-px w-full bg-[#F5F8FA] py-16 md:py-20 lg:py-24 overflow-hidden font-sans flex justify-center border-0 outline-none shadow-none"
    >
      <div className="pointer-events-none absolute left-0 top-[-2px] z-0 h-2 w-full bg-[#F5F8FA]" />

      <div className="relative z-10 w-full max-w-[1440px] px-6 lg:px-10 flex justify-center border-0 outline-none shadow-none">
        <motion.div
          className="relative w-full max-w-[1380px] rounded-[24px] lg:rounded-[40px] overflow-hidden flex flex-col justify-center items-start p-8 sm:p-12 md:p-16 lg:px-[100px] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[716px] border-0 outline-none shadow-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="absolute inset-0 z-0 pointer-events-none border-0 outline-none shadow-none">
            <Image
              src="/images/home/book-demo/image1.webp"
              alt="SSI Mantra Robotic Arm"
              fill
              sizes="100vw"
              className="object-cover object-center md:object-right border-0 outline-none shadow-none"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent border-0 outline-none shadow-none" />
          </div>

          <motion.h2
            variants={itemVariants}
            className="relative z-10 text-white text-[28px] md:text-4xl lg:text-[40px] font-semibold tracking-tight mb-3 md:mb-4"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Book Demo
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="relative z-10 text-white/90 text-[15px] md:text-base font-light leading-relaxed max-w-full sm:max-w-[80%] md:max-w-[450px] mb-8"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Discover how our technologies are transforming surgery. Schedule a
            live demonstration tailored to your specialty or interest.
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileTap={{ scale: 0.95 }}
            className={`group relative z-10 flex h-12 items-center overflow-hidden rounded-full bg-white text-[#3F3F3F] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] border-0 outline-none shadow-none ${
              shouldAutoOpenButton ? "w-[150px]" : "w-12 hover:w-[150px]"
            }`}
            aria-label="Book a Demo"
          >
            <span
              className={`whitespace-nowrap pl-5 pr-3 text-[16px] font-light transition-opacity duration-300 ${
                shouldAutoOpenButton
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Book Demo
            </span>

            <span className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-500 ${
                  shouldAutoOpenButton
                    ? "translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default React.memo(BookDemoSection);
