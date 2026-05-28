"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
const soraLocal = localFont({
    src: "../../public/fonts/sora/static/Sora-Light.ttf",
    display: "swap",
});
function HeroSection() {
    const [showSecondImage, setShowSecondImage] = useState(false);
    return (<section className={`relative w-full bg-[#000] overflow-hidden flex items-center justify-center pt-[100px] lg:pt-[80px] pb-16 lg:pb-0 min-h-screen lg:min-h-[931px] ${soraLocal.className}`}>
      
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[80%] lg:w-[60%] h-[80%] bg-[#0BD3D3]/5 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none"/>

      
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between relative z-10 h-full gap-12 lg:gap-0">
        
        
        <motion.div className="flex-1 w-full max-w-[680px] z-20 text-center lg:text-left mt-8 lg:mt-0" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
          <h1 className="mb-4 lg:mb-6 capitalize text-[#EFEFEF] font-light leading-[1.3] lg:leading-[1.2] text-[32px] sm:text-[38px] lg:text-[42px]" style={{ textShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)" }}>
            Innovating For A{" "}
            <span className="relative inline-block text-[#0BD3D3] font-medium">
              Healthier Tomorrow
              
              <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ delay: 1, duration: 1 }} className="absolute -bottom-1 lg:-bottom-2 left-0 h-[2px] bg-gradient-to-r from-[#0BD3D3] to-transparent opacity-50"/>
            </span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} className="text-[#CCCCCC] font-light leading-[1.6] lg:leading-[1.8] text-[16px] sm:text-[18px] lg:text-[20px] max-w-[540px] mx-auto lg:mx-0">
            Pioneering robotic surgery through accessibility, affordability, and engineering excellence.
          </motion.p>
        </motion.div>

        
        
        
        <motion.div className="flex-1 relative w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[850px] flex items-center justify-center lg:justify-end z-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          
          <motion.div className="absolute inset-0 flex items-center justify-center lg:justify-end w-full h-full" variants={{
            hidden: { x: "100vw" },
            visible: {
                x: 0,
                transition: { duration: 2.5, ease: "easeOut" }
            }
        }} onAnimationComplete={(variant) => {
            if (variant === "visible") {
                setShowSecondImage(true);
            }
        }}>
            <div className="relative w-full h-full max-w-[500px] lg:max-w-[850px]">
              
              
              <motion.div initial={{ opacity: 1 }} animate={{ opacity: showSecondImage ? 0 : 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} className="absolute inset-0">
                <Image src="/images/about/hero/image1.webp" alt="SSI Robotic Surgery Arm Phase 1" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw" className="object-contain object-center lg:object-right" priority fetchPriority="high"/>
              </motion.div>

              
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: showSecondImage ? 1 : 0 }} transition={{ duration: 1.5, ease: "easeInOut" }} className="absolute inset-0">
                <Image src="/images/about/hero/image2.webp" alt="SSI Robotic Surgery Arm Phase 2" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw" className="object-contain object-center lg:object-right" priority fetchPriority="high"/>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff10 1px, transparent 1px)', backgroundSize: '40px 40px' }}/>
    </section>);
}
export default React.memo(HeroSection);
