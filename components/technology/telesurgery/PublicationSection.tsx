'use client';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import localFont from 'next/font/local';
const sora = localFont({
    src: '../../../public/fonts/sora/static/Sora-Light.ttf',
    variable: '--font-sora',
    display: 'swap',
});
const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'tween' as const, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], duration: 1 }
    }
};
const fadeLeftVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: { type: 'tween' as const, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], duration: 1, delay: 0.2 }
    }
};
export default function PublicationSection() {
    return (<section className={`relative w-full mx-auto bg-[#000] overflow-hidden flex items-center justify-center py-20 lg:py-0 ${sora.variable}`} style={{
            maxWidth: '1922px',
            height: 'auto',
            minHeight: '100dvh',
        }}>
      
      <div className="w-full lg:h-[845px] flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full">
          
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants} className="flex flex-col gap-6 lg:gap-8 max-w-[700px]" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
            
            <h2 className="text-[#0BD3D3] text-[clamp(28px,3vw,36px)] font-semibold tracking-wide">
              Publication
            </h2>
            
            
            <p className="text-[#8E99A8] text-[clamp(14px,1vw,16px)] font-light tracking-wide">
              Date: 01 November 2024
            </p>
            
            
            <h3 className="text-[#E0E0E0] text-[clamp(22px,2.5vw,32px)] font-light leading-[1.6]">
              Evaluating the efficacy of telesurgery with dual console SSI Mantra Surgical Robotic System: experiment on animal model and clinical trials
            </h3>
            
            
            <div className="mt-4">
              <button className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#099F9E] text-white hover:bg-[#0BD3D3] hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(11,211,211,0.3)] group cursor-pointer" aria-label="Read full publication">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </motion.div>

          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeLeftVariants} className="relative w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] aspect-[3/4] mx-auto lg:ml-auto">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#ffffff20] blur-[80px] rounded-full pointer-events-none z-0"/>
            
            
            <div className="relative w-full h-full z-10">
              <Image src="/images/publication/image1.webp" alt="Journal of Robotic Surgery Cover" fill className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" sizes="(max-width: 768px) 100vw, 500px"/>
            </div>
          </motion.div>

        </div>
      </div>
    </section>);
}
