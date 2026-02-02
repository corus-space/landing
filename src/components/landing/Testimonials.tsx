"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "Sarah Chen",
        role: "Product Designer",
        company: "Figma",
        rating: 5,
        quote: "CORUS has completely transformed how I work. The spaces are beautiful, the wifi is lightning fast, and I can book exactly when I need it."
    },
    {
        name: "Marcus Rodriguez",
        role: "Startup Founder",
        company: "TechVenture",
        rating: 5,
        quote: "As a founder, flexibility is everything. CORUS lets me scale my workspace needs up or down instantly. The quality of spaces and amenities is consistently excellent."
    },
    {
        name: "Emily Watson",
        role: "Content Creator",
        company: "Independent",
        rating: 5,
        quote: "I've tried every coworking space in the city. CORUS stands out with its premium feel, quiet environment, and the ability to book by the hour. It's perfect for my workflow."
    }
];

export function Testimonials() {
    return (
        <section className="py-24 px-4 md:px-12 w-full bg-white/[0.02]">
            <div className="mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block">
                        Testimonials
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
                        Loved by Professionals
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of professionals who've made CORUS their workspace of choice.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-white/5 rounded-3xl p-8 hover:border-primary/30 transition-all"
                        >
                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="text-primary font-semibold text-lg">
                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.role} at {testimonial.company}
                                    </div>
                                </div>
                            </div>

                            {/* Rating Stars */}
                            <div className="flex gap-1 mt-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-white/90 leading-relaxed mt-4 text-lg">
                                "{testimonial.quote}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
