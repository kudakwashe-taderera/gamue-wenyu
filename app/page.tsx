import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WorkModal } from "@/components/work-modal"
import { HeroVideo } from "@/components/hero-video"
import { featuredWorks } from "@/data/content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: "Zimbabwean multidisciplinary artist exploring African identity, emotional storytelling, and social consciousness through music, film, visual storytelling, and advocacy.",
  openGraph: {
    title: "Gamue Wenyu - Multidisciplinary Artist",
    description: "Zimbabwean artist exploring identity, heritage, and empowerment through interconnected forms of expression",
  },
}

export default function HomePage() {
  return (
    <main className="pt-20">
      <section className="relative min-h-[75svh] sm:min-h-[85vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden">
        <HeroVideo />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight text-balance">
            GAMUE WENYU
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-cream-muted max-w-2xl mx-auto text-pretty leading-relaxed">
            One voice moving across music, film, visual storytelling, and advocacy.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-cream-dim tracking-widest uppercase">
            Music / Film / Visual Storytelling / Advocacy
          </p>
          <div className="flex flex-row gap-2.5 sm:gap-4 justify-center items-center pt-1 sm:pt-2 md:pt-4">
            <Button asChild size="lg" className="w-auto h-9 sm:h-10 px-4 sm:px-6 bg-cream text-charcoal hover:bg-cream-muted focus-visible:ring-2 focus-visible:ring-[var(--burgundy)] focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal">
              <Link href="/music">Explore Music</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-auto h-8 sm:h-10 px-3 sm:px-6 opacity-75 sm:opacity-100 border-cream-muted text-cream hover:bg-charcoal-warm hover:border-[var(--burgundy-muted)] bg-transparent focus-visible:ring-2 focus-visible:ring-[var(--burgundy)] focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight">One Voice, Many Forms</h2>
          <p className="text-base sm:text-lg text-cream-muted leading-relaxed text-pretty">
            Gamue Wenyu, born Gamuchirai Mutamba, is a Zimbabwean multidisciplinary artist whose work spans music, acting, visual storytelling, and activism. Through a powerful blend of creativity and purpose, she uses her work not only to entertain, but to uplift communities, champion girl-child rights, and give voice to underrepresented stories—especially those of young girls and women.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            <article className="space-y-3 sm:space-y-4 border-l-2 border-border-subtle pl-6 sm:pl-8">
              <h3 className="text-3xl sm:text-4xl tracking-tight">Music</h3>
              <p className="text-cream-muted leading-relaxed">
                Soulful Afro-jazz and Afro-fusion music exploring themes of love, loss, identity, and empowerment—drawing from both personal experience and broader social realities. Tracks showcase lyrical depth and vocal range.
              </p>
              <Link
                href="/music"
                className="inline-block text-sm tracking-wide text-cream-dim hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
              >
                Explore Music →
              </Link>
            </article>

            <article className="space-y-3 sm:space-y-4 border-l-2 border-border-subtle pl-6 sm:pl-8">
              <h3 className="text-3xl sm:text-4xl tracking-tight">Film & Acting</h3>
              <p className="text-cream-muted leading-relaxed">
                An emerging force in Zimbabwean film and theatre. Wrote and starred in the series "Ndada," where her performance as a young woman navigating societal expectations added new dimensions to her creative voice, amplifying narratives often left unheard.
              </p>
              <Link
                href="/film"
                className="inline-block text-sm tracking-wide text-cream-dim hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
              >
                View Films →
              </Link>
            </article>

            <article className="space-y-3 sm:space-y-4 border-l-2 border-border-subtle pl-6 sm:pl-8">
              <h3 className="text-3xl sm:text-4xl tracking-tight">Visual Storytelling</h3>
              <p className="text-cream-muted leading-relaxed">
                Conceptual photography, prosthetic makeup, and dramatic photo-stories tackling social issues such as domestic violence, gender-based abuse, and mental health. Visual series portray survivors of trauma with raw honesty and visual impact.
              </p>
              <Link
                href="/visual"
                className="inline-block text-sm tracking-wide text-cream-dim hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
              >
                See Visual Work →
              </Link>
            </article>

            <article className="space-y-3 sm:space-y-4 border-l-2 border-border-subtle pl-6 sm:pl-8">
              <h3 className="text-3xl sm:text-4xl tracking-tight">Advocacy</h3>
              <p className="text-cream-muted leading-relaxed">
                Central to her identity is advocacy for girl-child rights, mental health awareness, and gender equality. As a survivor of industry exploitation and manipulation, she uses her platform to speak out against abuse and support young girls navigating similar paths. Her message: you are worthy, you are powerful, and your voice matters.
              </p>
              <Link
                href="/advocacy"
                className="inline-block text-sm tracking-wide text-cream-dim hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
              >
                Learn More →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">Featured Work</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredWorks.map((work) => {
              const content = (
                <div className="group cursor-pointer space-y-2 sm:space-y-3">
                  {work.imageUrl ? (
                    <div className="w-full border border-border-subtle overflow-hidden group-hover:border-[var(--burgundy-muted)] transition-colors">
                      <img
                        src={work.imageUrl}
                        alt={work.title}
                        className={`w-full h-auto group-hover:opacity-90 transition-opacity duration-500 ${work.imageRotation || ""}`}
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/5] bg-charcoal-warm border border-border-subtle flex items-center justify-center group-hover:border-[var(--burgundy-muted)] transition-colors">
                      <span className="text-4xl sm:text-5xl md:text-6xl opacity-20 font-display">{work.id}</span>
                    </div>
                  )}
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl tracking-tight group-hover:text-cream-muted transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-sm text-cream-dim">
                      {work.year} · {work.medium}
                    </p>
                  </div>
                </div>
              )

              if (work.youtubeUrl) {
                return (
                  <a
                    key={work.id}
                    href={work.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                )
              }

              return (
                <WorkModal key={work.id} work={work}>
                  {content}
                </WorkModal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-cream-muted italic text-balance">
            "I create because I must. My art is a way to speak when others are silenced, to remember when others are forgotten, and to heal where there is pain. Whether I'm singing, acting, or painting a face with scars that tell a story, I do it for the girls who don't yet know they're allowed to dream."
          </blockquote>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-charcoal-warm">
        <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight">Let's Create Together</h2>
          <p className="text-base sm:text-lg text-cream-muted">Open to collaborations, commissions, and conversations.</p>
          <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4">
            <Button asChild size="lg" className="w-auto bg-cream text-charcoal hover:bg-cream-muted focus-visible:ring-2 focus-visible:ring-[var(--burgundy)] focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-light">
              <a href="mailto:gamuchiraimutambas@gmail.com">Email Me</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-auto border-cream-muted text-cream hover:bg-charcoal-warm hover:border-[var(--burgundy-muted)] bg-transparent focus-visible:ring-2 focus-visible:ring-[var(--burgundy)] focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-light"
            >
              <Link href="/contact">Contact Form</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
