"use client"

import { useState } from "react"

export function FormMinimal() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
  }

  return (
    <section id="inscricao" className="py-32 px-6">
      <div className="max-w-xl mx-auto">
        {!isSubmitted ? (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
              Inscreva-se
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Seu nome"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-gray-800 text-white placeholder:text-gray-600 pb-3 focus:outline-none focus:border-white transition-colors"
              />

              <input
                type="email"
                placeholder="Seu melhor email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-gray-800 text-white placeholder:text-gray-600 pb-3 focus:outline-none focus:border-white transition-colors"
              />

              <button
                type="submit"
                className="w-full bg-white text-black py-4 font-medium hover:bg-gray-200 transition-colors mt-12"
              >
                Confirmar inscrição
              </button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-8">
              Gratuito. Sem spam.
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="text-5xl mb-8">✓</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Inscrição confirmada
            </h3>
            <p className="text-gray-400">
              Enviamos os detalhes para {email}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}