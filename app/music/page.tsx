import { musicReleases, musicVideoFeatures } from "@/data/content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Music",
  description: "Afro-jazz and Afro-fusion that explores love, loss, identity, empowerment, and memory. Songs like 'Nyakubereka Amai' and 'Weminana' honor heritage while speaking to the present.",
  openGraph: {
    title: "Music | Gamue Wenyu",
    description: "Afro-jazz and Afro-fusion exploring love, loss, identity, empowerment, and memory.",
  },
}

export default function MusicPage() {
  return (
    <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tight">Music</h1>
          <p className="text-base sm:text-lg text-cream-muted max-w-2xl leading-relaxed">
            Gamuchirai is best known for her soulful Afro-jazz and Afro-fusion music. Her songs often explore themes of love, loss, identity, and empowerment—drawing from both personal experience and broader social realities. Tracks like "Nyakubereka Amai" and "Weminana" showcase her lyrical depth and vocal range.
          </p>
        </div>

        <section className="space-y-8 sm:space-y-12">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Featured Releases</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {musicReleases.map((release) => (
              <a
                key={release.id}
                href={release.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article className="group space-y-3 sm:space-y-4 hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2">
                  <div className="aspect-square bg-charcoal-warm border border-border-subtle flex items-center justify-center overflow-hidden group-hover:border-[var(--burgundy-muted)] transition-colors">
                    {release.imageUrl ? (
                      <img
                        src={release.imageUrl}
                        alt={release.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <span className="text-6xl sm:text-7xl md:text-8xl opacity-20 font-display group-hover:scale-110 transition-transform duration-500" aria-hidden="true">
                        {release.id}
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl tracking-tight">{release.title}</h3>
                    <p className="text-sm text-cream-dim">
                      {release.year} · {release.type}
                    </p>
                    <p className="text-cream-muted text-sm leading-relaxed">{release.description}</p>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>

        <section className="space-y-8 sm:space-y-12 border-t border-border-subtle pt-8 sm:pt-12">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Music Video Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {musicVideoFeatures.map((feature) => (
              <a
                key={feature.id}
                href={feature.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article className="group space-y-3 sm:space-y-4 hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2">
                  <div className="aspect-square bg-charcoal-warm border border-border-subtle flex items-center justify-center overflow-hidden group-hover:border-[var(--burgundy-muted)] transition-colors">
                    <span className="text-6xl sm:text-7xl md:text-8xl opacity-20 font-display group-hover:scale-110 transition-transform duration-500" aria-hidden="true">
                      {feature.id}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl tracking-tight">{feature.title}</h3>
                    <p className="text-sm text-cream-dim">
                      {feature.year} · {feature.type}
                    </p>
                    <p className="text-cream-muted text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>

        <section className="space-y-6 sm:space-y-8 border-t border-border-subtle pt-8 sm:pt-12">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Listen</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <a
              href="https://open.spotify.com/artist/gamuewenyu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-10 sm:py-12 bg-charcoal-warm border border-border-subtle hover:border-[var(--burgundy-muted)] transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
            >
              <span className="text-xl sm:text-2xl tracking-tight">Spotify</span>
            </a>
            <a
              href="https://soundcloud.com/gamuewenyu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-10 sm:py-12 bg-charcoal-warm border border-border-subtle hover:border-[var(--burgundy-muted)] transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
            >
              <span className="text-xl sm:text-2xl tracking-tight">SoundCloud</span>
            </a>
            <a
              href="https://music.apple.com/artist/gamuewenyu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-10 sm:py-12 bg-charcoal-warm border border-border-subtle hover:border-[var(--burgundy-muted)] transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
            >
              <span className="text-xl sm:text-2xl tracking-tight">Apple Music</span>
            </a>
            <a
              href="https://www.youtube.com/@gamue_wenyu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-10 sm:py-12 bg-charcoal-warm border border-border-subtle hover:border-[var(--burgundy-muted)] transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[var(--burgundy)] focus-visible:outline-offset-2"
            >
              <span className="text-xl sm:text-2xl tracking-tight">YouTube</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
