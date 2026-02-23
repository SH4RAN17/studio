
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export default function ResumePage() {
  const sections = [
    {
      title: "Experience",
      items: [
        { role: "Senior Architectural Visualizer", company: "Atelier Grey", period: "2021 — Present", desc: "Leading the visualization team for high-end residential projects across Europe." },
        { role: "Conceptual Designer", company: "Studio Mono", period: "2018 — 2021", desc: "Developed architectural concepts and digital twins for urban planning competitions." },
      ]
    },
    {
      title: "Education",
      items: [
        { role: "Bachelor of Design", company: "NID Ahmedabad", period: "2012 — 2016", desc: "Interdisciplinary design studies with a minor in digital media." },
      ]
    },
    {
      title: "Selected Skills",
      items: [
        { role: "Software", desc: "Unreal Engine 5, Rhino 7, Grasshopper, 3ds Max, Commission Renderer, Adobe Creative Suite, AutoCAD." },
        { role: "Expertise", desc: "Real-time Visualization, Procedural Modeling, Material Science, Lighting Design, Spatial Storytelling." },
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-48 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary uppercase tracking-[0.3em] text-sm mb-4 block">Curriculum Vitae</span>
          <h1 className="font-headline text-7xl md:text-9xl mb-24">Resume.</h1>
          
          <div className="space-y-32">
            {sections.map((section, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                  <h2 className="text-secondary text-xs uppercase tracking-[0.3em] sticky top-32">{section.title}</h2>
                </div>
                <div className="md:col-span-8 space-y-16">
                  {section.items.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-baseline mb-4">
                        <h3 className="text-2xl font-medium group-hover:text-primary transition-colors">{item.role}</h3>
                        {item.period && <span className="text-sm text-secondary font-mono">{item.period}</span>}
                      </div>
                      <p className="text-primary text-sm uppercase tracking-widest mb-4">{item.company}</p>
                      <p className="text-lg text-secondary leading-relaxed max-w-xl">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-48 pt-24 border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="font-headline text-4xl mb-8">Let&apos;s talk about your next vision.</h2>
                <p className="text-secondary text-lg mb-12">I am always open to collaborations and new architectural challenges.</p>
                <a href="mailto:belelsharan17@gmail.com" className="inline-block py-4 px-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium uppercase tracking-widest text-sm">
                  Send Message
                </a>
              </div>
              <div className="flex flex-col justify-end space-y-4 text-secondary uppercase tracking-[0.2em] text-sm">
                <p>Mumbai, India</p>
                <p>+91 8828691247</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
