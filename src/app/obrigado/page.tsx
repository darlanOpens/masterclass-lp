import { ThankYouPage } from "@/components/thank-you-page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Obrigado! Vaga Garantida | Masterclass Black Friday - Método C.R.E.",
  description: "Sua vaga está garantida na Masterclass sobre o Método C.R.E. para Black Friday. Acesse nossa comunidade para receber todas as informações.",
  robots: "noindex, nofollow", // Evita indexação da página de confirmação
  openGraph: {
    title: "Vaga Garantida na Masterclass Black Friday!",
    description: "Você está inscrito! Acesse nossa comunidade para receber o link da aula e materiais exclusivos.",
    type: "website",
  },
}

export default function ObrigadoPage() {
  return <ThankYouPage />
}