export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  image: string;
  available: boolean;
  link: string; // Nouvelle propriété pour le lien
};

export const projects = [
    {
        id: 0,
        name: "Mobile App Development",
        description:
            "Unleash cutting-edge Mobile App Development services.",
        image: "/projects/mobileapp.jpg",
        available: true,
        link: "/mobileapp-development", // Lien vers la page
    },
    {
        id: 1,
        name: "Website Development",
        description:
            "Unleash cutting-edge Website Development services.",
        image: "/projects/websitedev.jpg",
        available: true,
        link: "/website-development", // Lien vers la page
    },
    {
        id: 3,
        name: "Graphic Designing",
        description:
            "Creativity knows no bounds at MKDYNAMICS.",
        image: "/projects/graphicdesign.jpg",
        available: true,
        link: "/graphic-design", // Lien vers la page
    },
    {
        id: 4,
        name: "Security Consultancy",
        description:
            "Your trusted partner in securing your digital assets.",
        image: "/projects/securityconsultancy.jpg",
        available: true,
        link: "/security-consultancy", // Lien vers la page
    },
];
