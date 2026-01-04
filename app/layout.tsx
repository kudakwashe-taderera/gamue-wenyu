import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: {
    default: "Gamue Wenyu - Multidisciplinary Artist",
    template: "%s | Gamue Wenyu",
  },
  description: "Zimbabwean multidisciplinary artist working across music, film, visual storytelling, and advocacy. Rooted in African identity, emotional storytelling, and social consciousness.",
  openGraph: {
    title: "Gamue Wenyu - Multidisciplinary Artist",
    description: "Zimbabwean artist exploring identity, heritage, and empowerment through Afro-jazz, film, visual storytelling, and advocacy",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gamue Wenyu - Multidisciplinary Artist",
    description: "Zimbabwean artist exploring identity, heritage, and empowerment through Afro-jazz, film, visual storytelling, and advocacy",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
