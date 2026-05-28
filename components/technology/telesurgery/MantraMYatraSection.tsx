'use client';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import localFont from 'next/font/local';
const sora = localFont({
    src: '../../../public/fonts/sora/static/Sora-Light.ttf',
    variable: '--font-sora',
    display: 'swap',
});
const revealVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'tween' as const, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], duration: 0.8 }
    }
};
const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};
export default function MantraMYatraSection() {
    return (<section className={`relative w-full bg-[#F4F7F9] py-20 lg:py-32 font-sans ${sora.variable}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col gap-12 lg:gap-20 max-w-[1440px]">
        
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={revealVariants} className="flex flex-col gap-6" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
          <h2 className="text-[#1E1E1E] text-[clamp(28px,3vw,36px)] font-semibold tracking-tight">
            MantraM Yatra
          </h2>
          <p className="text-[#596575] text-[clamp(14px,1.2vw,16px)] font-light leading-[1.8] max-w-[1200px]">
            MantraM Yatras are outreach journeys designed to take advanced robotic surgery directly to communities. Through these roadshows, the fully equipped MantraM mobile unit travels across cities, towns, and rural regions, offering live demonstrations, training, and awareness programs. Each Yatra is a step toward making world-class surgical care more accessible and building trust in robotic technology.
          </p>
        </motion.div>

        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
          
          <motion.div variants={revealVariants} className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden shadow-md">
            <Image src="/images/technology/telesurgery/section4/image1.webp" alt="MantraM Yatra Flag Off" fill className="object-cover object-center transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw"/>
          </motion.div>

          
          <div className="flex flex-col gap-6 justify-center">
            
            <motion.div variants={revealVariants} className="bg-white p-6 md:p-8 rounded-[8px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#099F9E] hover:shadow-[0_8px_30px_rgba(11,211,211,0.1)] transition-shadow duration-300 cursor-pointer">
              <h3 className="text-[#1E1E1E] text-lg md:text-xl font-semibold mb-2">Expanding Access</h3>
              <p className="text-[#6E7A8A] text-sm md:text-base font-light leading-relaxed">
                Taking advanced robotic surgery beyond hospital walls to rural areas, Tier-2/3 cities, and underserved regions.
              </p>
            </motion.div>

            <motion.div variants={revealVariants} className="bg-white p-6 md:p-8 rounded-[8px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#099F9E] hover:shadow-[0_8px_30px_rgba(11,211,211,0.1)] transition-shadow duration-300 cursor-pointer">
              <h3 className="text-[#1E1E1E] text-lg md:text-xl font-semibold mb-2">Building Awareness</h3>
              <p className="text-[#6E7A8A] text-sm md:text-base font-light leading-relaxed">
                Engaging communities through live demonstrations, patient education, and showcasing the benefits of robotic surgery.
              </p>
            </motion.div>
          </div>

          
          <div className="flex flex-col gap-6 justify-center order-last md:order-none">
            <motion.div variants={revealVariants} className="bg-white p-6 md:p-8 rounded-[8px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#099F9E] hover:shadow-[0_8px_30px_rgba(11,211,211,0.1)] transition-shadow duration-300 cursor-pointer">
              <h3 className="text-[#1E1E1E] text-lg md:text-xl font-semibold mb-2">Training & Mentorship</h3>
              <p className="text-[#6E7A8A] text-sm md:text-base font-light leading-relaxed">
                Providing hands-on exposure and proctoring opportunities for local surgeons and healthcare staff.
              </p>
            </motion.div>

            <motion.div variants={revealVariants} className="bg-white p-6 md:p-8 rounded-[8px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#099F9E] hover:shadow-[0_8px_30px_rgba(11,211,211,0.1)] transition-shadow duration-300 cursor-pointer">
              <h3 className="text-[#1E1E1E] text-lg md:text-xl font-semibold mb-2">Collaboration & Outreach</h3>
              <p className="text-[#6E7A8A] text-sm md:text-base font-light leading-relaxed">
                Partnering with hospitals, medical institutions, and mission-based organizations to strengthen healthcare delivery.
              </p>
            </motion.div>
          </div>

          
          <motion.div variants={revealVariants} className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden shadow-md">
            <Image src="/images/technology/telesurgery/section4/image2.webp" alt="MantraM Surgical Robot Yatra Event" fill className="object-cover object-center transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw"/>
          </motion.div>

        </motion.div>
      </div>
    </section>);
}
