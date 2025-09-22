"use client"

import { useEffect, useState, useRef } from "react"
import { CheckCircle, Users, MessageCircle, ArrowRight, Calendar, Gift, Star } from "lucide-react"
import { useIntersectionTracking, useCTATracking, useTimeOnPage } from "@/hooks/use-analytics"

export function ThankYouPage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { trackCTA } = useCTATracking()

  // Track page interactions
  useIntersectionTracking(sectionRef, 'thank_you_page')
  useTimeOnPage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCommunityClick = () => {
    trackCTA('acessar_comunidade', 'thank_you_page', 'primary')
  }

  return (
    <main ref={sectionRef} className="min-h-screen bg-[#020718] overflow-x-hidden">
      {/* Background gradient - seguindo padrão do hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f2b66]/20 via-black to-black" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Success Icon com animação */}
          <div className={`mb-8 transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#db3425] to-[#1f2b66] rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Título principal */}
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            🎉 <span className="bg-gradient-to-r from-[#db3425] to-[#1f2b66] bg-clip-text text-transparent">Parabéns!</span><br />
            Sua vaga está <span className="text-[#db3425]">garantida</span>
          </h1>

          {/* Subtítulo */}
          <p className={`text-xl text-[#8C8DA2] mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Você acabou de se inscrever na Masterclass mais esperada sobre o Método C.R.E. para Black Friday.
            Agora é hora de se conectar com a comunidade!
          </p>

          {/* Cards informativos */}
          <div className={`grid md:grid-cols-2 gap-6 mb-12 transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

            {/* Card próximo passo */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#db3425]/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#db3425]" />
                </div>
                <h3 className="text-xl font-semibold text-white">Próximo Passo</h3>
              </div>
              <p className="text-[#8C8DA2] mb-6 leading-relaxed">
                Entre na nossa comunidade exclusiva no WhatsApp onde você receberá todas as informações sobre a aula,
                materiais complementares e poderá interagir com outros participantes.
              </p>
              <a
                href="https://chat.whatsapp.com/GRUPOCOMUNIDADE"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCommunityClick}
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Entrar na Comunidade
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card detalhes do evento */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1f2b66]/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#1f2b66]" />
                </div>
                <h3 className="text-xl font-semibold text-white">Detalhes da Masterclass</h3>
              </div>
              <div className="space-y-3 text-[#8C8DA2]">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#db3425] rounded-full"></div>
                  <span><strong className="text-white">Data:</strong> 15 de outubro, 19h</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#db3425] rounded-full"></div>
                  <span><strong className="text-white">Formato:</strong> Ao vivo e gratuito</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#db3425] rounded-full"></div>
                  <span><strong className="text-white">Instrutor:</strong> Douglas Conrad</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#db3425] rounded-full"></div>
                  <span><strong className="text-white">Link:</strong> Enviado via WhatsApp</span>
                </div>
              </div>
            </div>
          </div>

          {/* O que você vai receber */}
          <div className={`bg-gradient-to-r from-[#1f2b66]/10 to-[#db3425]/10 border border-white/10 rounded-2xl p-8 mb-12 transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
              <Gift className="w-7 h-7 text-[#db3425]" />
              O que você vai receber na comunidade
            </h3>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-[#db3425] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Materiais Exclusivos</h4>
                  <p className="text-[#8C8DA2] text-sm">Templates, checklists e frameworks prontos para usar</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-[#db3425] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Suporte Direto</h4>
                  <p className="text-[#8C8DA2] text-sm">Tire dúvidas diretamente com nossa equipe</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-[#db3425] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Networking</h4>
                  <p className="text-[#8C8DA2] text-sm">Conecte-se com outros empreendedores</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA principal */}
          <div className={`transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <p className="text-[#8C8DA2] mb-6">
              Não esqueça: o link da aula será enviado exclusivamente via WhatsApp
            </p>

            <a
              href="https://chat.whatsapp.com/GRUPOCOMUNIDADE"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCommunityClick}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#db3425] to-[#db3425]/80 hover:from-[#db3425]/90 hover:to-[#db3425]/70 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-[#db3425]/25"
            >
              🚀 ACESSAR COMUNIDADE AGORA
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Indicador de urgência */}
          <div className={`mt-8 flex items-center justify-center gap-2 text-sm text-[#8C8DA2] transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></div>
            <span>Entre agora para não perder nenhuma novidade</span>
          </div>
        </div>
      </div>
    </main>
  )
}