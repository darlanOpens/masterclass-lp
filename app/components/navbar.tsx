import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">
            <span className="text-[#db3425]">C.R.E.</span> Method
          </div>
          <Button className="bg-[#db3425] hover:bg-[#db3425]/90 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 glow-red">
            Garantir Vaga
          </Button>
        </div>
      </div>
    </nav>
  )
}
