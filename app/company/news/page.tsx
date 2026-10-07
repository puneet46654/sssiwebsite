import Header from "@/components/common/Header";
import NewsHeroSection from "@/components/news/NewsHeroSection";
import Footer from "@/components/common/Footer";

export default function NewsPage() {
  return (
    <main className="relative min-h-screen bg-black w-full overflow-hidden pt-20">
      <Header />
      <NewsHeroSection />
      <Footer />
    </main>
  );
}
