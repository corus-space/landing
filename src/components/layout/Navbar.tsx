"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between border-b border-white/5 bg-[#09090b]/80 px-6 md:px-14 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                    <img
                        src="/logo-tp.png"
                        alt="CORUS Logo"
                        className="h-12 md:h-16 w-auto object-contain"
                    />
                    <span className="text-2xl md:text-3xl font-bold tracking-tight text-white">CORUS</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="/spaces" className="text-lg font-medium text-white/70 hover:text-white transition-colors">Spaces</a>
                    <a href="/team" className="text-lg font-medium text-white/70 hover:text-white transition-colors">For Teams</a>
                    <a href="/community" className="text-lg font-medium text-white/70 hover:text-white transition-colors">Community</a>
                    <a href="/events" className="text-lg font-medium text-white/70 hover:text-white transition-colors">Events</a>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Button asChild variant="ghost" size="lg" className="hidden lg:flex cursor-pointer">
                        <a href="/list-space">List Your Space</a>
                    </Button>
                    <Button asChild size="lg" className="bg-white text-black hover:bg-white/40 cursor-pointer">
                        <a href="/login">Login</a>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white p-2" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#09090b] pt-24 px-6 md:hidden flex flex-col gap-6"
                    >
                        <nav className="flex flex-col gap-6 text-center">
                            <a href="/spaces" className="text-2xl font-medium text-white/90 hover:text-white" onClick={toggleMenu}>Spaces</a>
                            <a href="/team" className="text-2xl font-medium text-white/90 hover:text-white" onClick={toggleMenu}>For Teams</a>
                            <a href="/community" className="text-2xl font-medium text-white/90 hover:text-white" onClick={toggleMenu}>Community</a>
                            <a href="/events" className="text-2xl font-medium text-white/90 hover:text-white" onClick={toggleMenu}>Events</a>

                            <hr className="border-white/10 my-2" />

                            <a href="/list-space" className="text-xl font-medium text-white/70 hover:text-white" onClick={toggleMenu}>List Your Space</a>
                            <a href="/login" className="text-xl font-medium text-white/70 hover:text-white" onClick={toggleMenu}>Login</a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
