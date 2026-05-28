"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
const soraLocal = localFont({
    src: "../../public/fonts/sora/static/Sora-Light.ttf",
    display: "swap",
});
function MantraOverviewSection() {
    return (<section className={`relative w-full bg-[#F4F7F9] overflow-hidden flex flex-col items-center justify-center py-16 md:py-24 lg:py-32 ${soraLocal.className}`}>
      
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 relative z-10">
        
        
        <motion.div className="flex-1 w-full flex flex-col justify-center text-left" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ maxWidth: "783px" }}>
          
          <p className="text-[#1E1E1E] text-[18px] md:text-[20px] lg:text-[22px] font-light leading-[1.6] md:leading-[32px] m-0">
            From operating rooms to training centers,{" "}
            <span className="font-medium">SSI Mantra</span>{" "}
            is enabling safer procedures, empowering more surgeons, and extending access to advanced surgical care around the world.
          </p>
        </motion.div>

        
        <motion.div className="flex-1 relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center md:justify-end z-10 mt-4 md:mt-0" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
          
          <motion.div animate={{ y: [-8, 8, -8] }} transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
        }} className="relative w-full h-full max-w-[400px] md:max-w-full">
            <Image src="/images/home/overview/image1.webp" alt="SSI Mantra Robotic Arm" fill className="object-contain object-center md:object-right" loading="lazy"/>
          </motion.div>
        </motion.div>

      </div>
    </section>);
}
export default React.memo(MantraOverviewSection);
