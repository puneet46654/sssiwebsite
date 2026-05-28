"use client";
import React, { useState } from 'react';
import localFont from 'next/font/local';
import { motion, AnimatePresence } from 'framer-motion';
const sora = localFont({
    src: '../../public/fonts/sora/static/Sora-Light.ttf',
    variable: '--font-sora',
    display: 'swap',
});
const faqs = [
    {
        question: "Why should I join the SSInnovations?",
        answer: "Joining SS Innovations means being part of a team that is revolutionizing surgery through cost-effective, high-end robotic systems. We value innovation, collaboration, and a shared mission to make advanced healthcare accessible to all."
    },
    {
        question: "How can I edit my job application?",
        answer: "Once you submit an application, it cannot be changed. However, you may reach out to your recruiter for assistance. You can also update your details and experience by submitting a new application."
    },
    {
        question: "How can I submit my CV or resume?",
        answer: "You can submit your CV directly through our careers portal by selecting a 'Latest Opening' and clicking 'Apply Now'. Alternatively, you can email your CV to ssicareers@ssinnovation.org."
    },
    {
        question: "I've submitted a job application. What is the next step?",
        answer: "Our recruitment team will review your application. If your profile matches our requirements, we will contact you for an initial screening call or interview."
    },
    {
        question: "How can I see if a job has been filled?",
        answer: "Our careers portal is updated in real-time. If a job listing is no longer visible on the 'Latest Openings' section, it generally means the position has been filled."
    }
];
export default function CareersFAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(1);
    return (<section className={`${sora.variable} w-full bg-[#F4F7F8] py-20 md:py-32 px-4 sm:px-6 flex justify-center font-sora`} style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: 300 }}>
      <div className="w-full max-w-[1100px]">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="text-[#099F9E] text-3xl md:text-[42px] font-semibold text-center mb-12 md:mb-[80px] tracking-tight">
          Frequently Asked Questions
        </motion.h2>

        <div className="flex flex-col gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (<motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{
                    opacity: 1,
                    y: 0,
                    borderColor: isOpen ? '#099F9E' : '#E5E5E5'
                }} viewport={{ once: false, amount: 0.1 }} transition={{
                    duration: 0.9,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1]
                }} className={`bg-white border rounded-2xl cursor-pointer overflow-hidden transition-shadow duration-700 ${isOpen ? 'shadow-[0px_10px_30px_rgba(9,159,158,0.06)]' : 'hover:shadow-sm'}`} onClick={() => setOpenIndex(isOpen ? null : index)}>
                <div className="px-8 py-8 flex justify-between items-center gap-6">
                  <h3 className={`text-lg md:text-xl font-medium transition-colors duration-700 ${isOpen ? 'text-[#099F9E]' : 'text-[#3F3F3F]'}`}>
                    {faq.question}
                  </h3>
                  
                  <div className="flex-shrink-0 w-6 flex justify-center">
                    <AnimatePresence mode="wait">
                      {isOpen ? (<motion.svg key="minus" initial={{ opacity: 0, scale: 0.5, rotate: -90 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 0.5, rotate: 90 }} transition={{ duration: 0.5, ease: "circOut" }} width="18" height="2" viewBox="0 0 18 2" fill="none">
                          <path d="M1 1H17" stroke="#099F9E" strokeWidth="2" strokeLinecap="round"/>
                        </motion.svg>) : (<motion.svg key="plus" initial={{ opacity: 0, scale: 0.5, rotate: 90 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 0.5, rotate: -90 }} transition={{ duration: 0.5, ease: "circOut" }} width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M9 1V17M1 9H17" stroke="#6E6E6E" strokeWidth="2" strokeLinecap="round"/>
                        </motion.svg>)}
                    </AnimatePresence>
                  </div>
                </div>
                
                <AnimatePresence initial={false}>
                  {isOpen && (<motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
                      <div className="px-8 pb-9">
                        <p className="text-[#8C8C8C] text-[15px] md:text-base leading-[1.8] max-w-[92%]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>)}
                </AnimatePresence>
              </motion.div>);
        })}
        </div>
      </div>
    </section>);
}
