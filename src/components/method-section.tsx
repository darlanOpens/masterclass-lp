import { Card } from "@/components/ui/card"
import { Users, DollarSign, Star, RefreshCw, ArrowRight } from "lucide-react"

export function MethodSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header with asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              O método{" "}
              <span className="bg-gradient-to-r from-[#db3425] to-[#1f2b66] bg-clip-text text-transparent">C.R.E.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-xl text-gray-400 leading-relaxed">
              ELG (Experience-Led Growth): crescer pela experiência entregue à base — não pela compra de alcance. Um
              sistema que se acelera sozinho.
            </p>
          </div>
        </div>

        {/* C.R.E. Cards in innovative layout */}
        <div className="grid lg:grid-cols-6 gap-6 mb-20">
          {/* Cliente - Large card */}
          <Card className="lg:col-span-3 bg-gradient-to-br from-[#db3425]/10 to-transparent border border-[#db3425]/20 p-8 card-hover group">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#db3425]/20 border border-[#db3425]/30 rounded-2xl p-4">
                  <Users className="w-8 h-8 text-[#db3425]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Cliente</h3>
                  <div className="text-[#db3425] font-medium">Feliz</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Remove atrito e acelera o tempo-até-valor. Cliente satisfeito é a base de tudo.
              </p>
              <div className="flex items-center text-[#db3425] font-medium group-hover:translate-x-2 transition-transform">
                <span>Saiba mais</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Card>

          {/* Receita - Medium card */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 p-6 card-hover group">
            <div className="space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-2xl p-3 w-fit">
                <DollarSign className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Receita</h3>
                <div className="text-yellow-500 font-medium text-sm">Expansão Natural</div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">Upsell/cross-sell/upgrade no momento certo.</p>
            </div>
          </Card>

          {/* Experiência - Small card */}
          <Card className="lg:col-span-1 bg-gradient-to-br from-[#1f2b66]/10 to-transparent border border-[#1f2b66]/20 p-6 card-hover group flex flex-col justify-center">
            <div className="space-y-4 text-center">
              <div className="bg-[#1f2b66]/20 border border-[#1f2b66]/30 rounded-2xl p-3 w-fit mx-auto">
                <Star className="w-6 h-6 text-[#1f2b66]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Experiência</h3>
                <p className="text-gray-400 text-xs mt-2">Pós-compra que gera indicação</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Flywheel - Full width modern card */}
        <Card className="bg-gradient-to-r from-black via-gray-900/50 to-black border border-white/10 p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#db3425]/5 via-transparent to-[#1f2b66]/5" />
          <div className="relative z-10">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="bg-white/10 border border-white/20 rounded-3xl p-6 w-fit">
                  <RefreshCw className="w-12 h-12 text-[#db3425]" />
                </div>
              </div>
              <div className="lg:col-span-10 space-y-6">
                <h3 className="text-4xl font-bold text-white">Flywheel: O ciclo que se acelera</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Satisfação → expansão → advocacy → mais dados → personalização melhor → mais velocidade.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-gray-400 italic">
                    "Melhor que funil linear, que termina quando a venda acaba. O flywheel continua girando e gerando
                    resultados."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
