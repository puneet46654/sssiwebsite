'use client';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
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
        transition: { staggerChildren: 0.15 }
    }
};
export default function PatientOverviewSection() {
    return (<section className="relative isolate w-full bg-[#F4F9FA] font-['Sora',sans-serif] overflow-hidden">
      
      <div className="pointer-events-none absolute right-0 top-0 h-[430px] w-[65%] opacity-40 bg-[radial-gradient(circle_at_right,rgba(126,211,215,0.28),transparent_35%)]"/>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16 xl:px-0">

        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={revealVariants} className="
            relative
            mx-auto
            w-full
            max-w-[1380px]
            h-[690px]
            sm:h-[730px]
            md:h-[760px]
            lg:h-[790px]
            xl:h-[820px]
          ">
          
          <div className="
              absolute
              left-1/2
              bottom-[70px]
              z-10
              flex
              h-auto
              min-h-[230px]
              w-full
              max-w-[1380px]
              -translate-x-1/2
              flex-col
              items-end
              justify-center
              gap-[10px]
              rounded-[18px]
              bg-white
              p-[10px]
              shadow-[0_14px_45px_rgba(0,0,0,0.04)]
              md:h-[264px]
            ">
            
            <div className="
                relative
                z-20
                flex
                w-full
                flex-col
                gap-6
                px-6
                py-8
                md:w-[54%]
                md:px-10
                lg:w-[55%]
                lg:px-16
                xl:w-[55%]
                xl:px-20
              ">
              <h2 className="text-[#1E1E1E] text-[26px] md:text-[32px] lg:text-[34px] font-semibold leading-[1.25] tracking-tight">
                What is Robotic-Assisted Surgery?
              </h2>

              <p className="max-w-[720px] text-[#2F3540] text-[15px] md:text-[16px] lg:text-[17px] font-light leading-[1.65]">
                Robotic surgery is a form of minimally invasive surgery where doctors use advanced robotic
                systems to perform procedures with enhanced precision and control. This often means smaller
                incisions, less pain, reduced risk of infection, faster recovery, and minimal scarring
                compared to traditional open surgery.
              </p>
            </div>
          </div>

          
          <div className="
              absolute
              bottom-[70px]
              left-[4%]
              z-20
              w-[310px]
              sm:w-[370px]
              md:w-[430px]
              lg:w-[500px]
              xl:w-[540px]
            " style={{
            aspectRatio: '134 / 163'
        }}>
            <Image src="/images/patients/education/section2/image1.webp" alt="Medical Professional with SSI Innovations logo" fill loading="lazy" className="object-contain object-bottom" sizes="(max-width: 640px) 310px, (max-width: 768px) 370px, (max-width: 1024px) 430px, 540px"/>
          </div>
        </motion.div>

        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="
            mx-auto
            grid
            w-full
            max-w-[980px]
            grid-cols-2
            items-start
            justify-center
            gap-16
            pb-24
            md:gap-28
            lg:gap-44
            xl:gap-56
          ">
          
          <motion.div variants={revealVariants} className="relative mx-auto w-full max-w-[260px] md:max-w-[330px] lg:max-w-[380px]" style={{ aspectRatio: '71 / 101' }}>
            <Image src="/images/patients/education/section2/image2.webp" alt="Traditional Open Surgery Incision Diagram" fill className="object-contain object-center" sizes="(max-width: 768px) 260px, (max-width: 1024px) 330px, 380px"/>
          </motion.div>

          
          <motion.div variants={revealVariants} className="relative mx-auto w-full max-w-[260px] md:max-w-[330px] lg:max-w-[380px]" style={{ aspectRatio: '71 / 101' }}>
            <Image src="/images/patients/education/section2/image3.webp" alt="Robotic-Assisted Keyhole Incisions Diagram" fill className="object-contain object-center" sizes="(max-width: 768px) 260px, (max-width: 1024px) 330px, 380px"/>
          </motion.div>
        </motion.div>

      </div>
    </section>);
}
