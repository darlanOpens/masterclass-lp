"use client"

import { useState } from "react"

const faqs = [
  {
    q: "Para quem é?",
    a: "Empreendedores e gestores de e-commerce que querem maximizar resultados na Black Friday."
  },
  {
    q: "Quanto custa?",
    a: "A masterclass é 100% gratuita."
  },
  {
    q: "Quando acontece?",
    a: "15 de outubro, às 19h. Duração de 2 horas."
  },
  {
    q: "E se eu não puder assistir ao vivo?",
    a: "A gravação ficará disponível por 7 dias."
  }
]

export function FAQMinimal() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          Perguntas Frequentes
        </h2>

        <div className="space-y-px">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-900">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 text-left flex justify-between items-center hover:text-gray-400 transition-colors"
              >
                <span className="text-lg text-white">{faq.q}</span>
                <span className="text-2xl text-gray-600">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-gray-500">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}