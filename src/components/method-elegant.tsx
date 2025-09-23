export function MethodElegant() {
  const methodCards = [
    {
      letter: "C",
      title: "Cliente Feliz",
      subtitle: "O principal ativo",
      description: "Remove atritos e acelera o tempo-até-valor. Cliente satisfeito é a base de tudo.",
      color: "from-red-600/20 to-red-600/5",
      borderColor: "border-red-600/30"
    },
    {
      letter: "R",
      title: "Receita",
      subtitle: "Expansão Natural",
      description: "Upsell, cross-sell e upgrade no momento certo. Crescimento sustentável.",
      color: "from-slate-600/20 to-slate-600/5",
      borderColor: "border-slate-600/30"
    },
    {
      letter: "E",
      title: "Experiência",
      subtitle: "Memorável",
      description: "Pós-compra excepcional que transforma clientes em embaixadores da marca.",
      color: "from-blue-600/20 to-blue-600/5",
      borderColor: "border-blue-600/30"
    }
  ]

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/20 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-900/50 backdrop-blur border border-slate-800/50 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="text-slate-400 text-sm font-medium tracking-wide">
              O MÉTODO
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            C.R.E.
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Três pilares que formam um sistema de crescimento exponencial.
            <span className="block mt-2 text-slate-400 text-lg">
              Experience-Led Growth que se acelera sozinho.
            </span>
          </p>
        </div>

        {/* Method cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {methodCards.map((card, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-b ${card.color} backdrop-blur border ${card.borderColor} rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Card glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Large letter */}
                <div className="text-8xl md:text-9xl font-black text-white/20 mb-4 leading-none">
                  {card.letter}
                </div>

                {/* Title and subtitle */}
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <div className="text-red-400 font-semibold text-lg">
                    {card.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed text-lg">
                  {card.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Flywheel section */}
        <div className="relative bg-slate-900/30 backdrop-blur border border-slate-800/50 rounded-3xl p-12 md:p-16">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-blue-600/5 rounded-3xl" />

          <div className="relative text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900/50 backdrop-blur border border-slate-800/50 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-red-600 rounded-full" />
              <span className="text-slate-400 text-sm font-medium tracking-wide">
                O FLYWHEEL
              </span>
            </div>

            {/* Content */}
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Como o C.R.E. Se{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Auto Acelera
              </span>
            </h3>

            <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-8">
              Promessa → Experiência → Problema Resolvido → Sucesso → Promessa Melhor.
              <span className="block mt-2 text-slate-400 text-lg">
                Cada volta do ciclo nos ensina e acelera o próximo.
              </span>
            </p>

            {/* Flywheel SVG */}
            <div className="mb-12">
              <div className="w-full max-w-2xl mx-auto">
                <img
                  src="/masterclass-bf/Flywheel.svg"
                  alt="Flywheel C.R.E. - Ciclo virtuoso"
                  className="w-full h-auto mx-auto"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>

            {/* Quote */}
            <blockquote className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8">
              <p className="text-2xl text-white font-light italic mb-4">
                "Fazemos uma promessa → cliente experimenta → resolvemos seu problema →
                ele alcança sucesso → e agora podemos fazer uma promessa ainda melhor."
              </p>
              <cite className="text-slate-400 not-italic font-medium">
                — O ciclo C.R.E. que se auto acelera
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}