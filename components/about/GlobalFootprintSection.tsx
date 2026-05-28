"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const footprintLocations = [
    {
        id: "usa",
        region: "Florida, USA",
        facility: "SS Innovations International, Inc.",
        coordinates: { top: "48%", left: "21.3%" },
        flagUrl: "https://flagcdn.com/w40/us.png",
        alignText: "right",
    },
    {
        id: "colombia",
        region: "Bucaramanga, Colombia",
        facility: "Fundación Cardiovascular de Colombia",
        tag: "Installation",
        coordinates: { top: "63%", left: "23.15%" },
        flagUrl: "https://flagcdn.com/w40/co.png",
        alignText: "left",
    },
    {
        id: "ecuador",
        region: "Guayaquil City, Ecuador",
        facility: "Interhospital",
        tag: "Installation",
        coordinates: { top: "67%", left: "27.05%" },
        flagUrl: "https://flagcdn.com/w40/ec.png",
        alignText: "bottom-left",
    },
    {
        id: "oman",
        region: "Sohar, Oman",
        facility: "Aster Al Raffah Hospital & Clinics",
        tag: "Installation",
        coordinates: { top: "57.5%", left: "61.25%" },
        flagUrl: "https://flagcdn.com/w40/om.png",
        alignText: "left",
    },
    {
        id: "iraq",
        region: "Karbala, Iraq",
        facility: "Warith International Cancer Institute",
        tag: "Installation",
        coordinates: { top: "52%", left: "62.86%" },
        flagUrl: "https://flagcdn.com/w40/iq.png",
        alignText: "top-right",
    },
    {
        id: "bahrain",
        region: "Bahrain",
        facility: "SSI Mantra Installation",
        tag: "Installation",
        coordinates: { top: "54%", left: "64.7%" },
        flagUrl: "https://flagcdn.com/w40/bh.png",
        alignText: "right",
    },
    {
        id: "india",
        region: "Gurugram, HR, INDIA",
        facility: "SSI R&D HQ",
        description: "80+ Installations",
        coordinates: { top: "58%", left: "67.3%" },
        flagUrl: "https://flagcdn.com/w40/in.png",
        alignText: "bottom",
    },
    {
        id: "nepal",
        region: "Lalitpur, Nepal",
        facility: "B&B Hospital",
        tag: "Installation",
        coordinates: { top: "55%", left: "70.7%" },
        flagUrl: "https://flagcdn.com/w40/np.png",
        alignText: "top-right",
    },
    {
        id: "philippines-rbgm",
        region: "Philippines",
        facility: "RBGM Medical Express Sales",
        coordinates: { top: "62.5%", left: "84.4%" },
        flagUrl: "https://flagcdn.com/w40/ph.png",
        alignText: "right",
    },
    {
        id: "philippines-jbl",
        region: "San Fernando City, Philippines",
        facility: "Jose B. Lingad Memorial General Hospital",
        tag: "Installation",
        coordinates: { top: "65%", left: "85.2%" },
        flagUrl: "https://flagcdn.com/w40/ph.png",
        alignText: "right",
    },
    {
        id: "indonesia-1",
        region: "Jakarta, Indonesia",
        facility: "PT. Neuro Medika Sejahtera",
        tag: "Installation",
        coordinates: { top: "70%", left: "78.5%" },
        flagUrl: "https://flagcdn.com/w40/id.png",
        alignText: "bottom",
    },
    {
        id: "indonesia-2",
        region: "Jakarta, Indonesia",
        facility: "Bunda General Hospital",
        tag: "Installation",
        coordinates: { top: "74%", left: "78.5%" },
        flagUrl: "https://flagcdn.com/w40/id.png",
        alignText: "bottom",
    },
];

const smoothEase = [0.25, 1, 0.5, 1];

const titleVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: smoothEase },
    },
};

const mapVariants: any = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1.5, ease: smoothEase },
    },
};

const locationsContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.5, delayChildren: 0.7 },
    },
};

const locationItemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const pinVariants: any = {
    hidden: { scale: 0.3, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 220,
            damping: 22,
            mass: 0.8,
        },
    },
};

const labelGroupVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.65 },
    },
};

const textFadeVariants: any = {
    hidden: { opacity: 0, y: 8, filter: "blur(3px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.65, ease: smoothEase as any },
    },
};

const ConnectorLine = ({ align }: { align: string }) => {
    let positionClasses = "";
    let origin = "left center";
    let hiddenState: any = { scaleX: 0 };
    let visibleState: any = { scaleX: 1 };

    switch (align) {
        case "right":
            positionClasses = "w-8 lg:w-14 h-[1.5px] left-full ml-1 top-1/2 -translate-y-1/2";
            origin = "left center";
            hiddenState = { scaleX: 0 };
            visibleState = { scaleX: 1 };
            break;
        case "left":
            positionClasses = "w-8 lg:w-14 h-[1.5px] right-full mr-1 top-1/2 -translate-y-1/2";
            origin = "right center";
            hiddenState = { scaleX: 0 };
            visibleState = { scaleX: 1 };
            break;
        case "bottom":
            positionClasses = "w-[1.5px] h-9 lg:h-14 top-full mt-1 left-1/2 -translate-x-1/2";
            origin = "top center";
            hiddenState = { scaleY: 0 };
            visibleState = { scaleY: 1 };
            break;
        case "top-right":
            positionClasses = "w-10 lg:w-16 h-[1.5px] left-full bottom-full ml-1 mb-1 -rotate-45";
            origin = "bottom left";
            hiddenState = { scaleX: 0 };
            visibleState = { scaleX: 1 };
            break;
        case "bottom-left":
            positionClasses = "w-10 lg:w-16 h-[1.5px] right-full top-full mr-1 mt-1 rotate-45";
            origin = "top right";
            hiddenState = { scaleX: 0 };
            visibleState = { scaleX: 1 };
            break;
        default:
            positionClasses = "w-8 lg:w-14 h-[1.5px] left-full ml-1 top-1/2 -translate-y-1/2";
            origin = "left center";
    }

    return (
        <motion.div
            variants={{
                hidden: { ...hiddenState, opacity: 0 },
                visible: {
                    ...visibleState,
                    opacity: 1,
                    transition: { duration: 0.55, ease: smoothEase, delay: 0.25 },
                },
            }}
            style={{
                transformOrigin: origin,
                backgroundColor: "#000000",
            }}
            className={`absolute z-0 pointer-events-none ${positionClasses}`}
        />
    );
};

export default function GlobalFootprintSection() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const getTextPositionClasses = (alignment: string) => {
        switch (alignment) {
            case "left":
                return "right-full mr-8 lg:mr-14 items-end text-right top-1/2 -translate-y-1/2";
            case "right":
                return "left-full ml-8 lg:ml-14 items-start text-left top-1/2 -translate-y-1/2";
            case "top-right":
                return "left-full ml-6 lg:ml-10 bottom-full mb-6 lg:mb-10 items-start text-left";
            case "bottom-left":
                return "right-full mr-6 lg:mr-10 top-full mt-6 lg:mt-10 items-end text-right";
            case "bottom":
                return "top-full mt-10 lg:mt-14 left-1/2 -translate-x-1/2 items-center text-center";
            default:
                return "left-full ml-8 lg:ml-14 items-start text-left top-1/2 -translate-y-1/2";
        }
    };

    if (!isMounted) return null;

    return (
        <section className="relative flex w-full flex-col items-center overflow-hidden bg-[#f5f8fa] py-16 md:py-28">
            <style>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }

        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

            <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-10">
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
                    className="mb-14 text-center md:mb-20 md:text-left"
                >
                    <h2 className="text-[#1E1E1E] font-['Sora'] text-[32px] font-medium not-italic leading-[50px]">
                        Our Global Footprints
                    </h2>
                </motion.div>
            </div>

            <div className="hide-scroll w-full touch-pan-x overflow-x-auto overflow-y-hidden pb-16">
                <div className="mx-auto w-full min-w-[1000px] max-w-[1440px] px-6 lg:px-10">
                    <div className="relative aspect-[1532/990] w-full">
                        <div className="absolute inset-0 h-full w-full">
                            <motion.div
                                variants={mapVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.25,
                                    margin: "0px 0px -10% 0px",
                                }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src="/svg/Group.svg"
                                    alt="Global Map"
                                    fill
                                    className="pointer-events-none select-none object-contain opacity-[0.85]"
                                    priority
                                />
                            </motion.div>

                            <motion.div
                                variants={locationsContainerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.3,
                                    margin: "0px 0px -10% 0px",
                                }}
                                className="absolute inset-0"
                            >
                                {footprintLocations.map((location) => (
                                    <motion.div
                                        key={location.id}
                                        variants={locationItemVariants}
                                        className="absolute flex items-center"
                                        style={{
                                            top: location.coordinates.top,
                                            left: location.coordinates.left,
                                            transform: "translate(-50%, -50%)",
                                        }}
                                    >
                                        <ConnectorLine align={location.alignText} />

                                        <motion.div
                                            variants={pinVariants}
                                            whileHover={{ scale: 1.15 }}
                                            className="relative z-30 flex h-[22px] w-[22px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-[1.5px] border-white bg-white shadow-md transition-transform md:h-[28px] md:w-[28px]"
                                        >
                                            <Image
                                                src={location.flagUrl}
                                                alt={`${location.region} flag`}
                                                fill
                                                className="scale-[1.2] object-cover"
                                                unoptimized
                                            />
                                        </motion.div>

                                        <motion.div
                                            variants={labelGroupVariants}
                                            className={`absolute z-20 flex w-max flex-col pointer-events-none ${getTextPositionClasses(
                                                location.alignText
                                            )}`}
                                        >
                                            {location.tag && (
                                                <motion.span
                                                    variants={textFadeVariants}
                                                    className="mb-1 text-[9px] font-bold uppercase tracking-widest text-emerald-600/90 md:text-[10px]"
                                                >
                                                    {location.tag}
                                                </motion.span>
                                            )}

                                            <div className="font-sans leading-snug">
                                                <motion.span
                                                    variants={textFadeVariants}
                                                    className="block text-[13px] font-semibold text-slate-800 md:text-[15px]"
                                                >
                                                    {location.facility}
                                                </motion.span>

                                                <motion.span
                                                    variants={textFadeVariants}
                                                    className="block text-[12px] font-medium text-slate-500 md:text-[13px]"
                                                >
                                                    {location.region}
                                                </motion.span>
                                            </div>

                                            {location.description && (
                                                <motion.div
                                                    variants={textFadeVariants}
                                                    className="mt-2 w-full"
                                                >
                                                    <div
                                                        className={`mb-1.5 h-[1px] w-full bg-emerald-500/30 md:mb-2 ${location.alignText === "bottom"
                                                                ? "mx-auto max-w-[80%]"
                                                                : ""
                                                            }`}
                                                    />

                                                    <span className="block text-[12px] font-medium text-slate-600">
                                                        {location.description}
                                                    </span>
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
