'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';
const sora = localFont({
    src: '../../../public/fonts/sora/static/Sora-Light.ttf',
    variable: '--font-sora',
    display: 'swap',
});
export default function MantraMSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [videoSrc, setVideoSrc] = useState<string | null>(null);
    useEffect(() => {
        const section = sectionRef.current;
        if (!section)
            return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVideoSrc('/videos/telesurgery/video.webm');
                }
            });
        }, { threshold: 0.2 });
        observer.observe(section);
        return () => {
            observer.disconnect();
        };
    }, []);
    return (<section ref={sectionRef} className={`relative w-full mx-auto bg-[#000] overflow-hidden ${sora.variable} flex items-start`} style={{
            maxWidth: '1918px',
            aspectRatio: '117 / 56',
            minHeight: '400px',
            fontFamily: 'var(--font-sora), sans-serif'
        }}>
      
      <video src={videoSrc ?? undefined} autoPlay loop muted playsInline preload="none" className="absolute inset-0 w-full h-full object-cover object-center z-0"/>

      
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000cc] via-[#00000040] to-transparent z-10"/>

      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20 pt-16 sm:pt-24 md:pt-32 lg:pt-40 w-full overflow-hidden">
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} className="flex flex-col gap-4 max-w-[1200px] w-full">
          
          <h2 className="whitespace-nowrap" style={{
            color: '#0BD3D3',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 600,
            lineHeight: '1.2'
        }}>
            MantraM
          </h2>
          
          
          <p className="whitespace-nowrap overflow-hidden text-ellipsis w-full" style={{
            color: '#E0E0E0',
            fontSize: 'clamp(10px, 1.5vw, 20px)',
            fontWeight: 300,
            lineHeight: '1.6'
        }}>
            MantraM is more than mobility—it&apos;s a commitment to making advanced surgical care accessible to every corner of the world.
          </p>
        </motion.div>

      </div>
    </section>);
}
