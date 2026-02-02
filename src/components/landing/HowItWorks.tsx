"use client";

import { motion } from "framer-motion";
import { Search, Calendar, Key, CheckCircle } from "lucide-react";

const STEPS = [
    {
        icon: Search,
        title: "Browse Spaces",
        description: "Explore our curated collection of premium workspaces in your area.",
        step: "01"
    },
    {
        icon: Calendar,
        title: "Book Instantly",
        description: "Select your preferred time slot and book in seconds with our seamless platform.",
        step: "02"
    },
    {
        icon: Key,
        title: "Access Digitally",
        description: "Receive your digital access pass and check-in with our mobile app.",
        step: "03"
    },
    {
        icon: CheckCircle,
        title: "Work & Create",
        description: "Enjoy premium amenities and focus on what matters most.",
        step: "04"
    }
];

export function HowItWorks() {
    return (
        <section className="py-24 px-4 md:px-12 w-full bg-gradient-to-b from-black to-[#09090b]">
            <div className="mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block">
                        Simple Process
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
                        How It Works
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get started in minutes. Finding and booking your perfect workspace has never been easier.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative text-center"
                        >
                            {/* Card */}
                            <div className="flex flex-col items-center relative -ms-2 py-8 h-full">
                                <div className="text-8xl font-display font-bold text-white/15">
                                    {step.step}
                                </div>
                                <h3 className="font-display text-2xl font-semibold text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Connector Line (hidden on last item) */}
                            {index < STEPS.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-10 w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
