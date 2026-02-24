import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end px-8 md:px-16 pb-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Sharan Belel Portfolio"
          fill
          className="object-cover"
          priority
          data-ai-hint="architecture interior"
        />
        <div className="absolute inset-0 cinematic-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-7xl animate-fade-in-up">
        <span className="text-primary uppercase tracking-[0.3em] text-sm mb-4 block">3D Artist</span>
        <h1 className="font-headline text-[clamp(64px,12vw,140px)] leading-[0.9] mb-8">
          Sharan Belel
        </h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-12 border-t border-white/10 pt-8">
          <p className="max-w-md text-secondary text-lg">
            Transcending spatial boundaries through minimal aesthetics and poetic materiality.
          </p>
          <div className="flex gap-4">
            <div className="h-12 w-12 border border-white/20 flex items-center justify-center rounded-full hover:border-primary transition-colors cursor-pointer group">
              <div className="w-2 h-2 bg-white group-hover:bg-primary transition-colors rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
