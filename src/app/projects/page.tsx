
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectsGrid } from "@/components/projects-grid"

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <ProjectsGrid />
      </div>
      <Footer />
    </main>
  )
}
