"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLANS = [
    {
        name: "Flex",
        price: "15",
        period: "per hour",
        description: "Perfect for occasional users who need flexibility",
        features: [
            "Pay as you go",
            "Access to all spaces",
            "High-speed wifi",
            "Deals and discounts",
            "Mobile app access"
        ],
        cta: "Get Started",
        popular: false
    },
    {
        name: "Pro",
        price: "299",
        period: "per month",
        description: "Best for professionals who work regularly",
        features: [
            "All Flex features",
            "50+ hours per month",
            "Priority booking",
            "Dedicated support",
            "Guest passes"
        ],
        cta: "Start Free Trial",
        popular: true
    },
    {
        name: "Team",
        price: "Custom",
        period: "contact us",
        description: "Tailored solutions for growing teams",
        features: [
            "Unlimited hours",
            "Private offices available",
            "All Pro features",
            "Team management",
            "Custom billing"
        ],
        cta: "Contact Sales",
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
                                <span className="text-5xl font-bold text-white">AED {plan.price}</span>
                                <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground mb-8">
                                {plan.description}
                            </p>

                            {/* CTA Button */}
                            <a href="/login">
                                <Button
                                    className={`w-full mb-8 h-12 rounded-2xl font-semibold ${plan.popular
                                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                        }`}
                                    asChild
                                >
                                    {plan.cta}
                                </Button>
                            </a>

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
