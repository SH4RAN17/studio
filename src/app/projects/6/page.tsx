
import { ProjectDetail } from "@/components/project-detail"
import { projectsData } from "@/lib/projects-data"
import { notFound } from "next/navigation"

export default function Project6() {
  const project = projectsData.find(p => p.id === "6")
  if (!project) return notFound()
  return <ProjectDetail project={project} />
}
