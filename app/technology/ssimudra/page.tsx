"use client";

import Header from "@/components/common/Header";
import MudraSection from "@/components/technology/ssimudra/MudraSection";
import LazySection from "@/components/ui/LazySection";

export default function SSIMudraPage() {
    return (<main className="min-h-screen bg-black text-white selection:bg-[#0BD3D3] selection:text-black pt-20 md:pt-24">
      <Header />
      <MudraSection />

      <LazySection loader={() => import("@/components/technology/ssimudra/MudraFeaturesSection")} placeholder={<div className="min-h-[420px] bg-black"/>} priority />
      <LazySection loader={() => import("@/components/technology/ssimudra/MudraInstrumentSuite")} placeholder={<div className="min-h-[420px] bg-black"/>} />
      <LazySection loader={() => import("@/components/technology/ssimudra/MudraFaqSection")} placeholder={<div className="min-h-[420px] bg-black"/>} />
      <LazySection loader={() => import("@/components/technology/ssimudra/MudraBookDemoSection")} placeholder={<div className="min-h-[420px] bg-black"/>} />
      <LazySection loader={() => import("@/components/common/Footer")} placeholder={<div className="h-40 bg-black"/>} rootMargin="600px 0px" />
    </main>);
}
