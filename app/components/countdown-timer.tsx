"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

export function CountdownTimer() {
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
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-6">
        <Card className="bg-gradient-to-r from-[#db3425]/20 via-black to-[#db3425]/20 border border-[#db3425]/30 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#db3425]/10 via-transparent to-[#db3425]/10 animate-pulse" />

          <div className="relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                ⏰ A Masterclass começa em:
              </h3>
              <p className="text-gray-400">
                15 de outubro, às 19h (horário de Brasília)
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-black/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-4xl font-bold text-[#db3425] mb-1">
                  {String(timeLeft.days).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Dias
                </div>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-4xl font-bold text-[#db3425] mb-1">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Horas
                </div>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-4xl font-bold text-[#db3425] mb-1">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Minutos
                </div>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-4xl font-bold text-[#db3425] mb-1">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Segundos
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                🔥 Não perca! As vagas são limitadas e estão acabando rápido.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}