"use client";

import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const soraLocal = localFont({
  src: "../../public/fonts/sora/static/Sora-Light.ttf",
  display: "swap",
});

interface SmoothTypewriterProps {
  text: string;
  className?: string;
}

const SmoothTypewriter = ({ text, className }: SmoothTypewriterProps) => {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={{
                hidden: { opacity: 0, y: 2 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

function OverviewSection() {
  return (
    <section
      // CHANGED: Removed md:min-h-[600px] and lg:min-h-[867px]
      // Now it will always be at least 100% of the viewport height on all devices
      className={`relative -mb-px w-full min-h-[100svh] bg-[#F3F8FA] flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden border-0 outline-none shadow-none ${soraLocal.className}`}
    >
      {/* Mobile seam cover */}
      <div className="pointer-events-none absolute bottom-[-2px] left-0 h-2 w-full bg-[#F3F8FA] md:hidden" />

      <div className="max-w-[1200px] w-full mx-auto text-left md:text-center relative z-10">
        <motion.p
          className="text-[#1E1E1E] text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] leading-[1.6] md:leading-[1.5] lg:leading-[60px] m-0"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.045,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="lg:block">
            <SmoothTypewriter
              text="From operating rooms to training centers,"
              className="font-light"
            />
          </span>

          <span className="lg:block">
            <SmoothTypewriter
              text="SSI Mantra"
              className="font-medium mr-[0.25em]"
            />
            <SmoothTypewriter
              text="is enabling safer procedures,"
              className="font-light"
            />
          </span>

          <span className="lg:block">
            <SmoothTypewriter
              text="empowering more surgeons, and extending access"
              className="font-light"
            />
          </span>

          <span className="lg:block">
            <SmoothTypewriter
              text="to advanced surgical care around the world."
              className="font-light"
            />
          </span>
        </motion.p>
      </div>
    </section>
  );
}

export default React.memo(OverviewSection);
