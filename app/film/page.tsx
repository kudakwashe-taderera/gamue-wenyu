import { filmProjects, featuredAppearances } from "@/data/content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Film",
  description: "Film as a tool for narrative, performance, and cultural reflection. Wrote and starred in the series 'Ndada,' using storytelling to explore identity and contemporary African experience.",
  openGraph: {
    title: "Film | Gamue Wenyu",
    description: "Film as narrative, performance, and cultural reflection. Creator and star of the series 'Ndada.'",
  },
}

export default function FilmPage() {
  return (
    <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tight">Film</h1>
          <p className="text-base sm:text-lg text-cream-muted max-w-2xl leading-relaxed">
            In addition to her music, Gamue is an emerging force in Zimbabwean film and theatre. She wrote and starred in the series "Ndada," where her performance as a young woman navigating societal expectations added new dimensions to her creative voice. Her foray into film underscores her ability to tell stories across mediums, with a special focus on amplifying narratives often left unheard.
          </p>
        </div>

        <section className="space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl tracking-tight">Showreel</h2>
            <p className="text-sm text-cream-dim">Selected scenes from Ndada and featured screen work</p>
          </div>
          <a
            href="https://www.youtube.com/watch?v=h5Dx_RG_6Ng&t=478s"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="aspect-video bg-charcoal-warm border border-border-subtle flex items-center justify-center hover:border-[var(--burgundy-muted)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2">
              <span className="text-4xl sm:text-5xl md:text-6xl opacity-20 font-display" aria-hidden="true">Showreel</span>
            </div>
          </a>
        </section>

        <section className="space-y-8 sm:space-y-12 border-t border-border-subtle pt-8 sm:pt-12">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Selected Works</h2>
          <div className="space-y-6 sm:space-y-8">
            {filmProjects.map((project) => (
              <a
                key={project.id}
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article className="grid sm:grid-cols-3 gap-6 sm:gap-8 border-l-2 border-border-subtle pl-6 sm:pl-8 hover:border-[var(--burgundy-muted)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2">
                  <div className="aspect-video bg-charcoal-warm border border-border-subtle flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl opacity-20 font-display" aria-hidden="true">{project.id}</span>
                  </div>
                  <div className="sm:col-span-2 space-y-2 sm:space-y-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl tracking-tight mb-1">{project.title}</h3>
                      <p className="text-sm text-cream-dim">
                        {project.year} · {project.type}
                      </p>
                    </div>
                    <p className="text-sm text-cream-muted">{project.role}</p>
                    <p className="text-cream-muted leading-relaxed">{project.description}</p>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>

        <section className="space-y-8 sm:space-y-12 border-t border-border-subtle pt-8 sm:pt-12">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Featured Appearances</h2>
          <div className="space-y-6 sm:space-y-8">
            {featuredAppearances.map((appearance) => (
              <a
                key={appearance.id}
                href={appearance.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article className="grid sm:grid-cols-3 gap-6 sm:gap-8 border-l-2 border-border-subtle pl-6 sm:pl-8 hover:border-[var(--burgundy-muted)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2">
                  <div className="aspect-video bg-charcoal-warm border border-border-subtle flex items-center justify-center overflow-hidden">
                    {appearance.imageUrl ? (
                      <img
                        src={appearance.imageUrl}
                        alt={appearance.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl sm:text-4xl opacity-20 font-display" aria-hidden="true">{appearance.id}</span>
                    )}
                  </div>
                  <div className="sm:col-span-2 space-y-2 sm:space-y-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl tracking-tight mb-1">{appearance.title}</h3>
                      <p className="text-sm text-cream-dim">
                        {appearance.year} · {appearance.type}
                      </p>
                    </div>
                    <p className="text-sm text-cream-muted">{appearance.role}</p>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
