import withBundleAnalyzer from "@next/bundle-analyzer";
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  staticPageGenerationTimeout: 60,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"] as Array<"image/avif" | "image/webp">,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 90, 100],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
  turbopack: {
    resolveAlias: {
      "@": "./",
    },
  },
};

export default bundleAnalyzer(nextConfig as any);
