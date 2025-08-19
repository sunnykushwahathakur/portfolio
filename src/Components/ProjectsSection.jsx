import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Golf Club Landing Page",
    description: "A beautiful landing page app HTML,CSS and JavaScript",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://sunnykushwahathakur.github.io/golfclub/",
    githubUrl: "https://github.com/sunnykushwahathakur/golfclub",
  },
  {
    id: 2,
    title: "Obys-Agency",
    description:
      "A beautiful landing page app HTML,CSS and JavaScript",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://sunnykushwahathakur.github.io/obys-agency/",
    githubUrl: "https://github.com/sunnykushwahathakur/obys-agency",
  },
  {
    id: 3,
    title: "Dribbble Clone",
    description:
      "A sleek and modern Dribbble clone showcasing creative shots in a responsive grid layout. ",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://sunnykushwahathakur.github.io/Dribbble-Clone/",
    githubUrl: "https://github.com/sunnykushwahathakur/Dribbble-Clone",
  },
  {
    id: 4,
    title: "GTA VI Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project4.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://sunnygta-vi.netlify.app/",
    githubUrl: "https://github.com/sunnykushwahathakur/GTA-VI",
  },
  {
    id: 5,
    title: "Premier Fashion Landing Page",
    description:
      "A luxurious Premier landing page replica featuring elegant design and high-end fashion aesthetics.",
    image: "/projects/project5.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://sunnykushwahathakur.github.io/Premier/",
    githubUrl: "https://github.com/sunnykushwahathakur/Premier",
  },
  {
    id: 6,
    title: "Digital Designer Portfolio",
    description:
      "Crafting pixel-perfect experiences that blend creativity and functionality. Explore digital designer portfolio",
    image: "/projects/project6.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://sunnykushwahathakur.github.io/Bent-Portfolio/",
    githubUrl: "https://github.com/sunnykushwahathakur/Bent-Portfolio",
  },
  {
    id: 7,
    title: "Zerodha Landing Page",
    description:
      "A clean and minimal Zerodha landing page clone designed with precision and simplicity.",
    image: "/projects/project7.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://sunnykushwahathakur.github.io/Zerodha-Landing-Page/",
    githubUrl: "https://github.com/sunnykushwahathakur/Zerodha-Landing-Page?tab=readme-ov-file",
  },
  {
    id: 8,
    title: "Light and Dark Mode Functionality Page",
    description:
      "A modern Light and Dark Mode functionality page with smooth toggle transitions.",
    image: "/projects/project8.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://sunnykushwahathakur.github.io/Make-Website-DARK-MODE/",
    githubUrl: "https://github.com/sunnykushwahathakur/Make-Website-DARK-MODE",
  },
  {
    id: 9,
    title: "DentyTech Landing Page",
    description:
      "A stylish DentyTech landing page clone featuring futuristic design, bold typography, and clean layout.",
    image: "/projects/project9.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://sunnykushwahathakur.github.io/Dentytech/",
    githubUrl: "https://github.com/sunnykushwahathakur/Dentytech?tab=readme-ov-file",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border  rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sunnykushwahathakur"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
