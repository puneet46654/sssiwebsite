import Header from "@/components/common/Header";
import SurgeryHeroSection from "@/components/healthcareprofessional/surgery/surgery";
import SurgerySection2 from "@/components/healthcareprofessional/surgery/section2";
import SurgerySection3 from "@/components/healthcareprofessional/surgery/section3";
import SurgerySection4 from "@/components/healthcareprofessional/surgery/section4";
import BookDemoSection from "@/components/healthcareprofessional/surgery/BookDemoSection";
import Footer from "@/components/common/Footer";

export default function SurgeryPage() {
  return (
    <main className="relative min-h-screen bg-[#EFF6F8] w-full overflow-hidden">
      <Header />
      <SurgeryHeroSection />
      <SurgerySection2 />
      <SurgerySection3 />
      <SurgerySection4 />
      <BookDemoSection />
      <Footer />
    </main>
  );
}
