import Header from "@/components/common/Header";
import PublicationHighlightSection from "@/components/publications/PublicationHighlightSection";
import BookDemoSection from "@/components/about/BookDemoSection";
import Footer from "@/components/common/Footer";

export default function PublicationsPage() {
  return (
    <main className="relative min-h-screen bg-black w-full overflow-hidden">
      <Header />
      <PublicationHighlightSection />
      <BookDemoSection />
      <Footer />
    </main>
  );
}
