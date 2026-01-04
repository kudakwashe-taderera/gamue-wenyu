import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Gamue Wenyu is a Zimbabwean multidisciplinary artist whose work spans music, film, visual storytelling, and advocacy. Rooted in African identity, emotional storytelling, and social consciousness.",
  openGraph: {
    title: "About | Gamue Wenyu",
    description: "Zimbabwean multidisciplinary artist exploring identity, heritage, and empowerment through interconnected forms of expression.",
  },
}

export default function AboutPage() {
  return (
    <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tight">About</h1>

          <div className="aspect-[3/4] md:aspect-[4/3] bg-charcoal-warm border border-border-subtle overflow-hidden">
            <img
              src="/IMG_7956.JPG"
              alt="Gamue Wenyu"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-cream-muted leading-relaxed">
          <p>
            Gamue Wenyu, born Gamuchirai Mutamba, is a dynamic Zimbabwean artist whose talents span music, acting, visual art, and activism. Through a powerful blend of creativity and purpose, she uses her work not only to entertain, but to uplift communities, champion girl-child rights, and give voice to underrepresented stories—especially those of young girls and women.
          </p>
          <p>
            Gamuchirai is best known for her soulful Afro-jazz and Afro-fusion music. Her songs often explore themes of love, loss, identity, and empowerment—drawing from both personal experience and broader social realities. Tracks like "Nyakubereka Amai" and "Weminana" showcase her lyrical depth and vocal range.
          </p>
          <p>
            In addition to her music, Gamue is an emerging force in Zimbabwean film and theatre. She wrote and starred in the series "Ndada," where her performance as a young woman navigating societal expectations added new dimensions to her creative voice. Her foray into film underscores her ability to tell stories across mediums, with a special focus on amplifying narratives often left unheard.
          </p>
          <p>
            Gamue is also known for her conceptual photography, prosthetic makeup, and dramatic photo-stories, often tackling social issues such as domestic violence, gender-based abuse, and mental health. In haunting visual series, she portrays survivors of trauma, sometimes showing images of herself with bruises or burn scars—not for shock value, but as a call to awareness and empathy. These projects have garnered attention online and in activist spaces for their raw honesty and visual impact, establishing her as both a bold artist and a fearless truth-teller.
          </p>
          <p>
            Central to Gamue's identity is her advocacy for girl-child rights, mental health awareness, and gender equality. As a survivor of industry exploitation and manipulation, she uses her platform to speak out against abuse and support young girls navigating similar paths. Her message is clear: you are worthy, you are powerful, and your voice matters. Her activism is not confined to lyrics or visuals—it extends to community outreach, workshops, and collaborations with other change-makers, where she promotes empowerment, education, and healing through art.
          </p>
        </div>

        <section className="space-y-6 sm:space-y-8 border-t border-border-subtle pt-8 sm:pt-12">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Selected Highlights</h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl tracking-tight text-cream-muted">Music</h3>
              <ul className="space-y-2 text-cream-dim">
                <li>"Nyakubereka Amai"</li>
                <li>"Weminana"</li>
                <li>Afro-jazz and Afro-fusion compositions</li>
              </ul>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl tracking-tight text-cream-muted">Film</h3>
              <ul className="space-y-2 text-cream-dim">
                <li>"Ndada" Series (Writer, Star)</li>
                <li>Film as narrative and cultural reflection</li>
                <li>Performance and storytelling</li>
              </ul>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl tracking-tight text-cream-muted">Visual Storytelling</h3>
              <ul className="space-y-2 text-cream-dim">
                <li>Conceptual photography</li>
                <li>Performance art</li>
                <li>Prosthetic makeup work</li>
                <li>Dramatic photo narratives</li>
              </ul>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl tracking-tight text-cream-muted">Advocacy</h3>
              <ul className="space-y-2 text-cream-dim">
                <li>Girl-child rights</li>
                <li>Mental health awareness</li>
                <li>Gender equality</li>
                <li>Art as platform for social dialogue</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6 sm:space-y-8 border-t border-border-subtle pt-8 sm:pt-12">
          <h2 className="text-2xl sm:text-3xl tracking-tight">Beyond Public Expression</h2>
          <p className="text-base sm:text-lg text-cream-muted leading-relaxed mb-6 sm:mb-8">
            Beyond her public artistic expressions, Gamue is also a scriptwriter, voice-over artist, model and video vixen, MC (master of ceremonies), and an emerging influencer within Zimbabwe's cultural scene.
          </p>
          <div className="border-t border-border-subtle pt-6 sm:pt-8">
            <h3 className="text-xl sm:text-2xl tracking-tight mb-4 sm:mb-6">Collaborations</h3>
            <p className="text-base sm:text-lg text-cream-muted leading-relaxed">
              Available for music collaborations, film projects, visual campaigns, speaking engagements, and advocacy
              partnerships. Open to working with artists, organizations, and brands that share a commitment to authentic
              storytelling, African identity, and social impact.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
