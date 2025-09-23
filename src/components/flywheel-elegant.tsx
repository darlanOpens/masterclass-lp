"use client"

export function FlywheelElegant() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/20 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-900/50 backdrop-blur border border-slate-800/50 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="text-slate-400 text-sm font-medium tracking-wide">
              O FLYWHEEL
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Como o C.R.E. Se{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Auto Acelera
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Um ciclo virtuoso onde cada etapa fortalece a próxima
          </p>
        </div>

        {/* Flywheel Visual */}
        <div className="relative bg-slate-900/30 backdrop-blur border border-slate-800/50 rounded-3xl p-12 md:p-20">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-blue-600/5 rounded-3xl" />

          <div className="relative flex items-center justify-center">
            {/* SVG Flywheel */}
            <div className="w-full max-w-4xl mx-auto">
              <img
                src="/masterclass-bf/Flywheel.svg"
                alt="Flywheel C.R.E. - Ciclo virtuoso da Black Friday"
                className="w-full h-auto mx-auto"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </div>
        </div>

        {/* Explicação */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <blockquote className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8">
            <p className="text-xl text-slate-300 font-light italic mb-4">
              "Fazemos uma promessa → cliente experimenta → resolvemos seu problema →
              ele alcança sucesso → e agora podemos fazer uma promessa ainda melhor.
              Cada volta do flywheel nos ensina e acelera o próximo ciclo."
            </p>
            <cite className="text-slate-400 not-italic font-medium">
              — O ciclo C.R.E. que se auto acelera
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}