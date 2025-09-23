'use client'

import { createContext, useContext, useEffect, ReactNode } from 'react'

interface GTMContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void
  trackPageView: (path: string) => void
  trackFormSubmission: (formName: string, success: boolean) => void
  trackButtonClick: (buttonName: string, location: string) => void
  trackScrollDepth: (depth: number) => void
  trackVideoEvent: (action: string, videoTitle: string, progress?: number) => void
  trackDownload: (fileName: string, fileType: string) => void
}

const GTMContext = createContext<GTMContextType | null>(null)

interface GTMProviderProps {
  children: ReactNode
}

export function GTMProvider({ children }: GTMProviderProps) {
  useEffect(() => {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID

    if (gtmId && typeof window !== 'undefined') {
      // Initialize GTM manually
      (function(w: any, d: any, s: string, l: string, i: string) {
        w[l] = w[l] || [];
        w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
        const f = d.getElementsByTagName(s)[0] as HTMLElement;
        const j = d.createElement(s) as HTMLScriptElement;
        const dl = l !== 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode?.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', gtmId);

      // Track initial page view
      trackPageView(window.location.pathname)
    }
  }, [])

  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...parameters,
        timestamp: new Date().toISOString(),
        page_url: window.location.href,
        page_title: document.title
      })
    }
  }

  const trackPageView = (path: string) => {
    trackEvent('page_view', {
      page_path: path,
      page_location: typeof window !== 'undefined' ? window.location.href : '',
      page_title: typeof document !== 'undefined' ? document.title : ''
    })
  }

  const trackFormSubmission = (formName: string, success: boolean) => {
    trackEvent('form_submit', {
      form_name: formName,
      form_success: success,
      form_method: 'email_capture'
    })
  }

  const trackButtonClick = (buttonName: string, location: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      button_location: location,
      click_action: 'cta_interaction'
    })
  }

  const trackScrollDepth = (depth: number) => {
    trackEvent('scroll_depth', {
      scroll_percentage: depth,
      scroll_milestone: `${depth}%`
    })
  }

  const trackVideoEvent = (action: string, videoTitle: string, progress?: number) => {
    trackEvent('video_interaction', {
      video_action: action,
      video_title: videoTitle,
      video_progress: progress,
      content_type: 'video'
    })
  }

  const trackDownload = (fileName: string, fileType: string) => {
    trackEvent('file_download', {
      file_name: fileName,
      file_type: fileType,
      download_source: 'landing_page'
    })
  }

  const contextValue: GTMContextType = {
    trackEvent,
    trackPageView,
    trackFormSubmission,
    trackButtonClick,
    trackScrollDepth,
    trackVideoEvent,
    trackDownload
  }

  return (
    <GTMContext.Provider value={contextValue}>
      {children}
    </GTMContext.Provider>
  )
}

export function useGTM() {
  const context = useContext(GTMContext)
  if (!context) {
    throw new Error('useGTM must be used within a GTMProvider')
  }
  return context
}