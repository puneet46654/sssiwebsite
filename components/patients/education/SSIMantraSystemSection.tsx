'use client';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
export default function SSIMantraSystemSection() {
    return (<section className="relative w-full bg-[#F4F9FA] font-['Sora',sans-serif] overflow-hidden">
      <div className="mx-auto flex min-h-[752px] w-full max-w-[1440px] items-center px-6 md:px-12 lg:px-20 xl:px-0">

        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants} className="flex flex-col items-start">
            <h2 className="mb-10 max-w-[720px] text-[30px] font-semibold leading-[1.25] tracking-tight text-[#2EA3A3] md:text-[36px] lg:text-[34px]">
              The SSI Mantra Surgical Robotic System
            </h2>

            <p className="max-w-[690px] text-[24px] font-light leading-[1.65] text-[#1E1E1E] md:text-[28px] lg:text-[26px]">
              Our robotic system assists surgeons by enhancing precision and visibility.
              The surgeon stays in full control at all times.
            </p>

            <button aria-label="Learn more about SSI Mantra Surgical Robotic System" className="mt-28 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#2EA3A3] transition duration-300 hover:scale-105 hover:bg-[#248E8E] md:mt-28">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-x-[1px]">
                <path d="M5.625 13.5H21.375" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.625 6.75L21.375 13.5L14.625 20.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>

          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUpVariants} className="relative mx-auto flex w-full max-w-[620px] items-center justify-center lg:mx-0">
            
            <div className="absolute -right-[58px] -top-[22px] h-[195px] w-[195px] rounded-[28px] bg-[#D8F0F1]"/>

            
            <div className="absolute -bottom-[28px] -left-[35px] grid grid-cols-8 gap-x-[12px] gap-y-[10px]">
              {Array.from({ length: 64 }).map((_, index) => (<span key={index} className="h-[3px] w-[3px] rounded-full bg-[#2EA3A3]"/>))}
            </div>

            
            <div className="relative z-10 h-[426px] w-full max-w-[470px] overflow-hidden rounded-[18px]">
              <Image src="/images/patients/education/section4/image1.webp" alt="SSI Mantra surgical robotic system" fill loading="lazy" className="object-cover object-center" sizes="(max-width: 768px) 90vw, 470px"/>
            </div>
          </motion.div>

        </div>
      </div>
    </section>);
}
