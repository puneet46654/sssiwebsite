import Header from "@/components/common/Header";
import PatientHeroSection from "@/components/patients/education/PatientHeroSection";
import PatientOverviewSection from "@/components/patients/education/PatientOverviewSection";
import SSIMantraSystemSection from "@/components/patients/education/SSIMantraSystemSection";
import PatientTestimonialsSection from "@/components/patients/education/PatientTestimonialsSection";
import Footer from "@/components/common/Footer";

export default function Education() {
  return (
    <main className="relative min-h-screen bg-black w-full overflow-hidden">
      <Header />
      <PatientHeroSection />
      <PatientOverviewSection />
      <SSIMantraSystemSection />
      <PatientTestimonialsSection />
      <Footer />
    </main>
  );
}
