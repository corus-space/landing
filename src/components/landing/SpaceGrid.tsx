"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Updated with reliable high-quality Unsplash IDs
const SPACES = [
    {
        id: 1,
        title: "Private Offices",
        desc: "Enclosed workspaces for teams of 1-20.",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
        size: "large", // col-span-2
        price: "AED 50 / hr"
    },
    {
        id: 2,
        title: "Hot Desks",
        desc: "Flexible seating in the common area.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
        size: "small",
        price: "AED 10 / hr"
    },
    {
        id: 3,
        title: "Podcast Studios",
        desc: "Soundproofed recording environments.",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
        size: "small",
        price: "AED 45 / hr"
    },
    {
        id: 4,
        title: "Event Halls",
        desc: "Host workshops and network gatherings.",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
        size: "large", // col-span-2
        price: "AED 200 / hr"
    },
    {
        id: 5,
        title: "Meeting Rooms",
        desc: "Equipped with VC tech and whiteboards.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
        size: "small", // col-span-1
        price: "AED 60 / hr"
    },
    {
        id: 6,
        title: "Community Pass",
        desc: "Access lounges and events only.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
        size: "small", // col-span-1
        price: "AED 5/hr"
    }
];

export function SpaceGrid() {
    return (
        <section className="py-12 md:py-20 px-4 md:px-12 w-full">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.1] md:leading-tight">
                    Spaces designed <br />
                    to <span className="text-primary italic">inspire.</span>
                </h2>
                <p className="w-full md:w-[600px] text-lg md:text-2xl text-muted-foreground/80 leading-relaxed">
                    Explore our range of meticulously designed environments, tailored for every work style.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
                {SPACES.map((space, i) => (
                    <motion.div
                        key={space.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`group relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/5 ${space.size === "large" ? "md:col-span-2" : "md:col-span-1"
                            }`}
                    >
                        {/* Image Background */}
                        <img
                            src={space.image}
                            alt={space.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-50"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                        {/* Content */}
                        <div className="absolute top-0 right-0 p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white text-black flex items-center justify-center">
                                <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" />
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                            <span className="inline-block px-4 py-1 md:px-6 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-sm md:text-md font-medium text-white -ms-1 md:-ms-2 mb-3 md:mb-4">
                                Starting at {space.price}
                            </span>
                            <h3 className="font-display text-2xl md:text-4xl font-medium text-white mb-2 group-hover:text-primary transition-colors">
                                {space.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-300 line-clamp-1">{space.desc}</p>
                        </div>
                    </motion.div>
                ))}

                {/* CTA Block - 1 Column */}
                <div className="md:col-span-1 bg-primary text-black rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group overflow-hidden relative min-h-[300px]">
                    <div className="relative z-10">
                        <h3 className="font-display text-3xl md:text-4xl font-medium leading-[1.1] mb-4">Can't find it?</h3>
                        <p className="text-black/70 mb-8 text-xl md:text-2xl">We build custom solutions for enterprise teams.</p>
                    </div>
                    <button className="cursor-pointer w-full py-4 text-lg bg-black text-white rounded-full font-medium relative z-10 hover:scale-105 transition-transform">
                        Contact Sales
                    </button>

                    {/* Decorative Circle */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
                </div>

                {/* Map Block - 3 Columns */}
                <div className="md:col-span-3 bg-[#112628] rounded-[2.5rem] relative overflow-hidden border border-white/5 p-8 flex flex-col justify-between min-h-[300px]">
                    {/* Map Background (Abstract SVG) */}
                    <div className="absolute inset-0 opacity-40">
                        <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
                            <path d="M-50,200 Q150,50 300,200 T600,100 T900,300 V400 H-50 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                            <path d="M-50,300 Q200,350 400,250 T850,350 V400 H-50 Z" fill="rgba(255,255,255,0.03)" stroke="none" />
                            <path d="M200,0 Q300,150 100,300" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="10,10" />
                            <path d="M600,0 Q500,200 700,400" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="10,10" />

                            {/* Abstract Land Masses */}
                            <path d="M100,100 C150,80 200,150 150,200 C100,220 50,150 100,100 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" />
                            <path d="M500,150 C600,100 700,200 600,300 C500,350 450,250 500,150 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" />
                        </svg>
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pointer-events-none">
                        <h3 className="font-display text-3xl md:text-4xl text-white font-medium">Space Network</h3>
                        <div className="bg-black/30 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-white/70 text-sm">
                            Real Time Availability
                        </div>
                    </div>

                    {/* Markers (The "Corus C") */}
                    {[
                        { x: "20%", y: "40%" },
                        { x: "50%", y: "30%" },
                        { x: "70%", y: "60%" },
                        { x: "40%", y: "70%" }
                    ].map((pos, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-12 h-12 rounded-full bg-[#E3D5CA] flex items-center justify-center shadow-[0_0_30px_rgba(227,213,202,0.4)] cursor-default"
                            style={{ left: pos.x, top: pos.y }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            whileHover={{ scale: 1.2 }}
                        >
                            <span className="font-display text-[#112628] font-bold text-xl">C</span>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
