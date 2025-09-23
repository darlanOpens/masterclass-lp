"use client"

import { useState, useRef, useEffect } from "react"
import { formatPhoneNumber } from "@/lib/phone-mask"
import { submitForm, validateClientFormData } from "@/lib/webhook-client"

interface FieldState {
  name: string
  email: string
  whatsapp: string
  segment: string
}

export function FormElegant() {
  const [fields, setFields] = useState<FieldState>({
    name: "",
    email: "",
    whatsapp: "",
    segment: ""
  })
  const [focused, setFocused] = useState<string>("")
  const [errors, setErrors] = useState<Partial<FieldState>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSegmentOpen, setIsSegmentOpen] = useState(false)

  // Função para capturar parâmetros UTM da URL
  const getUTMParams = () => {
    if (typeof window === 'undefined') return {}
    
    const urlParams = new URLSearchParams(window.location.search)
    const utmParams: { [key: string]: string } = {}
    
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
    
    utmKeys.forEach(key => {
      const value = urlParams.get(key)
      if (value) utmParams[key] = value
    })
    
    return utmParams
  }

  const utmParams = getUTMParams()

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isSegmentOpen) {
        setIsSegmentOpen(false)
      }
    }

    if (isSegmentOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isSegmentOpen])

  // Opções de segmento de empresa
  const segmentOptions = [
    "E-commerce / Varejo Online",
    "Moda e Acessórios",
    "Eletrônicos e Tecnologia",
    "Saúde e Beleza",
    "Casa e Decoração",
    "Esporte e Lazer",
    "Alimentação e Bebidas",
    "Automotivo",
    "Educação e Treinamento",
    "Serviços Financeiros",
    "Imobiliário",
    "B2B / Fornecimento",
    "Agronegócio",
    "Turismo e Hospedagem",
    "Outros"
  ]

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        return value.length < 2 ? "Nome deve ter pelo menos 2 caracteres" : ""
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Email inválido" : ""
      case "whatsapp":
        return !/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(value) ? "Formato: (11) 99999-9999" : ""
      case "segment":
        return !value ? "Selecione um segmento" : ""
      default:
        return ""
    }
  }

  const handleChange = (name: string, value: string) => {
    // Apply phone mask if it's the whatsapp field
    const finalValue = name === "whatsapp" ? formatPhoneNumber(value) : value
    setFields(prev => ({ ...prev, [name]: finalValue }))

    // Clear error when user starts typing
    if (errors[name as keyof FieldState]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const handleBlur = (name: string, value: string) => {
    setFocused("")
    const error = validateField(name, value)
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate all fields
    const newErrors: Partial<FieldState> = {}
    Object.entries(fields).forEach(([name, value]) => {
      const error = validateField(name, value)
      if (error) newErrors[name as keyof FieldState] = error
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    try {
      // Send to webhook via API route
      const result = await submitForm({
        nome: fields.name,
        email: fields.email,
        telefone: fields.whatsapp,
        Segmento: fields.segment
      })

      if (result.success) {
        setIsSuccess(true)
        // Redirect to thank you page after 1 second
        setTimeout(() => {
          window.location.href = '/obrigado'
        }, 1000)
      } else {
        setErrors({ email: result.message || 'Erro ao enviar formulário' })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ email: 'Erro ao enviar formulário. Tente novamente.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Remove the success modal - will redirect instead
  if (isSuccess) {
    return null
  }

  return (
    <section id="inscricao" className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-black to-black" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Garanta sua Vaga
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Preencha os dados abaixo e receba acesso instantâneo
          </p>


        </div>

        {/* Premium form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-slate-900/30 backdrop-blur border border-slate-800/50 rounded-3xl p-8">
            <div className="space-y-6">
              {/* Name field */}
              <div className="relative">
                <input
                  type="text"
                  value={fields.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onFocus={() => setFocused("name")}
                  onBlur={(e) => handleBlur("name", e.target.value)}
                  className={`w-full bg-transparent border-b-2 pb-3 pt-6 text-white placeholder-transparent focus:outline-none transition-colors ${
                    errors.name ? "border-red-500" : focused === "name" ? "border-red-600" : "border-slate-700"
                  }`}
                  placeholder="Seu nome completo"
                  required
                />
                <label className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                  fields.name || focused === "name"
                    ? "top-0 text-xs text-slate-400"
                    : "top-6 text-base text-slate-500"
                }`}>
                  Seu nome completo
                </label>
                {errors.name && (
                  <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div className="relative">
                <input
                  type="email"
                  value={fields.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={(e) => handleBlur("email", e.target.value)}
                  className={`w-full bg-transparent border-b-2 pb-3 pt-6 text-white placeholder-transparent focus:outline-none transition-colors ${
                    errors.email ? "border-red-500" : focused === "email" ? "border-red-600" : "border-slate-700"
                  }`}
                  placeholder="seu@email.com"
                  required
                />
                <label className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                  fields.email || focused === "email"
                    ? "top-0 text-xs text-slate-400"
                    : "top-6 text-base text-slate-500"
                }`}>
                  Seu melhor email
                </label>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* WhatsApp field */}
              <div className="relative">
                <input
                  type="tel"
                  value={fields.whatsapp}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                  onFocus={() => setFocused("whatsapp")}
                  onBlur={(e) => handleBlur("whatsapp", e.target.value)}
                  maxLength={15}
                  className={`w-full bg-transparent border-b-2 pb-3 pt-6 text-white placeholder-transparent focus:outline-none transition-colors ${
                    errors.whatsapp ? "border-red-500" : focused === "whatsapp" ? "border-red-600" : "border-slate-700"
                  }`}
                  placeholder="(11) 99999-9999"
                  required
                />
                <label className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                  fields.whatsapp || focused === "whatsapp"
                    ? "top-0 text-xs text-slate-400"
                    : "top-6 text-base text-slate-500"
                }`}>
                  WhatsApp (com DDD)
                </label>
                {errors.whatsapp && (
                  <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.whatsapp}
                  </p>
                )}
              </div>

              {/* Segment field - Custom dropdown */}
              <div className="relative">
                <div
                  onClick={() => {
                    setIsSegmentOpen(!isSegmentOpen)
                    setFocused("segment")
                  }}
                  className={`w-full bg-transparent border-b-2 pb-3 pt-6 cursor-pointer transition-colors min-h-[4.5rem] flex items-center ${
                    errors.segment ? "border-red-500" : focused === "segment" ? "border-red-600" : "border-slate-700"
                  }`}
                >
                  <span className="text-white">
                    {fields.segment}
                  </span>
                  
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-0 top-6 pointer-events-none">
                    <svg 
                      className={`w-5 h-5 text-slate-400 transition-transform ${isSegmentOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {/* Floating label */}
                <label className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                  fields.segment || focused === "segment"
                    ? "top-0 text-xs text-slate-400"
                    : "top-6 text-base text-slate-500"
                }`}>
                  Segmento da empresa
                </label>
                
                {/* Dropdown options */}
                {isSegmentOpen && (
                  <div className="absolute top-full left-0 right-0 bg-slate-900 border border-slate-700 rounded-lg mt-2 max-h-60 overflow-y-auto z-50">
                    {segmentOptions.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          handleChange("segment", option)
                          setIsSegmentOpen(false)
                          setFocused("")
                        }}
                        className="px-4 py-3 text-white hover:bg-slate-800 cursor-pointer transition-colors"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
                
                {errors.segment && (
                  <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.segment}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Hidden UTM fields */}
          {Object.entries(utmParams).map(([key, value]) => (
            <input
              key={key}
              type="hidden"
              name={key}
              value={value}
            />
          ))}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group w-full bg-red-600 hover:bg-red-700 disabled:bg-slate-700 text-white py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-600/25 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Confirmando inscrição...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                Confirmar Inscrição Gratuita
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            )}
          </button>

          {/* Footer note */}
          <p className="text-center text-slate-500 text-sm">
            ✓ Não enviamos spam • ✓ Seus dados estão seguros • ✓ Descadastro a qualquer momento
          </p>
        </form>
      </div>
    </section>
  )
}