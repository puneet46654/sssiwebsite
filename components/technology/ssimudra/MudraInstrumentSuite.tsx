import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';

// Load the local Sora font
const soraLight = localFont({
  src: '../../../public/fonts/sora/static/Sora-Light.ttf',
  variable: '--font-sora-light',
  display: 'swap',
});

const instruments = [
  {
    title: 'Monopolar Cautery',
    image: '/images/technology/ssimudra/section3/image1.png',
  },
  {
    title: 'Bipolar Cautery',
    image: '/images/technology/ssimudra/section3/image2.png',
  },
  {
    title: 'Specialty',
    image: '/images/technology/ssimudra/section3/image3.png',
  },
];

export default function MudraInstrumentSuite() {
  return (
    <section className={`w-full py-20 lg:py-32 bg-[#F2F6F8] font-['Sora',sans-serif] ${soraLight.variable}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1440px]">
        
        <h2 className="text-[#1A1A1A] text-2xl md:text-3xl lg:text-[32px] font-medium mb-12 font-[family-name:var(--font-sora-light)]">
          SSI Mudra Instrument Suite
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {instruments.map((instrument, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-[20px] aspect-square overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center group cursor-pointer"
            >
              <div className="relative w-full h-full p-8 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={instrument.image}
                  alt={instrument.title}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="font-[family-name:var(--font-sora-light)]">
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 text-[#3AAFA9] hover:text-[#2a8f89] text-[16px] font-medium transition-colors"
          >
            All Categories 
            <svg 
              className="w-5 h-5 mt-[2px]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
