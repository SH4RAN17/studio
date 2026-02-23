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
    year: "2026",
    description: "This interior visualization shows a modern kitchen that aims to embody the ambiance of a peaceful living space. The idea is to create a warm, simple, and realistic space that uses natural elements and soft lighting to create a cozy environment. The design includes light-colored wood cabinets and a dark marble backsplash and countertop, creating a good contrast between the warm and dark colors. The design also includes small details such as textured glass panels on the cabinets, metal handles, and kitchen props to create a realistic space. A dining area is also included in the foreground to create a sense of scale.",
    mainImageId: "project-2",
    services: ["Interior Rendering", "Lighting Design"],
    galleryImageIds: ["project-2", "project-2_1", "project-2_2"]
  }
];
