
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ResumePage() {
  const sections = [
    {
      title: "Experience",
      items: [
        { role: "Architectural Visualizer", company: "Freelancer", period: "March 2026 — Present", desc: "Assisting architects with design visualization." },
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
    { name: "3DS Max", level: "intermediate" },
    { name: "Corona", level: "intermediate" },
    { name: "D5 Render", level: "intermediate" },
    { name: "Photoshop", level: "intermediate" },
    { name: "After Effects", level: "intermediate" },
    { name: "Premiere Pro", level: "intermediate" },
    { name: "Maya", level: "beginner" },
  ]

  const skills = [
    "Photorealistic Interior & Exterior Rendering",
    "Camera Composition & Cinematic Framing",
    "Post-Production",
    "Advanced Material & Texture",
    "Atmospheric Depth & Mood Crafting",
    "Consistency Across Views",
    "Client-Focused Visualization",
    "Creative Thinking"
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="pt-48 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
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

            {/* Skills - Section 04 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <div className="sticky top-32">
                  <span className="text-secondary text-xs uppercase tracking-[0.3em] block mb-2">04</span>
                  <h2 className="text-secondary text-xs uppercase tracking-[0.3em]">Skills</h2>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-1 h-1 bg-primary/40 group-hover:bg-primary transition-colors rounded-full" />
                      <span className="text-lg text-secondary group-hover:text-foreground transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
     <div>                <h2 className="font-headline text-4xl mb-8">Let&apos;s talk about your next vision.</h2>                <p className="text-secondary text-lg mb-12 uppercase tracking-widest">OPEN FOR COLLABORATIONS</p>                <a href="https://wa.me/8828691247?text=Hi%20I%20saw%20your%20portfolio" className="inline-block py-4 px-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium uppercase tracking-widest text-sm">                <a href="https://wa.me/+918828691247?text=Hi%20I%20saw%20your%20portfolio" className="inline-block py-4 px-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium uppercase tracking-widest text-sm">                  Send Message                </a>              </div>
   
      
      <Footer />
    </main>
  )
}
