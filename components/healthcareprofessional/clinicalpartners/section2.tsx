"use client";
import React, { useState } from 'react';
import localFont from 'next/font/local';
import { motion } from 'framer-motion';

const sora = localFont({
    src: [
        {
            path: '../../../public/fonts/sora/static/Sora-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/sora/static/Sora-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/sora/static/Sora-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/sora/static/Sora-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
    ],
    variable: '--font-sora',
    display: 'swap',
});

export default function SurgeonsTestimonialSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = "Ayb8I5topTw";

    return (
        <section className={`${sora.variable} w-full bg-[#F4F7F8] py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 flex justify-center font-sora`} style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: 300 }}>
            <div className="w-full max-w-[1100px] mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: false, amount: 0.5 }} 
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} 
                    className="text-[#3F3F3F] text-2xl sm:text-3xl md:text-[38px] font-semibold mb-8 md:mb-12 tracking-tight"
                >
                    Surgeons Testimonials
                </motion.h2>

                <motion.div 
                    initial={{ opacity: 0, y: 40 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: false, amount: 0.1 }} 
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full bg-white rounded-2xl md:rounded-3xl border border-[#E5E5E5] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.04)]"
                >
                    <div className="relative w-full aspect-video bg-slate-900 group cursor-pointer overflow-hidden">
                        {!isPlaying ? (
                            <div 
                                className="absolute inset-0 w-full h-full flex items-center justify-center"
                                onClick={() => setIsPlaying(true)}
                            >
                                <img 
                                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                                    alt="Surgeon's Perspective: Dr. Leena Mehrotra" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={(e)=>{
                                        // Fallback if maxresdefault is missing
                                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                                
                                {/* Top bar simulation matching image */}
                                <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-b from-black/60 to-transparent flex items-center justify-between text-white text-xs sm:text-sm font-medium">
                                    <span className="truncate pr-4 drop-shadow">Surgeon&apos;s Perspective Ep 07- Dr. Leena Mehrotra</span>
                                    <div className="flex items-center space-x-3 opacity-90">
                                        <span className="w-7 h-7 rounded-full bg-black/40 flex items-center justify-center">⏰</span>
                                        <span className="w-7 h-7 rounded-full bg-black/40 flex items-center justify-center">↗</span>
                                    </div>
                                </div>

                                {/* Play Button Overlay */}
                                <div className="absolute w-16 h-12 sm:w-20 sm:h-14 bg-[#FF0000] rounded-xl flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="translate-x-0.5">
                                        <polygon points="5,3 19,12 5,21" />
                                    </svg>
                                </div>
                            </div>
                        ) : (
                            <iframe 
                                className="absolute inset-0 w-full h-full border-0"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                title="Surgeon's Perspective Ep 07- Dr. Leena Mehrotra"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                            />
                        )}
                    </div>

                    <div className="p-4 sm:p-6 bg-white border-t border-[#E5E5E5]/60 flex items-center justify-between">
                        <p className="text-[#3F3F3F] text-sm sm:text-base font-normal">
                            Surgeon&apos;s Perspective: Dr. Leena Mehrotra
                        </p>
                        <span className="text-xs text-[#099F9E] font-medium hidden sm:inline-block">SSI Mantra</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}