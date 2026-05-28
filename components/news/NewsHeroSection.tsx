import React from 'react';
import Image from 'next/image';
const NewsHeroSection = () => {
    return (<section className="relative w-full h-screen bg-black">
      <Image src="/images/news/hero/image1.webp" alt="SRS 2025 Annual Meeting Conference Stage" fill style={{ objectFit: 'cover', objectPosition: 'center' }} quality={90} priority/>
    </section>);
};
export default NewsHeroSection;
