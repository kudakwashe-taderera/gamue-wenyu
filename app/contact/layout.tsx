import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Available for collaborations, commissions, and meaningful conversations. Get in touch with Gamue Wenyu.",
  openGraph: {
    title: "Contact | Gamue Wenyu",
    description: "Available for collaborations, commissions, and meaningful conversations.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

