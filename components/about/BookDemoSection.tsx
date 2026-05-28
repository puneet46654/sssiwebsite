"use client";
import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
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
    return (<section className="w-full py-16 md:py-20 lg:py-24 bg-[#F4F6F8] overflow-hidden font-sans flex justify-center">
      
      <div className="w-full max-w-[1440px] px-6 lg:px-10 flex justify-center">
        
        
        <motion.div className="relative w-full max-w-[1380px] rounded-[24px] lg:rounded-[40px] overflow-hidden shadow-lg flex flex-col justify-center items-start p-8 sm:p-12 md:p-16 lg:px-[100px] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[716px]" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          
          
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image src="/images/home/book-demo/image1.webp" alt="SSI Mantra Robotic Arm" fill className="object-cover object-center md:object-right" priority />
            
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:from-black/60 md:via-black/20"/>
          </div>

          
          <motion.h2 variants={itemVariants} className="relative z-10 text-white text-[28px] md:text-4xl lg:text-[40px] font-semibold tracking-tight mb-3 md:mb-4" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
            Book Demo
          </motion.h2>

          <motion.p variants={itemVariants} className="relative z-10 text-white/90 text-[15px] md:text-base font-light leading-relaxed max-w-full sm:max-w-[80%] md:max-w-[450px] mb-8" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
            Discover how our technologies are transforming surgery. 
            Schedule a live demonstration tailored to your specialty or interest.
          </motion.p>

          
          <motion.button variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-[#1E1E1E] group shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all" aria-label="Book a Demo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1 w-5 h-5 md:w-6 md:h-6">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.button>

        </motion.div>
      </div>
    </section>);
}
export default React.memo(BookDemoSection);
