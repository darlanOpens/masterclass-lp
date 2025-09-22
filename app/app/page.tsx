import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsGrid } from "@/components/stats-grid"
import { MethodSection } from "@/components/method-section"
import { AuthorSection } from "@/components/author-section"
import { BenefitsGrid } from "@/components/benefits-grid"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <Navbar />
        <HeroSection />
        <StatsGrid />
        <MethodSection />
        <AuthorSection />
        <BenefitsGrid />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
