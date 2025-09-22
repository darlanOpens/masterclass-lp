"use client"

import { useState, useEffect } from "react"

export function CountdownElegant() {
  const targetDate = new Date("2024-10-15T19:00:00-03:00").getTime()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      } else {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Elegant heading */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            A masterclass começa em
          </h2>
          <p className="text-slate-400 text-lg">
            Não perca esta oportunidade única
          </p>
        </div>

        {/* Premium countdown display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {[
            { value: timeLeft.days, label: "Dias" },
            { value: timeLeft.hours, label: "Horas" },
            { value: timeLeft.minutes, label: "Minutos" },
            { value: timeLeft.seconds, label: "Segundos" },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-slate-800/50 to-slate-900/80 backdrop-blur border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-red-600/30 transition-all duration-300"
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-red-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-mono tracking-tight">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-slate-400 text-sm md:text-base font-medium uppercase tracking-wider">
                  {item.label}
                </div>
              </div>

              {/* Subtle border accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Urgency indicator */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-600/10 border border-red-600/20 rounded-full">
          <div className="relative">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-75" />
          </div>
          <span className="text-red-400 text-sm font-medium">
            Últimas 47 vagas disponíveis
          </span>
        </div>
      </div>
    </section>
  )
}