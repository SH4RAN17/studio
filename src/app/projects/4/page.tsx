
import { ProjectDetail } from "@/components/project-detail"
import { projectsData } from "@/lib/projects-data"
import { notFound } from "next/navigation"

export default function Project4() {
  const project = projectsData.find(p => p.id === "4")
  if (!project) return notFound()
  return <ProjectDetail project={project} />
}
