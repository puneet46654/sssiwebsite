"use client";

import { useState } from "react";

interface Application {
  name: string;
  coords: { top: string; left: string };
}

export default function ClinicalApplicationsSection() {
  const [activeApp, setActiveApp] = useState<string>("Urology");

  const applications: Application[] = [
    { name: "Urology", coords: { top: "66.5%", left: "73.7%" } },
    { name: "Gastrointestinal", coords: { top: "52.5%", left: "73.4%" } },
    { name: "Gynecology", coords: { top: "69.5%", left: "73.4%" } },
    { name: "Thoracic", coords: { top: "35%", left: "74%" } },
    { name: "Head and Neck", coords: { top: "16%", left: "73.5%" } },
    { name: "Breast and Plastic", coords: { top: "39.5%", left: "71.8%" } },
    { name: "Cardiac", coords: { top: "30.5%", left: "73.7%" } },
    { name: "General Surgery", coords: { top: "55.5%", left: "73.4%" } },
  ];

  const currentActive = applications.find((app) => app.name === activeApp) || applications[0];

  return (
    <section 
      className="relative w-full mx-auto overflow-hidden flex items-center justify-center text-white"
      style={{
        width: "100%",
        maxWidth: "1920px",
        height: "990px",
        aspectRatio: "64/33",
        backgroundImage: "url('/images/healthcareprofessional/surgery/section3/image1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-10 flex flex-col gap-12">
        
        {/* Section Heading */}
        <h2
          style={{
            color: "#FFF",
            fontFamily: "Sora, sans-serif",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "50px",
          }}
        >
          Clinical Applications
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: 2-Column Application Buttons Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {applications.map((app) => {
              const isActive = activeApp === app.name;
              return (
                <div
                  key={app.name}
                  onMouseEnter={() => setActiveApp(app.name)}
                  onClick={() => setActiveApp(app.name)}
                  className={`group flex items-center justify-between px-6 py-4 rounded-[16px] cursor-pointer transition-all duration-300 border backdrop-blur-md ${
                    isActive
                      ? "bg-[#111822]/90 border-[#099F9E] shadow-[0_0_25px_rgba(9,159,158,0.25)]"
                      : "bg-[#0D1117]/80 border-white/10 hover:border-white/30 hover:bg-[#111822]/90"
                  }`}
                >
                  <span
                    style={{
                      color: isActive ? "#099F9E" : "#FFF",
                      fontFamily: "Sora, sans-serif",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "28px",
                      letterSpacing: "-0.16px",
                    }}
                    className="transition-colors duration-300"
                  >
                    {app.name}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-[#099F9E] text-black" : "text-white/40 group-hover:text-white"
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column Spacer */}
          <div className="hidden lg:block lg:col-span-5" />

        </div>

      </div>

      {/* Floating Active Tooltip Overlay */}
      <div
        className="absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-3 pointer-events-none"
        style={{
          top: currentActive.coords.top,
          left: currentActive.coords.left,
        }}
      >
        <div className="relative flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 shadow-[0_0_10px_#ef4444]"></span>
        </div>

        <div className="bg-[#161B22]/95 border border-white/25 backdrop-blur-xl px-4 py-2 rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2">
          <span
            style={{
              color: "#FFF",
              fontFamily: "Sora, sans-serif",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "20px",
              whiteSpace: "nowrap",
            }}
          >
            {activeApp}
          </span>
        </div>
      </div>

    </section>
  );
}