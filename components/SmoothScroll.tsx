'use client'

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
            smoothWheel: true,
           
        });
        return () => {
            lenis.destroy();
        }
    }, []);
    return null;
}
