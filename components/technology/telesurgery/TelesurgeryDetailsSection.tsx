'use client';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
const images = [
    '/images/technology/telesurgery/section2/image1.webp',
    '/images/technology/telesurgery/section2/image2.webp',
    '/images/technology/telesurgery/section2/image3.webp',
];
const features = [
    {
        title: 'Real-Time Visual Feed',
        description: 'Crystal-clear streaming ensures surgical teams see every detail as if they were in the same room.',
    },
    {
        title: 'Advanced 3D HD Vision',
        description: 'High-definition, three-dimensional imaging provides unmatched depth and clarity throughout the procedure.',
    },
    {
        title: 'MantraSync Technology',
        description: 'Ultra-low latency connectivity keeps surgeon hand movements and robotic responses perfectly in sync.',
    },
    {
        title: 'Remote Proctoring & Mentorship',
        description: 'Integrated support allows expert surgeons to guide, mentor, and annotate in real time—expanding access to training and expertise.',
    }
];
const revealVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween' as const,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            duration: 0.8
        }
    }
};
const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};
export default function TelesurgeryDetailsSection() {
    return (<section className="relative w-full bg-[#F4F7F9] py-20 lg:py-32 font-['Sora',sans-serif]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col gap-16">
        
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={revealVariants} className="flex flex-col gap-6 max-w-[1000px]">
          <h2 className="text-[#3AAFA9] text-[clamp(32px,4vw,42px)] font-bold tracking-tight">
            Telesurgery
          </h2>
          <p className="text-[#596575] text-[clamp(15px,1.5vw,18px)] font-light leading-[1.8]">
            By blending robotics, digital intelligence, and real-time connectivity, SSI Telesurgery makes world-class surgical expertise accessible beyond borders. It enables surgeons to operate on patients from miles away, combining robotic platforms, high-speed connectivity, and real-time 3D visualization to turn this future-ready vision into reality.
          </p>
        </motion.div>

        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {images.map((src, index) => (<motion.div key={index} variants={revealVariants} className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square rounded-[24px] overflow-hidden shadow-md bg-white">
              <Image src={src} alt={`Telesurgery capability ${index + 1}`} fill className="object-cover object-center transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw"/>
            </motion.div>))}
        </motion.div>

        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {features.map((feature, index) => (<motion.div key={index} variants={revealVariants} className="flex flex-col gap-3 bg-white p-8 lg:p-10 rounded-[20px] border border-[#E8F0F2] shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-[#3AAFA9] text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-[#6E7A8A] text-base font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>))}
        </motion.div>

      </div>
    </section>);
}
