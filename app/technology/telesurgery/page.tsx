"use client";

import Header from "@/components/common/Header";
import TelesurgerySection from "@/components/technology/telesurgery/TelesurgerySection";
import LazySection from "@/components/ui/LazySection";

export default function TelesurgeryPage() {
    return (<main className="min-h-screen bg-black text-white selection:bg-[#0BD3D3] selection:text-black pt-20 md:pt-24">
      <Header />
      
      
      <TelesurgerySection />
      <LazySection loader={() => import("@/components/technology/telesurgery/TelesurgeryDetailsSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
      <LazySection loader={() => import("@/components/technology/telesurgery/MantraMSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
      <LazySection loader={() => import("@/components/technology/telesurgery/MantraMYatraSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
      <LazySection loader={() => import("@/components/technology/telesurgery/PublicationSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
      <LazySection loader={() => import("@/components/technology/telesurgery/FAQSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
      <LazySection loader={() => import("@/components/technology/telesurgery/BookDemoSection")} placeholder={<div className="min-h-[420px] bg-black"/>}/>
      <LazySection loader={() => import("@/components/common/Footer")} placeholder={<div className="h-40 bg-black"/>} rootMargin="600px 0px"/>
    </main>);
}
