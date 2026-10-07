import Header from "@/components/common/Header";
import HeroSection from "@/components/technology/ssimaya/HeroSection";
import FeaturesSection from "@/components/technology/ssimaya/FeaturesSection";
import MayaDifferentiatorsSection from "@/components/technology/ssimaya/MayaDifferentiatorsSection";
import MayaTeleproctoringSection from "@/components/technology/ssimaya/MayaTeleproctoringSection";
import Footer from "@/components/common/Footer";

export default function SSIMayaPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#0BD3D3] selection:text-black">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <MayaDifferentiatorsSection />
      <MayaTeleproctoringSection />
      <Footer />
    </main>
  );
}
