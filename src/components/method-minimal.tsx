export function MethodMinimal() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            O Método
          </h2>
          <p className="text-gray-400 text-lg">
            Três pilares. Um sistema. Resultados exponenciais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-8">
          <div className="text-center md:text-left">
            <div className="text-6xl font-bold text-white mb-4">C</div>
            <h3 className="text-xl font-medium text-white mb-3">Cliente</h3>
            <p className="text-gray-500">
              Foco total na experiência. Cliente feliz compra mais.
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="text-6xl font-bold text-white mb-4">R</div>
            <h3 className="text-xl font-medium text-white mb-3">Receita</h3>
            <p className="text-gray-500">
              Expansão natural. Upsell e cross-sell no momento certo.
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="text-6xl font-bold text-white mb-4">E</div>
            <h3 className="text-xl font-medium text-white mb-3">Experiência</h3>
            <p className="text-gray-500">
              Pós-venda excepcional. Clientes viram embaixadores.
            </p>
          </div>
        </div>

        <div className="mt-24 pt-24 border-t border-gray-900">
          <blockquote className="text-center">
            <p className="text-2xl text-white mb-6 font-light italic">
              "O flywheel gira sozinho quando você<br />
              coloca o cliente no centro de tudo."
            </p>
            <cite className="text-gray-500 not-italic">
              — Douglas Conrad
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}