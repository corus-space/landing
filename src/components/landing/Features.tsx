"use client";

import { motion } from "framer-motion";
import { Wifi, Coffee, Globe, Shield } from "lucide-react";

const FEATURES = [
    {
        title: "Enterprise Grade Wifi",
        desc: "1Gbps fiber dedicated lines with backup redundancy.",
        icon: Wifi,
    },
    {
        title: "Premium Amenities",
        desc: "Artisan coffee, ergonomic Miller chairs, and showers.",
        icon: Coffee,
    },
    {
        title: "Multiple Access",
        desc: "One membership, 10+ convienient locations.",
        icon: Globe,
    },
    {
        title: "Secure Access",
        desc: "App based entry and 24/7 on site security.",
        icon: Shield,
    },
];

export function Features() {
    return (
        <section className="py-20 px-4 md:px-12 w-full bg-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start">

                {/* Left: Headline */}
                <div className="my-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-medium tracking-wide uppercase text-sm md:text-lg mb-4 md:mb-6 block"
                    >
                        Why Corus?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl sm:text-5xl md:text-8xl font-medium leading-[1] md:leading-[0.9] mb-6 md:mb-8"
                    >
                        More than <br /> just a desk.
                    </motion.h2>
                    <p className="text-lg md:text-2xl text-muted-foreground w-full md:w-3/4 leading-relaxed">
                        We handle the logistics so you can focus on the breakthrough. Experience a workspace that works as hard as you do.
                    </p>
                </div>

                {/* Right: Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {FEATURES.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="bg-card px-8 pt-8 pb-12 rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-colors relative"
                        >
                            <h3 className="font-display text-3xl font-medium mb-4 text-white">{feature.title}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">{feature.desc}</p>
                            <feature.icon className="h-8 w-12 text-primary absolute bottom-4 right-4" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
