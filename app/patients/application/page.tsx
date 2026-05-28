"use client";

import Header from "@/components/common/Header";
import LazySection from "@/components/ui/LazySection";

export default function Application() {
    return (<main className="relative min-h-screen bg-black w-full overflow-hidden">
      
      <Header />

      
        <LazySection loader={() => import("@/components/patients/application/ClinicalApplicationsSection")} placeholder={<div className="min-h-[420px] bg-black"/>} priority/>
        <LazySection loader={() => import("@/components/common/Footer")} placeholder={<div className="h-40 bg-black"/>} rootMargin="600px 0px"/>
    </main>);
}
