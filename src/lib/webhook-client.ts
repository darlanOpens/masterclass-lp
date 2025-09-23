import { FormData } from './webhook-service'

export interface ClientFormData {
  nome: string
  email: string
  telefone: string
  site?: string
  redesSociais?: string
  faturamento?: string
  colaboradores?: string
  Segmento?: string
}

export interface ClientWebhookResponse {
  success: boolean
  message: string
  data?: any
}

/**
 * Client-side function to send form data via API route
 */
export async function submitForm(
  formData: ClientFormData,
  retries: number = 3
): Promise<ClientWebhookResponse> {
  try {
    const response = await fetch('/masterclass-bf/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || `HTTP ${response.status}`)
    }

    return result

  } catch (error) {
    console.error('Erro ao enviar formulário:', error)

    // Retry logic
    if (retries > 0) {
      console.log(`Tentando novamente... (${retries} tentativas restantes)`)
      await new Promise(resolve => setTimeout(resolve, 1000))
      return submitForm(formData, retries - 1)
    }

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Erro desconhecido ao enviar formulário'
    }
  }
}

/**
 * Validate form data on client side
 */
export function validateClientFormData(data: ClientFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  // Required fields validation
  if (!data.nome?.trim()) {
    errors.push('Nome é obrigatório')
  }

  if (!data.email?.trim()) {
    errors.push('Email é obrigatório')
  } else if (!isValidEmail(data.email)) {
    errors.push('Email deve ter um formato válido')
  }

  if (!data.telefone?.trim()) {
    errors.push('Telefone é obrigatório')
  } else if (!isValidPhone(data.telefone)) {
    errors.push('Telefone deve ter um formato válido')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/
  return phoneRegex.test(phone)
}