// Utility functions for collecting browser metadata

export interface UTMParameters {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  utm_term: string
}

export interface BrowserMetadata {
  timestamp: string
  user_ip: string
  user_agent: string
  page_url: string
  referer_url: string
  utm_parameters: UTMParameters
}

/**
 * Extract UTM parameters from current URL
 */
export function getUTMParameters(): UTMParameters {
  if (typeof window === 'undefined') {
    return {
      utm_source: '[empty]',
      utm_medium: '[empty]',
      utm_campaign: '[empty]',
      utm_content: '[empty]',
      utm_term: '[empty]'
    }
  }

  const urlParams = new URLSearchParams(window.location.search)

  return {
    utm_source: urlParams.get('utm_source') || '[empty]',
    utm_medium: urlParams.get('utm_medium') || '[empty]',
    utm_campaign: urlParams.get('utm_campaign') || '[empty]',
    utm_content: urlParams.get('utm_content') || '[empty]',
    utm_term: urlParams.get('utm_term') || '[empty]'
  }
}

/**
 * Get current timestamp in Brazilian format
 */
export function getTimestamp(): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

/**
 * Get user IP address (best effort from client side)
 */
export async function getUserIP(): Promise<string> {
  try {
    // Try to get IP from external service
    const response = await fetch('https://api.ipify.org?format=json', {
      timeout: 3000
    } as RequestInit)

    if (response.ok) {
      const data = await response.json()
      return data.ip || '[empty]'
    }
  } catch (error) {
    console.warn('Could not fetch user IP:', error)
  }

  return '[empty]'
}

/**
 * Get browser metadata
 */
export async function getBrowserMetadata(): Promise<BrowserMetadata> {
  const utm_parameters = getUTMParameters()

  return {
    timestamp: getTimestamp(),
    user_ip: await getUserIP(),
    user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '[empty]',
    page_url: typeof window !== 'undefined' ? window.location.href : '[empty]',
    referer_url: typeof document !== 'undefined' ? document.referrer || '[empty]' : '[empty]',
    utm_parameters
  }
}

/**
 * Get relevant cookies for tracking
 */
export function getTrackingCookies(): Record<string, string> {
  if (typeof document === 'undefined') {
    return {}
  }

  const cookies: Record<string, string> = {}

  // Parse all cookies
  const cookieString = document.cookie
  if (cookieString) {
    cookieString.split(';').forEach(cookie => {
      const [name, value] = cookie.trim().split('=')
      if (name && value) {
        cookies[name] = decodeURIComponent(value)
      }
    })
  }

  // Return only relevant tracking cookies
  const relevantCookies: Record<string, string> = {}

  // Google Analytics cookies
  Object.keys(cookies).forEach(key => {
    if (key.startsWith('_ga') ||
        key.startsWith('_fb') ||
        key.startsWith('_gcl') ||
        key.startsWith('_clck') ||
        key.startsWith('_clsk') ||
        key.startsWith('__hs') ||
        key.includes('hubspot') ||
        key.includes('mixpanel') ||
        key.startsWith('bv_') ||
        key === 'IsActiveDebug') {
      relevantCookies[key] = cookies[key]
    }
  })

  return relevantCookies
}

/**
 * Sanitize user input to prevent XSS and other attacks
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') {
    return ''
  }

  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
    .substring(0, 500) // Limit length
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (Brazilian format)
 */
export function isValidPhone(phone: string): boolean {
  // Remove all non-digits
  const digitsOnly = phone.replace(/\D/g, '')

  // Brazilian phone: 10 or 11 digits (with area code)
  return digitsOnly.length >= 10 && digitsOnly.length <= 11
}

/**
 * Format phone number to Brazilian standard
 */
export function formatPhone(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, '')

  if (digitsOnly.length === 11) {
    // Format: (11) 98765-4321
    return `(${digitsOnly.substring(0, 2)}) ${digitsOnly.substring(2, 7)}-${digitsOnly.substring(7)}`
  } else if (digitsOnly.length === 10) {
    // Format: (11) 8765-4321
    return `(${digitsOnly.substring(0, 2)}) ${digitsOnly.substring(2, 6)}-${digitsOnly.substring(6)}`
  }

  return phone // Return as-is if doesn't match expected length
}