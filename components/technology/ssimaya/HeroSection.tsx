"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
const sora = localFont({
    src: "../../../public/fonts/sora/static/Sora-Light.ttf",
    display: "swap",
});
export default function HeroSection() {
    return (<section className="relative w-full bg-black overflow-hidden flex items-center justify-center mx-auto h-[100svh] md:h-auto md:aspect-[960/431] max-w-[1920px] max-h-[862px]">
      <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-0 w-full h-full">
        <Image src="/images/technology/ssimaya/hero/image1.webp" alt="SSI Maya Hero Display" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 1920px" quality={100}/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none"/>
      </motion.div>

      <div className="absolute inset-0 w-full max-w-[1440px] mx-auto px-6 lg:px-10 flex flex-col justify-end pb-[15vh] md:pb-[8%] z-10 pointer-events-none">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className={`flex flex-col pointer-events-auto max-w-[100%] sm:max-w-[80%] md:max-w-[700px] ${sora.className}`}>
          <h1 className="flex flex-wrap items-baseline gap-[6px] md:gap-2">
            <span className="text-[#0BD3D3] text-[26px] sm:text-[32px] md:text-[38px] font-semibold leading-[1.3] md:leading-[50px]" style={{ textShadow: "0 2px 2px rgba(0, 0, 0, 0.60)" }}>
              SSI Maya:
            </span>
            <span className="text-[#E0E0E0] text-[26px] sm:text-[32px] md:text-[38px] font-normal leading-[1.3] md:leading-[50px]">
              The Hands of Precision
            </span>
          </h1>
          
          <p className="text-[#E0E0E0] text-[16px] sm:text-[20px] md:text-[24px] font-light leading-[1.5] md:leading-[40px] mt-2 md:mt-4" style={{ textShadow: "0 2px 2px rgba(0, 0, 0, 0.60)" }}>
            Mixed reality meets robotic surgery—for smarter, safer care.
          </p>
        </motion.div>
      </div>
    </section>);
}
