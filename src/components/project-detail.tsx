
"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Project } from "@/lib/projects-data"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function ProjectDetail({ project }: { project: Project }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const mainImage = PlaceHolderImages.find(img => img.id === project.mainImageId)?.imageUrl || "https://picsum.photos/seed/main/1920/1080"
  
  // Logic to handle gallery images - ensures consistency with previous requests
  const galleryImages = project.galleryImageIds.map(id => {
    return PlaceHolderImages.find(img => img.id === id)?.imageUrl || `https://picsum.photos/seed/${id}/800/1000`
  }).slice(0, project.id === "3" ? 2 : undefined)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Fullscreen Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] w-full max-h-[95vh] h-full p-0 bg-black/90 border-none overflow-hidden sm:rounded-none">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {selectedImage && (
              <div className="relative w-full h-full">
                <Image 
                  src={selectedImage} 
                  alt="Full size visualization" 
                  fill 
                  className="object-contain" 
                  priority
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section - Lightbox functionality removed as requested */}
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
        
        <div className="relative z-10 w-full max-w-7xl pointer-events-none">
          <div className="pointer-events-auto">
            <Link href="/#projects" className="flex items-center gap-2 text-sm uppercase tracking-widest text-white/60 hover:text-primary transition-colors mb-12 w-fit">
              <ArrowLeft className="w-4 h-4" />
              Back to projects
            </Link>
            <span className="text-primary uppercase tracking-[0.3em] text-sm mb-4 block">{project.category}</span>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 max-w-4xl">{project.title}</h1>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="space-y-12 sticky top-32">
              <div>
                <p className="text-secondary text-xs uppercase tracking-widest mb-4">Year</p>
                <p className="text-xl">{project.Softwares Used}</p>
              </div>
              {/* Services section removed as requested */}
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-secondary text-xs uppercase tracking-widest mb-8">About the project</h2>
            <p className="text-sm md:text-base leading-relaxed mb-16 text-secondary max-w-3xl">
              {project.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryImages.map((img, i) => (
                <div 
                  key={i} 
                  className="relative aspect-[4/5] bg-card overflow-hidden cursor-zoom-in group"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image 
                    src={img} 
                    alt={`${project.title} detail ${i}`} 
                    fill 
                    className="object-cover transition-slow group-hover:scale-105" 
                    data-ai-hint="architecture detail" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
