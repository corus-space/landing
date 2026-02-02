"use client";

import { Button } from "@/components/ui/button";


export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between border-b border-white/5 bg-[#09090b]/80 px-14 backdrop-blur-xl">
            <div className="flex items-center gap-3">
                <img
                    src="/logo-tp.png"
                    alt="CORUS Logo"
                    className="h-16 w-auto object-contain"
                />
                <span className="text-3xl font-bold tracking-tight text-white">CORUS</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                <a href="/spaces" className="text-lg font-medium text-white/70 hover:text-white transition-colors">Spaces</a>
                <a href="/team" className="text-lg font-medium text-white/70 hover:text-white transition-colors">For Teams</a>
                <a href="/community" className="text-lg font-medium text-white/70 hover:text-white transition-colors">Community</a>
                <a href="/events" className="text-lg font-medium text-white/70 hover:text-white transition-colors">Events</a>
            </div>

            <div className="flex items-center gap-4">
                <Button asChild variant="ghost" size="lg" className="hidden sm:flex cursor-pointer">
                    <a href="/list-space">List Your Space</a>
                </Button>
                <Button asChild size="lg" className="bg-white text-black hover:bg-white/40 cursor-pointer">
                    <a href="/login">Login</a>
                </Button>
            </div>
        </nav>
    );
}
