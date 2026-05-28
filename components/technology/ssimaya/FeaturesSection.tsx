"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { motion, type Variants } from "framer-motion";
const sora = localFont({
    src: "../../../public/fonts/sora/static/Sora-Light.ttf",
    display: "swap",
});
export default function FeaturesSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
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
    return (<section className={`relative w-full bg-[#040810] py-20 md:py-32 overflow-hidden flex items-center justify-center ${sora.className}`}>
      
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
        
        
        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="w-full flex-1 flex flex-col">
          <motion.h2 variants={itemVariants} style={{
            color: "#00A09C",
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "56px",
        }}>
            SSI Maya
          </motion.h2>
          
          <motion.p variants={itemVariants} className="mt-2 md:mt-4 max-w-[750px]" style={{
            color: "#FFFFFF",
            fontSize: "20px",
            fontWeight: 300,
            lineHeight: "48px",
        }}>
            SSI Maya combines cutting-edge web3-based technologies with robotic surgery, creating an
            immersive and intelligent surgical environment. With 3D holographic DICOM imaging, AI-driven
            anatomy segmentation, and real-time collaboration tools, Maya extends a new dimension to
            surgery — making it safer, more precise, and more accessible worldwide.
          </motion.p>
        </motion.div>

        
        <motion.div initial={{ opacity: 0, x: 50, scale: 0.95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} className="w-full flex-1 relative flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
          
          <motion.div animate={{ opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute right-0 lg:right-10 w-[300px] h-[300px] bg-[#00A09C]/10 rounded-full blur-[80px] pointer-events-none"/>

          
          <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative w-full max-w-[450px] h-[400px] md:h-[500px] shrink-0 z-10">
            <Image src="/images/technology/ssimaya/features/image1.webp" alt="SSI Maya Holographic Hand Interface" fill className="object-contain object-center lg:object-right" sizes="(max-width: 1024px) 100vw, 50vw" quality={80}/>
          </motion.div>
        </motion.div>

      </div>
    </section>);
}
