
export function About() {
  return (
    <section id="about" className="py-32 px-8 md:px-16 bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-headline text-5xl md:text-7xl leading-tight text-left">
            Spaces That <span className="text-primary italic">Breathe</span>Before They're Built.
          </h2>
        </div>
        <div className="lg:col-span-7 flex flex-col justify-end">
          <div className="max-w-xl ml-auto">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            I’m Sharan, a 3D archviz artist creating visuals that make projects clear, real and convincing.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
I create photorealistic visuals helping architects and Real Estate developers present their projects with clarity, realism and impact. Every frame is crafted to communicate value instantly, hold attention, and move projects forward faster.
Strong visuals don’t just represent architecture, they influence decisions and make people believe in the project before it exists.
            </p>
            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4 text-sm uppercase tracking-widest text-primary font-medium">
              <span>Archviz</span>
              <span>Product</span>
              <span>Environment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
