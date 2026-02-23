
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

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
        { role: "B.Sc. Animation & VFX", company: "Thakur College of Science & Commerce (Kandivali E)", period: "2025 - 2028", desc: "Interdisciplinary design studies with a minor in digital media." },
      ]
    }
  ]

  const tools = [
    { name: "Revit", level: "Expert" },
    { name: "3ds Max", level: "Expert" },
    { name: "Photoshop", level: "Advanced" },
    { name: "Lumion", level: "Expert" },
    { name: "Unreal Engine", level: "Advanced" },
    { name: "Maya", level: "Proficient" },
    { name: "D5 Render", level: "Advanced" },
    { name: "SketchUp", level: "Expert" },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="pt-48 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary uppercase tracking-[0.3em] text-sm mb-4 block">Curriculum Vitae</span>
          <h1 className="font-headline text-7xl md:text-9xl mb-24">Resume.</h1>
          
          <div className="space-y-32">
            {/* Experience & Education */}
            {sections.map((section, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                  <div className="sticky top-32">
                    <span className="text-secondary text-xs uppercase tracking-[0.3em] block mb-2">0{idx + 1}</span>
                    <h2 className="text-secondary text-xs uppercase tracking-[0.3em]">{section.title}</h2>
                  </div>
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

            {/* Services & Tools - Section 03 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <div className="sticky top-32">
                  <span className="text-secondary text-xs uppercase tracking-[0.3em] block mb-2">03</span>
                  <h2 className="text-secondary text-xs uppercase tracking-[0.3em]">Services &amp; Tools</h2>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="divide-y divide-white/10 border-t border-white/10">
                  {tools.map((tool, i) => (
                    <div key={i} className="py-6 flex justify-between items-center group hover:bg-white/[0.02] transition-all px-2">
                      <span className="font-headline text-2xl font-medium group-hover:text-primary transition-colors">{tool.name}</span>
                      <span className="text-sm uppercase tracking-widest text-secondary group-hover:text-foreground transition-colors">{tool.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                <p>Mumbai</p>
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
