'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';

const instrumentImages = [
  '/images/technology/ssimudra/section1/black-diamond-forceps.webp',
  '/images/technology/ssimudra/section1/cadiere-forceps.webp',
  '/images/technology/ssimudra/section1/cardiac-stabilizer.webp',
  '/images/technology/ssimudra/section1/cautery-hook.webp',
  '/images/technology/ssimudra/section1/cautery-spatula.webp',
  '/images/technology/ssimudra/section1/curved-cold-scissors.webp',
  '/images/technology/ssimudra/section1/debakey-forceps.webp',
  '/images/technology/ssimudra/section1/fenestrated-bipolar-forceps.webp',
  '/images/technology/ssimudra/section1/fine-tip-scissors.webp',
  '/images/technology/ssimudra/section1/grasping-forceps.webp',
  '/images/technology/ssimudra/section1/grasping-retractor.webp',
  '/images/technology/ssimudra/section1/large-needle-driver.webp',
  '/images/technology/ssimudra/section1/long-tip-forceps.webp',
  '/images/technology/ssimudra/section1/maryland-bipolar-forceps.webp',
  '/images/technology/ssimudra/section1/medium-titanium-clip-applier-dec241a.webp',
  '/images/technology/ssimudra/section1/micro-scalpel.webp',
  '/images/technology/ssimudra/section1/monopolar-curved-scissors.webp',
  '/images/technology/ssimudra/section1/naslock-large-clip-applier-dec241a.webp',
  '/images/technology/ssimudra/section1/naslock-medium-clip-applier.webp',
  '/images/technology/ssimudra/section1/resano-forceps.webp',
  '/images/technology/ssimudra/section1/round-tip-scissors.webp',
  '/images/technology/ssimudra/section1/selicut-dec24-1a.webp',
  '/images/technology/ssimudra/section1/sevana-cut-needle-driver.webp',
  '/images/technology/ssimudra/section1/small-bipolar-forceps.webp',
  '/images/technology/ssimudra/section1/small-titanium-clip-applier.webp',
  '/images/technology/ssimudra/section1/tenaculum-forceps.webp',
  '/images/technology/ssimudra/section1/tip-up-fenestrated-grasper.webp',
];

const randomSequence = [
  12, 3, 25, 8, 17, 1, 20, 14, 5, 22, 11, 7, 26, 19, 2, 15, 9, 24, 6, 18,
  10, 23, 4, 13, 21, 0, 16,
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 72 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween' as const,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      duration: 1.05,
      delay: 0.08 + randomSequence[index] * 0.045,
    },
  }),
};

export default function MudraSection() {
  return (
    <section
      className="relative mx-auto w-full max-w-[1920px] overflow-hidden bg-black pt-[clamp(64px,12vw,128px)] min-h-[clamp(430px,125vw,620px)] md:min-h-[clamp(650px,78vw,760px)] lg:h-[872px] lg:min-h-0"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-2 px-4 sm:px-6 md:gap-4 lg:px-10">
        <h2
          className="flex max-w-[760px] flex-wrap items-baseline gap-x-2 gap-y-1"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          <span
            className="text-[clamp(26px,8vw,38px)] sm:text-[clamp(30px,5vw,38px)]"
            style={{
              color: '#0BD3D3',
              fontWeight: 600,
              lineHeight: '1.1',
              textShadow: '0 2px 2px rgba(0, 0, 0, 0.60)',
            }}
          >
            SSI Mudra:
          </span>
          <span
            className="text-[clamp(24px,7.2vw,38px)] sm:text-[clamp(30px,5vw,38px)]"
            style={{
              color: '#E0E0E0',
              fontWeight: 400,
              lineHeight: '1.1',
              textShadow: '0 2px 2px rgba(0, 0, 0, 0.60)',
            }}
          >
            The Hands of Precision
          </span>
        </h2>

        <p
          className="max-w-[min(92vw,760px)] text-balance pr-2"
          style={{
            color: '#E0E0E0',
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(14px, 3.5vw, 24px)',
            fontWeight: 300,
            lineHeight: '1.45',
            textShadow: '0 2px 2px rgba(0, 0, 0, 0.60)',
          }}
        >
          Engineered for precision, dexterity, and safety in minimally invasive
          surgery.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="absolute inset-x-0 bottom-0 z-0 flex w-full items-end justify-center overflow-hidden translate-y-px"
      >
        <div className="flex h-[clamp(250px,72vw,360px)] w-full min-w-[720px] items-end justify-center gap-[clamp(4px,1vw,16px)] px-0 sm:h-[clamp(330px,55vw,430px)] sm:min-w-0 md:h-[clamp(420px,48vw,520px)] lg:h-[560px]">
          {instrumentImages.map((src, index) => (
            <motion.div
              key={src}
              custom={index}
              variants={itemVariants}
              className="relative h-full min-w-0 flex-1 origin-bottom max-w-[24px] sm:max-w-[34px] md:max-w-[44px] lg:max-w-[58px] xl:max-w-[64px]"
            >
              <Image
                src={src}
                alt={`SSI Mudra Instrument ${index + 1}`}
                fill
                priority={index < 2}
                className="object-contain object-bottom drop-shadow-xl"
                sizes="(max-width: 480px) 24px, (max-width: 640px) 28px, (max-width: 768px) 34px, (max-width: 1024px) 44px, (max-width: 1280px) 58px, 64px"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
