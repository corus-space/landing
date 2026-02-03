"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLANS = [
    {
        name: "Quick Top-up",
        price: "15",
        credits: "20",
        coupons: "1",
        description: "Perfect for a single session or a quick meeting.",
        features: [
            "20 AED Credit balance",
            "+1 Extra Access Coupon",
            "No expiry / Time limits",
            "Instant wallet credit",
            "High-speed wifi"
        ],
        cta: "Top Up Now",
        popular: false
    },
    {
        name: "Value Top-up",
        price: "125",
        credits: "140",
        coupons: "2",
        description: "Scale your workflow with extra access coupons.",
        features: [
            "140 AED Credit balance",
            "+2 Extra Access Coupons",
            "No expiry / Time limits",
            "Access to all spaces",
            "Priority support"
        ],
        cta: "Get Started",
        popular: true
    },
    {
        name: "Premium Top-up",
        price: "250",
        credits: "300",
        coupons: "3",
        description: "The ultimate pack with maximum rewards.",
        features: [
            "300 AED Credit balance",
            "+3 Extra Access Coupons",
            "No expiry / Time limits",
            "Dedicated account manager",
            "Custom booking support"
        ],
        cta: "Go Premium",
        popular: false
    }
];

export function Pricing() {
    return (
        <section className="py-24 px-4 md:px-12 w-full bg-white/5">
            <div className="mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block">
                        Pricing
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6">
                        Choose Your Plan
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                        Flexible pricing that scales with your needs. No hidden fees, cancel anytime.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PLANS.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-card border rounded-3xl p-8 hover:scale-105 transition-all ${plan.popular
                                ? 'border-primary/50 shadow-2xl shadow-primary/20'
                                : 'border-white/5'
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                                    Most Popular
                                </div>
                            )}

                            {/* Plan Name */}
                            <h3 className="font-display text-3xl font-bold text-white mb-2">
                                {plan.name}
                            </h3>

                            {/* Price */}
                            <div className="mb-4">
                                <span className="text-5xl font-bold text-primary">AED {plan.price}</span>
                                <span className="text-muted-foreground ml-2">/ one-time</span>
                            </div>

                            <div className="mb-6 flex items-center gap-2">
                                <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                                    {plan.credits} AED Credits
                                </div>
                                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider">
                                    +{plan.coupons} Coupons
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground mb-8 text-sm">
                                {plan.description}
                            </p>

                            {/* CTA Button */}
                            <Button
                                className={`w-full mb-8 h-12 rounded-2xl font-semibold transition-all ${plan.popular
                                    ? 'bg-primary text-primary-foreground hover:bg-white hover:text-black shadow-lg shadow-primary/20'
                                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                                    }`}
                                asChild
                            >
                                <a href="/login">{plan.cta}</a>
                            </Button>

                            {/* Features List */}
                            <div className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
