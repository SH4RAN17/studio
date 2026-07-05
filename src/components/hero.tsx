import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end px-5 md:px-16 pb-14 md:pb-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Stills/hero.jpg"
          alt="Sharan Belel Portfolio"
          fill
          className="object-cover object-[62%_center] md:object-center"
          priority
          data-ai-hint="architecture interior"
        />
        <div className="absolute inset-0 cinematic-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-7xl animate-fade-in-up">
        <span className="text-primary uppercase tracking-[0.22em] md:tracking-[0.3em] text-[11px] md:text-sm mb-3 md:mb-4 block">Architectural Visualizer | 3D Artist</span>
        <h1 className="font-headline text-[56px] sm:text-[68px] md:text-[clamp(64px,12vw,140px)] leading-[0.92] md:leading-[0.9] mb-6 md:mb-8">
          Sharan Belel
        </h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 mt-8 md:mt-12 border-t border-white/10 pt-6 md:pt-8">
          <p className="max-w-full md:max-w-md text-secondary text-base md:text-lg leading-8 md:leading-normal">
             Anyone can model a room, Few can make it feel like home before it exists.
          </p>
          <div className="flex gap-4">
            <div className="h-10 w-10 md:h-12 md:w-12 border border-white/20 flex items-center justify-center rounded-full hover:border-primary transition-colors cursor-pointer group">
              <div className="w-2 h-2 bg-white group-hover:bg-primary transition-colors rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
