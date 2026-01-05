import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Visual Storytelling",
  description: "Conceptual photography, performance art, dramatic photo narratives, and prosthetic makeup work that explore identity, body, and emotion.",
  openGraph: {
    title: "Visual Storytelling | Gamue Wenyu",
    description: "Conceptual photography, performance art, and prosthetic makeup work exploring identity, body, and emotion.",
  },
}

export default function VisualPage() {
  return (
    <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-14 md:space-y-16">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tight">Visual Storytelling</h1>
          <p className="text-base sm:text-lg text-cream-muted max-w-2xl leading-relaxed">
            Gamue is also known for her conceptual photography, prosthetic makeup, and dramatic photo-stories, often tackling social issues such as domestic violence, gender-based abuse, and mental health. In haunting visual series, she portrays survivors of trauma, sometimes showing images of herself with bruises or burn scars—not for shock value, but as a call to awareness and empathy. These projects have garnered attention online and in activist spaces for their raw honesty and visual impact, establishing her as both a bold artist and a fearless truth-teller.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-14 md:space-y-16">
          <div className="flex items-center justify-center overflow-hidden">
            <img
              src="/IMG_8033.JPG"
              alt="Between Worlds"
              className="max-w-full h-auto object-contain -rotate-90"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl tracking-tight">Between Worlds</h2>
            <p className="text-cream-muted leading-relaxed">
              An immersive performance piece examining cultural duality and the constant negotiation between tradition
              and modernity, heritage and innovation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="aspect-[3/4] bg-charcoal-warm border border-border-subtle flex items-center justify-center overflow-hidden">
              <img
                src="/IMG_8024.JPG"
                alt="Metamorphosis"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] bg-charcoal-warm border border-border-subtle flex items-center justify-center overflow-hidden">
              <img
                src="/IMG_8023.JPG"
                alt="Metamorphosis"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl tracking-tight">Metamorphosis</h2>
            <p className="text-cream-muted leading-relaxed">
              A photographic series capturing moments of transformation, resilience, and self-discovery in contemporary
              African youth.
            </p>
          </div>

          <div className="flex items-center justify-center overflow-hidden">
            <img
              src="/IMG_8034.JPG"
              alt="Body as Canvas"
              className="max-w-full h-auto object-contain"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl tracking-tight">Body as Canvas</h2>
            <p className="text-cream-muted leading-relaxed">
              Performance documentation exploring embodiment, expression, and the ways our bodies carry and communicate
              stories beyond words.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
