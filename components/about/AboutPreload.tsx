"use client";

import { useEffect } from "react";

const PRELOAD_IMAGES = [
  "/images/about/hero/image1.webp",
  "/images/about/hero/image2.webp",
  "/images/about/whoweare/image1.webp",
  "/images/about/features/image1.webp",
  "/images/about/company-overview/image1.webp",
  "/images/about/mission-vision/image1.webp",
  "/images/about/mission-vision/image2.webp",
  "/images/about/mission-vision/image3.webp",
  "/images/about/team/image1.webp",
  "/images/about/team/image2.webp",
  "/images/about/team/image3.webp",
  "/images/about/team/image4.webp",
  "/images/about/team/image5.webp",
  "/images/about/team/image6.webp",
  "/images/about/team/image7.webp",
  "/images/home/book-demo/image1.webp",
  "/svg/Group.svg",
  "https://flagcdn.com/w40/us.png",
  "https://flagcdn.com/w40/co.png",
  "https://flagcdn.com/w40/ec.png",
  "https://flagcdn.com/w40/om.png",
  "https://flagcdn.com/w40/iq.png",
  "https://flagcdn.com/w40/bh.png",
  "https://flagcdn.com/w40/in.png",
  "https://flagcdn.com/w40/np.png",
  "https://flagcdn.com/w40/ph.png",
  "https://flagcdn.com/w40/id.png",
];

export default function AboutPreload() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    PRELOAD_IMAGES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return null;
}
