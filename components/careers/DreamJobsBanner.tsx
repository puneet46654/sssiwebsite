'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
export default function DreamJobsBanner() {
    return (<section className="w-full bg-[#F4F7F8] flex justify-center py-10 md:py-16">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }} className="w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        
        <Image src="/images/careers/dream-jobs/image1.webp" alt="Discover Your Dream Jobs In SSI" width={1200} height={500} loading="lazy" className="w-full h-auto block"/>
      </motion.div>
    </section>);
}
