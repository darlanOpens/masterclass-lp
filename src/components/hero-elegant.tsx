"use client"

import { useState, useEffect } from "react"

export function HeroElegant() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Data do evento: 15 de outubro de 2025 às 19h (horário de Brasília)
    const eventDate = new Date('2025-10-15T19:00:00-03:00')

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("masterclass-bf/Frame 1.png")'
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src="masterclass-bf/masterclass-varejo-insights.png" 
            alt="Masterclass Varejo Insights" 
            className="h-16 md:h-20 mx-auto object-contain"
          />
        </div>

        {/* Date indicator */}
        <div className="inline-flex items-center gap-3 mb-12 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-slate-300 tracking-wide">
            15 OUTUBRO • 19H • AO VIVO
          </span>
        </div>

        {/* Monumental typography */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-8 max-w-4xl mx-auto">
          Como transformar pontos de contato em conversão na{" "}
          <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            Black Friday'25
          </span>
        </h1>

        {/* Refined subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto mb-16">
          Os 3 pilares{" "}
          <span className="text-white font-medium">
            C.R.E.
          </span>
          {" "}na Black Friday: Gire seu flywheel para{" "}
          <span className="text-white font-medium">
            vendas previsíveis, clientes satisfeitos e experiência impecável.
          </span>
        </p>

        {/* Powerful CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#inscricao"
            className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/25"
          >
            Garantir minha vaga
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <span className="text-slate-500 text-sm">
            ✓ 100% gratuito
          </span>
        </div>

        {/* Floating countdown preview */}
        <div className="mt-20 inline-flex items-center gap-4 px-6 py-3 bg-slate-900/50 backdrop-blur border border-slate-800 rounded-full">
          <span className="text-slate-400 text-sm">Evento em:</span>
          <div className="flex items-center gap-2 font-mono text-red-500 font-bold">
            <span>{timeLeft.days.toString().padStart(2, '0')}</span>
            <span className="text-slate-600">:</span>
            <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
            <span className="text-slate-600">:</span>
            <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span className="text-slate-600">:</span>
            <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full relative">
          <div className="w-1 h-3 bg-slate-600 rounded-full absolute top-2 left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  )
}