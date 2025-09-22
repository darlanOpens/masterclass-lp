export function HeroMinimal() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Simple date indicator */}
        <p className="text-sm text-gray-500 mb-12 tracking-widest uppercase">
          15 de outubro • 19h
        </p>

        {/* Main title - large and bold */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.9]">
          Método C.R.E.
          <span className="block text-red-600 mt-4">Black Friday</span>
        </h1>

        {/* Simple subtitle */}
        <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
          Transforme clientes em embaixadores.
          Masterclass gratuita com Douglas Conrad.
        </p>

        {/* Single CTA */}
        <a
          href="#inscricao"
          className="inline-block bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-200 transition-colors"
        >
          Garantir minha vaga →
        </a>
      </div>
    </section>
  )
}