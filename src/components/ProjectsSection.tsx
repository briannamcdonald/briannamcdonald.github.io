import { Fragment, ReactNode, useState } from "react";
import { AppWindow, BookOpenText, ExternalLink, Github, Newspaper, Youtube } from "lucide-react";

interface ProjectLink {
  label: string;
  url: string;
  icon: "article" | "coverage" | "demo" | "external" | "github" | "youtube";
}

interface Project {
  id?: string;
  title: string;
  description: ReactNode;
  tags: string[];
  image: string;
  links: ProjectLink[];
  className?: string;
}

const featuredProjects: Project[] = [
  {
    title: "SmartVR Pointer",
    description:
      "Implemented a technique that allows users to interact with objects within VR using smartphone touch and tilt controls. Published by MDPI.",
    tags: ["Unity", "C#", "VR", "Research"],
    image: "/images/projects/smartvr.gif",
    links: [
      {
        label: "MDPI Article",
        url: "https://www.mdpi.com/1424-8220/24/16/5168",
        icon: "article",
      },
    ],
  },
  {
    id: "project-prims",
    title: "Parkinson's Remote Interactive Monitoring System (PRIMS)",
    description: (
      <>
        <div>Award-winning system for Parkinson's patients to track symptoms at home using depth-sensing cameras.</div>
        <div>Developed the fully functional MVP in a team of 2, which helped a MedTech startup secure over $200,000 in funding.</div>
      </>
    ),
    tags: ["Computer Vision", "AI", "Full Stack"],
    image: "/images/projects/prims.gif",
    links: [
      {
        label: "CBC Coverage",
        url: "https://www.cbc.ca/news/canada/newfoundland-labrador/pragmaclin-wins-mel-woodward-cup-1.6398356",
        icon: "coverage",
      },
    ],
  },
];

const otherProjects: Project[] = [
  {
    title: "NL Life – Hack Frost NL",
    description: "2nd place hackathon winner. Virtual tourism platform for Newfoundland.",
    tags: ["React"],
    image: "/images/projects/hackFrostGif.gif",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/briannamcdonald/virtual-tourism-nl",
        icon: "github",
      },
    ],
  },
  {
    title: "Minecraft Village Generator",
    description: "Python script that procedurally generates Minecraft villages that adapt to terrain and biomes.",
    tags: ["Python", "Procedural Generation"],
    image: "/images/projects/gdmcGif.gif",
    links: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/watch?v=eSV2Y1DuTAw",
        icon: "youtube",
      },
    ],
  },
  {
    title: "COVID-19 & Economic Tracker",
    description: "MERN stack data visualization tool for comparing COVID-19 trends with key economic data.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/projects/covidGif.gif",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/briannamcdonald/covid-19-and-economic-tracker",
        icon: "github",
      },
    ],
  },
  {
    title: "To-Do List",
    description: "React to-do list app with multiple themes.",
    tags: ["React"],
    image: "/images/projects/ToDoListGif.gif",
    links: [
      {
        label: "Live Demo",
        url: "https://briannamcdonald.github.io/react-to-do-list/",
        icon: "demo",
      },
    ],
  },
  {
    title: "Guns of Labyrinth",
    description: "A medieval top-down bullet-hell where you battle hordes of enemies.",
    tags: ["C++"],
    image: "/images/projects/guns.gif",
    links: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/watch?v=0c387ewncUQ&t=135s",
        icon: "youtube",
      },
    ],
  },
  {
    title: "Mega Mario",
    description: "2D platformer based on Super Mario Bros and Mega Man.",
    tags: ["C++"],
    image: "/images/projects/megamario.gif",
    links: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/watch?v=OcpJJ874MWs",
        icon: "youtube",
      },
    ],
  },
  {
    title: "Connect 4 Bot",
    description: "JavaScript Connect 4 bot implemented with Minimax and alpha-beta pruning.",
    tags: ["JavaScript"],
    image: "/images/projects/connect4.gif",
    links: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/watch?v=k6yd8LfOHPk",
        icon: "youtube",
      },
    ],
  },
  {
    title: "Q-Learning Pathfinding",
    description: "Reinforcement learning algorithm that learns the shortest path to the goal from any point.",
    tags: ["JavaScript"],
    image: "/images/projects/qlearning.gif",
    links: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/watch?v=IC2MfbreFiw&t=1s",
        icon: "youtube",
      },
    ],
  },
  {
    title: "CSS Art",
    description: "A collection of drawings made with pure CSS and HTML.",
    tags: ["CSS", "HTML"],
    image: "/images/projects/cssart.jpg",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/briannamcdonald/css-art",
        icon: "github",
      },
    ],
  },
  {
    title: "Calculator",
    description: "A simple calculator application made with React.",
    tags: ["React"],
    image: "/images/projects/calculatorGif.gif",
    className: "lg:hidden",
    links: [
      {
        label: "Live Demo",
        url: "https://briannamcdonald.github.io/react-calculator/",
        icon: "demo",
      },
    ],
  },
];

const LinkIcon = ({ icon }: { icon: "article" | "coverage" | "demo" | "external" | "github" | "youtube" }) => {
  if (icon === "article") {
    return <BookOpenText className="w-4 h-4" />;
  }

  if (icon === "coverage") {
    return <Newspaper className="w-4 h-4" />;
  }

  if (icon === "demo") {
    return <AppWindow className="w-4 h-4" />;
  }

  if (icon === "github") {
    return <Github className="w-4 h-4" />;
  }

  if (icon === "youtube") {
    return <Youtube className="w-4 h-4" />;
  }

  return <ExternalLink className="w-4 h-4" />;
};

const ProjectsSection = () => {
  const [showAllMobileProjects, setShowAllMobileProjects] = useState(false);
  const mobileVisibleProjectCount = Math.ceil(otherProjects.length / 2);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Featured Work</p>
          <h2 className="font-display text-4xl text-foreground">Projects</h2>
        </div>

        <div className="space-y-20 mb-24">
          {featuredProjects.map((project, i) => (
            <div
              key={project.title}
              id={project.id}
              className="group relative grid scroll-mt-28 items-center gap-10 md:grid-cols-2"
            >
              {project.links[0] && (
                <a
                  href={project.links[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  <span className="sr-only">Open {project.title}</span>
                </a>
              )}
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm transition-shadow group-hover:shadow-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className={`space-y-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="font-display text-3xl text-foreground">{project.title}</h3>
                <div className="font-body text-muted-foreground leading-relaxed text-base space-y-2">
                  {project.description}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs tracking-wide bg-blush text-secondary-foreground px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="relative z-20 flex gap-3 pt-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:underline"
                    >
                      <LinkIcon icon={link.icon} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="font-display text-2xl text-foreground">Other Projects</h3>
        </div>

        <div className="grid items-stretch gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <Fragment key={project.title}>
              {index === mobileVisibleProjectCount && !showAllMobileProjects && (
                <div className="flex justify-center sm:hidden">
                  <button
                    type="button"
                    onClick={() => setShowAllMobileProjects(true)}
                    className="font-body bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition-opacity text-sm tracking-wide"
                  >
                    Show More Projects
                  </button>
                </div>
              )}
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md ${
                  index >= mobileVisibleProjectCount && !showAllMobileProjects ? "hidden sm:flex" : ""
                } ${project.className ?? ""}`}
              >
                {project.links[0] && (
                  <a
                    href={project.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                  >
                    <span className="sr-only">Open {project.title}</span>
                  </a>
                )}
                <div className="aspect-[2.15/1] overflow-hidden bg-muted sm:aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4 sm:gap-3 sm:p-5">
                  <h4 className="font-display text-base leading-snug text-foreground sm:text-lg">{project.title}</h4>
                  <p className="font-body text-xs leading-relaxed text-muted-foreground sm:text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-[11px] tracking-wide bg-blush text-secondary-foreground px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="relative z-20 mt-auto flex gap-3 pt-1 sm:pt-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-body text-[11px] font-semibold text-primary hover:underline sm:text-xs"
                      >
                        <LinkIcon icon={link.icon} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
