"use client"

import Link from "next/link"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const projects = [
  { id: "1", title: "A Quiet Corner in Warm Sunlight", category: "Architecture", imageId: "project-1" },
  { id: "2", title: "A Warm Everyday Kitchen", category: "Interior", imageId: "project-2" },
  { id: "3", title: "Urban Monolith", category: "Conceptual", imageId: "project-3" },
  { id: "4", title: "Glass Sanctuary", category: "Residential", imageId: "project-4" },
  { id: "5", title: "Desert Oasis", category: "Commercial", imageId: "project-5" },
  { id: "6", title: "Brutalist Study", category: "Conceptual", imageId: "project-6" },
]

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-32 px-8 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-24 border-b border-white/5 pb-12">
          <div>
            <span className="text-primary uppercase tracking-widest text-xs mb-4 block">Portfolio</span>
            <h2 className="font-headline text-5xl md:text-7xl">Selected Works</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project) => {
            const imageData = PlaceHolderImages.find(img => img.id === project.imageId)
            return (
              <Link 
                key={project.id} 
                href={`/projects/${project.id}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-card transition-slow">
                  <Image
                    src={imageData?.imageUrl || `https://picsum.photos/seed/${project.id}/800/1000`}
                    alt={project.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-slow scale-105 group-hover:scale-110"
                    data-ai-hint={imageData?.imageHint || "architecture"}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline text-2xl mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <span className="text-xs text-secondary font-mono">0{project.id}</span>
                </div>
              </Link>
            )
          })}
        </div>
        
        <div className="mt-24 text-center">
          <Link href="/projects" className="inline-block py-4 px-12 border border-white/10 hover:border-primary hover:text-primary transition-all text-sm uppercase tracking-[0.2em]">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
