"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { X, Menu } from "lucide-react"

const links = [
  { href: "/about", label: "About" },
  { href: "/music", label: "Music" },
  { href: "/film", label: "Film" },
  { href: "/visual", label: "Visual" },
  { href: "/advocacy", label: "Advocacy" },
  { href: "/contact", label: "Contact" },
] as const

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-3 sm:py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg sm:text-xl tracking-wide font-display hover:text-cream-muted transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
            aria-label="Gamue Wenyu home"
          >
            Gamue
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2 ${
                  pathname === link.href ? "text-cream" : "text-cream-muted hover:text-cream"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden text-cream p-2 focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden pt-4 sm:pt-6 pb-3 sm:pb-4 space-y-3 sm:space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2 ${
                  pathname === link.href ? "text-cream" : "text-cream-muted"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
