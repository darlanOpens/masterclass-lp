"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Para quem é essa masterclass?",
    answer: "Para empreendedores, gestores de e-commerce e profissionais de marketing que querem transformar sua Black Friday usando o método C.R.E. de crescimento orientado pela experiência do cliente."
  },
  {
    question: "Quanto custa?",
    answer: "A masterclass é 100% gratuita. Nossa missão é ajudar o máximo de empresas a terem uma Black Friday excepcional usando estratégias comprovadas."
  },
  {
    question: "Quando acontece e quanto tempo dura?",
    answer: "15 de outubro, às 19h (horário de Brasília). Duração de 2 horas ao vivo, mais 30 minutos para perguntas e respostas. Gravação disponível por 7 dias."
  },
  {
    question: "O método funciona para qualquer tipo de negócio?",
    answer: "Sim! O método C.R.E. já foi aplicado com sucesso em mais de 500 empresas de diversos segmentos: moda, eletrônicos, infoprodutos, serviços, B2B e marketplace."
  },
  {
    question: "Vou ter suporte após a masterclass?",
    answer: "Sim! Todos os participantes terão acesso a um grupo exclusivo no WhatsApp por 30 dias, onde poderão tirar dúvidas e compartilhar resultados com nossa equipe e outros participantes."
  }
]

export function FAQElegant() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/50 to-black" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-900/50 backdrop-blur border border-slate-800/50 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="text-slate-400 text-sm font-medium tracking-wide">
              DÚVIDAS FREQUENTES
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perguntas & Respostas
          </h2>

          <p className="text-xl text-slate-300">
            Tudo que você precisa saber antes de participar
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900/30 backdrop-blur border border-slate-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-700/80"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group transition-all duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-red-400 transition-colors pr-8">
                  {faq.question}
                </h3>

                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? 'rotate-45 bg-red-600/20 border-red-600/30' : ''
                  }`}>
                    <svg
                      className={`w-4 h-4 transition-colors duration-200 ${
                        openIndex === index ? 'text-red-400' : 'text-slate-400'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="pt-2 border-t border-slate-800/50">
                    <p className="text-slate-300 leading-relaxed text-lg mt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900/50 backdrop-blur border border-slate-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-slate-300 mb-6">
              Fale diretamente com nossa equipe no WhatsApp
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá! Tenho uma dúvida sobre a masterclass do método C.R.E."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}