import Header from "@/components/common/Header";
import TelesurgerySection from "@/components/technology/telesurgery/TelesurgerySection";
import TelesurgeryDetailsSection from "@/components/technology/telesurgery/TelesurgeryDetailsSection";
import MantraMSection from "@/components/technology/telesurgery/MantraMSection";
import MantraMYatraSection from "@/components/technology/telesurgery/MantraMYatraSection";
import PublicationSection from "@/components/technology/telesurgery/PublicationSection";
import FAQSection from "@/components/technology/telesurgery/FAQSection";
import BookDemoSection from "@/components/technology/telesurgery/BookDemoSection";
import Footer from "@/components/common/Footer";

export default function TelesurgeryPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#0BD3D3] selection:text-black pt-20 md:pt-24">
      <Header />
      <TelesurgerySection />
      <TelesurgeryDetailsSection />
      <MantraMSection />
      <MantraMYatraSection />
      <PublicationSection />
      <FAQSection />
      <BookDemoSection />
      <Footer />
    </main>
  );
}
