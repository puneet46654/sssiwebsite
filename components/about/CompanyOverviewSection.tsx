"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { motion } from "framer-motion";
const sora = localFont({
    src: "../../public/fonts/sora/static/Sora-Light.ttf",
    display: "swap",
});
export default function CompanyOverviewSection() {
    const containerVariants: any = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };
    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
    };
    return (<section className={`relative w-full max-w-[1920px] mx-auto overflow-hidden flex items-center justify-center ${sora.className}`} style={{
            minHeight: "931px",
            backgroundColor: "#EFF6F8"
        }}>
      
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 h-full relative z-10 py-20 lg:py-0">
        
        
        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="w-full flex flex-col justify-center max-w-[650px] z-20">
          
          <motion.p variants={itemVariants} className="uppercase tracking-wide mb-4" style={{
            color: "#3F3F3F",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "32px",
        }}>
            WHO ARE WE
          </motion.p>

          
          <motion.h2 variants={itemVariants} className="mb-6 lg:mb-8" style={{
            color: "#099F9E",
            fontSize: "32px",
            fontWeight: 500,
            lineHeight: "50px",
        }}>
            Engineering precision, elevating care
          </motion.h2>

          
          <motion.p variants={itemVariants} className="mb-6" style={{
            color: "#3F3F3F",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "32px",
        }}>
            For over a decade, SS Innovations has been advancing medical robotic technology with
            one clear purpose: to elevate surgical precision while expanding access to world-class
            care. Founded by Dr. Sudhir Srivastava—globally recognized robotic cardiac surgeon,
            and our Founder, Chairman, and CEO—we unite surgical expertise, patient-focused
            design, and continuous innovation to improve outcomes worldwide.
          </motion.p>

          
          <motion.p variants={itemVariants} style={{
            color: "#3F3F3F",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "32px",
        }}>
            With the launch of the SSI Mantra 3.0 robotic surgical system, we’re redefining multi-
            specialty robotic surgery—making high-precision technology more adaptable, cost-
            effective, and inclusive. Our commitment is simple: transform access to advanced
            surgical care through clinically driven, sustainable innovation.
          </motion.p>
        </motion.div>

        
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} className="relative w-full h-[500px] lg:h-[931px] flex items-end justify-end self-end z-10">
          
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#EFF6F8] to-transparent z-20 hidden lg:block pointer-events-none"/>

          <Image src="/images/about/company-overview/image1.webp" alt="Dr. Sudhir Srivastava, Founder, Chairman, and CEO" fill className="object-contain object-bottom lg:object-right-bottom" sizes="(max-width: 1024px) 100vw, 50vw" quality={90} priority />
        </motion.div>

      </div>
    </section>);
}
