"use client"

import { useEffect, useState } from "react"
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react"

export function ThankYouMinimal() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-[#020718] flex items-center justify-center px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f2b66]/20 via-black to-black" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">

        {/* Success animation */}
        <div className={`transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#db3425] to-[#1f2b66] rounded-full flex items-center justify-center mb-8">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-[#db3425] to-[#1f2b66] bg-clip-text text-transparent">
              Vaga Garantida!
            </span>
          </h1>

          <p className="text-lg text-[#8C8DA2] mb-8 leading-relaxed">
            Você está inscrito na Masterclass do Método C.R.E.<br />
            <strong className="text-white">Próximo passo:</strong> entre na comunidade para receber o link da aula.
          </p>

          {/* Main CTA */}
          <a
            href="https://chat.whatsapp.com/GRUPOCOMUNIDADE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 mb-6"
          >
            <MessageCircle className="w-5 h-5" />
            Entrar na Comunidade
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Event details */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left">
            <h3 className="font-semibold text-white mb-3">📅 Detalhes da Masterclass:</h3>
            <div className="space-y-2 text-[#8C8DA2] text-sm">
              <p><strong className="text-white">Data:</strong> 15 de outubro, 19h</p>
              <p><strong className="text-white">Formato:</strong> Ao vivo e gratuito</p>
              <p><strong className="text-white">Link:</strong> Enviado via WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}