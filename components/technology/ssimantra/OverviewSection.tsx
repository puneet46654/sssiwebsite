"use client";

import React from "react";
import Image from "next/image";

function OverviewSection() {
  return (
    <section className="relative w-full max-w-[1920px] h-[514px] mx-auto bg-[#F4F8F9] overflow-hidden flex items-center">
      
      {/* CSS for the sliding animation */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideInRight 1.5s ease-out forwards;
        }
      `}</style>
      
      <div className="absolute left-[-10%] top-[-20%] w-[500px] h-[500px] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-full">
        <div className="w-full lg:w-[65%] flex flex-col justify-center z-20">
          <h2 style={{ color: "#00A09C", fontFamily: "var(--font-sora), sans-serif", fontSize: "32px", fontWeight: 700, lineHeight: "56px" }}>
            SSI Mantra 3
          </h2>
          <p style={{ color: "#1E1E1E", fontFamily: "var(--font-sora), sans-serif", fontSize: "20px", fontWeight: 300, lineHeight: "48px", marginTop: "8px" }} className="max-w-[880px]">
            India’s first globally developed robotic surgical system. Crafted for <span style={{ fontWeight: 500 }}>precision, adaptability, and scale</span>. From cardiac to urology and beyond, it brings advanced care within reach, helping hospitals and surgeons deliver more to patients everywhere. The SSI Mantra 3 redefines accessibility in robotic surgery with advanced features designed for <span style={{ fontWeight: 500 }}>surgical precision, surgeon comfort, and improved patient outcomes</span>.
          </p>
        </div>
      </div>

      {/* Image Container with the animation class */}
      <div className="absolute right-0 top-0 w-[664px] h-[514px] z-10 pointer-events-none animate-slide-in">
        <div className="relative w-full h-full">
          <Image 
            src="/images/home/overview/image1.webp" 
            alt="SSI Mantra 3 Robotic Arm" 
            fill 
            className="object-contain object-right-top" 
            quality={80} 
          />
        </div>
      </div>

    </section>
  );
}

export default React.memo(OverviewSection);