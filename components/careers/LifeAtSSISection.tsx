'use client';
import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
const smoothEase: [number, number, number, number] = [0.25, 1, 0.5, 1];
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.25, delayChildren: 0.1 },
    },
};
const textVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: smoothEase },
    },
};
const decorationVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.2, ease: smoothEase, delay: 0.5 },
    },
};
const DotPattern = ({ className }: { className?: string }) => (<svg className={`absolute ${className}`} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle fill="#39A7A7" cx="2" cy="2" r="2" opacity="0.6"></circle>
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
  </svg>);
export default function LifeAtSSISection() {
    return (<section className="w-full overflow-hidden bg-[#F4F7F8] py-20 md:py-32" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:gap-16">
          
          <div className="flex w-full max-w-[460px] flex-col justify-center lg:w-[40%]">
            <motion.h2 variants={textVariants} className="mb-6 text-[28px] font-semibold text-[#1A1A1A] md:text-[32px]">
              Life at SSI
            </motion.h2>
            <motion.p variants={textVariants} className="text-[14px] font-light leading-[1.85] text-[#606060] md:text-[15px]">
              At SSI Innovations, we blend innovation with a clear purpose—to advance surgical care and improve lives. We lead with compassion, ensuring every solution is shaped around people's needs. With agility, we adapt swiftly, embrace change, and turn challenges into opportunities. Guided by humility, we value every voice, learn from every experience, and work together to create lasting impact.
            </motion.p>
          </div>

          
          <div className="w-full lg:w-[60%]">
            
            <div className="relative mx-auto aspect-[1.15/1] w-full max-w-[620px]">
              
              
              
              <motion.div variants={decorationVariants} className="absolute bottom-[2%] right-[15%] h-[40%] w-[40%] rounded-[32px] bg-[#E2F1F3] z-0"/>
              
              <motion.div variants={decorationVariants} className="absolute left-[38%] top-[8%] h-[8%] w-[8%] rounded-2xl bg-[#E2F1F3] z-0"/>
              
              <motion.div variants={decorationVariants} className="absolute bottom-[20%] left-[30%] h-[5%] w-[5%] rounded-lg bg-[#E2F1F3] z-0"/>
              
              
              <motion.div variants={decorationVariants} className="absolute left-[48%] top-[14%] h-[15%] w-[12%] z-10">
                <DotPattern />
              </motion.div>
              
              
              <motion.div variants={decorationVariants} className="absolute bottom-[6%] left-[40%] h-[15%] w-[12%] z-10">
                <DotPattern />
              </motion.div>

              
              
              
              <div className="absolute left-0 top-[25%] h-[50%] w-[42%] overflow-hidden rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] z-30 bg-white">
                <Image src="/images/careers/life-at-ssi/image1.webp" alt="SSI Innovations Building" fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 50vw, 30vw"/>
              </div>

              
              <div className="absolute right-[2%] top-[8%] h-[36%] w-[46%] overflow-hidden rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] z-30 bg-white">
                <Image src="/images/careers/life-at-ssi/image2.webp" alt="SSI Team Group Photo" fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 50vw, 30vw"/>
              </div>

              
              <div className="absolute bottom-[10%] right-[4%] h-[40%] w-[50%] overflow-hidden rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] z-30 bg-white">
                <Image src="/images/careers/life-at-ssi/image3.webp" alt="SSI Team indoors" fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 50vw, 35vw"/>
              </div>

            </div>
          </div>
        </motion.div>
        
      </div>
    </section>);
}
