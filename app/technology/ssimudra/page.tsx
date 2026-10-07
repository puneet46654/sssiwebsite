import Header from "@/components/common/Header";
import MudraSection from "@/components/technology/ssimudra/MudraSection";
import MudraFeaturesSection from "@/components/technology/ssimudra/MudraFeaturesSection";
import MudraInstrumentSuite from "@/components/technology/ssimudra/MudraInstrumentSuite";
import MudraFaqSection from "@/components/technology/ssimudra/MudraFaqSection";
import MudraBookDemoSection from "@/components/technology/ssimudra/MudraBookDemoSection";
import Footer from "@/components/common/Footer";

export default function SSIMudraPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#0BD3D3] selection:text-black pt-20 md:pt-24">
      <Header />
      <MudraSection />
      <MudraFeaturesSection />
      <MudraInstrumentSuite />
      <MudraFaqSection />
      <MudraBookDemoSection />
      <Footer />
    </main>
  );
}
