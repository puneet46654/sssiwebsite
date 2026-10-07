import Header from "@/components/common/Header";
import CareersHeroSection from "@/components/careers/CareersHeroSection";
import LatestOpeningsSection from "@/components/careers/LatestOpeningsSection";
import LifeAtSSISection from "@/components/careers/LifeAtSSISection";
import FacilitiesSection from "@/components/careers/FacilitiesSection";
import DreamJobsBanner from "@/components/careers/DreamJobsBanner";
import CareersFAQSection from "@/components/careers/CareersFAQSection";
import Footer from "@/components/common/Footer";

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-black w-full overflow-hidden">
      <Header />
      <CareersHeroSection />
      <LatestOpeningsSection />
      <LifeAtSSISection />
      <FacilitiesSection />
      <DreamJobsBanner />
      <CareersFAQSection />
      <Footer />
    </main>
  );
}
