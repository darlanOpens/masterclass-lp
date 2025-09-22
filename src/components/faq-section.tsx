"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"

const faqs = [
  {
    question: "Para quem é essa masterclass?",
    answer: "Para empreendedores, gestores de e-commerce e profissionais de marketing que querem maximizar resultados na Black Friday usando estratégias comprovadas de crescimento orientado pela experiência do cliente."
  },
  {
    question: "Preciso ter experiência prévia com Black Friday?",
    answer: "Não! O método C.R.E. é explicado do zero e pode ser aplicado tanto por iniciantes quanto por veteranos. Vamos desde os conceitos básicos até estratégias avançadas de otimização."
  },
  {
    question: "Quanto tempo dura a masterclass?",
    answer: "A masterclass ao vivo terá duração de 2 horas, com mais 30 minutos para perguntas e respostas. Você também receberá a gravação para assistir quando quiser."
  },
  {
    question: "Vou ter suporte após a masterclass?",
    answer: "Sim! Todos os participantes terão acesso a um grupo exclusivo no WhatsApp por 30 dias, onde poderão tirar dúvidas diretamente com nossa equipe de especialistas."
  },
  {
    question: "E se eu não puder assistir ao vivo?",
    answer: "Sem problemas! A gravação ficará disponível por 7 dias após o evento. Mas recomendamos fortemente a participação ao vivo para aproveitar a sessão de perguntas."
  },
  {
    question: "Tem algum custo?",
    answer: "A masterclass é 100% gratuita. Nossa missão é ajudar o máximo de empresas a terem uma Black Friday excepcional usando o método C.R.E."
  },
  {
    question: "O que é o método C.R.E. exatamente?",
    answer: "C.R.E. significa Cliente feliz, Receita expandida e Experiência memorável. É um framework de crescimento que transforma seus clientes em embaixadores da marca, aumentando vendas de forma sustentável."
  },
  {
    question: "Funciona para qualquer nicho?",
    answer: "Sim! O método C.R.E. já foi aplicado com sucesso em mais de 500 empresas de diversos segmentos: moda, eletrônicos, infoprodutos, serviços, B2B e muito mais."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-[#db3425] to-[#1f2b66] bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Tudo que você precisa saber antes de participar
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between group"
              >
                <h3 className="text-lg font-medium text-white group-hover:text-[#db3425] transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Ainda tem dúvidas? Fale com nossa equipe
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá! Tenho uma dúvida sobre a masterclass"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 px-6 py-3 rounded-full hover:bg-green-500/30 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347z"/>
            </svg>
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}