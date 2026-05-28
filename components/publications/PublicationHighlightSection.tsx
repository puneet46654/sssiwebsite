'use client';
import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
};
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
    },
};
const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, x: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { duration: 1, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
    },
};
export default function PublicationHighlightSection() {
    return (<section className="mt-12 flex w-full justify-center bg-[#F2F6F8] pt-16 pb-16 md:mt-20 md:pt-24 md:pb-24">
      
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 md:flex-row md:items-center md:gap-16 md:px-12">
        
        <div className="flex max-w-2xl flex-col items-start justify-center">
          <motion.h2 variants={itemVariants} className="mb-8 text-[32px] font-semibold leading-[50px] text-[#099F9E]" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
            Publication
          </motion.h2>

          <motion.div variants={itemVariants} className="mb-10 flex flex-col">
            <span className="text-[18px] font-medium leading-[40px] text-[#606060]" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
              Date: 01 November 2024
            </span>
            <h3 className="mt-1 text-[28px] font-semibold leading-[40px] text-[#606060]" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
              Evaluating the efficacy of telesurgery with dual console SSI
              Mantra Surgical Robotic System: experiment on animal model
              and clinical trials
            </h3>
          </motion.div>

          <motion.button variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full bg-[#099F9E] shadow-md transition-colors hover:bg-[#088a89]" aria-label="Read Publication">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.button>
        </div>

        
        <motion.div variants={imageVariants} className="relative flex shrink-0 justify-center md:block">
          
          <div className="relative h-[394px] w-[297px] overflow-hidden rounded-[8px] bg-white shadow-xl">
            <Image src="/images/publication/image1.webp" alt="Journal of Robotic Surgery Publication" fill className="object-cover" sizes="(max-width: 768px) 100vw, 297px" priority/>
          </div>
        </motion.div>
      </motion.div>
    </section>);
}
