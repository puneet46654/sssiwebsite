"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SurgeryPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#EFF6F8] pt-[80px] lg:pt-[121px]">
      <section
        className="relative w-full max-w-[1928px] mx-auto overflow-hidden bg-black flex-grow"
        style={{
          height: "100%",
          maxHeight: "843px",
          aspectRatio: "231/101",
        }}
      >
        {/* 1. Base Image (Doctors) */}
        <Image
          src="/images/demo/section1/image1.webp"
          alt="Healthcare professionals performing surgery"
          fill
          className={`object-cover object-center z-0 transition-opacity duration-700 ease-in-out delay-300 ${
            isMounted ? "opacity-100" : "opacity-0"
          }`}
          priority
        />

        {/* 2. Overlay Image (Black Gradient) */}
        <Image
          src="/images/healthcareprofessional/surgery/section1/surgerybg.webp"
          alt="Dark gradient overlay"
          fill
          className={`object-cover z-10 transition-opacity duration-500 ease-in-out delay-100 ${
            isMounted ? "opacity-100" : "opacity-0"
          }`}
          priority
        />

        {/* 3. Text Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center w-full">
          <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-10">
            <div className="lg:ml-[80px]">
              <div
                className={`max-w-[700px] transition-all duration-700 ease-out delay-500 ${
                  isMounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <h2
                  style={{
                    color: "#FFF",
                    textShadow: "0 2px 2px rgba(0, 0, 0, 0.60)",
                    fontFamily: "Sora, sans-serif",
                    fontSize: "38px",
                    fontWeight: 400,
                    lineHeight: "50px",
                    margin: "0 0 16px 0",
                  }}
                >
                  Book a Demo
                </h2>

                <p
                  style={{
                    color: "#E0E0E0",
                    textShadow: "0 2px 2px rgba(0, 0, 0, 0.60)",
                    fontFamily: "Sora, sans-serif",
                    fontSize: "24px",
                    fontWeight: 300,
                    lineHeight: "40px",
                    margin: 0,
                  }}
                >
                    Experience how our robotic surgical system can transform 
                    your OR — live, guided by our clinical team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
