"use client";

import { useState } from "react";
import Image from "next/image";

export default function SurgeryRolesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  const images = [
    "/images/healthcareprofessional/surgery/section2/image1.webp",
    "/images/healthcareprofessional/surgery/section2/image2.webp",
    "/images/healthcareprofessional/surgery/section2/image3.webp",
  ];

  const cards = [
    {
      title: "Surgeons",
      icon: "/logos/healthcareprofessioanl/surgery/section2/logo1.svg",
      description:
        "Experience enhanced precision with 7-degree articulation, tremor filtration, and ergonomic console design that reduces fatigue while expanding surgical capability.",
    },
    {
      title: "Surgical Staff",
      icon: "/logos/healthcareprofessioanl/surgery/section2/logo2.svg",
      description:
        "Streamline OR workflows with simplified docking, digital guidance, and intuitive controls that make setup and assistance more efficient.",
    },
    {
      title: "Hospital Admin",
      icon: "/logos/healthcareprofessioanl/surgery/section2/logo3.svg",
      description:
        "Benefit from a cost-effective robotic platform designed for multi-specialty use, lower total cost of ownership, and scalable adoption across departments.",
    },
  ];

  // Reusable exact style object. 
  // Note: `height: "34px"` was removed because it forces the box to be smaller than the 50px line-height, causing the overlap/spacing issue.
  const sharedHeadingStyle: React.CSSProperties = {
    color: "#1E1E1E",
    fontFamily: "Sora, sans-serif",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "50px", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "stretch",
  };

  return (
    <section className="w-full bg-[#EFF6F8] py-16 lg:py-20 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex flex-col gap-16 lg:gap-[100px]">
        
        {/* TOP PART: Title & Image Accordion */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-12">
          
          {/* Left Side Text - Added gap-6 to explicitly manage spacing between Heading and Paragraph */}
          <div className="w-full lg:w-[400px] flex-shrink-0 flex flex-col gap-6 lg:pt-10">
            <h2 style={sharedHeadingStyle}>
              Empowering Every Hand in Surgery
            </h2>
            <p className="text-[#3F3F3F] font-sora text-[16px] lg:text-[18px] leading-[1.6]">
              Designed to empower the people who shape outcomes—inside and beyond the operating room.
            </p>
          </div>

          {/* Right Side: Responsive Expand Image Hover 
              - Mobile: Stacks vertically and expands height.
              - Desktop (lg): Stacks horizontally and expands width.
          */}
          <div 
            className="flex flex-col lg:flex-row gap-4 w-full lg:w-[917px] flex-shrink-0 h-[600px] lg:h-[422px]"
            onMouseLeave={() => setHoveredIndex(0)}
          >
            {images.map((src, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  data-expanded={isHovered}
                  className="relative rounded-[24px] overflow-hidden cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]
                             w-full data-[expanded=true]:h-[350px] data-[expanded=false]:h-[110px]
                             lg:h-[422px] data-[expanded=true]:lg:h-[422px] data-[expanded=false]:lg:h-[422px] 
                             data-[expanded=true]:lg:w-[505px] data-[expanded=false]:lg:w-[190px]"
                >
                  <Image
                    src={src}
                    alt={`Role image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-[1000ms] ease-out hover:scale-105"
                    priority
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM PART: Benefits Cards */}
        <div className="w-full flex flex-col">
          <h2
            className="mb-8 lg:mb-10"
            style={sharedHeadingStyle}
          >
            Benefits Tailored to Every Role
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-[24px] p-6 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3
                    style={{
                      color: "#099F9E",
                      fontFamily: "Sora, sans-serif",
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "32px",
                    }}
                  >
                    {card.title}
                  </h3>
                  
                  {/* Icon Wrapper: Added black background and rounded-full to match design */}
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-[#1E1E1E] rounded-full ml-4">
                    <Image
                      src={card.icon}
                      alt={`${card.title} icon`}
                      width={28}
                      height={28}
                      className="object-contain invert brightness-0" 
                      /* Optional: invert class added just in case your SVG has dark lines and needs to be white on the black background. Remove 'invert brightness-0' if your SVG is already colored correctly */
                    />
                  </div>
                </div>

                <p
                  style={{
                    color: "#3F3F3F",
                    fontFamily: "Sora, sans-serif",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "40px",
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}