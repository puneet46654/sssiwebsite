"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";

const sora = localFont({
  src: "../../../public/fonts/sora/static/Sora-Light.ttf",
  display: "swap",
});

const SLIDES = [
  {
    id: 1,
    src: "/images/technology/ssimantra/gallery/image1.webp",
    alt: "SSI Mantra 3 Slide 1",
  },
  {
    id: 2,
    src: "/images/technology/ssimantra/gallery/image2.webp",
    alt: "SSI Mantra 3 Slide 2",
  },
  {
    id: 3,
    src: "/images/technology/ssimantra/gallery/image3.webp",
    alt: "SSI Mantra 3 Slide 3",
  },
  {
    id: 4,
    src: "/images/technology/ssimantra/gallery/image4.webp",
    alt: "SSI Mantra 3 Slide 4",
  },
];

function GallerySection() {
  const [page, setPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slideCount = SLIDES.length;

  const imageIndex = useMemo(() => {
    return ((page % slideCount) + slideCount) % slideCount;
  }, [page, slideCount]);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setPage((currentPage) => currentPage + 1);
    }, 3800);

    return () => clearInterval(timer);
  }, [isHovered]);

  const paginate = useCallback((direction: number) => {
    setPage((currentPage) => currentPage + direction);
  }, []);

  const goToSlide = useCallback(
    (targetIndex: number) => {
      setPage((currentPage) => {
        const currentIndex =
          ((currentPage % slideCount) + slideCount) % slideCount;

        let diff = targetIndex - currentIndex;

        if (diff > slideCount / 2) diff -= slideCount;
        if (diff < -slideCount / 2) diff += slideCount;

        return currentPage + diff;
      });
    },
    [slideCount]
  );

  const getPosition = useCallback(
    (index: number) => {
      const diff = (index - imageIndex + slideCount) % slideCount;

      if (diff === 0) return "center";
      if (diff === 1) return "right";
      if (diff === slideCount - 1) return "left";

      return "hidden";
    },
    [imageIndex, slideCount]
  );

  const cardVariants: Variants = {
    center: {
      x: "0%",
      scale: 1,
      zIndex: 30,
      opacity: 1,
      filter: "brightness(1) blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 24,
        mass: 0.8,
      },
    },
    left: {
      x: "-102%",
      scale: 0.9,
      zIndex: 20,
      opacity: 0.55,
      filter: "brightness(0.55) blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 24,
        mass: 0.8,
      },
    },
    right: {
      x: "102%",
      scale: 0.9,
      zIndex: 20,
      opacity: 0.55,
      filter: "brightness(0.55) blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 24,
        mass: 0.8,
      },
    },
    hidden: {
      x: "0%",
      scale: 0.78,
      zIndex: 10,
      opacity: 0,
      filter: "brightness(0.3) blur(2px)",
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  const arrowBtnClass =
    "relative z-[90] flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.14)] transition-all duration-300 hover:bg-[#E3F5F6] hover:scale-105 active:scale-95 shrink-0 cursor-pointer";

  return (
    <section
      className={`relative z-0 isolate w-full overflow-hidden bg-[#F4F8F9] py-16 md:py-20 ${sora.className}`}
    >
      <div
        className="relative mx-auto flex w-full max-w-[1920px] flex-col items-center justify-start overflow-visible"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative flex w-full items-center justify-center overflow-visible px-4 md:px-10">
          <div className="pointer-events-auto absolute left-3 z-[80] md:left-8 lg:left-16 xl:left-24">
            <button
              type="button"
              onClick={() => paginate(-1)}
              className={arrowBtnClass}
              aria-label="Previous Slide"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 md:h-6 md:w-6"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          </div>

          <div className="relative h-[360px] w-full max-w-[720px] shrink-0 overflow-visible md:h-[460px] lg:h-[560px] lg:max-w-[1040px] xl:h-[720px] xl:max-w-[1380px]">
            {SLIDES.map((slide, index) => {
              const position = getPosition(index);

              return (
                <motion.div
                  key={slide.id}
                  initial={false}
                  animate={position}
                  variants={cardVariants}
                  style={{ willChange: "transform, opacity, filter" }}
                  className="pointer-events-none absolute left-0 top-0 h-full w-full"
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 80vw, 72vw"
                    className="object-contain"
                    quality={90}
                    loading="lazy"
                  />
                </motion.div>
              );
            })}
          </div>

          <div className="pointer-events-auto absolute right-3 z-[80] md:right-8 lg:right-16 xl:right-24">
            <button
              type="button"
              onClick={() => paginate(1)}
              className={arrowBtnClass}
              aria-label="Next Slide"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 md:h-6 md:w-6"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative z-[80] mt-8 flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-5 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-md md:mt-12">
          {SLIDES.map((_, idx) => {
            const isActive = imageIndex === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-500 ease-out cursor-pointer ${
                  isActive
                    ? "w-8 bg-[#0C5963] shadow-[0_0_0_3px_rgba(12,89,99,0.14)]"
                    : "w-2 bg-[#7DB8C0] opacity-100 hover:w-5 hover:bg-[#0C5963]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default React.memo(GallerySection);
