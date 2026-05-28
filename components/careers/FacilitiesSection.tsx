'use client';
import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
const facilityBlocks = [
    {
        id: 1,
        title: 'Innovation in Action',
        desc: 'Our state-of-the-art facilities are designed to bring ideas to life, from concept to creation. Every corner of our workspace reflects our commitment to pioneering surgical technology that transforms patient care.',
        image: '/images/careers/facilities/image1.png',
        reverse: false,
    },
    {
        id: 2,
        title: 'Precision in Every Detail',
        desc: 'Behind every SSI system is a team of experts dedicated to perfection. With advanced manufacturing processes and rigorous quality checks, we ensure each component meets the highest standards of safety and performance.',
        image: '/images/careers/facilities/image2.png',
        reverse: true,
    },
    {
        id: 3,
        title: 'Powered by People',
        desc: 'Our people are the heartbeat of SSI. From engineers to researchers, every mind works in harmony to push boundaries, solve challenges, and deliver solutions that truly make a difference in the operating room.',
        image: '/images/careers/facilities/image3.png',
        reverse: false,
    },
];
const smoothEase: [number, number, number, number] = [0.25, 1, 0.5, 1];
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
};
const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: smoothEase },
    },
};
const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.9, ease: smoothEase },
    },
};
const decorationVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.2, ease: smoothEase, delay: 0.4 },
    },
};
const DotPattern = ({ className }: { className?: string }) => (<svg className={`absolute ${className}`} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle fill="#39A7A7" cx="2" cy="2" r="2" opacity="0.5"></circle>
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
  </svg>);
export default function FacilitiesSection() {
    return (<section className="w-full overflow-hidden bg-[#F4F7F8] py-20 md:py-32" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col gap-24 lg:gap-32">
          {facilityBlocks.map((block) => (<motion.div key={block.id} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3, margin: '0px 0px -10% 0px' }} className={`flex flex-col items-center justify-between gap-12 lg:gap-20 ${block.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              
              
              <div className="relative w-full max-w-[500px] lg:w-1/2">
                <div className="relative mx-auto aspect-[4/3.5] w-full">
                  
                  
                  <motion.div variants={decorationVariants} className={`absolute h-[50%] w-[45%] rounded-[32px] bg-[#E2F1F3] z-0 ${block.reverse ? '-right-6 -top-6 md:-right-10 md:-top-10' : '-left-6 -top-6 md:-left-10 md:-top-10'}`}/>
                  
                  
                  <motion.div variants={decorationVariants} className={`absolute h-[40%] w-[35%] z-0 ${block.reverse ? '-bottom-6 -left-6 md:-bottom-10 md:-left-10' : '-bottom-6 -right-6 md:-bottom-10 md:-right-10'}`}>
                    <DotPattern />
                  </motion.div>

                  
                  <motion.div variants={imageVariants} className="absolute inset-0 z-10 overflow-hidden rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white">
                    <Image src={block.image} alt={block.title} fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 100vw, 50vw"/>
                  </motion.div>
                </div>
              </div>

              
              <div className="flex w-full max-w-lg flex-col justify-center lg:w-1/2">
                <motion.h3 variants={textVariants} className="mb-6 text-[26px] font-semibold tracking-tight text-[#1A1A1A] md:text-[32px]">
                  {block.title}
                </motion.h3>
                <motion.p variants={textVariants} className="text-[14px] font-light leading-[1.85] text-[#606060] md:text-[15px]">
                  {block.desc}
                </motion.p>
              </div>

            </motion.div>))}
        </div>
      </div>
    </section>);
}
