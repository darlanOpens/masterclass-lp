export function TestimonialElegant() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Inverted background for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black/5 backdrop-blur border border-black/10 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="text-slate-600 text-sm font-medium tracking-wide">
              RESULTADO REAL
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Caso de Sucesso
          </h2>
        </div>

        {/* Hero testimonial card */}
        <div className="relative bg-gradient-to-br from-black to-slate-800 rounded-3xl p-12 md:p-16 text-white overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 right-8 text-8xl font-black text-white/20">
              "
            </div>
          </div>

          <div className="relative">
            {/* Star rating */}
            <div className="flex items-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Main quote */}
            <blockquote className="mb-12">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8">
                "Aplicamos o método C.R.E. na nossa Black Friday e tivemos um{" "}
                <span className="font-bold text-red-400">aumento de 312% nas vendas</span>.
                O mais impressionante foi que{" "}
                <span className="font-bold text-blue-400">73% dos clientes voltaram</span>{" "}
                a comprar nos meses seguintes."
              </p>
            </blockquote>

            {/* Author info */}
            <div className="flex items-center gap-6">
              {/* Avatar */}
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">MS</span>
              </div>

              {/* Details */}
              <div>
                <div className="text-2xl font-bold text-white mb-1">
                  Marina Silva
                </div>
                <div className="text-slate-300 text-lg mb-2">
                  CEO, Loja Virtual Premium
                </div>
                <div className="text-slate-400 text-sm">
                  E-commerce • Moda • São Paulo
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-red-600/20 to-blue-600/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-blue-600/20 to-red-600/20 rounded-full blur-xl" />
        </div>

        {/* Social proof stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-black/5 backdrop-blur border border-black/10 rounded-2xl">
            <div className="text-3xl font-bold text-black mb-2">500+</div>
            <div className="text-slate-600 font-medium">Empresas aplicaram</div>
          </div>
          <div className="text-center p-6 bg-black/5 backdrop-blur border border-black/10 rounded-2xl">
            <div className="text-3xl font-bold text-black mb-2">98%</div>
            <div className="text-slate-600 font-medium">Taxa de satisfação</div>
          </div>
          <div className="text-center p-6 bg-black/5 backdrop-blur border border-black/10 rounded-2xl">
            <div className="text-3xl font-bold text-black mb-2">R$ 47M</div>
            <div className="text-slate-600 font-medium">Faturamento gerado</div>
          </div>
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-16">
          <p className="text-slate-600 text-lg">
            Quer resultados como estes?{" "}
            <a href="#inscricao" className="text-red-600 font-semibold hover:underline">
              Garanta sua vaga na masterclass →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}