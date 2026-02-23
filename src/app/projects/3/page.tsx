
import { ProjectDetail } from "@/components/project-detail"
import { projectsData } from "@/lib/projects-data"
import { notFound } from "next/navigation"

export default function Project3() {
  const project = projectsData.find(p => p.id === "3")
  if (!project) return notFound()
  return <ProjectDetail project={project} />
}
