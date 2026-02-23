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
    galleryImageIds: ["project-1", "project-1_2", "project-1_3"]
  },
  {
    id: "2",
    title: "A Warm Everyday Kitchen",
    category: "Interior",
    year: "2024",
    description: "Shadow Play explores the transient nature of light within a residential setting. Through carefully calculated slatted screens and clerestory windows, the interior becomes a canvas for the sun's daily trajectory.",
    mainImageId: "project-2",
    services: ["Interior Rendering", "Lighting Design"],
    galleryImageIds: ["project-2", "project-2_1", "project-2_2"]
  }
];
