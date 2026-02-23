
export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  mainImageId: string;
  services: string[];
  galleryImageIds: string[];
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "A Quiet Corner in Warm Sunlight",
    category: "Architecture",
    year: "2026",
    description: "The scene includes floor to ceiling windows with sheer curtains diffusing natural light, creating natural shadow effects on the herringbone wooden floor and textured rug. A sculptural lounge chair with leather details is the central focus point, emphasizing the importance of craftsmanship and material expressiveness. The neutral-colored walls are contrasted with a dramatic piece of artwork. Great care was taken to recreate photorealistic lighting effects, scale, and material details to maximize realism. This scene clearly shows a great emphasis on natural lighting, balanced composition, and material expressiveness, which are common in high-end architectural visualization.",
    mainImageId: "project-1",
    services: ["3D Visualization", "Concept Design"],
    galleryImageIds: ["project-1", "project-6", "project-3"]
  },
  {
    id: "2",
    title: "A Warm Everyday Kitchen",
    category: "Interior",
    year: "2024",
    description: "Shadow Play explores the transient nature of light within a residential setting. Through carefully calculated slatted screens and clerestory windows, the interior becomes a canvas for the sun's daily trajectory.",
    mainImageId: "project-2",
    services: ["Interior Rendering", "Lighting Design"],
    galleryImageIds: ["project-2", "project-4", "project-6"]
  },
  {
    id: "3",
    title: "Urban Monolith",
    category: "Conceptual",
    year: "2023",
    description: "Challenging the glass-and-steel norms of cityscapes, the Urban Monolith presents a solid yet perforated volume. It investigates how heavy materiality can coexist with airy, light-filled public plazas.",
    mainImageId: "project-3",
    services: ["Architectural Design", "Urban Planning"],
    galleryImageIds: ["project-3", "project-1", "project-5"]
  },
  {
    id: "4",
    title: "Glass Sanctuary",
    category: "Residential",
    year: "2024",
    description: "The Glass Sanctuary is an exercise in invisibility. Located in a dense forest, the structure uses high-performance glazing to blur the boundaries between domestic life and the surrounding ecosystem.",
    mainImageId: "project-4",
    services: ["3D Modelling", "Environmental Study"],
    galleryImageIds: ["project-4", "project-2", "project-1"]
  },
  {
    id: "5",
    title: "Desert Oasis",
    category: "Commercial",
    year: "2022",
    description: "Designed for a harsh desert environment, this commercial hub utilizes thermal mass and passive cooling strategies. Its geometry is inspired by ancient wind towers, reinterpreted through a modern aesthetic.",
    mainImageId: "project-5",
    services: ["Sustainable Design", "3D Visualization"],
    galleryImageIds: ["project-5", "project-3", "project-6"]
  },
  {
    id: "6",
    title: "Brutalist Study",
    category: "Conceptual",
    year: "2023",
    description: "A pure exploration of raw textures. This study focuses on the intersection of cast concrete and oxidised metal, creating a dialogue between permanence and decay.",
    mainImageId: "project-6",
    services: ["Texture Study", "Material Design"],
    galleryImageIds: ["project-6", "project-1", "project-2"]
  }
];
