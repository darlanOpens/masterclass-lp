'use client'

import { useEffect, useCallback, useRef } from 'react'
import { useGTM } from '@/lib/gtm'

// Hook para tracking de scroll depth
export function useScrollTracking() {
  const { trackScrollDepth } = useGTM()
  const scrollMilestones = useRef(new Set<number>())

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = Math.floor((scrollTop / documentHeight) * 100)

      // Track at 25%, 50%, 75%, 100% milestones
      const milestones = [25, 50, 75, 100]

      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone)
          trackScrollDepth(milestone)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [trackScrollDepth])
}

// Hook para tracking de tempo na página
export function useTimeOnPage() {
  const { trackEvent } = useGTM()
  const startTime = useRef<number>(Date.now())
  const timeTracked = useRef(new Set<number>())

  useEffect(() => {
    const interval = setInterval(() => {
      const timeOnPage = Math.floor((Date.now() - startTime.current) / 1000)

      // Track at 30s, 60s, 120s, 300s milestones
      const milestones = [30, 60, 120, 300]

      milestones.forEach(milestone => {
        if (timeOnPage >= milestone && !timeTracked.current.has(milestone)) {
          timeTracked.current.add(milestone)
          trackEvent('time_on_page', {
            time_seconds: milestone,
            engagement_level: milestone >= 120 ? 'high' : 'medium'
          })
        }
      })
    }, 10000) // Check every 10 seconds

    // Track page leave
    const handleBeforeUnload = () => {
      const totalTime = Math.floor((Date.now() - startTime.current) / 1000)
      trackEvent('page_exit', {
        total_time_seconds: totalTime,
        exit_type: 'beforeunload'
      })
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      clearInterval(interval)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [trackEvent])
}

// Hook para tracking de elementos visíveis
export function useIntersectionTracking(elementRef: React.RefObject<HTMLElement>, eventName: string) {
  const { trackEvent } = useGTM()
  const hasTracked = useRef(false)

  useEffect(() => {
    if (!elementRef.current || hasTracked.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true
            trackEvent('section_view', {
              section_name: eventName,
              visibility_percentage: Math.floor(entry.intersectionRatio * 100)
            })
          }
        })
      },
      { threshold: 0.5 } // Trigger when 50% visible
    )

    observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [elementRef, eventName, trackEvent])
}

// Hook para tracking de cliques em links externos
export function useExternalLinkTracking() {
  const { trackEvent } = useGTM()

  const trackExternalClick = useCallback((url: string, linkText: string) => {
    trackEvent('external_link_click', {
      link_url: url,
      link_text: linkText,
      link_domain: new URL(url).hostname
    })
  }, [trackEvent])

  return { trackExternalClick }
}

// Hook para tracking de interações com formulários
export function useFormTracking(formName: string) {
  const { trackFormSubmission, trackEvent } = useGTM()

  const trackFormStart = useCallback(() => {
    trackEvent('form_start', {
      form_name: formName,
      form_type: 'lead_capture'
    })
  }, [trackEvent, formName])

  const trackFormError = useCallback((errorField: string, errorMessage: string) => {
    trackEvent('form_error', {
      form_name: formName,
      error_field: errorField,
      error_message: errorMessage
    })
  }, [trackEvent, formName])

  const trackFormSuccess = useCallback(() => {
    trackFormSubmission(formName, true)
  }, [trackFormSubmission, formName])

  const trackFormFailure = useCallback(() => {
    trackFormSubmission(formName, false)
  }, [trackFormSubmission, formName])

  return {
    trackFormStart,
    trackFormError,
    trackFormSuccess,
    trackFormFailure
  }
}

// Hook para tracking de CTAs
export function useCTATracking() {
  const { trackButtonClick } = useGTM()

  const trackCTA = useCallback((ctaName: string, location: string, type: 'primary' | 'secondary' = 'primary') => {
    trackButtonClick(ctaName, location)

    // Track additional CTA-specific data
    trackButtonClick(`cta_${type}`, location)
  }, [trackButtonClick])

  return { trackCTA }
}