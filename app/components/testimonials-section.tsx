import { Card } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Marina Silva",
    role: "CEO - Loja Virtual Premium",
    content: "Aplicamos o método C.R.E. na Black Friday passada e tivemos um aumento de 312% nas vendas. O mais impressionante foi a taxa de recompra pós-BF: 73% dos clientes voltaram!",
    rating: 5,
    avatar: "MS",
    highlight: "312% de aumento"
  },
  {
    name: "Carlos Mendes",
    role: "Diretor de E-commerce - Fashion Store",
    content: "Douglas entrega muito mais que estratégias. É um sistema completo que transformou nossa operação. Saímos de R$ 180mil para R$ 1.2M em apenas uma Black Friday.",
    rating: 5,
    avatar: "CM",
    highlight: "R$ 1.2M em vendas"
  },
  {
    name: "Ana Paula Costa",
    role: "Fundadora - Beauty Express",
    content: "O flywheel é revolucionário! Nosso CAC caiu 45% enquanto o ticket médio subiu 67%. Nunca vi nada parecido em 8 anos de mercado.",
    rating: 5,
    avatar: "AP",
    highlight: "CAC -45%"
  }
]

const companies = [
  "Magazine Luiza",
  "Americanas",
  "Mercado Livre",
  "Netshoes",
  "Dafiti",
  "Submarino"
]

export function TestimonialsSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Resultados{" "}
            <span className="bg-gradient-to-r from-[#db3425] to-[#1f2b66] bg-clip-text text-transparent">
              Comprovados
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Veja o que empresários que aplicaram o método C.R.E. têm a dizer
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/5 border border-white/10 p-8 relative overflow-hidden card-hover group"
            >
              {/* Highlight badge */}
              <div className="absolute -right-2 -top-2 bg-gradient-to-r from-[#db3425] to-[#1f2b66] text-white text-xs font-bold px-3 py-1 rounded-full">
                {testimonial.highlight}
              </div>

              <div className="relative z-10">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-[#db3425]/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#db3425] to-[#1f2b66] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Companies Section */}
        <div className="text-center">
          <p className="text-gray-400 mb-8 uppercase tracking-wider text-sm">
            Profissionais de empresas como
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div
                key={index}
                className="text-gray-400 font-medium text-lg hover:text-white transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 bg-gradient-to-r from-[#db3425]/10 via-black to-[#1f2b66]/10 border border-white/10 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#db3425]">+500</div>
              <div className="text-gray-400 text-sm mt-1">Empresas treinadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#db3425]">R$ 47M</div>
              <div className="text-gray-400 text-sm mt-1">Gerados em vendas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#db3425]">98%</div>
              <div className="text-gray-400 text-sm mt-1">Taxa de satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#db3425]">4.9/5.0</div>
              <div className="text-gray-400 text-sm mt-1">Avaliação média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}