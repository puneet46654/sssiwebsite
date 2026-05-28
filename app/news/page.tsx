"use client";

import Header from "@/components/common/Header";
import NewsHeroSection from "@/components/news/NewsHeroSection";
import LazySection from "@/components/ui/LazySection";

export default function NewsPage() {
    return (<main className="relative min-h-screen bg-black w-full overflow-hidden pt-20">
      
      <Header />

      
      <NewsHeroSection />
      <LazySection loader={() => import("@/components/common/Footer")} placeholder={<div className="h-40 bg-black"/>} rootMargin="600px 0px"/>
    </main>);
}
