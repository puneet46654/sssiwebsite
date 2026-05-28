"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { motion, type Variants } from "framer-motion";
const sora = localFont({
    src: "../../../public/fonts/sora/static/Sora-Light.ttf",
    display: "swap",
});
const cards = [
    {
        title: "Real-Time Collaboration",
        description: "Surgeons receive instant guidance from remote experts during live cases.",
    },
    {
        title: "Multi-Angle Access",
        description: "Proctors view the procedure from different perspectives for accuracy.",
    },
    {
        title: "Annotation Tools",
        description: "Experts can mark, highlight, and guide directly on the surgical field.",
    },
    {
        title: "Integrated with SSI Guru",
        description: "A seamless experience designed for structured learning and mentoring.",
    },
];
export default function MayaTeleproctoringSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        },
    };
    return (<section className={`bg-[#040810] py-20 md:py-32 ${sora.className}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        
        
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-white text-[24px] md:text-[32px] font-normal mb-10 md:mb-16 tracking-wide">
          Teleproctoring with SSI Maya
        </motion.h2>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1, ease: "easeOut" }} className="w-full flex justify-center lg:justify-start">
            <div style={{
            aspectRatio: "137 / 128",
            width: "100%",
            maxWidth: "548px"
        }} className="relative overflow-hidden rounded-[16px] shadow-2xl">
              <Image src="/images/technology/ssimaya/maya-teleproctoring/image1.webp" alt="Surgeon using SSI Maya VR Headset" fill className="object-cover" sizes="(max-width: 768px) 100vw, 548px" quality={80}/>
            </div>
          </motion.div>

          
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="w-full flex flex-col">
            
            <motion.p variants={itemVariants} style={{
            color: "#E6E7E8",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "40px",
        }} className="mb-10 w-full">
              SSI Maya connects surgeons with expert mentors anywhere in the world. Through
              immersive 3D visualization, multi-angle views, and live annotations, proctors can guide
              procedures in real time—bridging distances and making advanced training accessible.
            </motion.p>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
              {cards.map((card, index) => (<motion.div key={index} variants={itemVariants} className="flex flex-col items-center justify-center text-center p-6 md:p-8 rounded-[16px] border border-white/10 bg-transparent cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)]">
                  <h4 className="text-white text-[16px] font-medium mb-3">
                    {card.title}
                  </h4>
                  <p style={{
                color: "#E6E7E8",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "24px",
            }}>
                    {card.description}
                  </p>
                </motion.div>))}
            </div>

          </motion.div>
        </div>

      </div>
    </section>);
}
