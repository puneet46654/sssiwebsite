import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';

const sora = localFont({
    src: [
        {
            path: '../../public/fonts/sora/static/Sora-Thin.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../public/fonts/sora/static/Sora-ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../public/fonts/sora/static/Sora-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/sora/static/Sora-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/sora/static/Sora-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/sora/static/Sora-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/sora/static/Sora-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/sora/static/Sora-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-sora',
    display: 'swap',
});

const WhyBookDemo = () => {
  const leftCards = [
    {
      id: 'card-1',
      src: '/images/demo/section3/description/image1.webp',
      alt: 'Demo feature 1',
    },
    {
      id: 'card-2',
      src: '/images/demo/section3/description/image2.webp',
      alt: 'Demo feature 2',
    },
  ];

  const rightCards = [
    {
      id: 'card-3',
      src: '/images/demo/section3/description/image3.webp',
      alt: 'Demo feature 3',
    },
    {
      id: 'card-4',
      src: '/images/demo/section3/description/image4.webp',
      alt: 'Demo feature 4',
    },
  ];

  return (
    <section className={`${sora.variable} font-sora w-full bg-[#f4f6f9] py-16 px-4 md:px-8 lg:px-12`}>
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 md:mb-12">
          Why Book A Demo?
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* Left Column Image Cards */}
          <div className="flex flex-col justify-between gap-6 w-full lg:w-[364px] h-full lg:h-[444px]">
            {leftCards.map((card) => (
              <div 
                key={card.id} 
                className="relative w-full lg:w-[364px] h-[210px] rounded-2xl overflow-hidden shadow-sm bg-white flex-shrink-0"
              >
                <Image 
                  src={card.src} 
                  alt={card.alt} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 364px"
                />
              </div>
            ))}
          </div>

          {/* Center Main Image Container */}
          <div className="relative w-full lg:w-[550px] h-[300px] sm:h-[350px] lg:h-[444px] rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
            <Image
              src="/images/demo/section3/image1.webp"
              alt="SSI Mantra system demonstration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 550px"
              priority
            />
          </div>

          {/* Right Column Image Cards */}
          <div className="flex flex-col justify-between gap-6 w-full lg:w-[364px] h-full lg:h-[444px]">
            {rightCards.map((card) => (
              <div 
                key={card.id} 
                className="relative w-full lg:w-[364px] h-[210px] rounded-2xl overflow-hidden shadow-sm bg-white flex-shrink-0"
              >
                <Image 
                  src={card.src} 
                  alt={card.alt} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 364px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBookDemo;