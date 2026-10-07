import Header from "@/components/common/Header";
import ClinicalApplicationsSection from "@/components/patients/application/ClinicalApplicationsSection";
import Footer from "@/components/common/Footer";

export default function Application() {
  return (
    <main className="relative min-h-screen bg-black w-full overflow-hidden">
      <Header />
      <ClinicalApplicationsSection />
      <Footer />
    </main>
  );
}
