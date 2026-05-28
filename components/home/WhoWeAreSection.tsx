"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { motion, useInView, type Variants } from "framer-motion";

const soraLocal = localFont({
  src: [
    {
      path: "../../public/fonts/sora/static/Sora-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/sora/static/Sora-Regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/sora/static/Sora-Regular.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.15,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: "easeOut",
    },
  },
};

function WhoWeAreSection() {
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
      className={`relative w-full bg-black flex items-center overflow-hidden min-h-[100svh] md:min-h-[600px] lg:min-h-[867px] ${soraLocal.className}`}
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <Image
          src="/images/home/who-we-are/image1.webp"
          alt="Dr. Sudhir Srivastava"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-[25%_center] md:object-left"
          loading="lazy"
        />

        {/* Mobile-only light shadow for readable white text */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.18)_50%,rgba(0,0,0,0.42)_100%)] md:hidden" />

        {/* Mobile-only soft side shadow */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.18)_55%,rgba(0,0,0,0.36)_100%)] md:hidden" />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-10 flex justify-center md:justify-end items-end md:items-center h-full py-16 md:py-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="w-full max-w-full md:max-w-[500px] lg:max-w-[640px] flex flex-col items-start pt-32 md:pt-0"
        >
          <motion.h3
            variants={itemVariants}
            className="text-white uppercase mb-3 md:mb-4 text-sm md:text-base font-semibold leading-loose tracking-wider"
          >
            WHO ARE WE
          </motion.h3>

          <motion.h2
            variants={itemVariants}
            className="text-[#0BD3D3] mb-6 md:mb-8 text-3xl md:text-4xl lg:text-[40px] font-medium leading-tight tracking-tight"
          >
            Innovating for Global Care
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[#F2F7F8] mb-6 md:mb-8 text-[15px] md:text-base font-light leading-relaxed md:leading-loose"
          >
            <strong className="text-white font-medium">
              SS Innovations International Inc.
            </strong>{" "}
            is a pioneering Indian company founded by{" "}
            <strong className="text-white font-medium">
              Dr. Sudhir Srivastava
            </strong>
            , a globally renowned robotic cardiac surgeon. We are committed to
            transforming access to advanced surgical care through{" "}
            <strong className="text-white font-medium">
              cost-effective, clinically driven innovation.
            </strong>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-[#F2F7F8] mb-10 md:mb-12 text-[15px] md:text-base font-light leading-relaxed md:leading-loose"
          >
            With the development of the{" "}
            <strong className="text-white font-medium">
              SSI Mantra 3.0 robotic surgical system
            </strong>
            , SS Innovations is redefining what’s possible in multi-specialty
            robotic surgery — making high-precision care more accessible,
            adaptable, and inclusive on a global scale.
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileTap={{ scale: 0.94 }}
            className={`group relative flex h-12 items-center overflow-hidden rounded-full bg-[#0BD3D3] text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#09b3b3] ${
              shouldAutoOpenButton ? "w-[158px]" : "w-12 hover:w-[158px]"
            }`}
            aria-label="Learn more about who we are"
          >
            <span
              className={`whitespace-nowrap pl-5 pr-3 text-[15px] font-light transition-opacity duration-300 ${
                shouldAutoOpenButton
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              Learn more
            </span>

            <span className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center">
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
                className={`transition-transform duration-500 ${
                  shouldAutoOpenButton
                    ? "translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default React.memo(WhoWeAreSection);