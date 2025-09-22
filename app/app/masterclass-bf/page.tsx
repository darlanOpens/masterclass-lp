import { HeroElegant } from "../../components/hero-elegant"
import { MethodElegant } from "../../components/method-elegant"
import { FreeSection } from "../../components/free-section"
import { FormElegant } from "../../components/form-elegant"
import { FAQElegant } from "../../components/faq-elegant"

export default function ElegantPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section with Integrated Navigation */}
      <HeroElegant />

      {/* C.R.E. Method */}
      <MethodElegant />

      {/* Free Section */}
      <FreeSection />

      {/* Lead Capture Form */}
      <FormElegant />

      {/* FAQ Section */}
      <FAQElegant />

      {/* Simple Footer */}
      <footer className="py-16 px-6 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-slate-500 text-sm mb-4">
            © 2024 Masterclass Black Friday - Método C.R.E.
          </div>
          <div className="text-slate-600 text-xs">
            Experience-Led Growth para sua Black Friday
          </div>
        </div>
      </footer>
    </main>
  )
}