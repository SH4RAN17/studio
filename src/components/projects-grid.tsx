
"use client"

import Link from "next/link"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const projects = [
  { id: "1", title: "A Quiet Corner in Warm Sunlight", category: "Living Room", imageId: "project-1" },
  { id: "2", title: "A Warm Everyday Kitchen", category: "Kitchen", imageId: "project-2" },
  { id: "3", title: "Clay Renders", category: "3D Art", imageId: "project-3" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
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
                    className="object-cover transition-slow scale-105 group-hover:scale-110"
                    data-ai-hint={imageData?.imageHint || "architecture"}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-primary uppercase tracking-[0.2em] text-[10px] mb-2 block">{project.category}</span>
                    <h3 className="font-headline text-2xl mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <span className="text-xs text-secondary font-mono">0{project.id}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
