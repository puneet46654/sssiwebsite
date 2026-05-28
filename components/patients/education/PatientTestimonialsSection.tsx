'use client';
import Image from 'next/image';
export default function PatientTestimonialsSection() {
    return (<section className="relative w-full bg-[#F4F9FA] py-20 md:py-24 lg:py-28 overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="
            relative
            mx-auto
            w-full
            max-w-[1285px]
            overflow-hidden
            rounded-[14px]
          " style={{ aspectRatio: '1285 / 652' }}>
          <Image src="/images/patients/education/section5/image1.webp" alt="Patient testimonial - Real people, real outcomes" fill loading="lazy" className="object-contain object-center" sizes="(max-width: 768px) 100vw, 1285px"/>
        </div>
      </div>
    </section>);
}
