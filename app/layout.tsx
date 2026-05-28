import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import "./globals.css";

const sora = localFont({
  src: [
    {
      path: "./../public/fonts/sora/static/Sora-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../public/fonts/sora/static/Sora-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../public/fonts/sora/static/Sora-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../public/fonts/sora/static/Sora-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-sora",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "SS Innovations International Inc",
  description: "Multi-arm robotic system for minimally invasive surgery.",
  icons: {
    icon: "/logos/ssilogo.png",
    apple: "/logos/ssilogo.png",
  },
  metadataBase: new URL("https://ssinnovations.com"),
  openGraph: {
    title: "SS Innovations International Inc",
    description: "Multi-arm robotic system for minimally invasive surgery.",
    url: "https://ssinnovations.com",
    siteName: "SS Innovations",
    images: [
      {
        url: "/logos/ssilogo.png",
        width: 1200,
        height: 630,
        alt: "SS Innovations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>

      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
