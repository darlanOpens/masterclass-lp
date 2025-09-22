import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const objections = [
  {
    objection: "Não tenho time grande.",
    response: "Os playbooks são enxutos; 1–2 pessoas implementam.",
  },
  {
    objection: "Minha base é pequena.",
    response: "Justamente por isso você precisa extrair mais valor por cliente.",
  },
  {
    objection: "Só funciona para e-commerce?",
    response: "Não. Serviços e B2B aplicam com upgrade/recorrência.",
  },
  {
    objection: "Não quero desconto.",
    response: "Ótimo. O foco é experiência + relevância, não queima de margem.",
  },
]

export function ObjectionsSection() {
  return (
    <section className="py-20 bg-[#151D42]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">Para quem é (e quem não é)</h2>
          <p className="text-lg text-[#8C8DA2] max-w-3xl mx-auto text-pretty">
            Ideal para donos/gestores de e-commerce, serviços ou B2B que já têm base de clientes e querem monetizar
            melhor na Black Friday.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="card-gradient border-white/10 p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-[#D0A420]" />
              Ideal para você se:
            </h3>
            <ul className="space-y-4">
              {[
                "Já têm base de clientes e querem monetizar melhor na BF.",
                "Buscam lucro (não só faturamento) e previsibilidade.",
                "Querem playbooks simples, sem projeto gigante.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D0A420] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#8C8DA2]">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="card-gradient border-white/10 p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#db3425]/20 border border-[#db3425] flex items-center justify-center">
                <span className="text-[#db3425] text-sm">✕</span>
              </div>
              Não é para quem:
            </h3>
            <p className="text-[#8C8DA2] leading-relaxed">
              Só quer "cupom de 50%" para novos, sem pensar em relação com quem já compra.
            </p>
          </Card>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Dúvidas frequentes</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {objections.map((item, index) => (
              <Card key={index} className="card-gradient border-white/10 p-6">
                <h4 className="text-lg font-semibold text-white mb-3">"{item.objection}"</h4>
                <p className="text-[#8C8DA2] leading-relaxed">{item.response}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
