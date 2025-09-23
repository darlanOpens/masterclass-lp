import { NextRequest, NextResponse } from 'next/server'
import { sendToWebhook, isRateLimited, recordSubmissionAttempt, getRateLimitIdentifier } from '@/lib/webhook-service'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nome, email, telefone, site, redesSociais, faturamento, colaboradores, Segmento } = body

    // Get client IP for rate limiting
    const forwarded = request.headers.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(/, /)[0] : request.ip || 'unknown'

    // Check rate limiting
    const rateLimitId = getRateLimitIdentifier(email, ip)

    if (isRateLimited(rateLimitId)) {
      return NextResponse.json(
        { success: false, message: 'Muitas tentativas. Tente novamente em alguns minutos.' },
        { status: 429 }
      )
    }

    // Record submission attempt
    recordSubmissionAttempt(rateLimitId)

    // Send to webhook
    const result = await sendToWebhook({
      nome,
      email,
      telefone,
      site,
      redesSociais,
      faturamento,
      colaboradores,
      Segmento
    })

    if (result.success) {
      return NextResponse.json(result)
    } else {
      return NextResponse.json(
        result,
        { status: 400 }
      )
    }

  } catch (error) {
    console.error('Erro na API de envio do formulário:', error)

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Erro interno do servidor'
      },
      { status: 500 }
    )
  }
}