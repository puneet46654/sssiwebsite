"use client";
import React from 'react';
import localFont from 'next/font/local';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const sora = localFont({
    src: [
        {
            path: '../../public/fonts/sora/static/Sora-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/sora/static/Sora-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/sora/static/Sora-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-sora',
    display: 'swap',
});

export default function DemoContactSection() {
    return (
        <section className={`${sora.variable} relative w-full bg-[#F4F9F9] py-20 md:py-32 overflow-hidden font-sora`}>
            {/* Background Masks */}
            <div className="absolute top-0 right-0 h-full w-full md:w-1/2 pointer-events-none z-0 flex justify-end opacity-70">
                <img 
                    src="/images/demo/mask1.webp" 
                    alt="Right Background Mask" 
                    className="h-full object-cover md:object-contain object-right"
                />
            </div>
            <div className="absolute top-0 left-0 h-full w-full md:w-1/2 pointer-events-none z-0 flex justify-start opacity-70">
                <img 
                    src="/images/demo/mask2.webp" 
                    alt="Left Background Mask" 
                    className="h-full object-cover md:object-contain object-left"
                />
            </div>

            <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Text */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[1000px] mx-auto mb-16 lg:mb-20"
                >
                    <p className="text-center text-[#4A4A4A] text-lg sm:text-xl md:text-[22px] font-light leading-[1.8] tracking-wide">
                        Get in touch to experience the full capabilities of SS Innovations and discover how SSI Mantra can support your robotic surgery needs—making advanced, high-quality patient care more accessible than ever.
                    </p>
                </motion.div>

                {/* Form Container */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-white rounded-[2rem] p-8 sm:p-12 lg:p-[4.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full mx-auto"
                >
                    {/* Increased gaps for wider/spacious layout */}
                    <form className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 xl:gap-x-24 gap-y-12">
                        
                        {/* Left Column */}
                        <div className="flex flex-col gap-8 md:gap-9">
                            <InputField 
                                label="Full Name" 
                                placeholder="Write your full name" 
                            />
                            <InputField 
                                label="Email Address" 
                                placeholder="Enter your email address" 
                                type="email" 
                            />
                            <InputField 
                                label="Phone Number" 
                                placeholder="+91 - xxx xxx xxxx" 
                                type="tel" 
                            />
                            <InputField 
                                label="Organisation / Hospital Name" 
                                placeholder="Enter your organisation or hospital name" 
                            />
                            <InputField 
                                label="Specialty" 
                                placeholder="Enter your specialty" 
                            />
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-8 md:gap-9">
                            {/* Preferred Dates Input */}
                            <div className="relative w-full">
                                <label className="block text-[14px] text-[#555555] mb-2.5 font-normal">Preferred Dates</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="MM/DD/YYYY"
                                        className="w-full bg-[#F3F4F6] border border-[#E5E7EB] text-[#333] placeholder:text-[#A0A0A0] rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-[#389E9D] focus:ring-1 focus:ring-[#389E9D] transition-all"
                                    />
                                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-[#777777] w-5 h-5 cursor-pointer" />
                                </div>
                            </div>

                            {/* Message Textarea - Increased height to match alignment */}
                            <div className="flex-grow flex flex-col w-full">
                                <label className="block text-[14px] text-[#555555] mb-2.5 font-normal">Message</label>
                                <textarea
                                    placeholder="Write a message"
                                    className="w-full flex-grow min-h-[220px] bg-[#F3F4F6] border border-[#E5E7EB] text-[#333] placeholder:text-[#A0A0A0] rounded-lg px-4 py-4 text-[15px] focus:outline-none focus:border-[#389E9D] focus:ring-1 focus:ring-[#389E9D] resize-none transition-all"
                                ></textarea>
                            </div>

                            {/* Captcha Section */}
                            <div className="w-full">
                                <label className="block text-[14px] text-[#555555] mb-2.5 font-normal">Enter captcha</label>
                                <div className="mb-3 inline-block">
                                    {/* Simulated Captcha Image */}
                                    <div className="bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxwYXRoIGQ9Ik0wIDRMNCAwWk00IDRMMCAwWiIgc3Ryb2tlPSIjZTllOWU5IiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] px-6 py-2 border border-[#E5E5E5] rounded bg-white relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/5 opacity-50 mix-blend-multiply pointer-events-none"></div>
                                        <span className="relative z-10 font-serif italic text-lg tracking-[0.3em] text-[#333] select-none line-through decoration-gray-400 decoration-1">
                                            y 1 l W 9 p
                                        </span>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter captcha"
                                    className="w-full bg-[#F3F4F6] border border-[#E5E7EB] text-[#333] placeholder:text-[#A0A0A0] rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-[#389E9D] focus:ring-1 focus:ring-[#389E9D] transition-all"
                                />
                            </div>

                            {/* Agreement & Submit Container */}
                            <div className="flex flex-col gap-5 mt-auto pt-1 w-full">
                                <div className="flex items-center space-x-3">
                                    <input 
                                        type="checkbox" 
                                        id="agreeContact" 
                                        className="w-[18px] h-[18px] rounded border-gray-300 text-[#389E9D] focus:ring-[#389E9D] cursor-pointer" 
                                    />
                                    <label htmlFor="agreeContact" className="text-[14px] text-[#666666] cursor-pointer select-none">
                                        I agree to be contacted...
                                    </label>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="w-full bg-[#389E9D] hover:bg-[#2F8786] text-white font-medium text-[16px] py-[14px] rounded-lg transition-colors"
                                >
                                    Schedule My Demo
                                </button>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

// Reusable Input Component updated to match exact mockup
function InputField({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
    return (
        <div className="w-full">
            <label className="block text-[14px] text-[#555555] mb-2.5 font-normal">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-[#F3F4F6] border border-[#E5E7EB] text-[#333] placeholder:text-[#A0A0A0] rounded-lg px-4 py-3.5 text-[15px] focus:outline-none focus:border-[#389E9D] focus:ring-1 focus:ring-[#389E9D] transition-all"
            />
        </div>
    );
}
