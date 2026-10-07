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

const faqs = [
    {
        question: "How is robotic surgery different from traditional surgery?",
        answer: "Robotic surgery uses small incisions and advanced robotic arms guided by a surgeon, providing greater precision and control than open or laparoscopic surgery."
    },
    {
        question: "Does the robot operate independently?",
        answer: "No, the surgeon is always in full control. The robot simply translates the surgeon's hand movements into precise actions."
    },
    {
        question: "What training is required for surgeons and staff?",
        answer: "Training is provided through SSICRS, including simulation, lab sessions, and proctored live cases."
    },
    {
        question: "What specialties are supported by SSI Mantra?",
        answer: "SSI Mantra supports cardiac, thoracic, urology, gynecology, and general surgeries, with expanding applications."
    },
    {
        question: "How can my hospital adopt SSI Mantra?",
        answer: "Hospitals can schedule a demo and consult with our clinical and technical teams for deployment and training."
    }
];

export default function ClinicalFAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className={`${sora.variable} w-full bg-[#F4F7F8] py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 flex justify-center font-sora`} style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: 300 }}>
            <div className="w-full max-w-[1100px] mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: false, amount: 0.5 }} 
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} 
                    className="text-[#099F9E] text-3xl md:text-[42px] font-semibold text-center mb-12 md:mb-[80px] tracking-tight"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="flex flex-col gap-4 sm:gap-6">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, y: 40 }} 
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    borderColor: isOpen ? '#099F9E' : '#E5E5E5'
                                }} 
                                viewport={{ once: false, amount: 0.1 }} 
                                transition={{
                                    duration: 0.9,
                                    delay: index * 0.12,
                                    ease: [0.22, 1, 0.36, 1]
                                }} 
                                className={`bg-white border rounded-2xl cursor-pointer overflow-hidden transition-all duration-700 ${
                                    isOpen 
                                        ? 'border-[#099F9E] shadow-[0px_10px_30px_rgba(9,159,158,0.06)]' 
                                        : 'border-[#E5E5E5] hover:shadow-sm'
                                }`} 
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                            >
                                <div className="px-6 py-6 sm:px-8 sm:py-8 flex justify-between items-center gap-4 sm:gap-6">
                                    <h3 className={`text-base sm:text-lg md:text-xl font-medium transition-colors duration-700 ${isOpen ? 'text-[#099F9E]' : 'text-[#3F3F3F]'}`}>
                                        {faq.question}
                                    </h3>
                                    
                                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#099F9E] flex justify-center items-center shadow-sm">
                                        <AnimatePresence mode="wait">
                                            {isOpen ? (
                                                <motion.svg 
                                                    key="minus" 
                                                    initial={{ opacity: 0, scale: 0.5, rotate: -90 }} 
                                                    animate={{ opacity: 1, scale: 1, rotate: 0 }} 
                                                    exit={{ opacity: 0, scale: 0.5, rotate: 90 }} 
                                                    transition={{ duration: 0.3, ease: "circOut" }} 
                                                    width="14" 
                                                    height="2" 
                                                    viewBox="0 0 14 2" 
                                                    fill="none"
                                                >
                                                    <path d="M1 1H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                </motion.svg>
                                            ) : (
                                                <motion.svg 
                                                    key="plus" 
                                                    initial={{ opacity: 0, scale: 0.5, rotate: 90 }} 
                                                    animate={{ opacity: 1, scale: 1, rotate: 0 }} 
                                                    exit={{ opacity: 0, scale: 0.5, rotate: -90 }} 
                                                    transition={{ duration: 0.3, ease: "circOut" }} 
                                                    width="14" 
                                                    height="14" 
                                                    viewBox="0 0 14 14" 
                                                    fill="none"
                                                >
                                                    <path d="M7 1V13M1 7H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                </motion.svg>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                                
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div 
                                            key="content" 
                                            initial={{ height: 0, opacity: 0 }} 
                                            animate={{ height: 'auto', opacity: 1 }} 
                                            exit={{ height: 0, opacity: 0 }} 
                                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <div className="px-6 pb-6 sm:px-8 sm:pb-9">
                                                <p className="text-[#8C8C8C] text-sm sm:text-[15px] md:text-base leading-[1.8] max-w-[92%]">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
