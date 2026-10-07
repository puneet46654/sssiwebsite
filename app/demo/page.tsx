import Header from "@/components/common/Header";
import DemoHeroSection from "@/components/demo/section1";
import DemoSection2 from "@/components/demo/section2";
import DemoSection3 from "@/components/demo/section3";
import DemoSection4 from "@/components/demo/section4";

export default function DemoPage() {
  return (
    <main className="relative min-h-screen bg-[#EFF6F8] w-full overflow-hidden">
      <Header />
      <DemoHeroSection />
      <DemoSection2 />
      <DemoSection3 />
      <DemoSection4 />
    </main>
  );
}
