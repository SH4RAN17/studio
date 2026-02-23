
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { projectsData, Project } from "@/lib/projects-data"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function ProjectDetail({ project }: { project: Project }) {
  const mainImage = PlaceHolderImages.find(img => img.id === project.mainImageId)?.imageUrl || "https://picsum.photos/seed/main/1920/1080"
  
  const galleryImages = project.galleryImageIds.map(id => {
    return PlaceHolderImages.find(img => img.id === id)?.imageUrl || `https://picsum.photos/seed/${id}/800/1000`
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center px-8 md:px-16">
        <div className="absolute inset-0 z-0">
          <Image
            src={mainImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            data-ai-hint="architecture render"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl">
          <Link href="/#projects" className="flex items-center gap-2 text-sm uppercase tracking-widest text-white/60 hover:text-primary transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
          <span className="text-primary uppercase tracking-[0.3em] text-sm mb-4 block">{project.category}</span>
          <h1 className="font-headline text-7xl md:text-[120px] leading-none mb-8">{project.title}</h1>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="space-y-12 sticky top-32">
              <div>
                <p className="text-secondary text-xs uppercase tracking-widest mb-4">Year</p>
                <p className="text-xl">{project.year}</p>
              </div>
              <div>
                <p className="text-secondary text-xs uppercase tracking-widest mb-4">Services</p>
                <p className="text-xl">
                  {project.services.map((service, i) => (
                    <span key={i}>{service}{i < project.services.length - 1 && <br />}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-secondary text-xs uppercase tracking-widest mb-8">About the project</h2>
            <p className="text-2xl md:text-3xl leading-relaxed mb-16 text-foreground">
              {project.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryImages.slice(0, 2).map((img, i) => (
                <div key={i} className="relative aspect-[4/5] bg-card overflow-hidden">
                  <Image src={img} alt={`${project.title} detail ${i}`} fill className="object-cover grayscale hover:grayscale-0 transition-slow" data-ai-hint="architecture detail" />
                </div>
              ))}
              {galleryImages[2] && (
                <div className="md:col-span-2 relative aspect-video bg-card overflow-hidden">
                  <Image src={galleryImages[2]} alt={`${project.title} wide`} fill className="object-cover grayscale hover:grayscale-0 transition-slow" data-ai-hint="architecture wide" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
