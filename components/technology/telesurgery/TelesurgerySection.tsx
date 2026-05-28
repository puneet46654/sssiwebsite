'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function TelesurgerySection() {
    return (<section className="relative w-full min-h-[600px] md:min-h-[800px] lg:h-[872px] bg-[#000] flex items-center overflow-hidden font-['Sora',sans-serif]">
      
      
      <div className="absolute inset-0 z-0">
        <Image src="/images/technology/telesurgery/section1/image1.webp" alt="Surgeon performing telesurgery on SSI console" fill className="object-cover object-center" sizes="100vw" priority/>
      </div>

      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00000040] to-[#000000d9] z-10"/>

      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20 h-full flex flex-col justify-end items-end pb-20 md:pb-32 lg:pb-40">
        
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} className="flex flex-col gap-4 max-w-[700px]">
          
          <h2 className="flex flex-wrap items-center gap-2" style={{ fontFamily: 'Sora, sans-serif' }}>
            <span className="text-[clamp(28px,3.5vw,38px)] whitespace-nowrap" style={{
            color: '#0BD3D3',
            fontWeight: 600,
            lineHeight: '50px',
            textShadow: '0 2px 2px rgba(0, 0, 0, 0.60)'
        }}>
              Telesurgery:
            </span>
            <span className="text-[clamp(28px,3.5vw,38px)] whitespace-nowrap" style={{
            color: '#E0E0E0',
            fontWeight: 400,
            lineHeight: '50px',
            textShadow: '0 2px 2px rgba(0, 0, 0, 0.60)'
        }}>
              Surgery Beyond Borders
            </span>
          </h2>
          
          
          <p style={{
            color: '#E0E0E0',
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(16px, 2vw, 24px)',
            fontWeight: 300,
            lineHeight: '40px',
            textShadow: '0 2px 2px rgba(0, 0, 0, 0.60)'
        }}>
            Connecting surgeons and patients through real-time precision and connectivity.
          </p>
        </motion.div>

      </div>
    </section>);
}
