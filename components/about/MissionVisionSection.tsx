"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function MissionVisionSection() {
    return (<section className="bg-[#F4F7F9] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative w-full lg:w-1/2 flex justify-start">
            
            <div className="flex flex-col gap-4 w-[75%] md:w-[80%] relative z-10">
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm bg-gray-200 shadow-sm">
                <Image src="/images/about/mission-vision/image1.webp" alt="SSI Headquarters Exterior" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"/>
              </div>
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm bg-gray-200 shadow-sm">
                <Image src="/images/about/mission-vision/image2.webp" alt="Surgeon Command Center" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"/>
              </div>
            </div>

            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }} className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] md:w-[40%] aspect-[1.1/1] z-20 shadow-xl">
              <Image src="/images/about/mission-vision/image3.webp" alt="Advanced. Affordable. Accessible." fill className="object-cover bg-white" sizes="(max-width: 1024px) 50vw, 25vw" priority fetchPriority="high" quality={85}/>
            </motion.div>
          </motion.div>

          
          <div className="w-full lg:w-1/2 flex flex-col gap-8 md:gap-10">
            
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} className="bg-white rounded-[12px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
              <h3 className="text-[#329898] text-[20px] md:text-[22px] font-medium mb-4">
                Our Mission
              </h3>
              <p className="text-[#4A5568] text-[15px] md:text-[16px] leading-[1.8] font-light">
                To transform access to advanced surgical care through clinically driven, cost-effective innovation—bringing precision, adaptability, and reliability to operating rooms worldwide.
              </p>
            </motion.div>

            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }} className="bg-white rounded-[12px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
              <h3 className="text-[#329898] text-[20px] md:text-[22px] font-medium mb-4">
                Our Vision
              </h3>
              <p className="text-[#4A5568] text-[15px] md:text-[16px] leading-[1.8] font-light">
                A world where every patient, regardless of location or resources, can benefit from the highest standards of surgical precision, powered by technology that is accessible, adaptable, and human-centric.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>);
}
