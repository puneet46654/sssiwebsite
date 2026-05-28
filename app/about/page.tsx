import Header from "@/components/common/Header";
import HeroSection from "@/components/about/HeroSection";
import WhoWeAreImageSection from "@/components/about/WhoWeAreImageSection";
import AboutFeaturesSection from "@/components/about/AboutFeaturesSection";
import HistoryTimelineSection from "@/components/about/HistoryTimelineSection";
import GlobalFootprintSection from "@/components/about/GlobalFootprintSection";
import LeadershipTeamSection from "@/components/about/LeadershipTeamSection";
import FAQSection from "@/components/about/FAQSection";
import BookDemoSection from "@/components/about/BookDemoSection";
import Footer from "@/components/common/Footer";
import AboutPreload from "@/components/about/AboutPreload";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-black w-full overflow-hidden">
      <AboutPreload />
      <Header />
      <HeroSection />
      <WhoWeAreImageSection />
      <AboutFeaturesSection />
      <HistoryTimelineSection />
      <GlobalFootprintSection />
      <LeadershipTeamSection />
      <FAQSection />
      <BookDemoSection />
      <Footer />
    </main>
  );
}
