"use client"

import { useEffect, useState } from "react"

export function StatsElegant() {
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    {
      value: "312%",
      label: "Aumento médio em conversão",
      subtitle: "Black Friday 2023"
    },
    {
      value: "500+",
      label: "Empresas já aplicaram",
      subtitle: "Resultados comprovados"
    },
    {
      value: "R$ 47M",
      label: "Gerados em faturamento",
      subtitle: "Método C.R.E."
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector('#stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats-section" className="py-24 px-6 relative">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados que Falam por Si
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Números reais de empresas que aplicaram o método C.R.E.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-slate-900/30 backdrop-blur border border-slate-800/50 rounded-3xl p-8 text-center hover:border-slate-700/80 transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative">
                {/* Large number */}
                <div className="text-5xl md:text-6xl font-black text-white mb-4 font-mono tracking-tight">
                  {stat.value}
                </div>

                {/* Main label */}
                <h3 className="text-lg font-semibold text-slate-200 mb-2 leading-tight">
                  {stat.label}
                </h3>

                {/* Subtitle */}
                <p className="text-slate-500 text-sm font-medium">
                  {stat.subtitle}
                </p>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            ✨ Dados coletados entre janeiro 2023 e setembro 2024
          </p>
        </div>
      </div>
    </section>
  )
}