'use client';
import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Briefcase, MapPin, Search } from 'lucide-react';
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
};
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
    },
};
export default function CareersHeroSection() {
    return (<section className="relative flex w-full flex-col justify-end overflow-hidden bg-[#050505] min-h-[75vh] pb-16 md:pb-24 lg:pb-32" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
      
      <div className="absolute inset-0 z-0">
        <Image src="/images/careers/hero/image1.webp" alt="Team at SS Innovations" fill className="object-cover object-top" priority/>
        
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"/>
      </div>

      
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        
        <div className="max-w-2xl">
          <motion.h1 variants={fadeUp} className="mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-md">
            Join the Team
          </motion.h1>

          <motion.p variants={fadeUp} className="mb-10 text-lg leading-relaxed text-gray-200 md:mb-14 md:text-xl font-light drop-shadow-md">
            Join mission-driven teams turning research into reliable systems. Learn fast, ship carefully, make a difference.
          </motion.p>
        </div>

        
        <motion.div variants={fadeUp} className="flex w-full max-w-4xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl md:flex-row">
          
          <div className="flex flex-1 items-center border-b border-gray-200 px-5 py-4 md:border-b-0 md:border-r transition-colors focus-within:bg-gray-50">
            <Briefcase className="h-5 w-5 shrink-0 text-[#A0A0A0]"/>
            <input type="text" placeholder="Job Title" className="ml-3 w-full bg-transparent font-medium text-gray-800 outline-none placeholder:text-[#A0A0A0] placeholder:font-normal"/>
          </div>

          
          <div className="flex flex-1 items-center px-5 py-4 transition-colors focus-within:bg-gray-50 border-b border-gray-200 md:border-b-0">
            <MapPin className="h-5 w-5 shrink-0 text-[#A0A0A0]"/>
            <input type="text" placeholder="Location" className="ml-3 w-full bg-transparent font-medium text-gray-800 outline-none placeholder:text-[#A0A0A0] placeholder:font-normal"/>
          </div>

          
          <button type="button" className="flex items-center justify-center bg-[#39A7A7] px-10 py-4 font-semibold text-white transition-colors hover:bg-[#2F8D8D] active:bg-[#267575]">
            <Search className="mr-2 h-5 w-5"/>
            Search
          </button>
        </motion.div>
      </motion.div>
    </section>);
}
