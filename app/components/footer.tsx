import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-20 bg-[#020718] border-t border-white/6">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance">Garanta sua vaga para 15/10, 19h</h2>
            <p className="text-lg text-[#8C8DA2] max-w-2xl mx-auto text-pretty">
              Evento ao vivo e prático. Vagas limitadas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gold-gradient text-[#0B2057] font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform text-lg">
              Garantir minha vaga agora
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full bg-transparent"
            >
              Receber lembrete no WhatsApp
            </Button>
          </div>

          <div className="pt-12 border-t border-white/6">
            <p className="text-[#8C8DA2] text-sm">© 2024 ELG Method. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
