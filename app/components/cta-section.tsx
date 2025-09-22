import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f2b66]/20 via-[#db3425]/10 to-[#1f2b66]/20 blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Pronto para{" "}
            <span className="bg-gradient-to-r from-[#db3425] to-[#1f2b66] bg-clip-text text-transparent">
              Transformar
            </span>{" "}
            sua Black Friday?
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
            Não perca mais tempo com estratégias que não funcionam. Garante já sua vaga na masterclass que vai
            revolucionar seus resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#db3425] to-[#db3425]/80 hover:from-[#db3425]/90 hover:to-[#db3425]/70 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl shadow-[#db3425]/25 border-0 transition-all duration-300 hover:scale-105"
            >
              QUERO MINHA VAGA AGORA
            </Button>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Últimas vagas disponíveis</span>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-8 h-8 bg-gradient-to-r from-[#db3425] to-[#1f2b66] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <span className="text-gray-300">Acesso Imediato</span>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-8 h-8 bg-gradient-to-r from-[#db3425] to-[#1f2b66] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <span className="text-gray-300">Garantia de 7 dias</span>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-8 h-8 bg-gradient-to-r from-[#db3425] to-[#1f2b66] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <span className="text-gray-300">Suporte Exclusivo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
