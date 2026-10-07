import Header from "@/components/common/Header";
import HeroSection from "@/components/home/HeroSection";
import OverviewSection from "@/components/home/OverviewSection";
import HomeImageSection from "@/components/home/HomeImageSection";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TechnologiesSection from "@/components/home/TechnologiesSection";
import VideoSection from "@/components/home/VideoSection";
import DiscoverSection from "@/components/home/DiscoverSection";
import BookDemoSection from "@/components/home/BookDemoSection";
import Footer from "@/components/common/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#050505] selection:bg-[#0BD3D3] selection:text-black">
      <Header />
      <HeroSection />
      <OverviewSection />
      <HomeImageSection />
      <WhoWeAreSection />
      <FeaturesSection />
      <TechnologiesSection />
      <VideoSection />
      <DiscoverSection />
      <BookDemoSection />
      <Footer />
    </main>
  );
}
