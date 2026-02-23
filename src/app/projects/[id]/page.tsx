
"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  // Static data simulation
  const project = {
    title: "Minimal Concrete Pavilion",
    category: "Architecture",
    year: "2023",
    location: "Stockholm, Sweden",
    description: "A study in brutalist honesty, the Concrete Pavilion is designed as a sanctuary of silence. Using exposed board-formed concrete and deep overhangs, the structure manipulates natural light to create shifting atmospheres throughout the day.",
    mainImage: "https://picsum.photos/seed/proj1/1920/1080",
    gallery: [
      "https://picsum.photos/seed/gallery1/800/1000",
      "https://picsum.photos/seed/gallery2/800/1000",
      "https://picsum.photos/seed/gallery3/1200/800",
    ]
  }

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
            src={project.mainImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            data-ai-hint="minimal architecture"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl pointer-events-none">
          <div className="pointer-events-auto">
            <Link href="/#projects" className="flex items-center gap-2 text-sm uppercase tracking-widest text-white/60 hover:text-primary transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" />
              Back to projects
            </Link>
            <span className="text-primary uppercase tracking-[0.3em] text-sm mb-4 block">{project.category}</span>
            <h1 className="font-headline text-5xl md:text-8xl leading-none mb-8">{project.title}</h1>
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
                <p className="text-xl">{project.year}</p>
              </div>
              {/* Services section removed as requested */}
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-secondary text-xs uppercase tracking-widest mb-8">About the project</h2>
            <p className="text-lg leading-relaxed mb-16 text-secondary max-w-3xl">
              {project.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, i) => (
                <div 
                  key={i} 
                  className="relative aspect-[4/5] bg-card overflow-hidden cursor-zoom-in group"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image 
                    src={img} 
                    alt={`${project.title} gallery ${i}`} 
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
