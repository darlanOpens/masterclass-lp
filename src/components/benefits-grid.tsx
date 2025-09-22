import { Card } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Target, Zap, Shield, Repeat } from "lucide-react"

export function BenefitsGrid() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Mais venda com menos CAC",
      description: "Expansão guiada por experiência, não por desconto",
      color: "text-green-500",
    },
    {
      icon: Target,
      title: "Planos claros",
      description: "3-5 movimentos de alto impacto para rodar em 7 dias",
      color: "text-[#db3425]",
    },
    {
      icon: Repeat,
      title: "C.R.E. na prática",
      description: "Como 'Cliente feliz' puxa 'Receita' e é sustentado por 'Experiência'",
      color: "text-[#1f2b66]",
    },
    {
      icon: Zap,
      title: "Flywheel > funil",
      description: "Pare de 'queimar' topo; faça a base girar e multiplicar",
      color: "text-yellow-500",
    },
    {
      icon: Shield,
      title: "Mensurável",
      description: "Indicadores simples (AOV, attach rate, NRR) e metas realistas",
      color: "text-blue-500",
    },
    {
      icon: CheckCircle,
      title: "Resultados garantidos",
      description: "Método testado e aprovado por centenas de empresas",
      color: "text-purple-500",
    },
  ]

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            O que você vai{" "}
            <span className="bg-gradient-to-r from-[#db3425] to-[#1f2b66] bg-clip-text text-transparent">
              conquistar
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Depois da masterclass, você sai com clareza estratégica e ferramentas práticas para transformar sua Black
            Friday
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="bg-white/5 border border-white/10 p-8 card-hover group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 space-y-6">
                  <div className={`${benefit.color} bg-current/10 border border-current/20 rounded-2xl p-4 w-fit`}>
                    <Icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#db3425] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
