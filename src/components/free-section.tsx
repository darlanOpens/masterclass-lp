"use client"

export function FreeSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/20 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-900/50 backdrop-blur border border-slate-800/50 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-slate-400 text-sm font-medium tracking-wide">
              100% GRATUITO
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Zero{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
              Investimento
            </span>
            <br />
            Máximo{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Resultado
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Não vendemos cursos. Compartilhamos conhecimento que funciona.
          </p>
        </div>

        {/* Visual Creative Section */}
        <div className="relative bg-slate-900/30 backdrop-blur border border-slate-800/50 rounded-3xl p-12 md:p-20 mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-red-600/5 rounded-3xl" />

          <div className="relative flex flex-col lg:flex-row items-center gap-16">
            {/* Left side - Visual representation */}
            <div className="flex-1 relative">
              {/* Creativity: Money/Price comparison */}
              <div className="space-y-8">
                {/* Expensive courses section */}
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 relative">
                  <div className="absolute -top-3 left-6 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Outros cursos
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Curso Génerico</h3>
                      <p className="text-slate-400">Conteúdo Extenso</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-red-400">R$ 1.997</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border border-slate-600 rounded-sm bg-slate-700/50" />
                      <span className="text-slate-400">Estratégias básicas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border border-slate-600 rounded-sm bg-slate-700/50" />
                      <span className="text-slate-400">Templates datados</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border border-slate-600 rounded-sm bg-slate-700/50" />
                      <span className="text-slate-400">Aulas Gravadas</span>
                    </div>
                  </div>
                </div>

                {/* VS Divider */}
                <div className="relative flex items-center justify-center py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-700"></div>
                  </div>
                  <div className="relative bg-slate-900 px-6 py-2 rounded-full border border-slate-700">
                    <span className="text-slate-400 font-medium">VS</span>
                  </div>
                </div>

                {/* Free masterclass section */}
                <div className="relative">
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-green-500 to-emerald-400 text-black px-3 py-1 rounded-full text-sm font-bold z-20">
                    Nossa Masterclass
                  </div>
                  <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8 pt-6 relative overflow-hidden">

                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-400/5 to-green-500/10 rounded-2xl" />

                  <div className="relative flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Masterclass C.R.E.</h3>
                      <p className="text-green-400">Método comprovado</p>
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-black bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                        R$ 0
                      </div>
                      <div className="text-green-400 text-sm font-medium">Totalmente gratuito</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-sm flex items-center justify-center">
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">Método C.R.E. completo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-sm flex items-center justify-center">
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">Flywheel Black Friday</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-sm flex items-center justify-center">
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">Estratégias ao vivo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-sm flex items-center justify-center">
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white font-medium">Q&A ao vivo</span>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Why free */}
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Por que{" "}
                <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                  gratuito?
                </span>
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Democratizar conhecimento</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Todo empreendedor merece acesso ao que realmente funciona na Black Friday.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Construir comunidade</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Quando compartilhamos, todos crescem. Valorizamos relacionamentos acima de vendas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Provar eficiência</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Mostramos o método funcionando antes de qualquer compromisso. Transparência total.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom guarantee */}
      </div>
    </section>
  )
}