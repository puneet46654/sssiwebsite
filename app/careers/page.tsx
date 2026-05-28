"use client";

import Header from "@/components/common/Header";
import CareersHeroSection from "@/components/careers/CareersHeroSection";
import LazySection from "@/components/ui/LazySection";

export default function AboutPage() {
    return (<main className="relative min-h-screen bg-black w-full overflow-hidden">
      
      <Header />

      
        <CareersHeroSection />
        <LazySection loader={() => import("@/components/careers/LatestOpeningsSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
        <LazySection loader={() => import("@/components/careers/LifeAtSSISection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
        <LazySection loader={() => import("@/components/careers/FacilitiesSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
        <LazySection loader={() => import("@/components/careers/DreamJobsBanner")} placeholder={<div className="min-h-[320px] bg-black"/>}/>
        <LazySection loader={() => import("@/components/careers/CareersFAQSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
        <LazySection loader={() => import("@/components/common/Footer")} placeholder={<div className="h-40 bg-black"/>} rootMargin="600px 0px"/>
    </main>);
}
