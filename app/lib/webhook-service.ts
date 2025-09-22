import { getBrowserMetadata, getTrackingCookies, sanitizeInput, isValidEmail, isValidPhone, formatPhone } from './browser-utils'

export interface FormData {
  nome: string
  email: string
  telefone: string
  site?: string
  redesSociais?: string
  faturamento?: string
  colaboradores?: string
  Segmento?: string
}

export interface WebhookPayload {
  form_id: string
  form_title: string
  form_data: {
    nome: string
    email: string
    site: string
    redesSociais: string
    faturamento: string
    colaboradores: string
    telefone: string
    Segmento: string
    utm_source: string
    utm_medium: string
    utm_campaign: string
    utm_content: string
    utm_term: string
    timestamp: string
    user_ip: string
    user_agent: string
    page_url: string
    referer_url: string
    post_id: string | null
    utm_parameters: string
  }
  cookies: Record<string, string>
}

export interface WebhookResponse {
  success: boolean
  message: string
  data?: any
}

/**
 * Validate form data before sending
 */
export function validateFormData(data: FormData): { isValid: boolean; errors: string[] } {
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

/**
 * Build webhook payload according to specification
 */
export async function buildWebhookPayload(formData: FormData): Promise<WebhookPayload> {
  const browserMetadata = await getBrowserMetadata()
  const cookies = getTrackingCookies()

  // Sanitize all form inputs
  const sanitizedData = {
    nome: sanitizeInput(formData.nome),
    email: sanitizeInput(formData.email),
    telefone: formatPhone(sanitizeInput(formData.telefone)),
    site: sanitizeInput(formData.site || ''),
    redesSociais: sanitizeInput(formData.redesSociais || ''),
    faturamento: sanitizeInput(formData.faturamento || ''),
    colaboradores: sanitizeInput(formData.colaboradores || ''),
    Segmento: sanitizeInput(formData.Segmento || '')
  }

  return {
    form_id: process.env.FORM_ID || 'masterclass_bf_2024',
    form_title: process.env.FORM_TITLE || 'masterclass_black_friday',
    form_data: {
      nome: sanitizedData.nome,
      email: sanitizedData.email,
      site: sanitizedData.site || '[empty]',
      redesSociais: sanitizedData.redesSociais || '[empty]',
      faturamento: sanitizedData.faturamento || '[empty]',
      colaboradores: sanitizedData.colaboradores || '[empty]',
      telefone: sanitizedData.telefone,
      Segmento: sanitizedData.Segmento || '[empty]',
      utm_source: browserMetadata.utm_parameters.utm_source,
      utm_medium: browserMetadata.utm_parameters.utm_medium,
      utm_campaign: browserMetadata.utm_parameters.utm_campaign,
      utm_content: browserMetadata.utm_parameters.utm_content,
      utm_term: browserMetadata.utm_parameters.utm_term,
      timestamp: browserMetadata.timestamp,
      user_ip: browserMetadata.user_ip,
      user_agent: browserMetadata.user_agent,
      page_url: browserMetadata.page_url,
      referer_url: browserMetadata.referer_url,
      post_id: null,
      utm_parameters: JSON.stringify(browserMetadata.utm_parameters)
    },
    cookies
  }
}

/**
 * Send form data to webhook with retry logic
 */
export async function sendToWebhook(
  formData: FormData,
  retries: number = 3
): Promise<WebhookResponse> {
  const webhookUrl = process.env.WEBHOOK_URL

  if (!webhookUrl) {
    throw new Error('WEBHOOK_URL não configurada')
  }

  // Validate form data first
  const validation = validateFormData(formData)
  if (!validation.isValid) {
    return {
      success: false,
      message: validation.errors.join(', ')
    }
  }

  try {
    const payload = await buildWebhookPayload(formData)

    console.log('Enviando payload para webhook:', {
      url: webhookUrl,
      form_id: payload.form_id,
      email: payload.form_data.email,
      timestamp: payload.form_data.timestamp
    })

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Masterclass-LP/1.0'
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const responseData = await response.json().catch(() => ({}))

    return {
      success: true,
      message: 'Formulário enviado com sucesso!',
      data: responseData
    }

  } catch (error) {
    console.error('Erro ao enviar webhook:', error)

    // Retry logic
    if (retries > 0) {
      console.log(`Tentando novamente... (${retries} tentativas restantes)`)
      await new Promise(resolve => setTimeout(resolve, 1000)) // Wait 1 second
      return sendToWebhook(formData, retries - 1)
    }

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Erro desconhecido ao enviar formulário'
    }
  }
}

/**
 * Rate limiting storage (simple in-memory store)
 */
const rateLimitStore = new Map<string, number[]>()

/**
 * Check if user is rate limited (max 5 submissions per minute)
 */
export function isRateLimited(identifier: string): boolean {
  const now = Date.now()
  const minute = 60 * 1000
  const maxAttempts = 5

  // Get or create user's submission history
  const userAttempts = rateLimitStore.get(identifier) || []

  // Remove attempts older than 1 minute
  const recentAttempts = userAttempts.filter(timestamp => now - timestamp < minute)

  // Update store
  rateLimitStore.set(identifier, recentAttempts)

  // Check if limit exceeded
  return recentAttempts.length >= maxAttempts
}

/**
 * Record a submission attempt
 */
export function recordSubmissionAttempt(identifier: string): void {
  const now = Date.now()
  const userAttempts = rateLimitStore.get(identifier) || []
  userAttempts.push(now)
  rateLimitStore.set(identifier, userAttempts)
}

/**
 * Get rate limit identifier (email + IP combination)
 */
export function getRateLimitIdentifier(email: string, ip: string): string {
  return `${email}_${ip}`.toLowerCase()
}