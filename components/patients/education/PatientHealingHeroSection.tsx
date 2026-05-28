'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import localFont from 'next/font/local';

const sora = localFont({
  src: '../../../public/fonts/sora/static/Sora-Light.ttf', 
  variable: '--font-sora',
  display: 'swap',
});

// Smooth fade-up variants
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'tween', ease: [0.25, 0.1, 0.25, 1], duration: 1 } 
  }
};

export default function PatientHeroSection() {
  return (
    <section 
      // Added mt-[80px] to create the required clearance below your fixed header
      className={`relative w-full mx-auto bg-[#000] overflow-hidden flex items-center justify-start mt-[80px] ${sora.variable}`}
      style={{ 
        maxWidth: '1922px', 
        maxHeight: '855px',      // Caps height to exactly 855px on large screens
        aspectRatio: '272 / 121' // Perfectly locks in your custom aspect ratio
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/patients/education/section1/image1.webp" 
          alt="Nurse comforting a patient in bed" 
          fill 
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#000000f0] via-[#00000099] to-transparent z-10" />

      {/* Content Container positioned to the left */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20 w-full h-full flex items-center">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="flex flex-col gap-4 max-w-[650px]"
          style={{ fontFamily: 'var(--font-sora), sans-serif' }}
        >
          {/* Heading */}
          <h1 
            className="text-[#0BD3D3] text-[clamp(32px,4vw,48px)] font-semibold leading-tight tracking-wide drop-shadow-md"
          >
            Helping You Heal, Smarter.
          </h1>
          
          {/* Subheading */}
          <p 
            className="text-[#E0E0E0] text-[clamp(16px,2vw,20px)] font-light leading-[1.8] tracking-wide drop-shadow-sm"
          >
            SS Innovations' technology enables safer, faster, and less invasive surgeries — designed with your wellbeing in mind.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
