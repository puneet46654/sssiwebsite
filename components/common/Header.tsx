"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    name: "Technology",
    subItems: [
      { name: "SSI Mantra", href: "/technology/ssimantra" },
      { name: "SSI Mudra", href: "/technology/ssimudra" },
      { name: "SSI Maya", href: "/technology/ssimaya" },
      { name: "Telesurgery", href: "/technology/telesurgery" },
    ],
  },
  {
    name: "Company",
    subItems: [
      { name: "About SSI", href: "/about" },
      { name: "News and Media", href: "/news" },
      { name: "Publications", href: "/publications" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    name: "Patients",
    subItems: [
      { name: "Patient Education", href: "/patients/education" },
      { name: "Clinical Applications", href: "/coming-soon" },
    ],
  },
  {
    name: "Healthcare Professional",
    subItems: [
      { name: "Surgery with SSI", href: "/coming-soon" },
      { name: "Training and Education", href: "/coming-soon" },
      { name: "Clinical Partners", href: "/coming-soon" },
    ],
  },
  {
    name: "Demo",
    href: "/coming-soon",
    subItems: [],
  },
];

type SearchItem = {
  name: string;
  href: string;
  description: string;
};

const searchItems: SearchItem[] = [
  { name: "Home", href: "/home", description: "Landing page" },
  { name: "About SSI", href: "/about", description: "Company overview" },
  { name: "News and Media", href: "/news", description: "Latest updates" },
  { name: "Publications", href: "/publications", description: "Research and papers" },
  { name: "Careers", href: "/careers", description: "Open positions" },
  { name: "Patient Education", href: "/patients/education", description: "Patient resources" },
  { name: "Clinical Applications", href: "/patients/application", description: "Medical use cases" },
  { name: "Telesurgery", href: "/technology/telesurgery", description: "Remote surgical systems" },
  ...menuItems.flatMap((item) =>
    item.subItems.map((sub) => ({
      name: sub.name,
      href: sub.href,
      description: item.name,
    }))
  ),
];

const uniqueSearchItems = Array.from(
  new Map(searchItems.map((item) => [item.href, item])).values()
);

const prefetchRoutes = uniqueSearchItems
  .map((item) => item.href)
  .filter((href) => href.startsWith("/") && href !== "/coming-soon");

function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();
  const normalizedSearch = searchQuery.trim().toLowerCase();

  const searchResults = useMemo(() => {
    if (!normalizedSearch) return [];
    return uniqueSearchItems
      .filter(
        (item) =>
          item.name.toLowerCase().includes(normalizedSearch) ||
          item.description.toLowerCase().includes(normalizedSearch)
      )
      .slice(0, 6);
  }, [normalizedSearch]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    let isCancelled = false;
    const idleWindow = window as Window & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const prefetch = () => {
      if (isCancelled) return;
      prefetchRoutes.forEach((href) => router.prefetch(href));
    };

    if (idleWindow.requestIdleCallback) {
      const idleId = idleWindow.requestIdleCallback(prefetch, { timeout: 2500 });
      return () => {
        isCancelled = true;
        idleWindow.cancelIdleCallback?.(idleId);
      };
    }

    const timeoutId = window.setTimeout(prefetch, 1200);
    return () => {
      isCancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [router]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const closeSearch = () => {
    setSearchQuery("");
    setIsSearchOpen(false);
    setIsSearchFocused(false);
  };

  const goToResult = (href: string) => {
    closeSearch();
    router.push(href);
  };

  const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchResults.length > 0) {
      event.preventDefault();
      goToResult(searchResults[0].href);
    }
  };

  const toggleMobileAccordion = (name: string) => {
    setOpenMobileAccordion(openMobileAccordion === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black border-0 outline-none shadow-none font-sans">
      <motion.div
        key={pathname}
        className="absolute top-0 left-0 h-[2px] bg-[#0BD3D3] z-[60]"
        initial={{ width: "0%", opacity: 1 }}
        animate={{ width: "100%", opacity: 0 }}
        transition={{
          width: { duration: 0.8, ease: "circOut" },
          opacity: { duration: 0.3, delay: 0.7 },
        }}
      />

      <div className="hidden lg:flex max-w-[1440px] mx-auto px-6 lg:px-10 h-[40px] items-center justify-end gap-8 text-[#919191] text-[13px] font-normal">
        <Link href="/events" className="flex items-center gap-2 hover:text-[#099F9E] transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Events
        </Link>
        <Link href="/investors" className="flex items-center gap-2 hover:text-[#099F9E] transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          Investors
        </Link>
        <Link href="/contact" className="flex items-center gap-2 hover:text-[#099F9E] transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Contact Us
        </Link>
        <Link href="/region" className="flex items-center gap-2 hover:text-[#099F9E] transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          India
        </Link>
      </div>

      <div className="hidden lg:block w-full h-[1px] bg-white/10" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-[80px] flex items-center justify-between relative z-50 bg-black">
        <Link href="/home" prefetch className="relative flex items-center h-full">
          <div
            style={{
              width: "240px",
              height: "103px",
              aspectRatio: "240/103",
              position: "relative",
            }}
          >
            <Image
              src="/logos/header.png"
              alt="SSI Logo"
              fill
              sizes="240px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-14 h-full">
          {menuItems.map((item) => (
            <div key={item.name} className="relative h-full flex items-center" onMouseEnter={() => setHoveredItem(item.name)} onMouseLeave={() => setHoveredItem(null)}>
              {item.subItems.length > 0 ? (
                <span
                  className="relative z-10 transition-colors duration-300 ease-in-out whitespace-nowrap px-2 cursor-pointer"
                  style={{
                    color: hoveredItem === item.name ? "#099F9E" : "#919191",
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href || "/coming-soon"}
                  className="relative z-10 transition-colors duration-300 ease-in-out whitespace-nowrap px-2"
                  style={{
                    color: hoveredItem === item.name ? "#099F9E" : "#919191",
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  {item.name}
                </Link>
              )}

              {hoveredItem === item.name && (
                <motion.div
                  layoutId="header-underline"
                  className="absolute bottom-[20px] left-1/2"
                  style={{
                    width: "95px",
                    height: "1.5px",
                    background: "linear-gradient(90deg, rgba(11, 211, 211, 0.10) 0%, #00B9B8 50%, rgba(11, 211, 211, 0.10) 100%)",
                    x: "-50%",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              )}

              <AnimatePresence>
                {hoveredItem === item.name && item.subItems.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute top-[80px] left-1/2 z-50 overflow-hidden"
                    style={{
                      display: "flex",
                      width: "193px",
                      x: "-50%",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: "0 0 8px 8px",
                      borderRight: "1px solid #3B3B3B",
                      borderBottom: "1px solid #3B3B3B",
                      borderLeft: "1px solid #3B3B3B",
                      background: "radial-gradient(71.23% 71.23% at 50% 28.77%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.95) 100%)",
                    }}
                  >
                    {item.subItems.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        className="group relative w-full text-center py-3 transition-colors duration-300 hover:bg-white/[0.05] text-[#D2D2D2] hover:text-[#099F9E] text-[14px] font-normal"
                      >
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[2px] bg-[#099F9E] group-hover:h-[60%] transition-all duration-300" />
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 h-0 w-[2px] bg-[#099F9E] group-hover:h-[60%] transition-all duration-300" />
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden lg:block relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#919191]"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onFocus={() => {
                setIsSearchFocused(true);
                setIsSearchOpen(true);
              }}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 100)}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search SSI"
              className="w-[260px] rounded-full border border-white/10 bg-[#111111] py-2 pl-10 pr-4 text-sm text-white outline-none transition-colors duration-300 focus:border-[#0BD3D3] focus:bg-[#161616]"
            />
            <AnimatePresence>
              {isSearchFocused && searchQuery.trim().length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full mt-3 w-[340px] rounded-[24px] border border-white/10 bg-[#080808] shadow-2xl"
                >
                  <div className="max-h-72 overflow-auto rounded-[24px] p-2">
                    {searchResults.length > 0 ? (
                      searchResults.map((result) => (
                        <button
                          key={result.href}
                          type="button"
                          onMouseDown={(event) => event.preventDefault()}
                          onClick={() => goToResult(result.href)}
                          className="flex w-full flex-col gap-1 rounded-[20px] px-4 py-3 text-left text-white transition-colors duration-200 hover:bg-white/[0.05]"
                        >
                          <span className="font-medium">{result.name}</span>
                          <span className="text-xs text-[#A3A3A3]">{result.description}</span>
                        </button>
                      ))
                    ) : (
                      <div className="rounded-[20px] px-4 py-3 text-sm text-[#A3A3A3]">
                        No results found. Try another keyword.
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className="lg:hidden text-[#919191] hover:text-[#099F9E] transition-colors duration-300 p-1"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <Link href="/coming-soon" className="text-[#919191] hover:text-[#099F9E] transition-colors duration-300 hidden sm:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          <button className="lg:hidden text-[#919191] hover:text-white transition-colors duration-300 p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] bg-black/95 p-6 lg:hidden overflow-auto"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex w-full items-center gap-3 rounded-full border border-white/10 bg-[#111111] px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#919191]">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Search SSI"
                  className="w-full bg-transparent text-white outline-none placeholder:text-[#919191]"
                />
              </div>
              <button type="button" onClick={closeSearch} className="text-[#919191] hover:text-white text-sm font-medium">
                Close
              </button>
            </div>
            <div className="space-y-3">
              {searchResults.length > 0 ? (
                searchResults.map((result) => (
                  <button
                    key={result.href}
                    type="button"
                    onClick={() => goToResult(result.href)}
                    className="w-full rounded-[20px] border border-white/10 bg-[#111111] px-4 py-4 text-left text-white transition-colors duration-200 hover:border-[#0BD3D3] hover:bg-white/[0.05]"
                  >
                    <div className="font-medium">{result.name}</div>
                    <div className="text-sm text-[#A3A3A3]">{result.description}</div>
                  </button>
                ))
              ) : (
                <div className="rounded-[20px] border border-white/10 bg-[#111111] px-4 py-4 text-sm text-[#A3A3A3]">
                  No results found. Try another keyword.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden absolute top-[80px] left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 flex flex-col overflow-y-auto pb-24 z-40"
            style={{ height: "calc(100vh - 80px)" }}
          >
            <div className="flex flex-col px-6 py-4">
              {menuItems.map((item, index) => (
                <div 
                  key={item.name} 
                  className={index !== menuItems.length - 1 ? "mb-2" : ""} 
                >
                  {item.subItems.length > 0 ? (
                    <button
                      onClick={() => toggleMobileAccordion(item.name)}
                      className="w-full flex items-center justify-between py-4 text-left text-white text-lg font-normal tracking-wide transition-colors"
                      style={{ color: openMobileAccordion === item.name ? "#099F9E" : "white" }}
                    >
                      {item.name}
                      <motion.svg
                        animate={{ rotate: openMobileAccordion === item.name ? 180 : 0 }}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </motion.svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href || "/coming-soon"}
                      className="w-full flex py-4 text-white text-lg font-normal tracking-wide hover:text-[#099F9E] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}

                  <AnimatePresence>
                    {openMobileAccordion === item.name && item.subItems.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden flex flex-col gap-4 pb-4 pl-4"
                      >
                        {item.subItems.map((sub, idx) => (
                          <Link
                            key={idx}
                            href={sub.href}
                            className="text-[#919191] text-base font-normal hover:text-[#099F9E] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="sm:hidden flex flex-col gap-4 py-6 mt-4 border-t border-white/10 text-white font-normal">
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>Login / Portal</span>
                </div>
                <Link href="/events" className="flex items-center gap-4 text-[#919191] hover:text-[#099F9E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Events</span>
                </Link>
                <Link href="/investors" className="flex items-center gap-4 text-[#919191] hover:text-[#099F9E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>Investors</span>
                </Link>
                <Link href="/contact" className="flex items-center gap-4 text-[#919191] hover:text-[#099F9E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Contact Us</span>
                </Link>
                <Link href="/region" className="flex items-center gap-4 text-[#919191] hover:text-[#099F9E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span>India</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default React.memo(Header);