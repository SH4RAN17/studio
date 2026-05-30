"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { PanoramaViewer } from "@/components/panorama-viewer"
import { Analytics } from "@vercel/analytics/next"

export default function ProjectPage({ params }: any) {
 const id = (React.use(params) as any).id
  console.log("Project ID:", id)
 const [selectedImage, setSelectedImage] = useState<string | null>(null)
const [open360, setOpen360] = useState(false)
  
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
    mainImage: "/Stills/project-1.jpg",
    gallery: [
      "/Stills/project-1.jpg",
      "/Stills/project-1_2.jpg",
      "/Stills/project-1_3.jpg"
    ]
  }
}

else if (String(id) === "2") {
  project = {
    title: "A Home Softened by Light",
    category: "Bedroom",
    software: [
  "3DS Max",
  "Corona Renderer",
  "AI For Human Integration",
],
    location: "Bedroom",
    description: "Inspired by cozy Russian style interiors, this bedroom visualization emphasizes soft daylight, layered fabrics, and handcrafted decorative details. The scene was developed to evoke a relaxed morning ambience with cinematic lighting and tactile material realism.To make the scene feel more emotionally connected and alive, AI-assisted human integration was used carefully to introduce a gentle storytelling element without disturbing the original mood and lighting of the render.",
    mainImage: "/Stills/project2.webp",
    gallery: [
      "/Stills/project2.1.webp",
      "/Stills/project2.2.webp",
      "/Stills/project2.3.webp"
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
    mainImage: "/Stills/KANHERI SUNSET CLOSEUP.webp",
    gallery: [
      "/Stills/KANHERI DAY.webp",
      "/Stills/KANHERI SUNSET.webp",
      "/Stills/KANHERI SUNSET CLOSEUP.webp"
    ]
  }
}

else if (String(id) === "4") {
  project = {
    title: "Residential High-Rise Redevelopment Project",
    category: "Exterior",
   software: [
  "3DS Max",
  "D5 Render",
  "Photoshop",
],
    location: "Sanpada",
    description: "This redevelopment project is envisioned as a contemporary residential high-rise that redefines urban living in Navi Mumbai. Located in Sanpada, Navi Mumbai. the project aims to transform a conventional residential site into a modern, efficient, and visually dynamic landmark.The twin-tower composition is centered on maximizing views, natural light, and ventilation through a split-massing approach. With an active ground plane and a sculptural base that contrasts the rigid towers above, the project balances high-density functionality with an enhanced user experience connected to its surrounding urban context." ,
    mainImage: "/Stills/SANPADAClOSEUP.webp",
    gallery: [
      "/Stills/SANPADAFRONT.webp",
      "/Stills/SANPADAClOSEUP.webp",

      
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
          <DialogTitle className="sr-only">Full size visualization</DialogTitle>
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
      
      
 
<Dialog
  open={open360}
  onOpenChange={setOpen360}
>
  <DialogContent className="max-w-[100vw] w-full h-[100vh] p-0 bg-black border-none sm:rounded-none">
    <DialogTitle className="sr-only">360 panorama viewer</DialogTitle>
    <PanoramaViewer />
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
              quality={100}
  unoptimized
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
            {String(id) === "2" && (
  <div className="mt-20">
    <h2 className="text-secondary text-lg md:text-xl uppercase tracking-widest mb-8">
      360 Degree Experience
    </h2>

    <div
      onClick={() => setOpen360(true)}
      className="relative cursor-pointer overflow-hidden group"
    >
      <Image
        src="/Bedroom.webp"
        alt="360 Preview"
        width={1600}
        height={900}
        className="w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="border border-white px-6 py-3 text-white uppercase">
          View 360°
        </div>
      </div>
    </div>
  </div>
)}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
