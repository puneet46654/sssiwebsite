"use client";
import React, { useRef, useState, useEffect } from "react";
function VideoSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [videoSrc, setVideoSrc] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    useEffect(() => {
        const section = sectionRef.current;
        if (!section)
            return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (!videoSrc) {
                        setVideoSrc("/videos/video.webm");
                    }
                    if (videoRef.current) {
                        videoRef.current.muted = true;
                        videoRef.current.play().then(() => {
                            setIsPlaying(true);
                        }).catch(() => {
                            setIsPlaying(false);
                        });
                    }
                }
                else {
                    if (videoRef.current) {
                        videoRef.current.pause();
                        setIsPlaying(false);
                    }
                }
            });
        }, { threshold: 0.5 });
        observer.observe(section);
        return () => {
            observer.disconnect();
        };
    }, [videoSrc]);
    return (<section ref={sectionRef} className="relative w-full bg-[#00050A] overflow-hidden flex items-center justify-center group h-[50svh] md:h-auto md:aspect-[66/37] max-h-[100vh]">
      <video ref={videoRef} src={videoSrc ?? undefined} className="absolute inset-0 w-full h-full object-cover" loop playsInline muted preload="none" aria-label="Background Video"/>

      
      <div className={`absolute inset-0 bg-black/50 md:bg-black/40 transition-opacity duration-1000 pointer-events-none ${isPlaying ? "opacity-0" : "opacity-100"}`}/>
    </section>);
}
export default React.memo(VideoSection);
