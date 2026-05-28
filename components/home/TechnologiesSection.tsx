"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

const TECHNOLOGIES = [
  {
    id: "mantra",
    title: "SSI Mantra 3",
    description:
      "The SSI Mantra is India’s first indigenous surgical robotic system, developed by SS Innovations to make advanced robotic and minimally invasive surgeries more accessible and affordable. It features an open-console design, 3D 4K vision, and multi-arm robotic technology.",
    image: "/images/home/technologies/image1.webp",
    link: "#ssi-mantra",
  },
  {
    id: "mudra",
    title: "SSI Mudra",
    description:
      "SSI Mantra endosurgical instruments, is designed to deliver precision and dexterity across multiple specialties. With over 45 different types of instruments, SSI Mudra enables surgeons to perform various procedures with enhanced control and accuracy.",
    image: "/images/home/technologies/image2.webp",
    link: "#ssi-mudra",
  },
  {
    id: "maya",
    title: "SSI Maya",
    description:
      "SSI Maya is an extended reality (XR) platform that merges AI, augmented and virtual reality to revolutionize surgical training. It offers immersive, simulation-based modules for peri-operative planning and hands-on learning.",
    image: "/images/home/technologies/image3.webp",
    link: "#ssi-maya",
  },
  {
    id: "telesurgery",
    title: "Telesurgery",
    description:
      "SSI Telesurgery makes world-class surgical expertise accessible beyond borders, enabling surgeons to operate from miles away through robotic platforms, high-speed connectivity, and real-time 3D visualization",
    image: "/images/home/technologies/image4.webp",
    link: "#telesurgery",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
};

function TechnologiesSection() {
  return (
    <section className="w-full bg-[#F5F8FA] py-16 md:py-20 lg:py-24 overflow-hidden font-sans">
      <motion.div
        className="mx-auto w-full max-w-[1380px] px-6 lg:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.h2
          variants={itemVariants}
          className="mb-12 md:mb-16 text-[#1E1E1E] text-[28px] md:text-[34px] font-medium leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          Our Technologies
        </motion.h2>

        <div className="flex flex-col gap-14 md:gap-16">
          {TECHNOLOGIES.map((tech) => {
            return (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                className="flex flex-col lg:flex-row lg:items-center lg:gap-[42px] self-stretch overflow-hidden rounded-[20px] border border-transparent shadow-sm transition-shadow duration-300 hover:shadow-md"
                style={{
                  background:
                    "linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(90deg, #FFFFFF 0%, #099F9E 100%) border-box",
                }}
              >
                <div className="relative h-[280px] w-full flex-shrink-0 overflow-hidden sm:h-[340px] md:h-[420px] lg:h-[420px] lg:w-[472px]">
                  <div
                    className="absolute inset-0 h-full w-full transition-transform duration-700 hover:scale-105"
                    style={{
                      background: `url('${tech.image}') lightgray 50% / cover no-repeat`,
                    }}
                    aria-label={tech.title}
                  />
                </div>

                <div className="relative z-10 flex min-h-[360px] w-full flex-col justify-center bg-white px-6 py-10 sm:px-8 md:px-10 lg:min-h-[420px] lg:px-0 lg:py-0 lg:pr-[72px]">
                  <div className="max-w-[850px]">
                    <h3
                      className="mb-8 text-[22px] font-semibold leading-tight md:text-[26px]"
                      style={{
                        color: "#099F9E",
                        fontFamily: "var(--font-sora), sans-serif",
                      }}
                    >
                      {tech.title}
                    </h3>

                    <p
                      className="mb-9 w-full text-[16px] font-light leading-[32px] text-[#3F3F3F] md:text-[18px] md:leading-[36px]"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      {tech.description}
                    </p>

                    <motion.a
                      href={tech.link}
                      className="group relative flex h-12 w-12 items-center overflow-hidden rounded-full bg-[#099F9E] text-white shadow-[0_4px_15px_rgba(9,159,158,0.3)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:w-[165px]"
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Learn more about ${tech.title}`}
                    >
                      <span
                        className="whitespace-nowrap pl-5 pr-3 text-[16px] font-light opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}
                      >
                        Learn more
                      </span>

                      <span className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-500 group-hover:translate-x-1"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default React.memo(TechnologiesSection);