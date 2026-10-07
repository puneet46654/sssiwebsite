'use client';

import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import { motion, type Variants } from 'framer-motion';

const sora = localFont({
  src: '../../../public/fonts/sora/static/Sora-Light.ttf',
  display: 'swap',
});

const cards = [
  {
    title: 'Real-Time Collaboration',
    description:
      'Surgeons receive instant guidance from remote experts during live cases.',
  },
  {
    title: 'Multi-Angle Access',
    description:
      'Proctors view the procedure from different perspectives for accuracy.',
  },
  {
    title: 'Annotation Tools',
    description:
      'Experts can mark, highlight, and guide directly on the surgical field.',
  },
  {
    title: 'Integrated with SSI Guru',
    description:
      'A seamless experience designed for structured learning and mentoring.',
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function MayaTeleproctoringSection() {
  return (
    <section
      className={`overflow-hidden bg-[#02030b] py-12 text-white sm:py-16 lg:min-h-[800px] lg:pb-[145px] lg:pt-[30px] ${sora.className}`}
    >
      <div className="mx-auto w-full max-w-[1378px] px-5 sm:px-8 xl:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.6,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-10 text-[26px] font-normal leading-tight tracking-[-0.5px] text-[#f1f1f3] sm:text-[30px] lg:mb-[70px] lg:text-[34px] lg:leading-[41px]"
        >
          Teleproctoring with SSI Maya
        </motion.h2>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[548px_minmax(0,1fr)] lg:gap-x-[76px]">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex w-full justify-center lg:justify-start"
          >
            <div className="relative aspect-[548/513] w-full max-w-[548px] overflow-hidden rounded-[16px] bg-neutral-800">
              <Image
                src="/images/technology/ssimaya/maya-teleproctoring/image1.webp"
                alt="Surgeon using the SSI Maya teleproctoring headset"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 548px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="min-w-0"
          >
            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-[732px] text-[15px] font-normal leading-8 tracking-[-0.1px] text-[#e7e7eb] sm:text-[16px] sm:leading-9 lg:mb-[43px] lg:leading-[40px]"
            >
              SSI Maya connects surgeons with expert mentors anywhere in
              the world. Through immersive 3D visualization, multi-angle
              views, and live annotations, proctors can guide procedures
              in real time—bridging distances and making advanced
              training accessible.
            </motion.p>

            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-[30px]">
              {cards.map((card) => (
                <motion.article
                  key={card.title}
                  variants={itemVariants}
                  className="group relative flex min-h-[150px] flex-col items-center justify-center overflow-hidden rounded-[17px] border border-white/75 bg-[radial-gradient(207.69%_93.44%_at_88.92%_77.5%,rgba(0,0,0,0)_0%,#000_100%),rgba(255,255,255,0.10)] px-5 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-white lg:h-[162px] lg:min-h-[162px] lg:px-5 lg:py-4"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <h3 className="relative mb-2 text-[15px] font-semibold leading-6 tracking-[-0.15px] text-[#f3f3f4] sm:text-[16px]">
                    {card.title}
                  </h3>

                  <p className="relative max-w-[315px] text-[14px] font-normal leading-7 tracking-[-0.1px] text-[#e2e2e6] sm:text-[15px] lg:text-[16px] lg:leading-[40px]">
                    {card.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

