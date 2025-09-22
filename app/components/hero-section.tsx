import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f2b66]/20 via-black to-black" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left content - spans 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#db3425]/10 border-[#db3425]/20 text-[#db3425] px-4 py-2 rounded-full font-medium">
                🔥 Masterclass Exclusiva • 15 de Outubro
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[0.9] text-balance">
                Transforme pontos de contato em{" "}
                <span className="bg-gradient-to-r from-[#db3425] to-[#1f2b66] bg-clip-text text-transparent">
                  conversão
                </span>{" "}
                na Black Friday
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl text-pretty">
                Os 3 pilares C.R.E. na Black Friday: Gire seu flywheel para vendas previsíveis, clientes satisfeitos e
                experiência impecável.
              </p>
            </div>

            {/* Event details in modern card format */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#db3425]" />
                  <span className="font-medium">15 de outubro, 19h</span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#db3425]" />
                  <span className="font-medium">Ao vivo</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <User className="w-5 h-5 text-[#db3425]" />
                <span className="font-medium">Com Douglas Conrad — Criador do Método ELG</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#db3425] hover:bg-[#db3425]/90 text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 text-lg group glow-red">
                Quero minha vaga
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full bg-transparent font-medium"
              >
                Convide no WhatsApp
              </Button>
            </div>
          </div>

          {/* Right visual - spans 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main image placeholder */}
              <div className="aspect-[4/5] bg-gradient-to-br from-[#1f2b66] to-[#db3425] rounded-3xl p-1">
                <div className="w-full h-full bg-black rounded-3xl flex items-center justify-center">
                  <img
                    src="/douglas-hero.jpg"
                    alt="Douglas Conrad apresentando método ELG"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -left-8 top-1/3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 card-hover">
                <div className="text-3xl font-bold text-[#db3425] mb-2">300%</div>
                <div className="text-sm text-gray-400">Aumento em conversão</div>
                <div className="text-xs text-gray-500 mt-1">com método C.R.E.</div>
              </div>

              {/* Floating growth indicator */}
              <div className="absolute -right-6 bottom-1/4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 card-hover">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Ao vivo</span>
                </div>
                <div className="text-xs text-gray-400">Vagas limitadas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
