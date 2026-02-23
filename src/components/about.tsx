
export function About() {
  return (
    <section id="about" className="py-32 px-8 md:px-16 bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-headline text-5xl md:text-7xl leading-tight text-left">
            Crafting <span className="text-primary italic">Atmospheres</span> Not Just Structures.
          </h2>
        </div>
        <div className="lg:col-span-7 flex flex-col justify-end">
          <div className="max-w-xl ml-auto">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              Based in the intersection of digital precision and tactile reality, I specialize in architectural visualization and conceptual design that speaks through silence.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              My work explores the dialogue between light, shadow, and materiality. Every project is a journey into the essence of space, seeking to evoke emotion through restrained elegance and brutalist honesty. With a background in both traditional architecture and advanced 3D rendering, I bridge the gap between imagination and built environments.
            </p>
            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4 text-sm uppercase tracking-widest text-primary font-medium">
              <span>Visualization</span>
              <span>Concept Design</span>
              <span>Interior Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
