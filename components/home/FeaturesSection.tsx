"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, type Variants, PanInfo } from "framer-motion";
import localFont from "next/font/local";

const soraLocal = localFont({
  src: [
    {
      path: "../../public/fonts/sora/static/Sora-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/sora/static/Sora-Regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/sora/static/Sora-Regular.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

const HIGHLIGHTS = [
  {
    id: "01",
    title: "Modular, Multi-Arm Design",
    description: "Adaptable architecture built for precision across procedures.",
    image: "/images/home/features/image1.webp",
  },
  {
    id: "02",
    title: "Telesurgery-Ready Systems",
    description: "Designed for remote guidance and real-time surgical collaboration.",
    image: "/images/home/features/image2.webp",
  },
  {
    id: "03",
    title: "Surgeon-Centered Interface",
    description: "Intuitive controls designed for comfort, control, and workflow.",
    image: "/images/home/features/image3.webp",
  },
  {
    id: "04",
    title: "Made in India. Trusted Globally.",
    description: "Engineered locally, deployed across global surgical centers.",
    image: "/images/home/features/image4.webp",
  },
];

const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      duration: 1,
      ease: premiumEase,
    },
  },
};

function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = imageContainerRef.current;
    if (!container) return;

    let deltaAccumulator = 0;

    const handleNativeWheel = (e: WheelEvent) => {
      e.preventDefault();

      deltaAccumulator += e.deltaY;

      if (deltaAccumulator > 100) {
        setActiveIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
        deltaAccumulator = 0;
      } else if (deltaAccumulator < -100) {
        setActiveIndex((prev) =>
          prev === 0 ? HIGHLIGHTS.length - 1 : prev - 1
        );
        deltaAccumulator = 0;
      }
    };

    container.addEventListener("wheel", handleNativeWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleNativeWheel);
    };
  }, []);

  const handlePanEnd = (_e: Event, info: PanInfo) => {
    const swipeThreshold = 50;

    if (info.offset.x < -swipeThreshold || info.offset.y < -swipeThreshold) {
      setActiveIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
    } else if (
      info.offset.x > swipeThreshold ||
      info.offset.y > swipeThreshold
    ) {
      setActiveIndex((prev) =>
        prev === 0 ? HIGHLIGHTS.length - 1 : prev - 1
      );
    }
  };

  return (
    <section
      className={`w-full py-16 md:py-20 lg:py-24 bg-[#F5F8FA] overflow-hidden ${soraLocal.className}`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1440px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 xl:gap-20"
      >
        <motion.div
          ref={imageContainerRef}
          variants={itemVariants}
          className="relative w-full lg:w-1/2 flex justify-start h-[300px] sm:h-[400px] md:h-[450px] lg:h-[520px] rounded-2xl overflow-hidden shadow-sm cursor-grab active:cursor-grabbing touch-none"
          onPanEnd={handlePanEnd}
        >
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.id}
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat will-change-transform pointer-events-none"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                zIndex: activeIndex === index ? 10 : 0,
                scale: activeIndex === index ? 1 : 1.05,
              }}
              transition={{ duration: 0.8, ease: premiumEase }}
              style={{
                backgroundImage: `url('${item.image}')`,
              }}
              aria-label={`Highlight image for ${item.title}`}
            />
          ))}
        </motion.div>

        <div className="w-full lg:w-1/2 flex flex-col lg:pt-4">
          <motion.h2
            variants={itemVariants}
            className="mb-8 lg:mb-12 text-[#1E1E1E] text-[28px] md:text-[36px] lg:text-[40px] font-medium leading-tight md:leading-[1.2]"
          >
            Innovation Highlights
          </motion.h2>

          <div className="flex flex-col">
            {HIGHLIGHTS.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="flex items-stretch cursor-pointer group"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div
                    className={`font-medium text-sm md:text-base pt-[2px] w-10 md:w-14 flex-shrink-0 transition-colors duration-500 ease-out ${
                      isActive
                        ? "text-[#1E1E1E]"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    {item.id}
                  </div>

                  <div
                    className={`border-l-[2px] pl-5 md:pl-8 transition-colors duration-500 ease-out ${
                      isActive ? "border-[#1E1E1E]" : "border-gray-300"
                    } ${
                      index === HIGHLIGHTS.length - 1
                        ? "pb-2"
                        : "pb-8 md:pb-12"
                    }`}
                  >
                    <h3
                      className={`text-lg md:text-xl mb-2 transition-all duration-500 ease-out ${
                        isActive
                          ? "text-[#1E1E1E] font-semibold"
                          : "text-gray-500 font-medium group-hover:text-gray-800"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0 lg:grid-rows-[1fr] lg:opacity-100"
                      }`}
                    >
                      <p
                        className={`overflow-hidden text-sm md:text-base leading-relaxed w-full transition-colors duration-500 ${
                          isActive
                            ? "text-gray-600"
                            : "text-gray-400 lg:text-gray-400"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default React.memo(FeaturesSection);