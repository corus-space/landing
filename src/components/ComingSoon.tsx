'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Home } from 'lucide-react';
import { useState, useMemo } from 'react';
import Link from 'next/link';

// Custom Instagram icon component (lucide-react Instagram is deprecated)
const InstagramIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

export function ComingSoon() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Generate stable particle positions to avoid hydration errors
    const particles = useMemo(() => {
        return Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: (i * 37 + 13) % 100, // Pseudo-random but stable
            top: (i * 53 + 29) % 100,
            duration: 3 + (i % 3),
            delay: (i % 4) * 0.5,
        }));
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Add email submission logic
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen w-full bg-black relative overflow-hidden flex items-center justify-center">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(227, 213, 202, 0.15) 0%, transparent 70%)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(26, 44, 44, 0.4) 0%, transparent 70%)',
                    }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Floating Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                    }}
                />
            ))}

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Back to Home Link */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="my-12"
                >
                    <Link href="/">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all cursor-pointer"
                        >
                            <Home className="w-6 h-6 text-primary" />
                            <span className="text-lg font-semibold text-white">Back to Home</span>
                        </motion.div>
                    </Link>
                </motion.div>

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 flex flex-col items-center"
                >
                    <img
                        src="/logo-tp.png"
                        alt="CORUS Logo"
                        className="w-12 h-12 md:w-28 md:h-28 mb-6 object-contain"
                    />
                    <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
                        CORUS
                    </h1>
                    <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
                </motion.div>

                {/* Coming Soon Text */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <h2 className="font-display text-4xl md:text-6xl font-semibold text-white mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                        Coming Soon
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        We're crafting something extraordinary. A premium workspace experience
                        that redefines how you work, create, and collaborate.
                    </p>
                </motion.div>

                {/* Interest Form Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-12"
                >
                    <motion.a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf4391gz2xVm2erF3rIza_GVsMvxX3Kn3tOcJRbpcLcFgEffA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-semibold text-lg rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/30"
                    >
                        I'm Interested
                    </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex justify-center gap-6"
                >
                    {[
                        { Icon: Mail, href: 'mailto:support@corus.space' },
                        { Icon: InstagramIcon, href: 'https://instagram.com/corus.space' },
                        { Icon: Linkedin, href: 'https://www.linkedin.com/company/corus-space' },
                    ].map(({ Icon, href }, i) => (
                        <motion.a
                            key={i}
                            href={href}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all"
                        >
                            <Icon className="w-5 h-5 text-white" />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Footer Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-12 text-sm text-muted-foreground"
                >
                    © {new Date().getFullYear()} CORUS. All rights reserved.
                </motion.p>
            </div>
        </div>
    );
}
