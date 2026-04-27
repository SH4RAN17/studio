"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function ProjectPage({ params }: any) {
 const id = (React.use(params) as any).id
  console.log("Project ID:", id)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  // Static data simulation
let project;

if (String(id) === "1") {
  project = {
    title: "A Quiet Corner in Warm Sunlight",
    category: "Living Room",
   software: [
  "3DS Max",
  "Corona Renderer",
],
    location: "Interior",
    description: "A calm and cozy living room visualization focusing on warm sunlight and minimal design.",
    mainImage: "/project-1.jpg",
    gallery: [
      "/project-1.jpg",
      "/project-1_2.jpg",
      "/project-1_3.jpg"
    ]
  }
}

else if (String(id) === "2") {
  project = {
    title: "A Warm Everyday Kitchen",
    category: "Kitchen",
    software: [
  "3DS Max",
  "Corona Renderer",
],
    location: "Interior",
    description: "A modern kitchen designed with warmth, natural materials and soft lighting.",
    mainImage: "/project-2.jpg",
    gallery: [
      "/project-2.jpg",
      "/project-2_1.jpg",
      "/project-2_2.jpg"
    ]
  }
}

else if (String(id) === "3") {
  project = {
    title: "Residential High-Rise Redevelopment Project",
    category: "Exterior",
   software: [
  "3DS Max",
  "D5 Render",
  "Photoshop",
],
    location: "Nerul",
    description: "This a CHS Redevelopment project and  is envisioned as a contemporary residential high-rise that redefines urban living in Navi Mumbai.The project aims to replace an existing housing society with a modern, efficient, and visually dynamic structure.The design focuses on maximizing views, natural light, and ventilation while creating a strong architectural identity within the evolving skyline. With a thoughtfully designed podium and residential tower, the project balances functionality with aesthetics, offering residents an enhanced living experience connected to its surrounding urban and natural context.",
    mainImage: "/KANHERI SUNSET CLOSEUP.webp",
    gallery: [
      "/KANHERI DAY.webp",
      "/KANHERI SUNSET.webp",
      "/KANHERI SUNSET CLOSEUP.webp"
    ]
  }
}

if (!project) {
  return <div>Project not found</div>
}

if (!project) {
  return <div>Project not found</div>
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
  <p className="text-secondary text-base md:text-lg uppercase tracking-widest mb-4 font-serif">
    Software Used
  </p>

  {project.software?.length > 0 && (
    <div className="space-y-4 text-xl">
      {project.software.map((tool: string, i: number) => (
        <div key={i}>
          <p className="font-serif" style={{ color: "#D6BFA3" }}>
            {tool}
          </p>

          {i !== project.software.length - 1 && (
            <div className="border-b border-white/10 mt-4"></div>
          )}
        </div>
      ))}
    </div>
  )}
</div>
              {/* Services section removed as requested */}
            </div>
          </div>
          <div className="lg:col-span-8">
           <h2 className="text-secondary text-lg md:text-xl uppercase tracking-widest mb-8">
  About the project
</h2>
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
