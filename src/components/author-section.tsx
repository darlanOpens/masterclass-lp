import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, TrendingUp, Award } from "lucide-react"

export function AuthorSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Photo and floating elements */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main photo with gradient border */}
              <div className="aspect-square bg-gradient-to-br from-[#db3425] to-[#1f2b66] rounded-3xl p-1">
                <div className="w-full h-full bg-black rounded-3xl overflow-hidden">
                  <img src="/professional-business-person-presenting-data-analy.jpg" alt="Douglas Conrad" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Floating achievement cards */}
              <div className="absolute -top-6 -right-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 card-hover">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#db3425]" />
                  <div>
                    <div className="text-sm font-bold text-white">Criador ELG</div>
                    <div className="text-xs text-gray-400">Método exclusivo</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 card-hover">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="text-sm font-bold text-white">CRO Opens</div>
                    <div className="text-xs text-gray-400">Growth expert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <Badge className="bg-[#db3425]/10 border-[#db3425]/20 text-[#db3425] px-4 py-2 rounded-full font-medium w-fit">
                Quem vai conduzir a masterclass
              </Badge>

              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Douglas{" "}
                <span className="bg-gradient-to-r from-[#db3425] to-[#1f2b66] bg-clip-text text-transparent">
                  Conrad
                </span>
              </h2>

              <p className="text-xl text-gray-400 leading-relaxed">
                Criador do Método Experience-Led Growth (ELG), CRO da Opens e Mentor do G4 Educação. Especialista em
                transformar base de clientes em faturamento recorrente.
              </p>
            </div>

            {/* Experience cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-white/5 border border-white/10 p-6 card-hover">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="w-6 h-6 text-[#db3425]" />
                  <div>
                    <div className="font-bold text-white">CRO da Opens</div>
                    <div className="text-sm text-gray-400">Growth & Revenue</div>
                  </div>
                </div>
                <p className="text-sm text-gray-300">Liderando estratégias de crescimento e otimização de receita</p>
              </Card>

              <Card className="bg-white/5 border border-white/10 p-6 card-hover">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="w-6 h-6 text-[#1f2b66]" />
                  <div>
                    <div className="font-bold text-white">Mentor G4</div>
                    <div className="text-sm text-gray-400">Educação</div>
                  </div>
                </div>
                <p className="text-sm text-gray-300">Mentoria em experiência do cliente e crescimento sustentável</p>
              </Card>
            </div>

            {/* Expertise tags */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Especialidades</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Experience-Led Growth",
                  "Customer Success",
                  "Revenue Optimization",
                  "Flywheel Strategy",
                  "Black Friday Growth",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-[#db3425]/20 to-[#1f2b66]/20 border border-white/10 px-4 py-2 rounded-full text-sm text-white font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
