"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const subject = formData.subject || `Contact from ${formData.name}`
    const body = `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    
    const mailtoLink = `mailto:gamuchiraimutambas@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    window.location.href = mailtoLink
    
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 1000)
  }

  return (
    <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20 md:space-y-24">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tight">Contact</h1>
          <p className="text-lg sm:text-xl text-cream-muted leading-relaxed max-w-2xl">
            Open to collaborations, commissions, and conversations. Let's create something meaningful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20">
          <div className="lg:col-span-1 space-y-10 sm:space-y-12">
            <div className="space-y-4 sm:space-y-5">
              <h2 className="text-2xl sm:text-3xl tracking-tight">Get in Touch</h2>
              <div className="space-y-1">
                <p className="text-sm text-cream-dim uppercase tracking-wider">Email</p>
                <a
                  href="mailto:gamuchiraimutambas@gmail.com"
                  className="block text-base sm:text-lg text-cream-muted hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
                >
                  gamuchiraimutambas@gmail.com
                </a>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5 border-t border-border-subtle pt-8 sm:pt-10">
              <h2 className="text-2xl sm:text-3xl tracking-tight">Connect</h2>
              <nav className="space-y-3 sm:space-y-4" aria-label="Social media links">
                <a
                  href="https://www.instagram.com/gamue_wenyu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base sm:text-lg text-cream-muted hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@gamue_wenyu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base sm:text-lg text-cream-muted hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
                >
                  YouTube
                </a>
                <a
                  href="https://www.tiktok.com/@gamue_wenyu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base sm:text-lg text-cream-muted hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
                >
                  TikTok
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100068435491264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base sm:text-lg text-cream-muted hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
                >
                  Facebook
                </a>
              </nav>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-2 sm:space-y-3">
                <Label htmlFor="name" className="text-sm text-cream-muted">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-charcoal-warm border-border-subtle text-cream placeholder:text-cream-dim focus-visible:ring-[var(--burgundy)] focus-visible:ring-offset-charcoal h-12"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2 sm:space-y-3">
                <Label htmlFor="email" className="text-sm text-cream-muted">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-charcoal-warm border-border-subtle text-cream placeholder:text-cream-dim focus-visible:ring-[var(--burgundy)] focus-visible:ring-offset-charcoal h-12"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="subject" className="text-sm text-cream-muted">
                Subject
              </Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="bg-charcoal-warm border-border-subtle text-cream placeholder:text-cream-dim focus-visible:ring-[var(--burgundy)] focus-visible:ring-offset-charcoal h-12"
                placeholder="What's this about?"
              />
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="message" className="text-sm text-cream-muted">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={8}
                className="bg-charcoal-warm border-border-subtle text-cream placeholder:text-cream-dim focus-visible:ring-[var(--burgundy)] focus-visible:ring-offset-charcoal resize-none min-h-[12rem]"
                placeholder="Tell me about your project, collaboration idea, or just say hello..."
              />
            </div>

            <div className="flex justify-start pt-2">
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="bg-cream text-charcoal hover:bg-cream-muted focus-visible:ring-2 focus-visible:ring-[var(--burgundy)] focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Opening Email..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
