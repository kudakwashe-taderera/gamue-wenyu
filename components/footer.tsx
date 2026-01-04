const socialLinks = [
  { href: "mailto:gamuchiraimutambas@gmail.com", label: "Email" },
  { href: "https://www.instagram.com/gamue_wenyu", label: "Instagram" },
  { href: "https://www.youtube.com/@gamue_wenyu", label: "YouTube" },
  { href: "https://www.tiktok.com/@gamue_wenyu", label: "TikTok" },
  { href: "https://www.facebook.com/profile.php?id=100068435491264", label: "Facebook" },
] as const

export function Footer() {
  return (
    <footer className="border-t border-border-subtle mt-24 sm:mt-28 md:mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8">
          <div className="space-y-2">
            <p className="text-sm text-cream-muted">
              © {new Date().getFullYear()} Gamue Wenyu. All rights reserved.
            </p>
            <p className="text-xs text-cream-dim">
              <a
                href="https://kudakwashetaderera.me"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream-muted hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
              >
                Designed & developed by Kudash
              </a>
            </p>
          </div>

          <nav className="flex gap-5 sm:gap-6" aria-label="Social media links">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="text-sm text-cream-muted hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
