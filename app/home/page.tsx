"use client";

import Header from "@/components/common/Header";
import HeroSection from "@/components/home/HeroSection";
import LazySection from "@/components/ui/LazySection";

export default function HomePage() {
    return (<main className="relative min-h-screen bg-[#050505] selection:bg-[#0BD3D3] selection:text-black">
      <Header />
      <HeroSection />

      <LazySection
        loader={() => import("@/components/home/OverviewSection")}
        placeholder={<div className="min-h-[420px] bg-[#050505]"/>}
        priority
      />

   
        <LazySection
          loader={() => import("@/components/home/HomeImageSection")}
          placeholder={<div className="min-h-[420px] bg-[#050505]"/>}
        />
     

      <LazySection
        loader={() => import("@/components/home/WhoWeAreSection")}
        placeholder={<div className="min-h-[420px] bg-[#050505]"/>}
      />

      <LazySection
        loader={() => import("@/components/home/FeaturesSection")}
        placeholder={<div className="min-h-[420px] bg-[#050505]"/>}
      />

      <LazySection
        loader={() => import("@/components/home/TechnologiesSection")}
        placeholder={<div className="min-h-[420px] bg-[#050505]"/>}
      />

      <LazySection
        loader={() => import("@/components/home/VideoSection")}
        placeholder={<div className="min-h-[420px] bg-[#050505]"/>}
      />

      <LazySection
        loader={() => import("@/components/home/DiscoverSection")}
        placeholder={<div className="min-h-[420px] bg-[#050505]"/>}
      />

      <LazySection
        loader={() => import("@/components/home/BookDemoSection")}
        placeholder={<div className="min-h-[420px] bg-[#050505]"/>}
      />

      <LazySection
        loader={() => import("@/components/common/Footer")}
        placeholder={<div className="h-40 bg-[#050505]"/>}
        rootMargin="600px 0px"
      />
    </main>);
}
