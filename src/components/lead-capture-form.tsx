"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Check, Loader2, Shield, Clock, Users, AlertCircle } from "lucide-react"
import { useIntersectionTracking, useFormTracking } from "@/hooks/use-analytics"
import { submitForm, validateClientFormData } from "@/lib/webhook-client"
import { formatPhoneNumber } from "@/lib/phone-mask"

export function LeadCaptureForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sectionRef = useRef<HTMLElement>(null)
  const { trackFormStart, trackFormSuccess, trackFormError } = useFormTracking('lead_capture_masterclass')

  useIntersectionTracking(sectionRef, 'lead_capture_section')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Send to webhook via API route
      const result = await submitForm({
        nome: name,
        email: email,
        telefone: whatsapp
      })

      if (result.success) {
        setIsSuccess(true)
        trackFormSuccess()

        // Redirecionar para página de obrigado após 2 segundos
        setTimeout(() => {
          window.location.href = '/masterclass-bf/obrigado'
        }, 2000)
      } else {
        throw new Error(result.message)
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido ao enviar formulário'
      setError(errorMessage)
      trackFormError('submission', errorMessage)
      console.error('Form submission error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFirstFocus = () => {
    if (!hasStarted) {
      setHasStarted(true)
      trackFormStart()
    }
  }

  return (
    <section ref={sectionRef} className="py-20 relative" id="inscricao">
      <div className="container mx-auto px-6">
        <Card className="bg-gradient-to-br from-[#db3425]/10 via-black to-[#1f2b66]/10 border border-white/20 p-8 lg:p-12 max-w-4xl mx-auto relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#db3425]/5 via-transparent to-[#1f2b66]/5" />

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Garanta sua vaga{" "}
                <span className="bg-gradient-to-r from-[#db3425] to-[#1f2b66] bg-clip-text text-transparent">
                  agora mesmo
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Preencha o formulário e receba o link de acesso no seu email e WhatsApp
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm">100% Seguro</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-sm">Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="w-5 h-5 text-purple-500" />
                  <span className="text-sm">+2.847 inscritos</span>
                </div>
              </div>
            </div>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Seu nome completo
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={handleFirstFocus}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                      placeholder="João Silva"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Melhor email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={handleFirstFocus}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2">
                    WhatsApp (com DDD)
                  </label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => {
                      const formatted = formatPhoneNumber(e.target.value)
                      setWhatsapp(formatted)
                    }}
                    onFocus={handleFirstFocus}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                    placeholder="(11) 98765-4321"
                    maxLength={15}
                  />
                </div>

                {/* Error display */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#db3425] to-[#db3425]/80 hover:from-[#db3425]/90 hover:to-[#db3425]/70 text-white py-6 text-lg font-semibold rounded-xl shadow-2xl shadow-[#db3425]/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Garantindo sua vaga...
                    </>
                  ) : (
                    "GARANTIR MINHA VAGA AGORA"
                  )}
                </Button>

                <div className="text-center text-xs text-gray-500">
                  Ao se inscrever, você concorda com nossa política de privacidade.
                  <br />
                  Não enviamos spam.
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="bg-green-500/20 border border-green-500/30 rounded-full p-4 w-fit mx-auto mb-6">
                  <Check className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Parabéns! Vaga garantida!</h3>
                <p className="text-gray-300 mb-6">
                  Você receberá o link de acesso no email <span className="text-white font-medium">{email}</span>
                  <br />
                  e no WhatsApp <span className="text-white font-medium">{whatsapp}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Fique atento! O link chegará em até 5 minutos.
                </p>
              </div>
            )}
          </div>
        </Card>

        {/* Scarcity indicator */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm text-red-400 font-medium">
              Apenas 47 vagas restantes de 250 totais
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}