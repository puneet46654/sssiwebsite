"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "Technology",
    links: [
      { name: "SSI Mantra", href: "/technology/ssimantra" },
      { name: "SSI Mudra", href: "/technology/ssimudra" },
      { name: "SSI Maya", href: "/technology/ssimaya" },
      { name: "Telesurgery", href: "/technology/telesurgery" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Company", href: "/about" },
      { name: "Publications", href: "/publications" },
      { name: "Careers", href: "/careers" },
      { name: "Infrastructure & RnD", href: "/coming-soon" },
      { name: "Newsroom", href: "/news" },
    ],
  },
  {
    title: "Healthcare Professionals",
    links: [
      { name: "Surgery with SSI", href: "/coming-soon" },
      { name: "Training and Education", href: "/coming-soon" },
      { name: "Clinical Partners", href: "/coming-soon" },
      { name: "Schedule Demo", href: "/coming-soon" },
      { name: "Clinical Application", href: "/patients/application" },
    ],
  },
];

const UTILITY_LINKS = [
  { name: "Cookies", href: "/coming-soon" },
  { name: "Privacy Policy", href: "/coming-soon" },
  { name: "Contact us", href: "/contact" },
  { name: "Terms of use", href: "/coming-soon" },
  { name: "Sitemap", href: "/coming-soon" },
];

function Footer() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <footer className="w-full bg-[#0A0A0A] pt-10 md:pt-20 pb-8 overflow-hidden border-t border-gray-900 font-sans text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 mb-10 md:mb-16">
          <div className="w-full lg:w-1/4 flex-shrink-0 flex justify-center lg:justify-start pb-4 md:pb-0 border-b border-gray-900 md:border-none">
            <Link
              href="/home"
              prefetch
              className="relative flex items-center w-[240px] h-[103px] transition-transform hover:scale-105 duration-300"
            >
              <Image
                src="/logos/header.png"
                alt="SSI Logo"
                fill
                sizes="240px"
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10">
            {FOOTER_LINKS.map((section, index) => {
              const isOpen = openSection === index;

              return (
                <div
                  key={index}
                  className="flex flex-col border-b border-gray-900 md:border-none"
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="flex justify-between items-center w-full py-4 md:py-0 text-left md:cursor-default md:pointer-events-none group"
                  >
                    <h4 className="tracking-wide text-[#0BD3D3] text-[15px] md:text-base font-semibold leading-relaxed md:mb-6">
                      {section.title}
                    </h4>

                    <svg
                      className={`md:hidden w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#0BD3D3]" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <ul
                    className={`${
                      isOpen ? "flex" : "hidden"
                    } md:flex flex-col gap-3 md:gap-2 pb-5 md:pb-0 overflow-hidden transition-all duration-300`}
                  >
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.href}
                          className="inline-block text-[#D1D5DB] hover:text-[#0BD3D3] text-sm font-light md:leading-[32px] transition-colors duration-300"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <hr className="border-[#222222] mb-6 md:mb-8" />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-6 mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-6 text-[#9CA3AF] w-full lg:w-auto">
            <Link
              href="https://x.com/SSINNOVATIONS_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="hover:text-[#0BD3D3] transition-all duration-300 hover:-translate-y-1 transform"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            <Link
              href="https://www.instagram.com/ssinnovations/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#0BD3D3] transition-all duration-300 hover:-translate-y-1 transform"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </Link>

            <Link
              href="https://www.linkedin.com/company/ssinnovationsgroup/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#0BD3D3] transition-all duration-300 hover:-translate-y-1 transform"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>

            <Link
              href="mailto:info@ssinnovations.org"
              aria-label="Mail"
              className="hover:text-[#0BD3D3] transition-all duration-300 hover:-translate-y-1 transform"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </Link>

            <Link
              href="https://www.youtube.com/@ssinnovations"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-[#0BD3D3] transition-all duration-300 hover:-translate-y-1 transform"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.4-1C16.8 2.5 12 2.5 12 2.5s-4.8 0-8.2.3c-.5.1-1.5.1-2.4 1C.7 4.5.5 6.2.5 6.2S.2 8.2.2 10.2v1.9c0 2 .3 4 .3 4s.2 1.7.9 2.4c.9.9 2.1.9 2.6 1 1.9.2 8 .3 8 .3s4.8 0 8.2-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.4.9-2.4s.3-2 .3-4v-1.9c0-2-.3-4-.3-4zM9.7 14.7V7.8l6.3 3.5-6.3 3.4z" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-4 gap-y-2 text-[12px] md:text-sm text-[#71717A] font-light w-full lg:w-auto px-4 lg:px-0">
            {UTILITY_LINKS.map((link, idx) => (
              <React.Fragment key={idx}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors duration-300 whitespace-nowrap"
                >
                  {link.name}
                </Link>

                {idx < UTILITY_LINKS.length - 1 && (
                  <span className="text-[#333] hidden sm:inline-block">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 text-[10px] md:text-xs text-[#52525B] text-center font-light">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4">
            <span>EN ISO 13485:2016 Certified</span>
            <span className="hidden sm:inline-block text-[#333]">•</span>
            <span>CDSCO Manufacturing License No : MFG/MD/2024/000827</span>
          </div>

          <p className="mt-1 sm:mt-0">
            © {new Date().getFullYear()} SS Innovations International, Inc. | All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
