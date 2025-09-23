'use client'

import { HeroElegant } from "@/components/hero-elegant"
import { MethodElegant } from "@/components/method-elegant"
import { FormElegant } from "@/components/form-elegant"
import { AuthorSection } from "@/components/author-section"
import { BenefitsGrid } from "@/components/benefits-grid"
import { FreeSection } from "@/components/free-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { useScrollTracking, useTimeOnPage } from "@/hooks/use-analytics"

export default function Home() {
  // Global tracking hooks
  useScrollTracking()
  useTimeOnPage()

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <HeroElegant />
        <MethodElegant />
        <FormElegant />
        <AuthorSection />
        <BenefitsGrid />
        <FreeSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}