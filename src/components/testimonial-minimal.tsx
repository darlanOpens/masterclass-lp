export function TestimonialMinimal() {
  return (
    <section className="py-32 px-6 bg-white text-black">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-6xl mb-12">★★★★★</div>

        <blockquote className="mb-12">
          <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
            "Aplicamos o método C.R.E. e tivemos um aumento de 312% nas vendas da Black Friday.
            O mais impressionante foi que 73% dos clientes voltaram a comprar."
          </p>

          <footer>
            <cite className="not-italic">
              <div className="font-medium text-lg">Marina Silva</div>
              <div className="text-gray-600">CEO, Loja Virtual Premium</div>
            </cite>
          </footer>
        </blockquote>

        <div className="pt-12 border-t border-gray-200">
          <p className="text-gray-600">
            Mais de 500 empresas já aplicaram o método
          </p>
        </div>
      </div>
    </section>
  )
}