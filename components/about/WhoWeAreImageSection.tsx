import localFont from "next/font/local";

const sora = localFont({
  src: "../../public/fonts/sora/static/Sora-Light.ttf",
  variable: "--font-sora",
  display: "swap",
});

export default function WhoWeAreImageSection() {
  return (
    <section className={`relative w-full min-h-[950px] flex items-center py-16 ${sora.variable}`}>
      <div className="absolute inset-0 z-0 bg-[#f4f6f8] overflow-hidden">
        <img
          src="/images/about/whoweare/image1.webp"
          alt="Who We Are Background"
          className="absolute inset-0 h-full w-full object-cover object-right lg:object-center"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent lg:from-transparent"></div>
      </div>

      {/* Text Content Container (Static, no animations) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="max-w-2xl font-[family-name:var(--font-sora)]">
          
          <span className="block mb-4 text-sm font-bold tracking-widest uppercase text-gray-800">
            Who Are We
          </span>

          <h2 className="text-[#099F9E] text-[32px] font-medium leading-[50px] mb-6">
            Engineering precision, elevating care
          </h2>

          <div className="text-[#3F3F3F] text-[16px] font-normal leading-[32px] space-y-6">
            <p>
              For over a decade, SS Innovations has been advancing medical robotic
              technology with one clear purpose: to elevate surgical precision
              while expanding access to world-class care. Founded by Dr. Sudhir
              Srivastava—globally recognized robotic cardiac surgeon, and our
              Founder, Chairman, and CEO—we unite surgical expertise, patient-focused
              design, and continuous innovation to improve outcomes worldwide.
            </p>
            
            <p>
              With the launch of the SSI Mantra 3.0 robotic surgical system, we’re
              redefining multi-specialty robotic surgery—making high-precision
              technology more adaptable, cost-effective, and inclusive. Our
              commitment is simple: transform access to advanced surgical care
              through clinically driven, sustainable innovation.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
