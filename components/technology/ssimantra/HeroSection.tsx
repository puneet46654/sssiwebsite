"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const sora = localFont({
  src: [
    {
      path: "../../../public/fonts/sora/static/Sora-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/sora/static/Sora-Regular.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
});

function HeroSection() {
  return (
    <section
      className={`relative flex min-h-[100svh] w-full items-center overflow-hidden bg-black pt-[100px] pb-14 lg:min-h-[720px] lg:pt-[88px] lg:pb-0 xl:min-h-[820px] 2xl:min-h-[931px] ${sora.className}`}
    >
      {/* Background Image with simple fade-in */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/technology/ssimantra/hero/image1.webp" 
          alt="SSI Robotic Surgery Arm Background"
          fill
          priority // High priority for background hero image
          className="object-cover object-center"
        />
      </motion.div>

      {/* Decorative Glow (Static) */}
      <div 
        className="pointer-events-none absolute right-0 top-1/2 z-[1] h-[70%] w-[80%] -translate-y-1/2 rounded-full bg-[#0BD3D3]/10 blur-[80px] lg:w-[58%] lg:blur-[120px]"
      />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-10">
        <div className="flex w-full flex-col items-center lg:items-start justify-center gap-10">
          
          {/* Logo Simple Fade-in Animation */}
          <motion.div
            className="z-20 flex w-full justify-center lg:justify-start lg:pl-[58px] xl:pl-[58px] 2xl:pl-[58px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            {/* Fluid width container replacing the floating animation */}
            <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] aspect-[5/2]">
              <Image
                src="/images/technology/ssimantra/hero/logo.png"
                alt="SSI Mantra Logo"
                fill
                priority
                className="object-contain object-center lg:object-left"
              />
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Decorative Dot Grid with simple delayed fade-in */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[2] opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff10 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  );
}

export default React.memo(HeroSection);