"use client";
import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, PerspectiveCamera, Center, ContactShadows, Html, useProgress } from "@react-three/drei";
import { motion, AnimatePresence, type Variants } from "framer-motion";
const MODEL_URLS = {
    PSAC: "https://raw.githubusercontent.com/puneet46654/3d-assets/main/psac.glb",
    SCC: "https://raw.githubusercontent.com/puneet46654/3d-assets/main/scc.glb",
    VC: "https://raw.githubusercontent.com/puneet46654/3d-assets/main/vc.glb"
} as const;

type ModelKey = keyof typeof MODEL_URLS;
const MODELS = Object.keys(MODEL_URLS) as ModelKey[];
const PRODUCT_DATA = {
    PSAC: {
        name: "PSAC",
        tagline: "Primary Surgical Application Console",
        features: ["4K HD Visualization", "<150ms Latency", "Multi-arm Compatible"]
    },
    SCC: {
        name: "SCC",
        tagline: "Secondary Control Console",
        features: ["Portable Design", "Real-time Feedback", "Training Ready"]
    },
    VC: {
        name: "VC",
        tagline: "Visualization Console",
        features: ["3D Imaging", "Advanced Diagnostics", "Enhanced Monitoring"]
    }
};
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 20
        },
    },
};
function Loader() {
    const { progress } = useProgress();
    return (<Html center>
      <div className="flex flex-col items-center justify-center pointer-events-none bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-sm border border-white">
        <div className="w-8 h-8 border-2 border-gray-200 border-t-[#00B9B8] rounded-full animate-spin mb-3"/>
        <span className="text-xs font-semibold tracking-widest text-gray-600 uppercase">
          Loading {progress.toFixed(0)}%
        </span>
      </div>
    </Html>);
}
type ModelProps = {
    name: keyof typeof MODEL_URLS;
};

function Model({ name }: ModelProps) {
    const { scene } = useGLTF(MODEL_URLS[name], "https://www.gstatic.com/draco/versioned/decoders/1.5.5/");
    return (<Center bottom precise>
      
      <primitive object={scene.clone()} scale={1.0} key={name}/>
    </Center>);
}
function ProductShowcaseSection() {
    const [activeView, setActiveView] = useState<ModelKey>("PSAC");
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const currentIndex = MODELS.indexOf(activeView);
    const handleNext = () => setActiveView(MODELS[(currentIndex + 1) % MODELS.length]);
    const handlePrev = () => setActiveView(MODELS[(currentIndex - 1 + MODELS.length) % MODELS.length]);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);
    const currentProduct = PRODUCT_DATA[activeView];
    return (<section ref={sectionRef} data-section-4 className="relative w-full h-[100dvh] bg-[#F3F7F9] overflow-hidden font-sans flex items-center justify-center">
      
      <motion.div className="absolute inset-0 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pointer-events-none z-30" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        
        
        <motion.div variants={itemVariants} className="absolute top-1/2 -translate-y-1/2 left-6 lg:left-12 pointer-events-auto z-40">
          <AnimatePresence mode="wait">
            <motion.div key={activeView} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4, ease: "easeOut" }} className="flex flex-col gap-12 md:gap-16">
              {currentProduct.features.map((feature, idx) => (<div key={idx} className="flex items-center">
                  
                  
                  <div className="mr-5 md:mr-6 flex flex-col text-right">
                    <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] text-[#9FB3C8] uppercase mb-1">
                      FEATURE . 0{idx + 1}
                    </span>
                    <span className="text-base md:text-lg font-semibold text-[#1A2530] tracking-wide whitespace-nowrap">
                      {feature}
                    </span>
                  </div>

                  
                  <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5, ease: "easeOut" }} style={{ transformOrigin: "left" }} className="h-[1px] w-20 md:w-32 bg-[#D9E2EC]"/>
                  
                  
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#00B9B8] shadow-[0_0_8px_rgba(0,185,184,0.4)] flex-shrink-0 ml-[-1px]"/>
                  
                </div>))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        
        <motion.div variants={itemVariants} className="absolute bottom-24 md:bottom-auto md:top-1/2 md:-translate-y-1/2 right-4 sm:right-6 lg:right-10 flex flex-row md:flex-col justify-center w-[calc(100%-32px)] md:w-auto pointer-events-auto z-40">
          <div className="flex flex-row md:flex-col gap-2 p-2 backdrop-blur-2xl bg-white/50 rounded-full md:rounded-[2rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] w-full md:w-auto overflow-x-auto no-scrollbar">
            {MODELS.map((view) => {
            const isActive = activeView === view;
            return (<button key={view} onClick={() => {
                    setActiveView(view);
                    if (isVisible) {
                        useGLTF.preload(MODEL_URLS[view], "https://www.gstatic.com/draco/versioned/decoders/1.5.5/");
                    }
                }} className={`relative font-medium text-xs md:text-sm tracking-widest flex items-center justify-center transition-all duration-300 flex-1 md:flex-none md:w-[140px] h-[48px] rounded-full overflow-hidden ${isActive ? "text-white shadow-md" : "text-gray-600 hover:bg-white/50 hover:text-gray-900"}`}>
                  {isActive && (<motion.div layoutId="active-pill" className="absolute inset-0 bg-gray-900 rounded-full" transition={{ type: "spring", stiffness: 60, damping: 15 }}/>)}
                  <span className="relative z-10">{view}</span>
                </button>);
        })}
          </div>
        </motion.div>

        
        <motion.div variants={containerVariants} className="absolute bottom-6 md:bottom-10 z-40 flex justify-center w-full pointer-events-none">
          <motion.div variants={itemVariants} className="flex gap-2 p-2 backdrop-blur-2xl bg-white/50 rounded-full border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] pointer-events-auto">
            <button onClick={handlePrev} className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white hover:bg-gray-50 shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:text-black transition-all active:scale-95">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={handleNext} className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white hover:bg-gray-50 shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:text-black transition-all active:scale-95">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </motion.div>
        </motion.div>

      </motion.div>

      
      <div className="relative w-full max-w-[1363px] h-[55vh] md:h-full flex items-center justify-center mt-20 md:mt-0 z-10 pl-0 md:pl-32">
        
        
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1.2, ease: "easeOut" }} className="absolute z-0 pointer-events-none rounded-[100%] border-[2px] md:border-[3px] border-[#70E0E0] shadow-[0_10px_40px_rgba(112,224,224,0.2)]" style={{
            width: "85%",
            maxWidth: "900px",
            height: "12vh",
            maxHeight: "120px",
            bottom: "22%",
        }}/>

        {isVisible && (<Canvas shadows dpr={[1, 1.2]} gl={{ antialias: true, powerPreference: "high-performance", precision: "lowp" }} className="z-10 cursor-grab active:cursor-grabbing w-full h-full">
            <Suspense fallback={<Loader />}>
              <PerspectiveCamera makeDefault position={[0, 1.5, 12]} fov={30}/>

              <Stage environment="city" intensity={0.5} adjustCamera={false} shadows={false}>
                <group>
                  <Model name={activeView}/>

                  <ContactShadows position={[0, 0, 0]} opacity={0.4} scale={10} blur={2.5} far={2} resolution={256} color="#000000"/>
                </group>
              </Stage>

              <OrbitControls target={[0, 0.5, 0]} enableZoom={false} enablePan={false} enableRotate={true} makeDefault autoRotate={true} autoRotateSpeed={0.6} enableDamping={true} dampingFactor={0.05} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2 - 0.05}/>
            </Suspense>
          </Canvas>)}
      </div>

    </section>);
}
useGLTF.preload(MODEL_URLS.PSAC, "https://www.gstatic.com/draco/versioned/decoders/1.5.5/");
export default React.memo(ProductShowcaseSection);
