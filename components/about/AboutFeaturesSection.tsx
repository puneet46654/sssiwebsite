import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#EFF6F8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex justify-center items-center">
        
        {/* Image Container */}
        <div className="w-full flex justify-center">
          <Image
            src="/images/about/features/image1.webp"
            alt="Features of SSI Mantra"
            width={1200}
            height={800}
            sizes="100vw"
            quality={85}
            className="w-full h-auto object-contain rounded-lg"
            priority
            fetchPriority="high"
          />
        </div>

      </div>
    </section>
  );
}
