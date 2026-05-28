"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/common/Header";
export default function ComingSoon() {
    return (<main className="relative min-h-screen w-full bg-[#F5F8FA] flex flex-col items-center justify-center overflow-hidden font-sans selection:bg-[#0BD3D3] selection:text-white">
      
      
      <Header />
      
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0BD3D3]/5 rounded-full blur-3xl pointer-events-none"/>
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-16">
        
        
        <motion.div className="relative w-24 h-24 mb-8 rounded-full border-4 border-[#1E1E1E] flex items-center justify-center shadow-lg bg-white" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          
          <motion.div className="absolute w-1 h-8 bg-[#0BD3D3] rounded-full origin-bottom" style={{ bottom: "50%" }} animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}/>
          
          <motion.div className="absolute w-1.5 h-5 bg-[#1E1E1E] rounded-full origin-bottom" style={{ bottom: "50%" }} animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}/>
          
          <div className="absolute w-3 h-3 bg-[#1E1E1E] rounded-full z-10"/>
        </motion.div>

        
        <motion.h1 className="text-5xl md:text-7xl font-bold text-[#1E1E1E] tracking-tighter leading-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} style={{ fontFamily: "var(--font-sora), sans-serif" }}>
          Coming <span className="text-[#0BD3D3]">Soon</span>
        </motion.h1>
        
        <motion.h2 className="text-xl md:text-2xl font-medium text-[#1E1E1E] mt-4 mb-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }} style={{ fontFamily: "var(--font-sora), sans-serif" }}>
          We're crafting something brilliant.
        </motion.h2>

        
        <motion.p className="text-gray-500 max-w-md mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
          Our new platform is currently under development. Check back soon as we prepare to launch an extraordinary experience.
        </motion.p>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }} className="mt-10">
          <Link href="/" className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1E1E1E] text-white font-medium hover:bg-[#0BD3D3] hover:text-[#1E1E1E] transition-all duration-300 shadow-lg hover:shadow-[#0BD3D3]/30 hover:-translate-y-1">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Home
          </Link>
        </motion.div>

      </div>
    </main>);
}
