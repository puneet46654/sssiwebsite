"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function CountUpNumber({
  end,
  duration = 1800,
  suffix = "+",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
  });

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setValue(0);
      return;
    }

    setValue(0);

    let startTime: number | null = null;
    let frameId: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(easedProgress * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

function StatText({
  number,
  label,
  color = "white",
}: {
  number: number;
  label: string;
  color?: "white" | "teal";
}) {
  return (
    <div className="relative z-20 flex flex-col items-start justify-center text-left md:items-center md:text-center">
      <h3
        className={`mb-3 text-[36px] font-medium leading-none md:mb-4 md:text-[60px] lg:text-[72px] ${
          color === "teal" ? "text-[#2CA3A5]" : "text-white"
        }`}
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        <CountUpNumber end={number} />
      </h3>

      <p
        className={`text-[13px] font-normal leading-snug md:text-[22px] lg:text-[24px] ${
          color === "teal" ? "text-[#2CA3A5]" : "text-white"
        }`}
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        {label}
      </p>
    </div>
  );
}

function RedefiningRoboticSurgerySection() {
  return (
    <section className="w-full overflow-hidden bg-[#F3F8FA] font-sans">
      <motion.div
        className="grid w-full grid-cols-2 gap-0 lg:grid-cols-[1.8fr_1.08fr_1.08fr]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
      >
        {/* Title */}
        <motion.div
          variants={itemVariants}
          className="col-span-2 flex min-h-[224px] items-center justify-start bg-[#F3F8FA] px-[46px] text-left md:min-h-[360px] md:justify-center md:px-6 md:text-center lg:col-span-1 lg:min-h-[420px]"
        >
          <h2
            className="max-w-[360px] text-[34px] font-normal leading-[1.18] text-[#2CA3A5] md:text-[44px] lg:text-[54px]"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Redefining Robotic Surgery
          </h2>
        </motion.div>

        {/* 5000+ */}
        <motion.div
          variants={itemVariants}
          className="relative flex min-h-[220px] items-center justify-start overflow-hidden bg-[#2CA3A5] px-[46px] md:min-h-[360px] md:justify-center md:px-6 lg:min-h-[420px]"
        >
          <Image
            src="/images/home/section3/image3.png"
            alt="Surgeries performed"
            fill
            sizes="(max-width: 1024px) 50vw, 28vw"
            className="object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(87,198,199,0.82)_0%,rgba(28,145,147,0.9)_55%,rgba(30,168,136,0.88)_100%)]" />

          <StatText number={5000} label="Surgeries Performed" />
        </motion.div>

        {/* Top Right Image */}
        <motion.div
          variants={itemVariants}
          className="relative min-h-[220px] overflow-hidden bg-[#1A1A1A] md:min-h-[360px] lg:min-h-[420px]"
        >
          <Image
            src="/images/home/section3/image2.png"
            alt="Robotic system closeup"
            fill
            sizes="(max-width: 1024px) 50vw, 28vw"
            className="object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* Desktop Bottom Left Image */}
        <motion.div
          variants={itemVariants}
          className="relative hidden min-h-[420px] overflow-hidden bg-[#1A1A1A] lg:block"
        >
          <Image
            src="/images/home/section3/image1.png"
            alt="Surgeon using robotic console"
            fill
            sizes="45vw"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* 700+ */}
        <motion.div
          variants={itemVariants}
          className="relative flex min-h-[220px] items-center justify-start overflow-hidden bg-[#F3F8FA] px-[55px] md:min-h-[360px] md:justify-center md:px-6 lg:min-h-[420px]"
        >
          <Image
            src="/images/home/section3/image5.png"
            alt="Surgeons trained"
            fill
            sizes="(max-width: 1024px) 50vw, 28vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-white/35 backdrop-blur-[1px]" />

          <StatText number={700} label="Surgeons Trained" color="teal" />
        </motion.div>

        {/* 95+ */}
        <motion.div
          variants={itemVariants}
          className="relative flex min-h-[220px] items-center justify-start overflow-hidden bg-[#1A1A1A] px-[82px] md:min-h-[360px] md:justify-center md:px-6 lg:min-h-[420px]"
        >
          <Image
            src="/images/home/section3/image4.png"
            alt="SSI Mantra installations"
            fill
            sizes="(max-width: 1024px) 50vw, 28vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/72" />

          <StatText number={95} label="SSI Mantra Installations" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default React.memo(RedefiningRoboticSurgerySection);
