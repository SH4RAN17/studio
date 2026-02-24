
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
              I am a passionate and detail-oriented 3D artist currently pursuing a degree in Animation and VFX, with a strong emphasis on architectural visualization.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              My area of specialization is in realistic interior and exterior 3D rendering using industry standard software such as Autodesk 3ds Max, Maya and Corona, Vray Renderer. My work is centered on accurate scale, lighting, material, and composition. I am very interested in learning how real-world design translates into digital spaces and am constantly working on improving my skills through hands-on experience, analysis, and feedback. I am very keen into learning interior and exterior spaces in depth. I am dedicated to becoming a better visual storyteller and I can deliver high-quality, visually engaging 3D experiences for architectural, design, and media projects.
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
