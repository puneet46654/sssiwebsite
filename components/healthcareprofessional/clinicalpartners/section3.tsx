"use client";
import React, { useState } from 'react';
import localFont from 'next/font/local';
import { motion, AnimatePresence } from 'framer-motion';

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

const hospitals = [
    {
        name: "Rajiv Gandhi Cancer Institute and Research Centre",
        location: "New Delhi, India"
    },
    {
        name: "Manipal Hospital",
        location: "Jaipur, Rajasthan, India"
    },
    {
        name: "Kokilaben Dhirubhai Ambani Hospital",
        location: "Ahmedabad, Gujarat, India"
    },
    {
        name: "Aster Hospital",
        location: "Bengaluru, Karnataka, India"
    }
];

const filterCategories = [
    "Hospital name",
    "Country",
    "State",
    "City"
];

export default function NetworkSection() {
    const [openFilter, setOpenFilter] = useState<string | null>(null);

    const toggleFilter = (filter: string) => {
        setOpenFilter(openFilter === filter ? null : filter);
    };

    return (
        <section className={`${sora.variable} w-full bg-[#F4F7F8] py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 font-sora`} style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="mb-10 md:mb-14">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[28px] sm:text-3xl md:text-[36px] lg:text-[40px] font-medium text-[#1A1A1A] tracking-tight leading-tight"
                    >
                        Explore Our Growing Network
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[#6B7280] text-base sm:text-lg md:text-[20px] mt-3 md:mt-4 font-light"
                    >
                        Find where SSI Mantra is installed near you...
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Sidebar / Filters */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-[320px] flex-shrink-0"
                    >
                        <div className="bg-white rounded-2xl border border-[#A5D5D5] p-6 sm:p-8 shadow-sm">
                            <h3 className="text-[#3F3F3F] text-xl md:text-[22px] font-medium mb-6">
                                Filters
                            </h3>
                            
                            <div className="flex flex-col mb-8">
                                {filterCategories.map((filter, index) => (
                                    <div key={index} className="border-b border-[#E5E5E5] last:border-b-0">
                                        <button 
                                            onClick={() => toggleFilter(filter)}
                                            className="w-full py-5 flex justify-between items-center text-left focus:outline-none group"
                                        >
                                            <span className="text-[#6B7280] text-[15px] font-normal group-hover:text-[#099F9E] transition-colors">
                                                {filter}
                                            </span>
                                            <span className="text-[#6B7280] text-lg font-light leading-none group-hover:text-[#099F9E] transition-colors">
                                                +
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {openFilter === filter && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pb-4 text-sm text-[#8C8C8C]">
                                                        {/* Placeholder for filter dropdown content */}
                                                        Select {filter.toLowerCase()}...
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full py-2.5 rounded-lg border border-[#D1D5DB] text-[#6B7280] text-sm font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#099F9E] focus:ring-opacity-50">
                                Apply Filters
                            </button>
                        </div>
                    </motion.div>

                    {/* Hospital List */}
                    <div className="flex-1 flex flex-col gap-4 sm:gap-5">
                        {hospitals.map((hospital, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="bg-white rounded-xl border border-[#E5E5E5] p-6 sm:p-8 flex flex-col justify-between min-h-[130px] sm:min-h-[140px] hover:shadow-md transition-shadow duration-300"
                            >
                                <h4 className="text-[#2D2D2D] text-lg sm:text-xl md:text-[22px] font-normal pr-4">
                                    {hospital.name}
                                </h4>
                                
                                <div className="mt-4 pt-2 flex justify-end items-center gap-1.5 sm:gap-2">
                                    <svg 
                                        width="14" 
                                        height="16" 
                                        viewBox="0 0 12 16" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="flex-shrink-0"
                                    >
                                        <path 
                                            d="M6 0C2.68629 0 0 2.68629 0 6C0 10.5 6 16 6 16C6 16 12 10.5 12 6C12 2.68629 9.31371 0 6 0ZM6 8.5C4.61929 8.5 3.5 7.38071 3.5 6C3.5 4.61929 4.61929 3.5 6 3.5C7.38071 3.5 8.5 4.61929 8.5 6C8.5 7.38071 7.38071 8.5 6 8.5Z" 
                                            fill="#9CA3AF"
                                        />
                                    </svg>
                                    <span className="text-[#9CA3AF] text-xs sm:text-sm font-light">
                                        {hospital.location}
                                    </span>
                                </div>
                            </motion.div>
                        ))}

                        {/* See more link */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-2"
                        >
                            <button className="flex items-center gap-2 text-[#099F9E] text-[15px] font-medium hover:opacity-80 transition-opacity focus:outline-none group">
                                See more
                                <svg 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 16 16" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transform group-hover:translate-x-1 transition-transform"
                                >
                                    <path 
                                        d="M3.33331 8H12.6666" 
                                        stroke="#099F9E" 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                    <path 
                                        d="M8 3.33331L12.6667 7.99998L8 12.6666" 
                                        stroke="#099F9E" 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}