"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SLIDES = [
    {
        id: 1,
        headline_1: "Where ideas",
        headline_2: "converge.",
        highlight: "converge.",
        subtext: "Access a curated network of premium workspaces, studios, and private offices.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564", // Liquid Texture
        gradient: "from-[#1A3D3F] via-[#0D1818] to-[#080C0C]" // Deep Teal
    },
    {
        id: 2,
        headline_1: "Room to",
        headline_2: "breathe.",
        highlight: "breathe.",
        subtext: "Spacious, light-filled environments designed to clear your mind and elevate your output.",
        image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=2564", // Minimal space
        gradient: "from-[#2A2A2A] via-[#111111] to-[#000000]" // Monochrome
    },
    {
        id: 3,
        headline_1: "Designed for",
        headline_2: "focus.",
        highlight: "focus.",
        subtext: "Sound-dampened studios and private pods for when deep work is non-negotiable.",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2564", // Office texture
        gradient: "from-[#3F2E1A] via-[#18110D] to-[#0C0806]" // Warm/Dark Brown
    }
];

export function Hero() {
    const [current, setCurrent] = useState(0);

    // Auto-play (optional, but standard for banners)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const slide = SLIDES[current];

    return (
        <section className="w-full bg-black px-4 pt-12 pb-12 flex justify-center">
            {/* The Floating Hero Rectangle */}
            <div className="relative w-full min-h-[85vh] bg-[#112628] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-900/10 border border-white/5 mx-4 md:mx-8">

                {/* Animated Background Layers */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src={slide.image}
                            alt="Background"
                            className="h-full w-full object-cover opacity-40 mix-blend-overlay"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-90`} />
                    </motion.div>
                </AnimatePresence>

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-16">

                    <div className="flex justify-between items-start h-full">
                        {/* Left: Text Content - with AnimatePresence for slide transition */}
                        <div className="pt-10 w-full lg:w-3/4 flex flex-col justify-center h-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={slide.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium leading-[0.9] tracking-tight text-white mb-6 md:mb-8">
                                        {slide.headline_1} <br />
                                        <span className="text-[#E3D5CA] italic">{slide.headline_2}</span>
                                    </h1>
                                    <p className="text-lg sm:text-xl md:text-3xl text-white/80 font-light leading-relaxed w-full md:w-3/4">
                                        {slide.subtext}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right: Vertical Pagination Controller (from reference image) */}
                        <div className="hidden lg:flex flex-col items-center justify-center h-full pt-20">
                            <div className="w-16 py-6 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 flex flex-col items-center gap-4">
                                {SLIDES.map((s, index) => (
                                    <button
                                        key={s.id}
                                        onClick={() => setCurrent(index)}
                                        className="group flex flex-col items-center gap-1 focus:outline-none"
                                    >
                                        {/* The "Dot" or "Dash" indicator */}
                                        <motion.div
                                            animate={{
                                                height: current === index ? 40 : 8,
                                                width: current === index ? 8 : 8,
                                                backgroundColor: current === index ? "#ffffff" : "rgba(255,255,255,0.2)"
                                            }}
                                            className="rounded-full transition-all duration-300"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Control Bar */}
                    <div className="mt-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 md:gap-8 pt-12">
                        <div className="flex flex-wrap gap-3 md:gap-4 w-full md:w-auto">
                            <div className="h-16 md:h-20 px-6 md:px-10 rounded-full bg-black/30 backdrop-blur-md border border-white/10 flex items-center gap-3 md:gap-5 text-white flex-1 md:flex-none justify-center md:justify-start">
                                <span className="font-display text-2xl md:text-4xl">12</span>
                                <span className="text-xs md:text-sm uppercase tracking-wider text-white/60 font-medium">Locations</span>
                            </div>
                            <div className="h-16 md:h-20 px-6 md:px-10 rounded-full bg-black/30 backdrop-blur-md border border-white/10 flex items-center gap-3 md:gap-5 text-white flex-1 md:flex-none justify-center md:justify-start">
                                <span className="font-display text-2xl md:text-4xl">100 +</span>
                                <span className="text-xs md:text-sm uppercase tracking-wider text-white/60 font-medium">Desks</span>
                            </div>
                        </div>

                        <Link href="/spaces" className="w-full lg:w-auto">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                                <Button className="cursor-pointer w-full lg:w-auto h-20 md:h-24 px-8 md:px-12 rounded-full bg-[#E3D5CA] text-[#0D1818] font-display text-xl md:text-2xl hover:bg-white hover:text-black transition-all">
                                    Find Your Space <ArrowRight className="ml-4 h-6 w-6 md:h-8 md:w-8" />
                                </Button>
                            </motion.div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
