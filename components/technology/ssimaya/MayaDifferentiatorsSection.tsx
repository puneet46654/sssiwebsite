"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { motion, type Variants } from "framer-motion";
const sora = localFont({
    src: "../../../public/fonts/sora/static/Sora-Light.ttf",
    display: "swap",
});
const features = [
    {
        title: "Real-time 3D Visualization",
        description: "Experience patient anatomy in lifelike 3D, allowing surgeons to navigate, plan, and operate with unmatched clarity and precision.",
        image: "/images/technology/ssimaya/maya-differentiators/image1.webp",
    },
    {
        title: "Integration with SSI Guru",
        description: "Maya connects seamlessly with SSI Guru for teleproctoring, enabling live mentoring, case guidance, and remote expertise in real time.",
        image: "/images/technology/ssimaya/maya-differentiators/image2.webp",
    },
    {
        title: "Multi-Angle Access",
        description: "Surgeons and proctors can view procedures from multiple perspectives, add annotations, and share insights instantly — enhancing collaboration and training.",
        image: "/images/technology/ssimaya/maya-differentiators/image3.webp",
    },
];
export default function MayaDifferentiatorsSection() {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        },
    };
    return (<section className={`bg-[#040810] py-20 md:py-32 ${sora.className}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        
        
        <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-white text-[20px] md:text-[24px] font-normal mb-8 md:mb-12 tracking-wide">
          What Makes Maya Different
        </motion.h2>

        
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
          {features.map((item, index) => (<motion.div key={index} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1 }} style={{ aspectRatio: "265 / 132" }} className="relative w-full min-h-[350px] md:min-h-[450px] max-w-[1600px] mx-auto rounded-[16px] md:rounded-[24px] overflow-hidden group">
              
              <Image src={item.image} alt={item.title} fill loading="lazy" className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1440px" quality={80}/>

              
              <div className="absolute inset-x-0 bottom-0 h-[80%] md:h-[60%] bg-gradient-to-t from-[#040810] via-[#040810]/60 to-transparent pointer-events-none"/>

              
              <div className="absolute bottom-0 left-0 p-6 sm:p-10 md:p-12 lg:p-16 w-full md:max-w-[80%] lg:max-w-[800px]">
                <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold mb-2 md:mb-4">
                  {item.title}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-[#E0E0E0] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-light leading-[1.6] md:leading-[30px]">
                  {item.description}
                </motion.p>
              </div>
            </motion.div>))}
        </div>
      </div>
    </section>);
}
