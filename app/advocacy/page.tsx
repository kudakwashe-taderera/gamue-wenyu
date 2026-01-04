import { advocacyInitiatives } from "@/data/content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advocacy",
  description: "Using art as a tool for social change, community building, and amplifying voices that need to be heard. Championing girl-child rights, mental health awareness, and gender equality.",
  openGraph: {
    title: "Advocacy | Gamue Wenyu",
    description: "Using art as a tool for social change, community building, and amplifying voices that need to be heard.",
  },
}

export default function AdvocacyPage() {
  return (
    <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tight">Advocacy</h1>
          <p className="text-base sm:text-lg text-cream-muted leading-relaxed">
            Central to Gamue's identity is her advocacy for girl-child rights, mental health awareness, and gender equality. As a survivor of industry exploitation and manipulation, she uses her platform to speak out against abuse and support young girls navigating similar paths. Her message is clear: you are worthy, you are powerful, and your voice matters.
          </p>
        </div>

        <section className="space-y-5 sm:space-y-6 border-l-2 border-border-subtle pl-6 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Manifesto</h2>
          <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-cream-muted leading-relaxed">
            <p>
              Art is not luxury—it is necessity. It is how we process trauma, celebrate joy, preserve culture, and
              imagine futures that don't yet exist.
            </p>
            <p>
              I believe in using creative platforms to challenge systems, question norms, and create space for those
              whose stories have been silenced. Whether through music that honors our ancestors, films that center
              marginalized experiences, or direct community engagement, every project is an act of resistance and love.
            </p>
            <p>
              My work centers girl-child rights, mental health awareness, and gender equality because these are not
              separate from art—they are the context in which all art is created and consumed.
            </p>
            <p>
              My activism is not confined to lyrics or visuals—it extends to community outreach, workshops, and collaborations with other change-makers, where I promote empowerment, education, and healing through art.
            </p>
          </div>
        </section>

        <section className="space-y-8 sm:space-y-12 border-t border-border-subtle pt-8 sm:pt-12">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Initiatives</h2>
          <div className="space-y-6 sm:space-y-8">
            {advocacyInitiatives.map((initiative) => (
              <article key={initiative.id} className="space-y-2 sm:space-y-3 border-l-2 border-border-subtle pl-6 sm:pl-8">
                <h3 className="text-xl sm:text-2xl tracking-tight">{initiative.title}</h3>
                <p className="text-sm text-cream-dim">
                  {initiative.focus} · {initiative.year}
                </p>
                <p className="text-cream-muted leading-relaxed">{initiative.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 sm:space-y-8 border-t border-border-subtle pt-8 sm:pt-12">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Partnerships</h2>
          <p className="text-base sm:text-lg text-cream-muted leading-relaxed">
            Open to collaborating with organizations, educational institutions, and community groups committed to
            meaningful change. Available for workshops, speaking engagements, and creative partnerships that align with
            these values.
          </p>
        </section>

        <section className="bg-charcoal-warm border border-border-subtle p-6 sm:p-8 md:p-12 text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Get Involved</h2>
          <p className="text-cream-muted">Interested in supporting or collaborating on advocacy work?</p>
          <a
            href="mailto:gamuchiraimutambas@gmail.com"
            className="inline-block px-6 py-3 bg-cream text-charcoal hover:bg-cream-muted transition-colors text-sm tracking-wide focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
          >
            Reach Out
          </a>
        </section>
      </div>
    </main>
  )
}
