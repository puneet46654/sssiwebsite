import Header from "@/components/common/Header";
import HeroSection from "@/components/technology/ssimantra/HeroSection";
import OverviewSection from "@/components/technology/ssimantra/OverviewSection";
import GallerySection from "@/components/technology/ssimantra/GallerySection";
import BookDemoSection from "@/components/technology/ssimantra/BookDemoSection";
import Footer from "@/components/common/Footer";

export default function SSIMantraPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#0BD3D3] selection:text-black pt-20 md:pt-24">
      <Header />
      <HeroSection />
      <OverviewSection />
      <GallerySection />
      <BookDemoSection />
      <Footer />
    </main>
  );
}
