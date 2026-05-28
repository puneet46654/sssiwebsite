'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import localFont from 'next/font/local';

// Load the local Sora-Light font
const soraLight = localFont({
  src: '../../../public/fonts/sora/static/Sora-Light.ttf',
  variable: '--font-sora-light',
  display: 'swap',
});

type HexagonPatternProps = {
  className?: string;
};

const HexagonPattern = ({ className }: HexagonPatternProps) => (
  <svg className={`absolute pointer-events-none ${className}`} xmlns="http://www.w3.org/2000/svg" width="262" height="352" viewBox="0 0 262 352" fill="none">
    <path opacity="0.7" d="M152.274 351.361C152.118 351.361 151.962 351.321 151.821 351.241L0.460433 263.862C0.181277 263.699 0.00725789 263.401 0.00725789 263.075L0 88.3026C0 87.9799 0.174019 87.679 0.453176 87.5159L151.807 0.122357C152.086 -0.0407856 152.434 -0.0407856 152.713 0.122357L304.074 87.5014C304.353 87.6645 304.527 87.9618 304.527 88.2881L304.534 263.061C304.534 263.383 304.36 263.684 304.081 263.847L152.727 351.241C152.586 351.321 152.43 351.361 152.274 351.361ZM1.81996 262.553L152.274 349.406L302.721 262.539L302.714 88.8138L152.26 1.96041L1.8127 88.8282L1.81996 262.553Z" fill="url(#paint0_linear_1195_36089)"/>
    <defs>
      <linearGradient id="paint0_linear_1195_36089" x1="152.267" y1="0" x2="152.267" y2="351.361" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7FEBFF" stopOpacity="0.6"/>
        <stop offset="1" stopColor="#00A09C" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

const features = [
  {
    heading: 'Articulation with 7 degrees of freedom',
    description: 'Mudra instruments mirror the natural movement of the human wrist, offering full articulation with seven degrees of freedom.',
    video: '/videos/mudra/video1.webm',
    alt: 'Articulation with 7 degrees of freedom',
  },
  {
    heading: 'Interchangeable Toolsets',
    description: 'A versatile range of specialized instruments enables cutting, suturing, dissection, and tissue handling. Quick interchangeability ensures efficiency in the OR while maintaining consistent performance.',
    video: '/videos/mudra/video2.webm',
    alt: 'Interchangeable Toolsets',
  }
];

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween' as const,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      duration: 0.8
    }
  }
};

export default function MudraFeaturesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVideoLoaded(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={`relative w-full bg-[#EFF6F8] py-20 lg:py-32 overflow-hidden font-['Sora',sans-serif] ${soraLight.variable}`}>
      
      <HexagonPattern className="top-[-50px] right-[-100px] md:top-[10%] md:right-[5%] opacity-80"/>
      <HexagonPattern className="top-[40%] left-[-150px] md:left-[-50px] opacity-50 scale-75"/>
      <HexagonPattern className="bottom-[-100px] right-[10%] opacity-60 scale-90"/>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-24 flex flex-col gap-16 lg:gap-24 relative z-10">
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={revealVariants} className="flex flex-col gap-6 max-w-4xl">
          <h2 className="text-[#3AAFA9] text-[clamp(32px,4vw,48px)] font-bold tracking-tight">
            SSI Mudra
          </h2>
          <p className="text-[#4A5568] text-[clamp(16px,2vw,20px)] font-light leading-relaxed">
            The endo-surgical instrument suite designed to extend the surgeon&apos;s skill with unmatched accuracy. Each instrument is crafted for fluid motion, intuitive control, and delicate handling—enabling surgeons to perform intricate tasks with confidence and consistency.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 w-full items-center">
          
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} variants={revealVariants} className="w-full max-w-[1375px] text-left text-[#2D3748] text-2xl md:text-3xl font-semibold mb-[-20px]">
            What Sets Mudra Apart
          </motion.h3>

          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.2 }} 
              variants={revealVariants} 
              className="relative w-full max-w-[1375px] aspect-[151/85] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl bg-black"
            >
              <video 
                src={videoLoaded ? feature.video : undefined} 
                aria-label={feature.alt} 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="none"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none" />

              <div className="absolute inset-0 p-6 md:p-12 lg:p-20 flex flex-col justify-start z-10 pointer-events-none">
                <div className="max-w-2xl font-[family-name:var(--font-sora-light)]">
                  
                  <h4 className="text-white text-[32px] font-medium leading-[50px] [text-shadow:0_2px_2px_rgba(0,0,0,0.25)] mb-4">
                    {feature.heading}
                  </h4>
                  
                  <p className="text-white text-[16px] font-medium leading-[32px] [text-shadow:0_2px_2px_rgba(0,0,0,0.25)]">
                    {feature.description}
                  </p>
                  
                </div>
              </div>

            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
