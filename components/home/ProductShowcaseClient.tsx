"use client";
import dynamic from "next/dynamic";
const ProductShowcaseSection = dynamic(() => import("@/components/home/ProductShowcaseSection"), {
    loading: () => <div className="h-screen bg-[#050505]"/>,
    ssr: false,
});
export default ProductShowcaseSection;
