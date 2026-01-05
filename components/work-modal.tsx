"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface Work {
  id: number
  title: string
  year: number
  medium: string
  description: string
  imageUrl?: string
  imageRotation?: string
}

export function WorkModal({ work, children }: { work: Work; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div onClick={() => setOpen(true)} role="button" tabIndex={0} onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          setOpen(true)
        }
      }}>{children}</div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-charcoal border-border-subtle max-w-3xl" aria-labelledby="work-title" aria-describedby="work-description">
          <div className="space-y-5 sm:space-y-6 pt-6 sm:pt-8">
            {work.imageUrl ? (
              <div className="w-full border border-border-subtle overflow-hidden">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className={`w-full h-auto ${work.imageRotation || ""}`}
                />
              </div>
            ) : (
              <div className="aspect-video bg-charcoal-warm border border-border-subtle flex items-center justify-center">
                <span className="text-6xl sm:text-7xl md:text-8xl opacity-20 font-display" aria-hidden="true">{work.id}</span>
              </div>
            )}

            <div className="space-y-3 sm:space-y-4">
              <div>
                <h2 id="work-title" className="text-2xl sm:text-3xl tracking-tight mb-2">{work.title}</h2>
                <p className="text-sm text-cream-dim">
                  {work.year} · {work.medium}
                </p>
              </div>

              <p id="work-description" className="text-cream-muted leading-relaxed">{work.description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
