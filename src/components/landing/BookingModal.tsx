"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    spaceName: string;
    price: string;
}

export function BookingModal({ isOpen, onClose, spaceName, price }: BookingModalProps) {
    const [step, setStep] = useState<"select" | "success">("select");

    const handleConfirm = () => {
        setStep("success");
        setTimeout(() => {
            onClose();
            setTimeout(() => setStep("select"), 300); // Reset after close
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 10 }}
                        className="z-50 w-[90%] md:w-[600px]"
                    >
                        <Card className="glass-card border-white/10 bg-zinc-950/90 shadow-2xl">
                            <CardHeader className="relative">
                                <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
                                    <X className="h-4 w-4" />
                                </Button>
                                <CardTitle className="text-xl">{step === "select" ? "Book Your Slot" : "Booking Confirmed!"}</CardTitle>
                                <CardDescription>
                                    {step === "select" ? `Reserve a spot at ${spaceName}` : "We've sent the details to your email."}
                                </CardDescription>
                            </CardHeader>

                            {step === "select" ? (
                                <>
                                    <CardContent className="space-y-4">
                                        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-muted-foreground">Price</span>
                                                <span className="text-lg font-bold text-primary">{price}</span>
                                            </div>
                                        </div>

                                        <div className="grid gap-2">
                                            <label className="text-sm font-medium">Select Date</label>
                                            <div className="flex items-center rounded-md border border-input bg-transparent px-3 py-2">
                                                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm">Today, Oct 24</span>
                                            </div>
                                        </div>

                                        <div className="grid gap-2">
                                            <label className="text-sm font-medium">Duration</label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {["1 Hour", "4 Hours", "Full Day"].map((d) => (
                                                    <button key={d} className="rounded-md border border-input bg-white/5 px-3 py-2 text-sm hover:bg-primary/20 hover:border-primary transition-colors focus:bg-primary/20 focus:border-primary focus:outline-none">
                                                        {d}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full" variant="premium" onClick={handleConfirm}>
                                            Confirm Booking
                                        </Button>
                                    </CardFooter>
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center p-8 text-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-500"
                                    >
                                        <CheckCircle className="h-8 w-8" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white">You're Checked In!</h3>
                                    <p className="mt-2 text-muted-foreground">See you at {spaceName}.</p>
                                </div>
                            )}
                        </Card>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
