"use client";

import Header from "@/components/common/Header";
import HeroSection from "@/components/technology/ssimaya/HeroSection";
import LazySection from "@/components/ui/LazySection";

export default function SSIMayaPage() {
    return (<main className="min-h-screen bg-black text-white selection:bg-[#0BD3D3] selection:text-black">
      <Header />
      
      
      <HeroSection />
      <LazySection loader={() => import("@/components/technology/ssimaya/FeaturesSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
      <LazySection loader={() => import("@/components/technology/ssimaya/MayaDifferentiatorsSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
      <LazySection loader={() => import("@/components/technology/ssimaya/MayaTeleproctoringSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
      <LazySection loader={() => import("@/components/common/Footer")} placeholder={<div className="h-40 bg-black"/>} rootMargin="600px 0px"/>
    </main>);
}
