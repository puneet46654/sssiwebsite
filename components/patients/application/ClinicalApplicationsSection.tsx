'use client';
import { useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import localFont from 'next/font/local';
const sora = localFont({
    src: '../../../public/fonts/sora/static/Sora-Light.ttf',
    variable: '--font-sora',
    display: 'swap',
});
const SVG_WIDTH = 1920;
const SVG_HEIGHT = 990;
const LABEL_WIDTH = 240;
const LABEL_HEIGHT = 54;
const GAP_FROM_POINT = 16;
const clinicalItems = [
    {
        id: 'urology',
        label: 'Urology',
        point: { x: 1410, y: 585 },
        labelBox: { x: 980, y: 585 },
        direction: 'left',
    },
    {
        id: 'gastrointestinal',
        label: 'Gastrointestinal',
        point: { x: 1415, y: 430 },
        labelBox: { x: 980, y: 430 },
        direction: 'left',
    },
    {
        id: 'gynecology',
        label: 'Gynecology',
        point: { x: 1418, y: 550 },
        labelBox: { x: 980, y: 550 },
        direction: 'left',
    },
    {
        id: 'thoracic',
        label: 'Thoracic',
        point: { x: 1370, y: 300 },
        labelBox: { x: 980, y: 300 },
        direction: 'left',
    },
    {
        id: 'head-neck',
        label: 'Head and Neck',
        point: { x: 1410, y: 210 },
        labelBox: { x: 980, y: 210 },
        direction: 'left',
    },
    {
        id: 'breast-plastic',
        label: 'Breast and Plastic',
        point: { x: 1360, y: 315 },
        labelBox: { x: 950, y: 315 },
        direction: 'left',
    },
    {
        id: 'cardiac',
        label: 'Cardiac',
        point: { x: 1450, y: 315 },
        labelBox: { x: 1600, y: 315 },
        direction: 'right',
    },
    {
        id: 'general-surgery',
        label: 'General Surgery',
        point: { x: 1410, y: 485 },
        labelBox: { x: 980, y: 485 },
        direction: 'left',
    },
];
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 26 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
            staggerChildren: 0.07,
        },
    },
};
const itemVariants: Variants = {
    hidden: { opacity: 0, x: -18 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.48,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        },
    },
};
export default function ClinicalApplicationsSection() {
    const [activeId, setActiveId] = useState('cardiac');
    const activeItem = clinicalItems.find((item) => item.id === activeId) || clinicalItems[6];
    const labelX = activeItem.labelBox.x;
    const labelY = activeItem.labelBox.y - LABEL_HEIGHT / 2;
    const lineX1 = activeItem.direction === 'right'
        ? activeItem.point.x + GAP_FROM_POINT
        : activeItem.labelBox.x + LABEL_WIDTH;
    const lineX2 = activeItem.direction === 'right'
        ? activeItem.labelBox.x
        : activeItem.point.x - GAP_FROM_POINT;
    return (<section className={`${sora.variable} relative mt-[120px] w-full overflow-hidden text-white`} style={{
            aspectRatio: `${SVG_WIDTH} / ${SVG_HEIGHT}`,
            fontFamily: 'var(--font-sora), sans-serif',
        }}>
      
      <div className="absolute inset-0 h-full w-full overflow-hidden bg-[#000A15]" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(58,168,208,0.32),transparent_18%),radial-gradient(circle_at_78%_58%,rgba(11,211,211,0.18),transparent_22%),linear-gradient(115deg,#000A15_0%,#101B27_52%,#05080D_100%)]" />
        <div className="absolute right-[10%] top-[9%] h-[84%] w-[34%] rounded-[48%] border border-cyan-200/10 bg-cyan-100/[0.035] shadow-[0_0_120px_rgba(11,211,211,0.12)]" />
        <div className="absolute right-[16%] top-[18%] h-[64%] w-[20%] rounded-full bg-[linear-gradient(180deg,rgba(63,177,213,0.18),rgba(7,23,34,0.04))] blur-[1px]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={sectionVariants} className="absolute left-[13.2%] top-[15.2%] z-20">
        <motion.h2 variants={itemVariants} className="mb-[72px] text-[34px] font-semibold leading-tight tracking-tight text-white md:text-[38px]">
          Clinical Applications
        </motion.h2>

        <div className="grid grid-cols-2 gap-x-[28px] gap-y-[22px]">
          {clinicalItems.map((item) => {
            const isActive = activeId === item.id;
            return (<motion.button key={item.id} type="button" variants={itemVariants} onMouseEnter={() => setActiveId(item.id)} onFocus={() => setActiveId(item.id)} whileHover={{
                    x: 6,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                }} whileTap={{ scale: 0.98 }} className="
                  group
                  flex
                  h-[48px]
                  w-[200px]
                  items-center
                  justify-between
                  rounded-[8px]
                  border
                  border-[#000A15]
                  px-[16px]
                  py-[8px]
                  text-left
                  text-[16px]
                  font-light
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  focus-visible:ring-2
                  focus-visible:ring-white/35
                " style={{
                    background: 'radial-gradient(229.48% 115.41% at 14.18% 27.27%, #000A15 0%, #16202B 100%)',
                    boxShadow: isActive
                        ? '0 0 0 1px rgba(255,255,255,0.28), 0 12px 32px rgba(0,0,0,0.36), inset 0 1px 0 rgba(255,255,255,0.1)'
                        : 'inset 0 1px 0 rgba(255,255,255,0.05)',
                }}>
                <span>{item.label}</span>

                <motion.svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" animate={{ x: isActive ? 4 : 0 }} transition={{ duration: 0.22 }}>
                  <path d="M6.75 3.75L12 9L6.75 14.25" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </motion.button>);
        })}
        </div>
      </motion.div>

      
      <AnimatePresence mode="wait">
        <motion.div key={activeItem.id} className="pointer-events-none absolute inset-0 z-30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
          <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`} preserveAspectRatio="none">
            <defs>
              <filter id="pointGlow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="7" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            
            <motion.foreignObject x={labelX} y={labelY} width={LABEL_WIDTH} height={LABEL_HEIGHT} initial={{
            opacity: 0,
            x: activeItem.direction === 'right' ? -14 : 14,
            scale: 0.96,
        }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{
            opacity: 0,
            x: activeItem.direction === 'right' ? -14 : 14,
            scale: 0.96,
        }} transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}>
              <div className="
                  flex
                  h-full
                  w-full
                  items-center
                  justify-center
                  rounded-[8px]
                  border
                  border-white/35
                  bg-white/10
                  px-6
                  text-center
                  text-[16px]
                  font-light
                  text-white
                  shadow-[0_16px_38px_rgba(0,0,0,0.36)]
                  backdrop-blur-md
                ">
                {activeItem.label}
              </div>
            </motion.foreignObject>

            
            <motion.line x1={lineX1} y1={activeItem.point.y} x2={lineX2} y2={activeItem.point.y} stroke="rgba(255,255,255,0.75)" strokeWidth="1.4" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} exit={{ pathLength: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}/>

            
            <motion.circle cx={activeItem.direction === 'right'
            ? activeItem.labelBox.x
            : activeItem.labelBox.x + LABEL_WIDTH} cy={activeItem.point.y} r="4" fill="rgba(255,255,255,0.9)" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.18, duration: 0.2 }}/>

            
            <motion.circle cx={activeItem.point.x} cy={activeItem.point.y} r="11" fill="#FF6A52" stroke="white" strokeWidth="1.5" filter="url(#pointGlow)" initial={{ scale: 0.45, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.45, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }}/>

            
            <motion.circle cx={activeItem.point.x} cy={activeItem.point.y} r="18" fill="none" stroke="rgba(255,106,82,0.55)" strokeWidth="1.2" initial={{ scale: 0.6, opacity: 0 }} animate={{
            scale: [0.75, 1.15, 0.95],
            opacity: [0, 0.7, 0.25],
        }} transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: 'easeOut',
        }}/>
          </svg>
        </motion.div>
      </AnimatePresence>
    </section>);
}
