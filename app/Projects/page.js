import ProjectCard from "./ProjectCard";

export default function Projects() {
  // Helper function to get favicon URL from project link
  const getFaviconUrl = (url) => {
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch {
      return "https://www.google.com/s2/favicons?domain=github.com&sz=128"; // Default to GitHub favicon
    }
  };

  // Sample project data - in a real app, this would likely come from an API or database
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management and payment integration. Implemented secure payment processing, inventory tracking, user authentication, and an admin dashboard for managing products and orders.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000",
      link: "https://github.com/username/ecommerce",
      contributors: [
        { name: "John Doe", linkedin: "https://www.linkedin.com/in/johndoe" },
        {
          name: "Jane Smith",
          linkedin: "https://www.linkedin.com/in/janesmith",
        },
        {
          name: "Mike Johnson",
          linkedin: "https://www.linkedin.com/in/mikejohnson",
        },
      ],
      duration: "6 months",
      skills: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "AWS"],
    },
    {
      id: 2,
      name: "Weather Dashboard",
      description:
        "Real-time weather tracking application with interactive maps and forecast visualization.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000",
      link: "https://github.com/username/weather-app",
      contributors: [
        {
          name: "Sarah Wilson",
          linkedin: "https://www.linkedin.com/in/sarahwilson",
        },
        { name: "Tom Brown", linkedin: "https://www.linkedin.com/in/tombrown" },
      ],
      duration: "3 months",
      skills: ["React", "OpenWeather API", "D3.js", "Tailwind CSS", "Next.js"],
    },
    {
      id: 3,
      name: "Task Management System",
      description:
        "Collaborative project management tool with Kanban boards and team analytics.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000",
      link: "https://github.com/username/task-manager",
      contributors: ["Alex Chen", "Maria Garcia"],
      duration: "4 months",
      skills: ["Vue.js", "Firebase", "Node.js", "Express", "PostgreSQL"],
    },
    {
      id: 4,
      name: "Social Media Analytics",
      description:
        "Advanced analytics platform for tracking social media engagement and performance metrics.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000",
      link: "https://github.com/username/social-analytics",
      contributors: ["Chris Taylor", "Emma White"],
      duration: "5 months",
      skills: ["Python", "Django", "React", "Data Analysis", "Chart.js"],
    },
    {
      id: 5,
      name: "Fitness Tracker",
      description:
        "Mobile-first fitness application with workout planning and progress tracking features.",
      image:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1000",
      link: "https://github.com/username/fitness-app",
      contributors: ["David Lee", "Sophie Martin"],
      duration: "4 months",
      skills: [
        "React Native",
        "Firebase",
        "Redux",
        "Health Kit API",
        "Node.js",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
