import { Button } from "@/components/ui/button"
import { useCTATracking } from "@/hooks/use-analytics"

export function Navbar() {
  const { trackCTA } = useCTATracking()
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            <span className="text-[#db3425]">C.R.E.</span> Method
          </div>

          {/* CTA Button - Always visible */}
          <Button
            onClick={() => {
              trackCTA('garantir_vaga', 'navbar', 'primary')
              document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-[#db3425] hover:bg-[#db3425]/90 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:scale-105 transition-all duration-300 min-h-[44px] text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Garantir Vaga</span>
            <span className="sm:hidden">Inscreva-se</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
