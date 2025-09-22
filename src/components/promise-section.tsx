import { Card } from "@/components/ui/card"
import { TrendingUp, Target, Repeat, Zap, BarChart3 } from "lucide-react"

const promises = [
  {
    icon: TrendingUp,
    title: "Mais venda com menos CAC",
    description: "Expansão (upsell/cross-sell) guiada por experiência, não por desconto.",
  },
  {
    icon: Target,
    title: "Planos claros",
    description: "3–5 movimentos de alto impacto para rodar em 7 dias na sua base.",
  },
  {
    icon: Repeat,
    title: "C.R.E. na prática",
    description: "Como 'Cliente feliz' puxa 'Receita' e é sustentado por 'Experiência' — um ciclo que se acelera.",
  },
  {
    icon: Zap,
    title: "Flywheel > funil",
    description: "Pare de 'queimar' topo; faça a base girar e multiplicar a própria demanda.",
  },
  {
    icon: BarChart3,
    title: "Mensurável",
    description: "Indicadores simples (AOV, attach rate, NRR, repeat D+30) e metas realistas para BF.",
  },
]

export function PromiseSection() {
  return (
    <section className="py-20 bg-[#020718]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">
            O que você vai aprender na masterclass
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {promises.map((promise, index) => (
            <Card key={index} className="card-gradient border-white/10 p-6 hover:scale-105 transition-transform">
              <div className="bg-white/10 border border-white/20 rounded-xl p-3 w-fit mb-4">
                <promise.icon className="w-6 h-6 text-[#db3425]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{promise.title}</h3>
              <p className="text-[#8C8DA2] text-sm leading-relaxed">{promise.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Se hoje você sente:</h3>
            <ul className="space-y-4">
              {[
                "Dependência de mídia paga e promoções agressivas para fazer caixa.",
                "Base grande, mas parada — baixo engajamento e pouca recompra.",
                "'Cross-sell' com chute, sem personalização ou timing.",
                "Falta de playbooks prontos para a equipe executar.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#db3425] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#8C8DA2]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Depois da Masterclass, você sai com:</h3>
            <ul className="space-y-4">
              {[
                "Clareza estratégica para expandir sua base de clientes.",
                "Confiança para tomar decisões rápidas e eficazes.",
                "Domínio sobre a comunicação com seus clientes atuais.",
                "Visão sistêmica para escalar o que realmente funciona.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D0A420] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
