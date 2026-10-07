"use client";

import React from "react";
import Image from "next/image";

function Section4() {
  return (
    <section className="w-full bg-[#F4F6F8] py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
        <div className="relative w-full overflow-hidden rounded-[24px] lg:rounded-[40px] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[716px]">
          <Image
            src="/images/healthcareprofessional/clinical/section4/image1.webp"
            alt="SSI Mantra Robotic System"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1380px"
          />
        </div>
      </div>
    </section>
  );
}

export default React.memo(Section4);