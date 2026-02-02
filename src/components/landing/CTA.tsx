"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="py-24 px-4 md:px-12 w-full">
            <div className="mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-br from-primary/20 via-card to-primary/10 border border-primary/30 rounded-[3rem] p-12 md:p-16 overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(227,213,202,0.3),transparent_50%)]" />
                        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(227,213,202,0.2),transparent_50%)]" />
                    </div>

                    {/* Content */}
                    <div className="relative text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6"
                        >
                            Ready to Transform <br className="hidden md:block" />
                            Your Workspace?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto"
                        >
                            Join professionals who've discovered a better way to work. <br className="hidden md:block" />
                            Get started today with no commitment required.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Button
                                size="lg"
                                className="h-16 px-16 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg shadow-xl shadow-primary/30"
                                asChild
                            >
                                <a href="/spaces" className="flex items-center">
                                    Browse Spaces <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                            </Button>
                            <div className="w-px h-12 bg-white/50 transform rotate-15 hidden md:block" />
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-16 px-10 rounded-full border-white/30 font-semibold text-lg"
                                asChild
                            >
                                <a href="/list-space">List Your Space</a>
                            </Button>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-white/60"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span>Cancel anytime</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span>24/7 support</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
