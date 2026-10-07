import Header from "@/components/common/Header";
import ClinicalPartnersHeroSection from "@/components/healthcareprofessional/clinicalpartners/section1";
import ClinicalPartnersSection2 from "@/components/healthcareprofessional/clinicalpartners/section2";
import ClinicalPartnersSection3 from "@/components/healthcareprofessional/clinicalpartners/section3";
import ClinicalPartnersSection4 from "@/components/healthcareprofessional/clinicalpartners/section4";
import ClinicalPartnersSection5 from "@/components/healthcareprofessional/clinicalpartners/section5";
import ClinicalPartnersSection6 from "@/components/healthcareprofessional/clinicalpartners/section6";
import Footer from "@/components/common/Footer";

export default function ClinicalPartners() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#EFF6F8]">
      <Header />
      <ClinicalPartnersHeroSection />
      <ClinicalPartnersSection2 />
      <ClinicalPartnersSection3 />
      <ClinicalPartnersSection4 />
      <ClinicalPartnersSection5 />
      <ClinicalPartnersSection6 />
      <Footer />
    </main>
  );
}
