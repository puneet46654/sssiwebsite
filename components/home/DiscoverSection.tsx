"use client";
import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
const DISCOVER_CARDS = [
    {
        id: 1,
        title: "Telesurgery",
        category: "Technology",
        image: "/images/home/discover/image1.webp",
        link: "#"
    },
    {
        id: 2,
        title: "Surgeon's Perspective",
        category: "Healthcare Professionals",
        image: "/images/home/discover/image2.webp",
        link: "#"
    },
    {
        id: 3,
        title: "Clinical Media",
        category: "Press release",
        image: "/images/home/discover/image3.webp",
        link: "#"
    },
    {
        id: 4,
        title: "Global Events",
        category: "Events",
        image: "/images/home/discover/image4.webp",
        link: "#"
    }
];
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 70,
            damping: 15
        },
    },
};
function DiscoverSection() {
    return (<section className="w-full py-16 md:py-20 lg:py-24 bg-[#F5F8FA] overflow-hidden font-sans">
      <motion.div className="max-w-[1440px] mx-auto px-6 lg:px-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }}>
        
        
        <motion.h2 variants={itemVariants} className="mb-8 md:mb-10 tracking-tight text-[#1E1E1E] text-[28px] md:text-[32px] font-medium leading-tight md:leading-[50px]" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
          Discover More
        </motion.h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISCOVER_CARDS.map((card) => (<motion.a key={card.id} href={card.link} variants={itemVariants} className="group flex flex-col bg-transparent rounded-[20px] overflow-hidden cursor-pointer">
              
              
              <div className="relative w-full overflow-hidden aspect-[88/87]" style={{ borderRadius: "20px 20px 0 0" }}>
                <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"/>
              </div>

              
              <div className="flex items-center justify-between p-5 border border-t-0 border-[#E5E7EB] bg-[#F3F7F9] transition-colors duration-300 group-hover:bg-[#EAF0F4]" style={{ borderRadius: "0 0 20px 20px" }}>
                <div className="flex flex-col gap-1 pr-4">
                  <h3 className="text-[#1E1E1E] transition-colors duration-300 group-hover:text-black text-[15px] md:text-[16px] font-medium leading-snug" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                    {card.title}
                  </h3>
                  <span className="text-[#099F9E] text-[11px] md:text-[12px] font-medium" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                    {card.category}
                  </span>
                </div>

                
                <div className="text-[#9A9A9A] transition-all duration-300 group-hover:text-[#1E1E1E] group-hover:translate-x-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M14.707 0.351648L23.7067 11.151C23.7997 11.2625 23.8735 11.3948 23.9238 11.5405C23.9741 11.6862 24 11.8423 24 12C24 12.1577 23.9741 12.3138 23.9238 12.4595C23.8735 12.6052 23.7997 12.7375 23.7067 12.849L14.707 23.6484C14.5194 23.8735 14.2649 24 13.9995 24C13.7342 24 13.4797 23.8735 13.2921 23.6484C13.1044 23.4232 12.999 23.1178 12.999 22.7994C12.999 22.481 13.1044 22.1756 13.2921 21.9504L20.5856 13.1999L0.999967 13.1999C0.734759 13.1999 0.480414 13.0735 0.292884 12.8485C0.105354 12.6235 0 12.3182 0 12C0 11.6818 0.105354 11.3766 0.292884 11.1515C0.480414 10.9265 0.734759 10.8001 0.999967 10.8001L20.5856 10.8001L13.2921 2.04955C13.1044 1.8244 12.999 1.51902 12.999 1.2006C12.999 0.882183 13.1044 0.576805 13.2921 0.351648C13.4797 0.126492 13.7342 0 13.9995 0C14.2649 0 14.5194 0.126492 14.707 0.351648Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>

            </motion.a>))}
        </div>
        
      </motion.div>
    </section>);
}
export default React.memo(DiscoverSection);
