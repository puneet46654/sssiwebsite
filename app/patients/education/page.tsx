"use client";

import Header from "@/components/common/Header";
import PatientHeroSection from "@/components/patients/education/PatientHeroSection";
import LazySection from "@/components/ui/LazySection";

export default function Education() {
    return (<main className="relative min-h-screen bg-black w-full overflow-hidden">
      
      <Header />

      
        <PatientHeroSection />
        <LazySection loader={() => import("@/components/patients/education/PatientOverviewSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
        <LazySection loader={() => import("@/components/patients/education/SSIMantraSystemSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
        <LazySection loader={() => import("@/components/patients/education/PatientTestimonialsSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
      <LazySection loader={() => import("@/components/common/Footer")} placeholder={<div className="h-40 bg-black"/>} rootMargin="600px 0px"/>
    </main>);
}
