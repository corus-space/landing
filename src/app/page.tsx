import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/landing/Hero";
import { SpaceGrid } from "@/components/landing/SpaceGrid";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
// import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { CTA } from "@/components/landing/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/20">
      <Navbar />

      <div className="mt-16">
        <Hero />

        {/* Features / Value Prop Section (Quick implementation) */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
          <div className="w-full px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Flexible Booking</h3>
              <p className="text-sm text-muted-foreground">Pay significantly less by booking only the hours you need.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Verified Spaces</h3>
              <p className="text-sm text-muted-foreground">Every space is vetted for high-speed internet and comfort.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Instant Access</h3>
              <p className="text-sm text-muted-foreground">Book and check-in instantly with our digital pass.</p>
            </div>
          </div>
        </section>

        <SpaceGrid />
        <Features />
        <HowItWorks />
        {/* <Testimonials /> */}
        <Pricing />
        <CTA />
      </div>

      <footer className="py-10 border-t border-white/10 bg-black mt-10">
        <div className="w-full px-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CORUS. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
