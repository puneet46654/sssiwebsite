"use client";

import Header from "@/components/common/Header";
import HeroSection from "@/components/technology/ssimantra/HeroSection";
import LazySection from "@/components/ui/LazySection";

export default function SSIMantraPage() {
    return (<main className="min-h-screen bg-black text-white selection:bg-[#0BD3D3] selection:text-black pt-20 md:pt-24">
      <Header />
      
      
      <HeroSection />

      
      <LazySection loader={() => import("@/components/technology/ssimantra/OverviewSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
      <LazySection loader={() => import("@/components/technology/ssimantra/GallerySection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
      <LazySection loader={() => import("@/components/technology/ssimantra/BookDemoSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
      <LazySection loader={() => import("@/components/common/Footer")} placeholder={<div className="h-40 bg-black"/>} rootMargin="600px 0px"/>
    </main>);
}
